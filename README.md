## Steps

1. npm init
2. .gitignore / .env / .env.sample / src
3. inside src: touch app.js constants.js index.js
4. index.js is main file, we declared that in package.json
5. added "type": "module" in package.json file.
6. added .gitignore file data from https://mrkandreev.name/snippets/gitignore-generator/ . Type node in the search box and paste the data into .gitignore file.
7. npm i -D nodemon . But i can install it like this also npm install --save-dev nodemon # or using yarn: yarn add nodemon -D . https://www.npmjs.com/package/nodemon
   Nodemon is a development tool that automatically restarts your Node.js application whenever you make and save changes to your code.
8. mkdir controllers db middlewares models routes utils | for making folders into src file.
9. install prettier with command: npm i -D prettier | and create files .prettierrc and .prettierignore | https://www.npmjs.com/package/prettier
10. setup mongodb, create project then create cluster then setup ip address.
11. command: npm i mongoose express dotenv (https://mongoosejs.com/) (https://www.npmjs.com/package/dotenv) (https://expressjs.com/en/5x/starter/installing/)
12. added: -r dotenv/config --experimental-json-modules | in package.json file | meaning: it will allow us to make consistancy in code to use "import" otherwise we have to use "require" as per the official documentation of dotenv.

13. connectDB will import using /db/index.js full path in /src/index.js | Also DB_NAME wil import using "../constants.js" full path in /db/index.js

here we have successfully connected our mongoDB to backend.

14. command: npm i cookie-parser cors | (https://www.npmjs.com/package/cookie-parser) | (https://www.npmjs.com/package/cors)

15. command: npm i mongoose-aggregate-paginate-v2 | (https://www.npmjs.com/package/mongoose-aggregate-paginate-v2)

16. command: npm i bcrypt | (https://www.npmjs.com/package/bcrypt)

17. command: npm i jsonwebtoken | (https://www.npmjs.com/package/jsonwebtoken) | for more information : https://www.jwt.io/

18. command: npm i cloudinary | (https://console.cloudinary.com/app/c-10933264695f53b2bdc9d35fbe5078/image/getting-started) | THEN SETUP CLOUDINARY CONFIGURATION

19. command: npm i multer | (https://www.npmjs.com/package/multer)
    we have to use multer to upload file on cloudinary.

20. setup postman.

21. register user steps:-
    step-1: get user details from frontend.
    step-2: validation :- should not be empty.
    step-3: check if user already exists: username, email.
    step-4: check for images and avatar.
    step-5: upload them to cloudinary, avatar
    step-6: create user object - create entry in db.
    step-7: remove password and refresh token field from response.
    step-8: check for user creation.
    step-9: return response.

22. Logic building: 8:30 to 9:40

## part-2

23. loginUser made in user.controller.js file. Steps:-
    step-1: get data from request body.
    step-2: check username/email.
    step-3: find user: available or not.
    step-4: if user available, then check password. if password incorrect then msg them the password is incorrect.
    step-5: after checking password, send access and refresh token to the user.
    step-6: send tokens in secure cookies form.

24. auth.middleware.js file created and built logoutUser

25. refreshAccessToken created using cookies.

26. created subscriptoin.model.js file and some controllers in user.controllers.js file.

27. learning "Aggregation Pipelines" on MongoDB. (https://www.mongodb.com/docs/manual/core/aggregation-pipeline/) and getUserChannelProfile created.

5:29 to 6:14
