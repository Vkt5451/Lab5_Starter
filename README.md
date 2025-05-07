# Lab 5 - Starter
Vincent Trinh
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Answer: No, because the message feature would involve multiple components working together such as having multiple clients, database, which is encapsulated within the frontend, backend and network components. Unit tests are meant to be used for more simpler functions, such as for example in this context, formatting a message. It would be too complex to formalize a unit test to test a correct output which is mentioned in lab 5, "Cannot test how these individual components interact with each other on an application/feature level."

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Answer: Yes! This would be a simple validation check which does not require any external dependecies and would be efficient to test. Debugging on a smaller scale without many moving parts ( since we are only checking the length of the message) is completely reasonable to do.

Link to expose: https://vkt5451.github.io/Lab5_Starter/expose.html
Link to explore: https://vkt5451.github.io/Lab5_Starter/explore.html
