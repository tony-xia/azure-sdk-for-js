/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

export {
  AdditionalCapabilities,
  AdditionalUnattendContent,
  ApiEntityReference,
  ApiError,
  ApiErrorBase,
  AutomaticOSUpgradePolicy,
  AutomaticOSUpgradeProperties,
  AutomaticRepairsPolicy,
  AvailabilitySet,
  AvailabilitySetUpdate,
  AvailablePatchSummary,
  BaseResource,
  BillingProfile,
  BootDiagnostics,
  BootDiagnosticsInstanceView,
  CloudError,
  ContainerService,
  ContainerServiceAgentPoolProfile,
  ContainerServiceCustomProfile,
  ContainerServiceDiagnosticsProfile,
  ContainerServiceLinuxProfile,
  ContainerServiceMasterProfile,
  ContainerServiceOrchestratorProfile,
  ContainerServiceServicePrincipalProfile,
  ContainerServiceSshConfiguration,
  ContainerServiceSshPublicKey,
  ContainerServiceVMDiagnostics,
  ContainerServiceWindowsProfile,
  CreationData,
  DataDisk,
  DataDiskImage,
  DataDiskImageEncryption,
  DedicatedHost,
  DedicatedHostAllocatableVM,
  DedicatedHostAvailableCapacity,
  DedicatedHostGroup,
  DedicatedHostGroupInstanceView,
  DedicatedHostGroupUpdate,
  DedicatedHostInstanceView,
  DedicatedHostInstanceViewWithName,
  DedicatedHostUpdate,
  DiagnosticsProfile,
  DiffDiskSettings,
  Disallowed,
  DisallowedConfiguration,
  Disk,
  DiskAccess,
  DiskEncryptionSet,
  DiskEncryptionSetParameters,
  DiskEncryptionSettings,
  DiskImageEncryption,
  DiskInstanceView,
  DiskSku,
  Encryption,
  EncryptionImages,
  EncryptionSetIdentity,
  EncryptionSettingsCollection,
  EncryptionSettingsElement,
  Gallery,
  GalleryApplication,
  GalleryApplicationUpdate,
  GalleryApplicationVersion,
  GalleryApplicationVersionPublishingProfile,
  GalleryApplicationVersionUpdate,
  GalleryArtifactPublishingProfileBase,
  GalleryArtifactVersionSource,
  GalleryDataDiskImage,
  GalleryDiskImage,
  GalleryIdentifier,
  GalleryImage,
  GalleryImageIdentifier,
  GalleryImageUpdate,
  GalleryImageVersion,
  GalleryImageVersionPublishingProfile,
  GalleryImageVersionStorageProfile,
  GalleryImageVersionUpdate,
  GalleryOSDiskImage,
  GalleryUpdate,
  HardwareProfile,
  Image,
  ImageDataDisk,
  ImageDisk,
  ImageDiskReference,
  ImageOSDisk,
  ImagePurchasePlan,
  ImageReference,
  ImageStorageProfile,
  ImageUpdate,
  InnerError,
  InstanceViewStatus,
  KeyVaultAndKeyReference,
  KeyVaultAndSecretReference,
  KeyVaultKeyReference,
  KeyVaultSecretReference,
  LastPatchInstallationSummary,
  LinuxConfiguration,
  MaintenanceRedeployStatus,
  ManagedDiskParameters,
  NetworkInterfaceReference,
  NetworkProfile,
  OrchestrationServiceStateInput,
  OrchestrationServiceSummary,
  OSDisk,
  OSDiskImage,
  OSDiskImageEncryption,
  OSProfile,
  PatchSettings,
  Plan,
  PrivateEndpoint,
  PrivateEndpointConnection,
  PrivateLinkServiceConnectionState,
  ProximityPlacementGroup,
  ProximityPlacementGroupUpdate,
  PurchasePlan,
  RecommendedMachineConfiguration,
  RecoveryWalkResponse,
  RegionalReplicationStatus,
  ReplicationStatus,
  Resource,
  ResourceRange,
  RollbackStatusInfo,
  RollingUpgradePolicy,
  RollingUpgradeProgressInfo,
  RollingUpgradeRunningStatus,
  RollingUpgradeStatusInfo,
  ScaleInPolicy,
  ScheduledEventsProfile,
  SecurityProfile,
  ShareInfoElement,
  Sku,
  Snapshot,
  SnapshotSku,
  SourceVault,
  SshConfiguration,
  SshPublicKey,
  SshPublicKeyResource,
  SshPublicKeyUpdateResource,
  StorageProfile,
  SubResource,
  SubResourceReadOnly,
  SubResourceWithColocationStatus,
  TargetRegion,
  TerminateNotificationProfile,
  UpdateResource,
  UpdateResourceDefinition,
  UpgradeOperationHistoricalStatusInfo,
  UpgradeOperationHistoricalStatusInfoProperties,
  UpgradeOperationHistoryStatus,
  UpgradePolicy,
  UserArtifactSource,
  VaultCertificate,
  VaultSecretGroup,
  VirtualHardDisk,
  VirtualMachine,
  VirtualMachineAgentInstanceView,
  VirtualMachineCaptureResult,
  VirtualMachineExtension,
  VirtualMachineExtensionHandlerInstanceView,
  VirtualMachineExtensionImage,
  VirtualMachineExtensionInstanceView,
  VirtualMachineExtensionUpdate,
  VirtualMachineHealthStatus,
  VirtualMachineIdentity,
  VirtualMachineIdentityUserAssignedIdentitiesValue,
  VirtualMachineImage,
  VirtualMachineImageResource,
  VirtualMachineInstanceView,
  VirtualMachinePatchStatus,
  VirtualMachineReimageParameters,
  VirtualMachineScaleSet,
  VirtualMachineScaleSetDataDisk,
  VirtualMachineScaleSetExtension,
  VirtualMachineScaleSetExtensionProfile,
  VirtualMachineScaleSetExtensionUpdate,
  VirtualMachineScaleSetIdentity,
  VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue,
  VirtualMachineScaleSetInstanceView,
  VirtualMachineScaleSetInstanceViewStatusesSummary,
  VirtualMachineScaleSetIPConfiguration,
  VirtualMachineScaleSetIpTag,
  VirtualMachineScaleSetListOSUpgradeHistory,
  VirtualMachineScaleSetListResult,
  VirtualMachineScaleSetListSkusResult,
  VirtualMachineScaleSetListWithLinkResult,
  VirtualMachineScaleSetManagedDiskParameters,
  VirtualMachineScaleSetNetworkConfiguration,
  VirtualMachineScaleSetNetworkConfigurationDnsSettings,
  VirtualMachineScaleSetNetworkProfile,
  VirtualMachineScaleSetOSDisk,
  VirtualMachineScaleSetOSProfile,
  VirtualMachineScaleSetPublicIPAddressConfiguration,
  VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings,
  VirtualMachineScaleSetReimageParameters,
  VirtualMachineScaleSetSku,
  VirtualMachineScaleSetSkuCapacity,
  VirtualMachineScaleSetStorageProfile,
  VirtualMachineScaleSetUpdate,
  VirtualMachineScaleSetUpdateIPConfiguration,
  VirtualMachineScaleSetUpdateNetworkConfiguration,
  VirtualMachineScaleSetUpdateNetworkProfile,
  VirtualMachineScaleSetUpdateOSDisk,
  VirtualMachineScaleSetUpdateOSProfile,
  VirtualMachineScaleSetUpdatePublicIPAddressConfiguration,
  VirtualMachineScaleSetUpdateStorageProfile,
  VirtualMachineScaleSetUpdateVMProfile,
  VirtualMachineScaleSetVM,
  VirtualMachineScaleSetVMExtensionsSummary,
  VirtualMachineScaleSetVMInstanceIDs,
  VirtualMachineScaleSetVMInstanceRequiredIDs,
  VirtualMachineScaleSetVMInstanceView,
  VirtualMachineScaleSetVMNetworkProfileConfiguration,
  VirtualMachineScaleSetVMProfile,
  VirtualMachineScaleSetVMProtectionPolicy,
  VirtualMachineScaleSetVMReimageParameters,
  VirtualMachineStatusCodeCount,
  VirtualMachineUpdate,
  VMScaleSetConvertToSinglePlacementGroupInput,
  WindowsConfiguration,
  WinRMConfiguration,
  WinRMListener
} from "../models/mappers";
