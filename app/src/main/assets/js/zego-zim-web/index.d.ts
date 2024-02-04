export interface ZIMError {
    code: ZIMErrorCode;
    message: string;
}
export declare enum ZIMErrorCode {
    Success = 0,
    Failed = 1,
    CommonModuleParamInvalid = 6000001,
    CommonModuleNotInit = 6000002,
    CommonModuleInvalidAppID = 6000003,
    CommonModuleTriggerSDKFrequencyLimit = 6000004,
    CommonModuleTriggerServerFrequencyLimit = 6000005,
    CommonModuleSwitchServerError = 6000006,
    CommonModuleIMServerError = 6000007,
    CommonModuleUploadLogError = 6000010,
    CommonModuleUserIsNotExist = 6000011,
    CommonModuleUserInfoQueriedLimit = 6000012,
    CommonModuleUnsupportedRequest = 6000013,
    CommonModuleUnactivatedIMServer = 6000014,
    CommonModuleExceedDAULimit = 6000015,
    CommonModuleExceedMAULimit = 6000016,
    NetworkModuleCommonError = 6000101,
    NetworkModuleServerError = 6000102,
    NetworkModuleTokenInvalid = 6000103,
    NetworkModuleNetworkError = 6000104,
    NetworkModuleTokenExpired = 6000106,
    NetworkModuleTokenVersionError = 6000107,
    NetworkModuleTokenTimeIsTooShort = 6000108,
    NetworkModuleTokenTimeIsTooLong = 6000109,
    NetworkModuleUserHasAlreadyLogged = 6000111,
    NetworkModuleUserIsNotLogged = 6000121,
    ConversationModuleCommonError = 6000601,
    ConversationModuleServerError = 6000602,
    ConversationModuleConversationDoesNotExist = 6000603,
    ConversationModulePinnedListReachedLimit = 6000604,
    MessageModuleCommonError = 6000201,
    MessageModuleServerError = 6000202,
    MessageModuleSendMessageFailed = 6000203,
    MessageModuleTargetDoesNotExist = 6000204,
    MessageModuleFileNotExist = 6000211,
    MessageModuleFileServerError = 6000212,
    MessageModuleFileTypeUnsupported = 6000213,
    MessageModuleFileSizeInvalid = 6000214,
    MessageModuleFileDurationInvalid = 6000215,
    MessageModuleAuditRejected = 6000221,
    MessageModuleAuditFailed = 6000222,
    MessageModuleAuditCustomSentRejected = 6000230,
    MessageModuleReceiptReadError = 6000277,
    MessageModuleMessageExceedsRevokeTime = 6000278,
    MessageModuleMessageHasBeenRevoked = 6000279,
    MessageModuleMessageReactionTypeExisted = 6000280,
    MessageModuleMessageReceiptLimit = 6000282,
    RoomModuleCommonError = 6000301,
    RoomModuleServerError = 6000302,
    RoomModuleCreateRoomError = 6000303,
    RoomModuleJoinRoomError = 6000304,
    RoomModuleLeaveRoomError = 6000306,
    RoomModuleTheRoomMemberQueryFailed = 6000310,
    RoomModuleTheRoomMembersQueryFailedCompletely = 6000311,
    RoomModuleUserIsNotInTheRoom = 6000321,
    RoomModuleTheRoomDoesNotExist = 6000322,
    RoomModuleTheRoomAlreadyExists = 6000323,
    RoomModuleTheNumberOfExistingRoomsHasReachedLimit = 6000324,
    RoomModuleTheNumberOfJoinedRoomsHasReachedLimit = 6000325,
    RoomModuleRoomAttributesCommonError = 6000330,
    RoomModuleRoomAttributesOperationFailedCompletely = 6000331,
    RoomModuleRoomAttributesQueryFailed = 6000333,
    RoomModuleTheNumberOfRoomAttributesExceedsLimit = 6000334,
    RoomModuleTheLengthOfRoomAttributeKeyExceedsLimit = 6000335,
    RoomModuleTheLengthOfRoomAttributeValueExceedsLimit = 6000336,
    RoomModuleTheTotalLengthOfRoomAttributesValueExceedsLimit = 6000337,
    RoomModuleRoomMemberAttributesCommonError = 6000350,
    RoomModuleTheTotalLengthOfRoomMemberAttributesExceedsLimit = 6000351,
    RoomModuleTheLengthOfRoomMemberAttributesKeyExceedsLimit = 6000352,
    RoomModuleTheLengthOfRoomMemberAttributesValueExceedsLimit = 6000353,
    RoomModuleTheMemberNumberOfRoomMemberAttributesExceedsLimit = 6000357,
    GroupModuleCommonError = 6000501,
    GroupModuleServerError = 6000502,
    GroupModuleCreateGroupError = 6000503,
    GroupModuleDismissGroupError = 6000504,
    GroupModuleJoinGroupError = 6000505,
    GroupModuleLeaveGroupError = 6000506,
    GroupModuleKickoutGroupMemberError = 6000507,
    GroupModuleInviteUserIntoGroupError = 6000508,
    GroupModuleTransferOwnerError = 6000509,
    GroupModuleUpdateGroupInfoError = 6000510,
    GroupModuleQueryGroupInfoError = 6000511,
    GroupModuleGroupAttributesOperationFailed = 6000512,
    GroupModuleGroupAttributesQueryFailed = 6000513,
    GroupModuleUpdateGroupMemberInfoError = 6000514,
    GroupModuleQueryGroupMemberInfoError = 6000515,
    GroupModuleQueryGroupListError = 6000516,
    GroupModuleQueryGroupMemberListError = 6000517,
    GroupModuleUserIsNotInTheGroup = 6000521,
    GroupModuleMemberIsAlreadyInTheGroup = 6000522,
    GroupModuleGroupDoesNotExist = 6000523,
    GroupModuleGroupAlreadyExists = 6000524,
    GroupModuleGroupMemberHasReachedLimit = 6000525,
    GroupModuleGroupAttributeDoesNotExist = 6000526,
    GroupModuleCreateGroupWithDismissed = 6000527,
    GroupModuleTheNumberOfGroupAttributesExceedsLimit = 6000531,
    GroupModuleTheLengthOfGroupAttributeKeyExceedsLimit = 6000532,
    GroupModuleTheLengthOfGroupAttributeValueExceedsLimit = 6000533,
    GroupModuleTheTotalLengthOfGroupAttributesValueExceedsLimit = 6000534,
    GroupModuleNoCorrespondingOperationAuthority = 6000541,
    CallModuleCommonError = 6000270,
    CallModuleCancelError = 6000271,
    CallModuleServerError = 6000272,
    CallModuleIsNotInvitor = 6000273,
    CallModuleIsNotInvitee = 6000274,
    CallModuleAlreadyExists = 6000275,
    CallModuleDoesNotExist = 6000276,
    CallModuleInviteUserDoesNotExist = 6000281,
    CallModuleUserAlreadyInTheCall = 6000283
}
export interface ZIMEventHandler {
    error: (zim: ZIM, errorInfo: ZIMError) => void;
    connectionStateChanged: (zim: ZIM, data: ZIMEventOfConnectionStateChangedResult) => void;
    tokenWillExpire: (zim: ZIM, data: ZIMEventOfTokenWillExpireResult) => void;
    userInfoUpdated: (zim: ZIM, data: ZIMEventOfUserInfoUpdatedResult) => void;
    conversationsAllDeleted: (zim: ZIM, data: ZIMEventOfConversationsAllDeletedResult) => void;
    conversationChanged: (zim: ZIM, data: ZIMEventOfConversationChangedResult) => void;
    conversationTotalUnreadMessageCountUpdated: (zim: ZIM, data: ZIMEventOfConversationTotalUnreadMessageCountUpdatedResult) => void;
    conversationMessageReceiptChanged: (zim: ZIM, data: ZIMEventOfMessageReceiptChangedResult) => void;
    messageReceiptChanged: (zim: ZIM, data: ZIMEventOfMessageReceiptChangedResult) => void;
    messageRevokeReceived: (zim: ZIM, data: ZIMEventOfMessageRevokeReceivedResult) => void;
    messageReactionsChanged: (zim: ZIM, data: ZIMEventOfMessageReactionsChangedResult) => void;
    messageDeleted: (zim: ZIM, data: ZIMEventOfMessageDeletedResult) => void;
    messageSentStatusChanged: (zim: ZIM, data: ZIMEventOfMessageSentStatusChangedResult) => void;
    receivePeerMessage: (zim: ZIM, data: ZIMEventOfReceiveConversationMessageResult) => void;
    receiveGroupMessage: (zim: ZIM, data: ZIMEventOfReceiveConversationMessageResult) => void;
    receiveRoomMessage: (zim: ZIM, data: ZIMEventOfReceiveConversationMessageResult) => void;
    broadcastMessageReceived: (zim: ZIM, data: ZIMEventOfBroadcastMessageReceivedResult) => void;
    roomStateChanged: (zim: ZIM, data: ZIMEventOfRoomStateChangedResult) => void;
    roomMemberJoined: (zim: ZIM, data: ZIMEventOfRoomMemberChangedResult) => void;
    roomMemberLeft: (zim: ZIM, data: ZIMEventOfRoomMemberChangedResult) => void;
    roomAttributesUpdated: (zim: ZIM, data: ZIMEventOfRoomAttributesUpdatedResult) => void;
    roomAttributesBatchUpdated: (zim: ZIM, data: ZIMEventOfRoomAttributesUpdatedResult) => void;
    roomMemberAttributesUpdated: (zim: ZIM, data: ZIMEventOfRoomMembersAttributesUpdatedResult) => void;
    groupStateChanged: (zim: ZIM, data: ZIMEventOfGroupStateChangedResult) => void;
    groupNameUpdated: (zim: ZIM, data: ZIMEventOfGroupNameUpdatedResult) => void;
    groupAvatarUrlUpdated: (zim: ZIM, data: ZIMEventOfGroupAvatarUrlUpdatedResult) => void;
    groupNoticeUpdated: (zim: ZIM, data: ZIMEventOfGroupNoticeUpdatedResult) => void;
    groupAttributesUpdated: (zim: ZIM, data: ZIMEventOfGroupAttributesUpdatedResult) => void;
    groupMemberStateChanged: (zim: ZIM, data: ZIMEventOfGroupMemberStateChangedResult) => void;
    groupMemberInfoUpdated: (zim: ZIM, data: ZIMEventOfGroupMemberInfoUpdatedResult) => void;
    callInvitationReceived: (zim: ZIM, data: ZIMEventOfCallInvitationReceivedResult) => void;
    callInvitationCancelled: (zim: ZIM, data: ZIMEventOfCallInvitationCancelledResult) => void;
    callInvitationTimeout: (zim: ZIM, data: ZIMEventOfCallInvitationTimeoutResult) => void;
    callInvitationEnded: (zim: ZIM, data: ZIMEventOfCallInvitationEndedResult) => void;
    callUserStateChanged: (zim: ZIM, data: ZIMEventOfCallUserStateChangedResult) => void;
    /**
     * @deprecated Replaced with callUserStateChanged.
     */
    callInvitationAccepted: (zim: ZIM, data: ZIMEventOfCallInvitationAcceptedResult) => void;
    /**
     * @deprecated Replaced with callUserStateChanged.
     */
    callInvitationRejected: (zim: ZIM, data: ZIMEventOfCallInvitationRejectedResult) => void;
    /**
     * @deprecated Replaced with callUserStateChanged.
     */
    callInviteesAnsweredTimeout: (zim: ZIM, data: ZIMEventOfCallInviteesAnsweredTimeoutResult) => void;
}
export interface ZIMEventOfConnectionStateChangedResult {
    state: ZIMConnectionState;
    event: ZIMConnectionEvent;
    extendedData: string;
}
export interface ZIMEventOfTokenWillExpireResult {
    second: number;
}
export interface ZIMEventOfUserInfoUpdatedResult {
    info: ZIMUserFullInfo;
}
export interface ZIMEventOfConversationsAllDeletedResult {
    count: number;
}
export interface ZIMEventOfConversationChangedResult {
    infoList: ZIMConversationChangeInfo[];
}
export interface ZIMEventOfConversationTotalUnreadMessageCountUpdatedResult {
    totalUnreadMessageCount: number;
}
export interface ZIMEventOfMessageReceiptChangedResult {
    infos: ZIMMessageReceiptInfo[];
}
export interface ZIMEventOfMessageRevokeReceivedResult {
    messageList: ZIMRevokeMessage[];
}
export interface ZIMEventOfMessageReactionsChangedResult {
    reactions: ZIMMessageReaction[];
}
export interface ZIMEventOfMessageDeletedResult {
    conversationID: string;
    conversationType: ZIMConversationType;
    isDeleteConversationAllMessage: boolean;
    messageList: ZIMMessage[];
}
export interface ZIMEventOfMessageSentStatusChangedResult {
    infos: ZIMMessageSentStatusChangeInfo[];
}
export interface ZIMEventOfReceiveConversationMessageResult {
    messageList: ZIMMessage[];
    fromConversationID: string;
}
export interface ZIMEventOfBroadcastMessageReceivedResult {
    message: ZIMMessage;
}
export interface ZIMEventOfRoomStateChangedResult {
    roomID: string;
    state: ZIMRoomState;
    event: ZIMRoomEvent;
    extendedData: string;
}
export interface ZIMEventOfRoomMemberChangedResult {
    roomID: string;
    memberList: ZIMUserInfo[];
}
export interface ZIMEventOfRoomAttributesUpdatedResult {
    roomID: string;
    infos: ZIMRoomAttributesUpdateInfo[];
}
export interface ZIMEventOfRoomMembersAttributesUpdatedResult {
    roomID: string;
    infos: ZIMRoomMemberAttributesUpdateInfo[];
    operatedInfo: ZIMRoomOperatedInfo;
}
export interface ZIMEventOfGroupStateChangedResult {
    state: ZIMGroupState;
    event: ZIMGroupEvent;
    operatedInfo: ZIMGroupOperatedInfo;
    groupInfo: ZIMGroupFullInfo;
}
export interface ZIMEventOfGroupNameUpdatedResult {
    groupID: string;
    groupName: string;
    operatedInfo: ZIMGroupOperatedInfo;
}
export interface ZIMEventOfGroupNoticeUpdatedResult {
    groupID: string;
    groupNotice: string;
    operatedInfo: ZIMGroupOperatedInfo;
}
export interface ZIMEventOfGroupAvatarUrlUpdatedResult {
    groupID: string;
    groupAvatarUrl: string;
    operatedInfo: ZIMGroupOperatedInfo;
}
export interface ZIMEventOfGroupAttributesUpdatedResult {
    groupID: string;
    infoList: ZIMGroupAttributesUpdateInfo[];
    operatedInfo: ZIMGroupOperatedInfo;
}
export interface ZIMEventOfGroupMemberStateChangedResult {
    groupID: string;
    state: ZIMGroupMemberState;
    event: ZIMGroupMemberEvent;
    userList: ZIMGroupMemberInfo[];
    operatedInfo: ZIMGroupOperatedInfo;
}
export interface ZIMEventOfGroupMemberInfoUpdatedResult {
    groupID: string;
    userList: ZIMGroupMemberInfo[];
    operatedInfo: ZIMGroupOperatedInfo;
}
export interface ZIMEventOfCallInvitationReceivedResult {
    callID: string;
    mode: ZIMCallInvitationMode;
    caller: string;
    inviter: string;
    extendedData: string;
    timeout: number;
    createTime: number;
    callUserList: ZIMCallUserInfo[];
}
export interface ZIMEventOfCallInvitationCancelledResult {
    callID: string;
    mode: ZIMCallInvitationMode;
    inviter: string;
    extendedData: string;
}
export interface ZIMEventOfCallInvitationTimeoutResult {
    callID: string;
    mode: ZIMCallInvitationMode;
}
export interface ZIMEventOfCallInvitationEndedResult {
    callID: string;
    mode: ZIMCallInvitationMode;
    caller: string;
    operatedUserID: string;
    extendedData: string;
    endTime: number;
}
export interface ZIMEventOfCallUserStateChangedResult {
    callID: string;
    callUserList: ZIMCallUserInfo[];
}
export interface ZIMEventOfCallInvitationAcceptedResult {
    callID: string;
    invitee: string;
    extendedData: string;
}
export interface ZIMEventOfCallInvitationRejectedResult {
    callID: string;
    invitee: string;
    extendedData: string;
}
export interface ZIMEventOfCallInviteesAnsweredTimeoutResult {
    callID: string;
    invitees: string[];
}
export declare enum ZIMConnectionState {
    Disconnected = 0,
    Connecting = 1,
    Connected = 2,
    Reconnecting = 3
}
export declare enum ZIMConnectionEvent {
    Success = 0,
    ActiveLogin = 1,
    LoginTimeout = 2,
    LoginInterrupted = 3,
    KickedOut = 4
}
export declare enum ZIMMessagePriority {
    Low = 1,
    Medium = 2,
    High = 3
}
export declare enum ZIMCXHandleType {
    Generic = 1,
    PhoneNumber = 2,
    EmailAddress = 3
}
export declare enum ZIMGeofencingType {
    None = 0,
    Include = 1,
    Exclude = 2
}
export interface ZIMAppConfig {
    appID: number;
}
export interface ZIMLogConfig {
    logLevel: string;
}
export interface ZIMVoIPConfig {
    iOSVoIPHandleType: ZIMCXHandleType;
    iOSVoIPHandleValue: string;
    iOSVoIPHasVideo: boolean;
}
export interface ZIMPushConfig {
    title: string;
    content: string;
    payload?: string;
    resourcesID?: string;
    badgeIncrement?: number;
    enableBadge?: boolean;
    voIPConfig?: ZIMVoIPConfig;
}
export interface ZIMMessageSendConfig {
    priority: ZIMMessagePriority;
    hasReceipt?: boolean;
    pushConfig?: ZIMPushConfig;
}
export interface ZIMMessageRevokeConfig {
    revokeExtendedData?: string;
    pushConfig?: ZIMPushConfig;
}
export interface ZIMUsersInfoQueryConfig {
    isQueryFromServer: boolean;
}
export interface ZIMUserInfo {
    userID: string;
    userName: string;
    userAvatarUrl: string;
}
export interface ZIMUserFullInfo {
    baseInfo: ZIMUserInfo;
    extendedData: string;
}
export interface ZIMErrorUserInfo {
    userID: string;
    reason: number;
}
export declare type ZIMRoomMemberInfo = ZIMUserInfo;
export interface ZIMGroupMemberInfo extends ZIMUserInfo {
    memberAvatarUrl: string;
    memberNickname: string;
    memberRole: number;
}
export interface ZIMTokenRenewedResult {
    token: string;
}
export interface ZIMUsersInfoQueriedResult {
    userList: ZIMUserFullInfo[];
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMUserNameUpdatedResult {
    userName: string;
}
export interface ZIMUserExtendedDataUpdatedResult {
    extendedData: string;
}
export interface ZIMUserAvatarUrlUpdatedResult {
    userAvatarUrl: string;
}
export interface ZIMRoomMemberQueriedResult {
    roomID: string;
    memberList: ZIMUserInfo[];
    nextFlag: string;
}
export interface ZIMRoomMembersQueriedResult {
    roomID: string;
    memberList: ZIMRoomMemberInfo[];
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMGroupMessageReceiptMemberListQueriedResult {
    groupID: string;
    userList: ZIMGroupMemberInfo[];
    nextFlag: number;
}
export declare enum ZIMCallInvitationMode {
    Unknown = -1,
    General = 0,
    Advanced = 1
}
export declare enum ZIMCallState {
    Unknown = -1,
    Started = 1,
    Ended = 2
}
export declare enum ZIMCallUserState {
    Unknown = -1,
    Inviting = 0,
    Accepted = 1,
    Rejected = 2,
    Cancelled = 3,
    Offline = 4,
    Received = 5,
    Timeout = 6,
    Quit = 7,
    Ended = 8
}
export interface ZIMCallUserInfo {
    userID: string;
    state: ZIMCallUserState;
    extendedData: string;
}
export interface ZIMCallInfo {
    callID: string;
    caller: string;
    mode: ZIMCallInvitationMode;
    state: ZIMCallState;
    extendedData: string;
    createTime: number;
    endTime: number;
    callUserList: ZIMCallUserInfo[];
}
export interface ZIMCallInviteConfig {
    mode: ZIMCallInvitationMode;
    timeout: number;
    extendedData: string;
    pushConfig?: ZIMPushConfig;
}
export interface ZIMCallCancelConfig {
    extendedData: string;
    pushConfig?: ZIMPushConfig;
}
export interface ZIMCallAcceptConfig {
    extendedData: string;
}
export interface ZIMCallRejectConfig {
    extendedData: string;
}
export interface ZIMCallingInviteConfig {
    pushConfig?: ZIMPushConfig;
}
export interface ZIMCallQuitConfig {
    extendedData: string;
    pushConfig?: ZIMPushConfig;
}
export interface ZIMCallJoinConfig {
    extendedData: string;
}
export interface ZIMCallEndConfig {
    extendedData: string;
    pushConfig?: ZIMPushConfig;
}
export interface ZIMCallInvitationQueryConfig {
    count: number;
    nextFlag?: number;
}
export interface ZIMCallInvitationSentResult {
    callID: string;
    timeout: number;
    errorUserList: ZIMErrorUserInfo[];
    /**
     * @deprecated
     */
    errorInvitees: ZIMCallUserInfo[];
}
export interface ZIMCallCancelSentResult {
    callID: string;
    errorInvitees: string[];
}
export interface ZIMCallAcceptanceSentResult {
    callID: string;
}
export interface ZIMCallRejectionSentResult {
    callID: string;
}
export interface ZIMCallingInvitationSentResult {
    callID: string;
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMCallQuitSentResult {
    callID: string;
    createTime: number;
    acceptTime: number;
    quitTime: number;
}
export interface ZIMCallJoinSentResult {
    callID: string;
    createTime: number;
    joinTime: number;
    extendedData: string;
    callUserList: ZIMCallUserInfo[];
}
export interface ZIMCallEndSentResult {
    callID: string;
    createTime: number;
    acceptTime: number;
    endTime: number;
}
export interface ZIMCallInvitationListQueriedResult {
    callList: ZIMCallInfo[];
    nextFlag: number;
}
export declare enum ZIMConversationType {
    Unknown = -1,
    Peer = 0,
    Room = 1,
    Group = 2
}
export declare enum ZIMConversationEvent {
    Added = 0,
    Updated = 1,
    Disabled = 2,
    Deleted = 3
}
export declare enum ZIMConversationNotificationStatus {
    Notify = 1,
    DoNotDisturb = 2
}
export declare enum ZIMMessageType {
    Unknown = 0,
    Text = 1,
    Command = 2,
    Image = 11,
    File = 12,
    Audio = 13,
    Video = 14,
    Barrage = 20,
    System = 30,
    Revoke = 31,
    Custom = 200
}
export declare enum ZIMMessageSentStatus {
    Sending = 0,
    Success = 1,
    Failed = 2
}
export declare enum ZIMMessageDirection {
    Send = 0,
    Receive = 1
}
export declare enum ZIMMessageOrder {
    Descending = 0,
    Ascending = 1
}
export declare enum ZIMMessageReceiptStatus {
    None = 0,
    Processing = 1,
    Done = 2,
    Expired = 3,
    Failed = 4
}
export declare enum ZIMMessageRevokeStatus {
    Unknown = -1,
    SelfRevoke = 0,
    SystemRevoke = 1,
    ServiceAPIRevoke = 2,
    GroupAdminRevoke = 3,
    GroupOwnerRevoke = 4
}
export declare enum ZIMRevokeType {
    TwoWay = 0,
    OneWay = 1
}
export interface ZIMConversation {
    conversationID: string;
    conversationName: string;
    conversationAvatarUrl: string;
    type: ZIMConversationType;
    unreadMessageCount: number;
    orderKey: number;
    notificationStatus: ZIMConversationNotificationStatus;
    isPinned?: boolean;
    lastMessage?: ZIMMessage;
}
export interface ZIMConversationChangeInfo {
    event: ZIMConversationEvent;
    conversation: ZIMConversation;
}
export interface ZIMMessageBase {
    type: ZIMMessageType;
    message: string | Uint8Array;
    extendedData?: string;
    localExtendedData?: string;
}
export interface ZIMMediaMessageBase {
    type: ZIMMessageType.Image | ZIMMessageType.File | ZIMMessageType.Audio | ZIMMessageType.Video;
    extendedData?: string;
    localExtendedData?: string;
    /**
     * Required when sending local file media message.
     */
    fileLocalPath?: File;
    /**
     * Required when sending remote file media message.
     */
    fileDownloadUrl?: string;
    /**
     * Required for audio file.
     */
    audioDuration?: number;
    /**
     * Required for video file.
     */
    videoDuration?: number;
}
export interface ZIMMessage extends ZIMMessageBase {
    localMessageID: string;
    messageID: string;
    senderUserID: string;
    timestamp: number;
    conversationID: string;
    conversationType: ZIMConversationType;
    direction: ZIMMessageDirection;
    sentStatus: ZIMMessageSentStatus;
    orderKey: number;
    conversationSeq: number;
    isUserInserted: boolean;
    isBroadcastMessage: boolean;
    receiptStatus: ZIMMessageReceiptStatus;
    reactions: ZIMMessageReaction[];
}
export interface ZIMMediaMessage extends ZIMMediaMessageBase, ZIMMessage {
    type: ZIMMessageType.Image | ZIMMessageType.File | ZIMMessageType.Audio | ZIMMessageType.Video;
    fileLocalPath: File;
    fileDownloadUrl: string;
    fileName: string;
    fileSize: number;
    fileUID: string;
}
export interface ZIMTextMessage extends ZIMMessage {
    type: ZIMMessageType.Text;
    message: string;
}
export interface ZIMCommandMessage extends ZIMMessage {
    type: ZIMMessageType.Command;
    message: Uint8Array;
}
export interface ZIMBarrageMessage extends ZIMMessage {
    type: ZIMMessageType.Barrage;
    message: string;
}
export interface ZIMRevokeMessage extends ZIMMessage {
    type: ZIMMessageType.Revoke;
    message: string;
    revokeType: ZIMRevokeType;
    revokeStatus: ZIMMessageRevokeStatus;
    revokeTimestamp: number;
    operatedUserID: string;
    revokeExtendedData: string;
    originalMessageType: ZIMMessageType;
    originalTextMessageContent: string;
}
export interface ZIMCustomMessage extends ZIMMessage {
    type: ZIMMessageType.Custom;
    message: string;
    subType: number;
    searchedContent: string;
}
export interface ZIMImageMessage extends ZIMMediaMessage {
    type: ZIMMessageType.Image;
    thumbnailDownloadUrl: string;
    largeImageDownloadUrl: string;
    originalImageWidth: number;
    originalImageHeight: number;
    thumbnailWidth: number;
    thumbnailHeight: number;
    largeImageWidth: number;
    largeImageHeight: number;
}
export interface ZIMFileMessage extends ZIMMediaMessage {
    type: ZIMMessageType.File;
}
export interface ZIMAudioMessage extends ZIMMediaMessage {
    type: ZIMMessageType.Audio;
    audioDuration: number;
}
export interface ZIMVideoMessage extends ZIMMediaMessage {
    type: ZIMMessageType.Video;
    videoDuration: number;
    videoFirstFrameDownloadUrl: string;
    videoFirstFrameWidth: number;
    videoFirstFrameHeight: number;
}
export interface ZIMMessageReaction {
    conversationID: string;
    conversationType: ZIMConversationType;
    messageID: string;
    reactionType: string;
    isSelfIncluded: boolean;
    totalCount: number;
    userList: ZIMMessageReactionUserInfo[];
}
export interface ZIMMessageReactionUserInfo {
    userID: string;
}
export interface ZIMMessageReceiptInfo {
    conversationID: string;
    conversationType: ZIMConversationType;
    messageID: string;
    status: ZIMMessageReceiptStatus;
    readMemberCount: number;
    unreadMemberCount: number;
    isSelfOperated: boolean;
}
export interface ZIMMessageSentStatusChangeInfo {
    status: ZIMMessageSentStatus;
    reason?: string;
    message: ZIMMessage;
}
export interface ZIMConversationSearchInfo {
    conversationID: string;
    conversationType: ZIMConversationType;
    totalMessageCount: number;
    messageList: ZIMMessage[];
}
export interface ZIMMessageSendNotification {
    onMessageAttached: (message: ZIMMessage) => void;
}
export interface ZIMMediaMessageSendNotification {
    onMessageAttached: (message: ZIMMediaMessage) => void;
    onMediaUploadingProgress: (message: ZIMMediaMessage, currentFileSize: number, totalFileSize: number) => void;
}
export interface ZIMConversationQueryConfig {
    count: number;
    nextConversation?: ZIMConversation;
}
export interface ZIMConversationDeleteConfig {
    isAlsoDeleteServerConversation: boolean;
}
export interface ZIMMessageDeleteConfig {
    isAlsoDeleteServerMessage: boolean;
}
export interface ZIMMessageQueryConfig {
    count: number;
    reverse: boolean;
    nextMessage?: ZIMMessage;
}
export interface ZIMGroupMessageReceiptMemberQueryConfig {
    count: number;
    nextFlag: number;
}
export interface ZIMConversationSearchConfig {
    keywords: string[];
    senderUserIDs: string[];
    messageTypes: ZIMMessageType[];
    subMessageTypes: number[];
    startTime: number;
    endTime: number;
    totalConversationCount: number;
    conversationMessageCount: number;
    nextFlag?: number;
}
export interface ZIMMessageSearchConfig {
    keywords: string[];
    senderUserIDs: string[];
    messageTypes: ZIMMessageType[];
    subMessageTypes: number[];
    startTime: number;
    endTime: number;
    order: ZIMMessageOrder;
    count: number;
    nextMessage?: ZIMMessage;
}
export interface ZIMMessageReactionUserQueryConfig {
    reactionType: string;
    count: number;
    nextFlag: number;
}
export interface ZIMConversationListQueriedResult {
    conversationList: ZIMConversation[];
}
export interface ZIMConversationQueriedResult {
    conversation: ZIMConversation;
}
export interface ZIMConversationDeletedResult {
    conversationID: string;
    conversationType: ZIMConversationType;
}
export interface ZIMConversationNotificationStatusSetResult {
    conversationID: string;
    conversationType: ZIMConversationType;
}
export interface ZIMConversationUnreadMessageCountClearedResult {
    conversationID: string;
    conversationType: ZIMConversationType;
}
export interface ZIMMessageDeletedResult {
    conversationID: string;
    conversationType: ZIMConversationType;
}
export interface ZIMMessageSentResult {
    message: ZIMMessage;
}
export interface ZIMMediaMessageSentResult {
    message: ZIMMediaMessage;
}
export interface ZIMMessageInsertedResult {
    message: ZIMMessage;
}
export interface ZIMMessageLocalExtendedDataUpdatedResult {
    message: ZIMMessage;
}
export interface ZIMMessageQueriedResult {
    conversationID: string;
    conversationType: ZIMConversationType;
    messageList: ZIMMessage[];
}
export interface ZIMConversationMessageReceiptReadSentResult {
    conversationID: string;
    conversationType: ZIMConversationType;
}
export interface ZIMMessageReceiptsReadSentResult {
    conversationID: string;
    conversationType: ZIMConversationType;
    errorMessageIDs: string[];
}
export interface ZIMMessageReceiptsInfoQueriedResult {
    infos: ZIMMessageReceiptInfo[];
    errorMessageIDs: string[];
}
export interface ZIMMessageRevokedResult {
    message: ZIMRevokeMessage;
}
export interface ZIMConversationPinnedStateUpdatedResult {
    conversationID: string;
    conversationType: ZIMConversationType;
}
export interface ZIMConversationPinnedListQueriedResult {
    conversationList: ZIMConversation[];
}
export interface ZIMConversationsSearchedResult {
    conversationSearchInfoList: ZIMConversationSearchInfo[];
    nextFlag?: number;
}
export interface ZIMMessagesGlobalSearchedResult {
    messageList: ZIMMessage[];
    nextMessage?: ZIMMessage;
}
export interface ZIMMessagesSearchedResult {
    conversationID: string;
    conversationType: ZIMConversationType;
    messageList: ZIMMessage[];
    nextMessage?: ZIMMessage;
}
export interface ZIMMessageReactionAddedResult {
    reaction: ZIMMessageReaction;
}
export interface ZIMMessageReactionDeletedResult {
    reaction: ZIMMessageReaction;
}
export interface ZIMMessageReactionUserListQueriedResult {
    totalCount: number;
    nextFlag: number;
    reactionType: string;
    userList: ZIMMessageReactionUserInfo[];
    message: ZIMMessage;
}
export declare enum ZIMGroupMessageNotificationStatus {
    Notify = 1,
    Disturb = 2
}
export declare enum ZIMGroupState {
    Quit = 0,
    Enter = 1
}
export declare enum ZIMGroupEvent {
    Created = 1,
    Dismissed = 2,
    Joined = 3,
    Invited = 4,
    Left = 5,
    KickedOut = 6
}
export declare enum ZIMGroupMemberState {
    Quit = 0,
    Enter = 1
}
export declare enum ZIMGroupMemberEvent {
    Joined = 1,
    Left = 2,
    KickedOut = 4,
    Invited = 5
}
export declare enum ZIMGroupAttributesUpdateAction {
    Set = 0,
    Delete = 1
}
export interface ZIMGroupInfo {
    groupID: string;
    groupName: string;
    groupAvatarUrl: string;
}
export interface ZIMGroup {
    baseInfo: ZIMGroupInfo;
    notificationStatus: ZIMGroupMessageNotificationStatus;
}
export interface ZIMGroupFullInfo {
    baseInfo: ZIMGroupInfo;
    notificationStatus: ZIMGroupMessageNotificationStatus;
    groupNotice: string;
    groupAttributes: Record<string, string>;
}
export interface ZIMGroupOperatedInfo {
    userID: string;
    userName: string;
    memberNickname: string;
    memberRole: number;
    /**
     * @deprecated Use tiled properties.
     */
    operatedUserInfo: ZIMGroupMemberInfo;
}
export interface ZIMGroupAttributesUpdateInfo {
    action: ZIMGroupAttributesUpdateAction;
    groupAttributes: Record<string, string>;
}
export interface ZIMGroupSearchInfo {
    groupInfo: ZIMGroupInfo;
    userList: ZIMGroupMemberInfo[];
}
export interface ZIMGroupAdvancedConfig {
    groupNotice: string;
    groupAttributes: Record<string, string>;
}
export interface ZIMGroupMemberQueryConfig {
    count: number;
    nextFlag: number;
}
export interface ZIMGroupSearchConfig {
    keywords: string[];
    isAlsoMatchGroupMemberUserName: boolean;
    isAlsoMatchGroupMemberNickname: boolean;
    count: number;
    nextFlag: number;
}
export interface ZIMGroupMemberSearchConfig {
    keywords: string[];
    isAlsoMatchGroupMemberNickname: boolean;
    count: number;
    nextFlag: number;
}
export interface ZIMGroupLeftResult {
    groupID: string;
}
export interface ZIMGroupDismissedResult {
    groupID: string;
}
export interface ZIMGroupCreatedResult {
    groupInfo: ZIMGroupFullInfo;
    userList: ZIMGroupMemberInfo[];
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMGroupJoinedResult {
    groupInfo: ZIMGroupFullInfo;
}
export interface ZIMGroupInfoQueriedResult {
    groupInfo: ZIMGroupFullInfo;
}
export interface ZIMGroupListQueriedResult {
    groupList: ZIMGroup[];
}
export interface ZIMGroupNameUpdatedResult {
    groupID: string;
    groupName: string;
}
export interface ZIMGroupNoticeUpdatedResult {
    groupID: string;
    groupNotice: string;
}
export interface ZIMGroupAvatarUrlUpdatedResult {
    groupID: string;
    groupAvatarUrl: string;
}
export interface ZIMGroupAttributesOperatedResult {
    groupID: string;
    errorKeys: string[];
}
export interface ZIMGroupAttributesQueriedResult {
    groupID: string;
    groupAttributes: Record<string, string>;
}
export interface ZIMGroupUsersInvitedResult {
    groupID: string;
    userList: ZIMGroupMemberInfo[];
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMGroupOwnerTransferredResult {
    groupID: string;
    toUserID: string;
}
export interface ZIMGroupMemberKickedResult {
    groupID: string;
    kickedUserIDs: string[];
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMGroupMemberListQueriedResult {
    groupID: string;
    userList: ZIMGroupMemberInfo[];
    nextFlag: number;
}
export interface ZIMGroupMemberCountQueriedResult {
    groupID: string;
    count: number;
}
export interface ZIMGroupMemberInfoQueriedResult {
    groupID: string;
    userInfo: ZIMGroupMemberInfo;
}
export interface ZIMGroupMemberNicknameUpdatedResult {
    groupID: string;
    forUserID: string;
    nickname: string;
}
export interface ZIMGroupMemberRoleUpdatedResult {
    groupID: string;
    forUserID: string;
    role: number;
}
export interface ZIMGroupsSearchedResult {
    groupSearchInfoList: ZIMGroupSearchInfo[];
    nextFlag: number;
}
export interface ZIMGroupMembersSearchedResult {
    groupID: string;
    userList: ZIMGroupMemberInfo[];
    nextFlag: number;
}
export declare enum ZIMRoomState {
    Disconnected = 0,
    Connecting = 1,
    Connected = 2
}
export declare enum ZIMRoomEvent {
    Success = 0,
    NetworkInterrupted = 1,
    NetworkDisconnected = 2,
    RoomNotExist = 3,
    ActiveCreate = 4,
    CreateFailed = 5,
    ActiveEnter = 6,
    EnterFailed = 7,
    KickedOut = 8,
    ConnectTimeout = 9,
    KickedOutByOtherDevice = 10
}
export declare enum ZIMRoomAttributesUpdateAction {
    Set = 0,
    Delete = 1
}
export interface ZIMRoomInfo {
    roomID: string;
    roomName: string;
}
export interface ZIMRoomFullInfo {
    baseInfo: ZIMRoomInfo;
}
export interface ZIMRoomAttributesUpdateInfo {
    action: ZIMRoomAttributesUpdateAction;
    roomAttributes: Record<string, string>;
}
export interface ZIMRoomMemberQueryConfig {
    count: number;
    nextFlag: string;
}
export interface ZIMRoomAdvancedConfig {
    roomAttributes: Record<string, string>;
    roomDestroyDelayTime: number;
}
export interface ZIMRoomAttributesDeleteConfig {
    isForce: boolean;
}
export interface ZIMRoomAttributesSetConfig {
    isForce: boolean;
    isUpdateOwner: boolean;
    isDeleteAfterOwnerLeft: boolean;
}
export interface ZIMRoomAttributesBatchOperationConfig {
    isForce: boolean;
    isUpdateOwner: boolean;
    isDeleteAfterOwnerLeft: boolean;
}
export interface ZIMRoomCreatedResult {
    roomInfo: ZIMRoomFullInfo;
}
export interface ZIMRoomEnteredResult {
    roomInfo: ZIMRoomFullInfo;
}
export interface ZIMRoomJoinedResult {
    roomInfo: ZIMRoomFullInfo;
}
export interface ZIMRoomLeftResult {
    roomID: string;
}
export interface ZIMRoomAttributesBatchOperatedResult {
    roomID: string;
}
export interface ZIMRoomOnlineMemberCountQueriedResult {
    roomID: string;
    count: number;
}
export interface ZIMRoomAttributesOperatedResult {
    roomID: string;
    errorKeys: string[];
}
export interface ZIMRoomAttributesQueriedResult {
    roomID: string;
    roomAttributes: Record<string, string>;
}
export interface ZIMRoomMemberAttributesInfo {
    userID: string;
    attributes: Record<string, string>;
}
export interface ZIMRoomMemberAttributesOperatedInfo {
    attributesInfo: ZIMRoomMemberAttributesInfo;
    errorKeys: string[];
}
export interface ZIMRoomMemberAttributesUpdateInfo {
    attributesInfo: ZIMRoomMemberAttributesInfo;
}
export interface ZIMRoomMemberAttributesSetConfig {
    isDeleteAfterOwnerLeft: boolean;
}
export interface ZIMRoomMemberAttributesQueryConfig {
    count: number;
    nextFlag: string;
}
export interface ZIMRoomOperatedInfo {
    userID: string;
}
export interface ZIMRoomMembersAttributesOperatedResult {
    roomID: string;
    infos: ZIMRoomMemberAttributesOperatedInfo[];
    errorUserList: string[];
}
export interface ZIMRoomMembersAttributesQueriedResult {
    roomID: string;
    infos: ZIMRoomMemberAttributesInfo[];
}
export interface ZIMRoomMemberAttributesListQueriedResult {
    roomID: string;
    infos: ZIMRoomMemberAttributesInfo[];
    nextFlag: string;
}
export default class ZIM {
    static getVersion(): string;
    static getInstance(): ZIM;
    static setGeofencingConfig(areaList: number[], type: ZIMGeofencingType): boolean;
    /**
     * @deprecated Use overloaded methods.
     */
    static create(appID: number): ZIM | null;
    static create(appConfig: ZIMAppConfig): ZIM | null;
    destroy(): void;
    setLogConfig(config: ZIMLogConfig): void;
    uploadLog(): Promise<void>;
    on<K extends keyof ZIMEventHandler>(type: K, listener: ZIMEventHandler[K]): void;
    off<K extends keyof ZIMEventHandler>(type: K): void;
    login(userInfo: ZIMUserInfo, token: string): Promise<void>;
    logout(): void;
    renewToken(token: string): Promise<ZIMTokenRenewedResult>;
    queryUsersInfo(userIDs: string[], config: ZIMUsersInfoQueryConfig): Promise<ZIMUsersInfoQueriedResult>;
    updateUserName(userName: string): Promise<ZIMUserNameUpdatedResult>;
    updateUserAvatarUrl(userAvatarUrl: string): Promise<ZIMUserAvatarUrlUpdatedResult>;
    updateUserExtendedData(extendedData: string): Promise<ZIMUserExtendedDataUpdatedResult>;
    queryConversation(conversationID: string, conversationType: ZIMConversationType): Promise<ZIMConversationQueriedResult>;
    queryConversationList(config: ZIMConversationQueryConfig): Promise<ZIMConversationListQueriedResult>;
    queryConversationPinnedList(config: ZIMConversationQueryConfig): Promise<ZIMConversationPinnedListQueriedResult>;
    deleteConversation(conversationID: string, conversationType: ZIMConversationType, config: ZIMConversationDeleteConfig): Promise<ZIMConversationDeletedResult>;
    deleteAllConversations(config: ZIMConversationDeleteConfig): Promise<void>;
    setConversationNotificationStatus(status: ZIMConversationNotificationStatus, conversationID: string, conversationType: ZIMConversationType): Promise<ZIMConversationNotificationStatusSetResult>;
    updateConversationPinnedState(isPinned: boolean, conversationID: string, conversationType: ZIMConversationType): Promise<ZIMConversationPinnedStateUpdatedResult>;
    clearConversationUnreadMessageCount(conversationID: string, conversationType: ZIMConversationType): Promise<ZIMConversationUnreadMessageCountClearedResult>;
    clearConversationTotalUnreadMessageCount(): Promise<void>;
    /**
     * @deprecated Replaced with sendMessage.
     */
    sendPeerMessage(message: ZIMMessageBase, toUserID: string, config: ZIMMessageSendConfig, notification?: ZIMMessageSendNotification): Promise<ZIMMessageSentResult>;
    /**
     * @deprecated Replaced with sendMessage.
     */
    sendGroupMessage(message: ZIMMessageBase, toGroupID: string, config: ZIMMessageSendConfig, notification?: ZIMMessageSendNotification): Promise<ZIMMessageSentResult>;
    /**
     * @deprecated Replaced with sendMessage.
     */
    sendRoomMessage(message: ZIMMessageBase, toRoomID: string, config: ZIMMessageSendConfig, notification?: ZIMMessageSendNotification): Promise<ZIMMessageSentResult>;
    sendMessage(message: ZIMMessageBase, toConversationID: string, conversationType: ZIMConversationType, config: ZIMMessageSendConfig, notification?: ZIMMessageSendNotification): Promise<ZIMMessageSentResult>;
    sendMediaMessage(message: ZIMMediaMessageBase, toConversationID: string, conversationType: ZIMConversationType, config: ZIMMessageSendConfig, notification?: ZIMMediaMessageSendNotification): Promise<ZIMMediaMessageSentResult>;
    deleteMessages(messageList: ZIMMessage[], conversationID: string, conversationType: ZIMConversationType, config: ZIMMessageDeleteConfig): Promise<ZIMMessageDeletedResult>;
    deleteAllMessage(conversationID: string, conversationType: ZIMConversationType, config: ZIMMessageDeleteConfig): Promise<ZIMMessageDeletedResult>;
    queryHistoryMessage(conversationID: string, conversationType: ZIMConversationType, config: ZIMMessageQueryConfig): Promise<ZIMMessageQueriedResult>;
    insertMessageToLocalDB(message: ZIMMessageBase | ZIMMediaMessageBase, conversationID: string, conversationType: ZIMConversationType, senderUserID: string): Promise<ZIMMessageInsertedResult>;
    updateMessageLocalExtendedData(localExtendedData: string, message: ZIMMessage): Promise<ZIMMessageLocalExtendedDataUpdatedResult>;
    revokeMessage(message: ZIMMessage, config?: ZIMMessageRevokeConfig): Promise<ZIMMessageRevokedResult>;
    sendConversationMessageReceiptRead(conversationID: string, conversationType: ZIMConversationType): Promise<ZIMConversationMessageReceiptReadSentResult>;
    sendMessageReceiptsRead(messageList: ZIMMessage[], conversationID: string, conversationType: ZIMConversationType): Promise<ZIMMessageReceiptsReadSentResult>;
    queryMessageReceiptsInfo(messageList: ZIMMessage[], conversationID: string, conversationType: ZIMConversationType): Promise<ZIMMessageReceiptsInfoQueriedResult>;
    queryGroupMessageReceiptReadMemberList(message: ZIMMessage, groupID: string, config: ZIMGroupMessageReceiptMemberQueryConfig): Promise<ZIMGroupMessageReceiptMemberListQueriedResult>;
    queryGroupMessageReceiptUnreadMemberList(message: ZIMMessage, groupID: string, config: ZIMGroupMessageReceiptMemberQueryConfig): Promise<ZIMGroupMessageReceiptMemberListQueriedResult>;
    addMessageReaction(reactionType: string, message: ZIMMessage): Promise<ZIMMessageReactionAddedResult>;
    deleteMessageReaction(reactionType: string, message: ZIMMessage): Promise<ZIMMessageReactionDeletedResult>;
    queryMessageReactionUserList(message: ZIMMessage, config: ZIMMessageReactionUserQueryConfig): Promise<ZIMMessageReactionUserListQueriedResult>;
    createRoom(roomInfo: ZIMRoomInfo, config?: ZIMRoomAdvancedConfig): Promise<ZIMRoomCreatedResult>;
    enterRoom(roomInfo: ZIMRoomInfo, config?: ZIMRoomAdvancedConfig): Promise<ZIMRoomEnteredResult>;
    joinRoom(roomID: string): Promise<ZIMRoomJoinedResult>;
    leaveRoom(roomID: string): Promise<ZIMRoomLeftResult>;
    queryRoomMemberList(roomID: string, config: ZIMRoomMemberQueryConfig): Promise<ZIMRoomMemberQueriedResult>;
    queryRoomMembers(userIDs: string[], roomID: string): Promise<ZIMRoomMembersQueriedResult>;
    queryRoomOnlineMemberCount(roomID: string): Promise<ZIMRoomOnlineMemberCountQueriedResult>;
    queryRoomAllAttributes(roomID: string): Promise<ZIMRoomAttributesQueriedResult>;
    setRoomAttributes(roomAttributes: Record<string, string>, roomID: string, config: ZIMRoomAttributesSetConfig): Promise<ZIMRoomAttributesOperatedResult>;
    deleteRoomAttributes(keys: string[], roomID: string, config: ZIMRoomAttributesDeleteConfig): Promise<ZIMRoomAttributesOperatedResult>;
    beginRoomAttributesBatchOperation(roomID: string, config: ZIMRoomAttributesBatchOperationConfig): void;
    endRoomAttributesBatchOperation(roomID: string): Promise<ZIMRoomAttributesBatchOperatedResult>;
    setRoomMembersAttributes(attributes: Record<string, string>, userIDs: string[], roomID: string, config: ZIMRoomMemberAttributesSetConfig): Promise<ZIMRoomMembersAttributesOperatedResult>;
    queryRoomMembersAttributes(userIDs: string[], roomID: string): Promise<ZIMRoomMembersAttributesQueriedResult>;
    queryRoomMemberAttributesList(roomID: string, config: ZIMRoomMemberAttributesQueryConfig): Promise<ZIMRoomMemberAttributesListQueriedResult>;
    createGroup(groupInfo: ZIMGroupInfo, userIDs: string[], config?: ZIMGroupAdvancedConfig): Promise<ZIMGroupCreatedResult>;
    joinGroup(groupID: string): Promise<ZIMGroupJoinedResult>;
    leaveGroup(groupID: string): Promise<ZIMGroupLeftResult>;
    dismissGroup(groupID: string): Promise<ZIMGroupDismissedResult>;
    queryGroupList(): Promise<ZIMGroupListQueriedResult>;
    updateGroupNotice(groupNotice: string, groupID: string): Promise<ZIMGroupNoticeUpdatedResult>;
    updateGroupName(groupName: string, groupID: string): Promise<ZIMGroupNameUpdatedResult>;
    updateGroupAvatarUrl(groupAvatarUrl: string, groupID: string): Promise<ZIMGroupAvatarUrlUpdatedResult>;
    queryGroupInfo(groupID: string): Promise<ZIMGroupInfoQueriedResult>;
    setGroupAttributes(groupAttributes: Record<string, string>, groupID: string): Promise<ZIMGroupAttributesOperatedResult>;
    deleteGroupAttributes(keys: string[], groupID: string): Promise<ZIMGroupAttributesOperatedResult>;
    queryGroupAttributes(keys: string[], groupID: string): Promise<ZIMGroupAttributesQueriedResult>;
    queryGroupAllAttributes(groupID: string): Promise<ZIMGroupAttributesQueriedResult>;
    setGroupMemberNickname(nickname: string, forUserID: string, groupID: string): Promise<ZIMGroupMemberNicknameUpdatedResult>;
    setGroupMemberRole(role: number, forUserID: string, groupID: string): Promise<ZIMGroupMemberRoleUpdatedResult>;
    transferGroupOwner(toUserID: string, groupID: string): Promise<ZIMGroupOwnerTransferredResult>;
    queryGroupMemberInfo(userID: string, groupID: string): Promise<ZIMGroupMemberInfoQueriedResult>;
    inviteUsersIntoGroup(userIDs: string[], groupID: string): Promise<ZIMGroupUsersInvitedResult>;
    kickGroupMembers(userIDs: string[], groupID: string): Promise<ZIMGroupMemberKickedResult>;
    queryGroupMemberList(groupID: string, config: ZIMGroupMemberQueryConfig): Promise<ZIMGroupMemberListQueriedResult>;
    queryGroupMemberCount(groupID: string): Promise<ZIMGroupMemberCountQueriedResult>;
    callInvite(invitees: string[], config: ZIMCallInviteConfig): Promise<ZIMCallInvitationSentResult>;
    callCancel(invitees: string[], callID: string, config: ZIMCallCancelConfig): Promise<ZIMCallCancelSentResult>;
    callAccept(callID: string, config: ZIMCallAcceptConfig): Promise<ZIMCallAcceptanceSentResult>;
    callReject(callID: string, config: ZIMCallRejectConfig): Promise<ZIMCallRejectionSentResult>;
    callQuit(callID: string, config: ZIMCallQuitConfig): Promise<ZIMCallQuitSentResult>;
    callEnd(callID: string, config: ZIMCallEndConfig): Promise<ZIMCallEndSentResult>;
    callJoin(callID: string, config: ZIMCallJoinConfig): Promise<ZIMCallJoinSentResult>;
    callingInvite(invitees: string[], callID: string, config: ZIMCallingInviteConfig): Promise<ZIMCallingInvitationSentResult>;
    queryCallInvitationList(config: ZIMCallInvitationQueryConfig): Promise<ZIMCallInvitationListQueriedResult>;
    searchLocalConversations(config: ZIMConversationSearchConfig): Promise<ZIMConversationsSearchedResult>;
    searchGlobalLocalMessages(config: ZIMMessageSearchConfig): Promise<ZIMMessagesGlobalSearchedResult>;
    searchLocalMessages(conversationID: string, conversationType: ZIMConversationType, config: ZIMMessageSearchConfig): Promise<ZIMMessagesSearchedResult>;
    searchLocalGroups(config: ZIMGroupSearchConfig): Promise<ZIMGroupsSearchedResult>;
    searchLocalGroupMembers(groupID: string, config: ZIMGroupMemberSearchConfig): Promise<ZIMGroupMembersSearchedResult>;
}
export { ZIM };
