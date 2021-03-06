/*
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the MIT Licence.

  **NOTE**: This sample uses the preview of the next version of the @azure/service-bus package.
  For samples using the current stable version of the package, please use the link below:
  https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/servicebus/service-bus/samples-v1
  
  This sample demonstrates how to send/receive messages to/from session enabled queues/subscriptions
  in Service Bus.

  Setup: To run this sample, you would need session enabled Queue/Subscription.

  See https://docs.microsoft.com/azure/service-bus-messaging/message-sessions to learn about
  sessions in Service Bus.
*/

import { delay, ServiceBusClient, ServiceBusMessage } from "@azure/service-bus";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

// Define connection string and related Service Bus entity names here
// Ensure on portal.azure.com that queue/topic has Sessions feature enabled
const connectionString = process.env.SERVICE_BUS_CONNECTION_STRING || "<connection string>";
const queueName = process.env.QUEUE_NAME_WITH_SESSIONS || "<queue name>";

const listOfScientists = [
  { lastName: "Einstein", firstName: "Albert" },
  { lastName: "Heisenberg", firstName: "Werner" },
  { lastName: "Curie", firstName: "Marie" },
  { lastName: "Hawking", firstName: "Steven" },
  { lastName: "Newton", firstName: "Isaac" },
  { lastName: "Bohr", firstName: "Niels" },
  { lastName: "Faraday", firstName: "Michael" },
  { lastName: "Galilei", firstName: "Galileo" },
  { lastName: "Kepler", firstName: "Johannes" },
  { lastName: "Kopernikus", firstName: "Nikolaus" }
];

export async function main() {
  const sbClient = new ServiceBusClient(connectionString);

  try {
    await sendMessage(sbClient, listOfScientists[0], "session-1");
    await sendMessage(sbClient, listOfScientists[1], "session-1");
    await sendMessage(sbClient, listOfScientists[2], "session-1");
    await sendMessage(sbClient, listOfScientists[3], "session-1");
    await sendMessage(sbClient, listOfScientists[4], "session-1");

    await sendMessage(sbClient, listOfScientists[5], "session-2");
    await sendMessage(sbClient, listOfScientists[6], "session-2");
    await sendMessage(sbClient, listOfScientists[7], "session-2");
    await sendMessage(sbClient, listOfScientists[8], "session-2");
    await sendMessage(sbClient, listOfScientists[9], "session-2");

    await receiveMessages(sbClient, "session-1");
    await receiveMessages(sbClient, "session-2");
  } finally {
    await sbClient.close();
  }
}

async function sendMessage(sbClient: ServiceBusClient, scientist: any, sessionId: string) {
  // createSender() also works with topics
  const sender = sbClient.createSender(queueName);

  const message = {
    body: `${scientist.firstName} ${scientist.lastName}`,
    label: "Scientist",
    sessionId: sessionId
  };

  console.log(`Sending message: "${message.body}" to "${sessionId}"`);
  await sender.sendMessages(message);

  await sender.close();
}

async function receiveMessages(sbClient: ServiceBusClient, sessionId: string) {
  // If receiving from a subscription you can use the acceptSession(topic, subscription, sessionId) overload
  const receiver = await sbClient.acceptSession(queueName, sessionId);

  const processMessage = async (message: ServiceBusMessage) => {
    console.log(`Received: ${message.sessionId} - ${message.body} `);
  };
  const processError = async (err) => {
    console.log(">>>>> Error occurred: ", err);
  };
  receiver.subscribe({
    processMessage,
    processError
  });

  await delay(5000);

  await receiver.close();
}

main().catch((err) => {
  console.log("Error occurred: ", err);
  process.exit(1);
});
