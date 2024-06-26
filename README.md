# Hirademy-backend
Backend server for handling assistants using CRUD operations.
Technology Used: Node.js, Express.js, MongoDB, Typescript, Zod, Docker, Postman

# Running
1. ```git clone https://github.com/XprabhatX/Hirademy-backend.git```
2. ```cd Hirademy-backend```
3. At this point create a .env file in root directory and declare these 2 variables
```
PORT = 3000
MONGO_URI = "enter your mongo uri"
```

## Without Docker
4. ```npm install```
5. ```npm run build```
6. ```node .```

## With Docker
4. ```docker build -t hirademy .```
5. ```docker run -d -p 3000:3000 hirademy```

You should be getting this 3 confirmations:<br>
![image](https://github.com/XprabhatX/Hirademy-backend/assets/83898334/d9fbbd10-6c9b-4390-8923-a20191c9c576)


## Postman Tests
1. Open Postman
2. Click on import button<br>
   ![image](https://github.com/XprabhatX/Hirademy-backend/assets/83898334/dcb4bccf-039e-4f2a-9b7e-73c4aa8def7a)

3. Drag and drop the Hirademy-Backend.postman_collection.json file provided in this repository<br>
![image](https://github.com/XprabhatX/Hirademy-backend/assets/83898334/557a764d-3560-4284-9f23-87efe862fb29)
![image](https://github.com/XprabhatX/Hirademy-backend/assets/83898334/b06e3eb5-5503-42a0-83a3-1caa458b1122)

4. You can see I have created a Postman Collection called Hirademy-Backend
   And it contains 4 different requests (CRUD in order)<br>
   ![image](https://github.com/XprabhatX/Hirademy-backend/assets/83898334/2aab4893-31a1-4fe5-b171-fd8877aedf8f)
5. Go through each request one by one and run them to test the api (make sure the server is running)
