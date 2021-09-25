// NOTE: "x" prefixs are added to avoid a vscode error message
// indicating there are duplicate variable names in ./actionTypesWithError.ts

// Counter actions
const xCOUNTER_INCREASE='@COUNTER/INCREASE'
const xCOUNTER_DECREASE='@COUNTER/DECREASE'
const xCOUNTER_RESET='@COUNTER/RESET'

// Message Actions 
const xMESSAGE_CREATE_NEW = '@COUNTER/CREATE_NEW'
const xMESSAGE_DELETE = '@COUNTER/DELETE'
const xMESSAGE_UPDATE = '@COUNTER/UPDATE'

// User Actions --> Public facing info about a user.
const xUSER_LOGIN = '@USER/LOGIN'
const xUSER_lOGOUT = '@USER/lOGOUT'
const xUSER_GET_PROFILE = '@USER/GET_PROFILE'  
const xUSER_UPDATE_PROFILE = '@USER/UPDATE_PROFILE'

// Account actions --> More private/account management type actions
const xACCOUNT_CREATE = '@USER/CREATE'
const xACCOUNT_REMOVE_ACCOUNT_CANNOT_UNDO_GDPR_RIGHT_TO_BE_FORGOTTEN = '@USER/REMOVE_ACCOUNT_CANNOT_UNDO_GDPR_RIGHT_TO_BE_FORGOTTEN'
const xACCOUNT_GET_ACOUNT_INFO = '@USER/GET_ACCOUNT' // This is a duplicate our script should catch 
const xACCOUNT_UPDATE_ACCOUNT_INFO = '@USER/UPDATE_ACCOUNT'