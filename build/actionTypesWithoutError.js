"use strict";
// NOTE: "x" prefixs are added to avoid a vscode error message
// indicating there are duplicate variable names in ./actionTypesWithError.ts
// Counter actions
var xCOUNTER_INCREASE = '@COUNTER/INCREASE';
var xCOUNTER_DECREASE = '@COUNTER/DECREASE';
var xCOUNTER_RESET = '@COUNTER/RESET';
// Message Actions 
var xMESSAGE_CREATE_NEW = '@COUNTER/CREATE_NEW';
var xMESSAGE_DELETE = '@COUNTER/DELETE';
var xMESSAGE_UPDATE = '@COUNTER/UPDATE';
// User Actions --> Public facing info about a user.
var xUSER_LOGIN = '@USER/LOGIN';
var xUSER_lOGOUT = '@USER/lOGOUT';
var xUSER_GET_PROFILE = '@USER/GET_PROFILE';
var xUSER_UPDATE_PROFILE = '@USER/UPDATE_PROFILE';
// Account actions --> More private/account management type actions
var xACCOUNT_CREATE = '@USER/CREATE';
var xACCOUNT_REMOVE_ACCOUNT_CANNOT_UNDO_GDPR_RIGHT_TO_BE_FORGOTTEN = '@USER/REMOVE_ACCOUNT_CANNOT_UNDO_GDPR_RIGHT_TO_BE_FORGOTTEN';
var xACCOUNT_GET_ACOUNT_INFO = '@USER/GET_ACCOUNT'; // This is a duplicate our script should catch 
var xACCOUNT_UPDATE_ACCOUNT_INFO = '@USER/UPDATE_ACCOUNT';
