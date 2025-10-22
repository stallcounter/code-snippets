//This first code can be tested OOTB in background scripts in a Zurich PDI without any set-up

//create array
var arr = [];
//add our variables to the array - getUserDisplayName will be {0}, getCurrent ApplicationScope will be {1}
arr.push(gs.getUserDisplayName());
arr.push(gs.getCurrentApplicationScope());

var msg = gs.getMessage("Test suite {0}'s scope {1} does not match user scope",arr);

gs.info(msg);

//Alternatively, you could create a new record in the sys_ui_message table with the following values:
//Key:message
//Message: gs.getMessage can retrieve really long sentences for you {0} in the blink of an eye! Wow! You're in the {1} scope.
//Then uncomment and try the following code:

/*
var arr = [];
arr.push(gs.getUserDisplayName());
arr.push(gs.getCurrentApplicationScope());
gs.info(gs.getMessage("message",arr));
*/
