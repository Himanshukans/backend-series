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

20.

5:29 to 6:14
