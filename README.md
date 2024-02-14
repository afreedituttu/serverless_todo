Advanced Todo Web App with user authentication and authorization using pure react.

## Features :
+) User Login & Signup
+) Add, View, Delete, Mark completed tasks

Notes : This application works purely react hence the context api is used to manage states and datas, custom functions are made to add or modify the datas.
It doesnt permenantly stores the user/tasks data in localstorage/cookies hence the whole application datas will be lost upon page reloading.

formats on which datas are stored & managed are saved in src/static/data.js

## data structures : 
+) user - to save user details
+) tasks - to save tasks
 each data in tasks contains userId which is used as a type of key to identify tasks belonging to users in all algorithms

 ## custom algorithms : 
 ### 'gen_task_id()' 
 which will return next taskId upon incrementing the most recent added task's Id
 ### 'find_user_task()' 
 which will return the tasks belong to currently logged in users
 ### 'addTask()'
 which is used to add the task to the task list of currently logged user
 ### 'delete_task()'
 which is used to delete the selected task of currently logged user
