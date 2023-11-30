# Welcome to Week 18 (Milestone 3)
Simple To Do List App

<img width="550" alt="Screenshot 2023-07-28 205741" src="https://github.com/RevoU-FSSE-2/week-17-fadli131/assets/109584701/bcc1ded4-a3ae-482f-9e1d-abe6a27bd352">

## 👋 Keep In Touch With Me 
**fadliaryadinata011@gmail.com**

## Authors

👤 **Fadli Aryadinata**

- GitHub: [@fadli131](https://github.com/fadli131)
- Deployment Link FrontEnd (legendary-centaur-a55331.netlify.app)
- Deployment Link BackEnd (https://delightful-bracelet-hare.cyclic.app/)
- Deployment Link Database (mongodb://mongo:iJGpcJFGhRk0VCL6vSUs@containers-us-west-151.railway.app:6500)

### Language used 
- Javascript 

### Tools
- VS Code
- Git and Github    
- Postman
- MongoDB 
- Tailwind 
- Railway
- Nelify
- Cyclic

### Getting Started

## FLOWCHART
<img width="550" alt="Screenshot 2023-07-28 205741" src="https://github.com/RevoU-FSSE-2/week-17-fadli131/assets/109584701/2aca75f0-aa6d-4cf7-a1c4-71a43ecb5878">

## Sample Accounts
```JSON
User:
    "email": "user1@gmail.com",
    "password":"Ronaldo7_"
```
```JSON
Admin:
    "email":"admin1@gmail.com",
    "password":"Ronaldo7_"
```

# Installation
Run the following command to clone the repository
```
git clone https://github.com/RevoU-FSSE-2/week-17-fadli131.git
```
Go to ```frontend``` and ```backend``` directory to install packages
```
cd frontend
npm install
```
```
cd backend
npm install
```
# Configuration BackEnd
Create ```.env``` file inside ```backend``` directory and copy the following code

```
MONGO_URI=Your mongodb URI
PORT=8000
JWT_SECRET=a random secret key 
```

# Configuration FrontEnd
Change ```Axios/axios.js``` file in frontend directory

```
import axios from "axios"
const instance = axios.create({
    baseURL:"http://localhost:8000/api"
})
export default instance
```

# Run the App
Go to ```backend``` and ```frontend``` directory and start the server
```
cd backend
nodemon server
```
```
cd frontend
npm start
```