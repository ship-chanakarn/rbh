
## Prerequisite
1. docker
2. docker-compose

## Running the Application

1. start an application by running this command

   ```bash
   docker-compose up api
## Test and Access
-  Application 
    - port : 8080
    
    - API
    
        - [GET] /api/lists

        -  [GET] /api/lists/:listId

        -  [PUT] /api/lists/:listId

        -  [POST] /api/lists

        -  [DELETE] /api/lists/:listId

        -  [GET] /api/lists/:listId/comments

        -  [POST] /api/lists/:listId/comments

-  Database
    - port : 5432
    - username : postgres
    - password : password
    - db name : rbh
    