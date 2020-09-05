## App-Gateway

This is an entry point into microservices. To run the application, you must enter the command. 
<br><br>
`yarn install` or `npm install`<br>
`yarn start` or `npm run start`
<br><br>
Also need to start all microservices to work correctly.
Microservices are located in the folder */microservices*.


There are two microservices: */auth*, */projects*

To start the applications correctly, you must enter the following commands:

 */auth* -> `yarn install` -> `yarn dev` 
 
 */projects* -> `yarn install` -> `yarn dev`

You will find a more detailed description in README.md of these microservices.

I have used **Typescript** however much has not been done yet (*interfaces*, *types*, etc.). 

This package is used as a gateway. Requests are redirected to one of the microservices.
There are three applications to run.

I didn't have time to write tests, deploy the project. 
Therefore, you can only check locally. The plans were to use **Docker** with  **docker-compose.yml** as well as **nginx** setup. 
However, there was not enough time to implement the planned.
