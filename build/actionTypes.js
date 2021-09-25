"use strict";
// Counter actions
var COUNTER_INCREASE = '@COUNTER/INCREASE';
var COUNTER_DECREASE = '@COUNTER/DECREASE';
var COUNTER_RESET = '@COUNTER/RESET';
// Message Actions 
var MESSAGE_CREATE_NEW = '@COUNTER/CREATE_NEW';
var MESSAGE_DELETE = '@COUNTER/DELETE';
var MESSAGE_UPDATE = '@COUNTER/UPDATE';
// User Actions --> Public facing info about a user.
var USER_LOGIN = '@USER/LOGIN';
var USER_lOGOUT = '@USER/lOGOUT';
var USER_GET_PROFILE = '@USER/GET_PROFILE';
var USER_UPDATE_PROFILE = '@USER/UPDATE_PROFILE';
// Account actions --> More private/account management type actions
var ACCOUNT_CREATE = '@USER/CREATE';
var ACCOUNT_REMOVE_ACCOUNT_CANNOT_UNDO_GDPR_RIGHT_TO_BE_FORGOTTEN = '@USER/REMOVE_ACCOUNT_CANNOT_UNDO_GDPR_RIGHT_TO_BE_FORGOTTEN';
var ACCOUNT_GET_ACOUNT_INFO = '@USER/GET_PROFILE'; // This is a duplicate our script should catch 
var ACCOUNT_UPDATE_ACCOUNT_INFO = '@USER/UPDATE_PROFILE';