Adapted from a blog post by Chuck Tomasi https://www.servicenow.com/community/in-other-news/gs-getmessage-the-second-parameter/ba-p/2279603/page/2#comments

gs.getMessage() is a method used to send log messages in other languages. The method does this by looking up the message key in the sys_ui_message table for the current language.

Syntax: gs.getMessage("the key of the message you are looking up", [an array of variables to be substituted into the message])

Some messages, when translated into other languages will have their syntax messed around e.g.

"Test suite {0}'s scope {1} does not match user scope"
in French could be translated (badly) as:
"La portée {1} de la suite de tests {0} ne correspond pas à la portée de l'utilisateur"

You can see that {0} and {1} have been switched over, so Chuck points out that concatenating strings and variables like ("Test suite" + testsuite + "'s scope") etc will not work when translated.
Using the array of variables is a neat solution to translation, and even without translation, it can look nicer.

You can also use gs.getMessage() with your own ui messages so you don't need to type out long log messages.

You can create a record in the sys_ui_message table where:
key = msg
message = something really really super long and rambling that could even have some variable substitions in using {0} notation and counting up like this {1}

You can go for gs.addInfoMessage(gs.getMessage("msg")) and print out your long log message without spoiling your clean code. This is most appropriate for user facing messages, rather than messages that will keep your code readable!

If variables are not substituted in, then the curly bracket notation will be printed instead.
