# ctt

frontend for triggering the test automation from cloud
This project will be useful for someone to automate the process of triggering the katalon test suit.

Initial idea is to let user access the tool from browser and select the test case he/she wants to execute and issue the command to cloud.
Then server running on cloud will redirect the request to target machine where katalon is running.
The machine on which Katalon is running will receive the request and execute test case and return the response to cloud and ultimately to the browser where the request was triggered.

Future plans :
User should be able to comment on the coverage of the test scenarios
User should be able to propose the test scenarios to be covered for a given product or domain
Etc.....
