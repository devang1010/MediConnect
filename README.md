# MediConnect

This is a professional-grade MERN (MongoDB, Express, React, Node.js) stack web application for booking doctor appointments. Patients can browse through a list of doctors and their availability and book an appointment with their preferred doctor. Doctors can view their schedule, manage their availability, and approve/cancel appointments. We also intigrate chatbot with the web application so that people can easily navigate in our website.

## Project View

<h4>1. For User Profile<h4/>

- **Homepage**
<p align="center">
  <img alt="img-name" src="Images/userProfile.png" width="700">
</p>
  
- **Appointment Lists**
<p align="center">
  <img alt="img-name" src="Images/appointmentList.png" width="700">
</p>
  
- **Booking Appointment**
<p align="center">
  <img alt="img-name" src="Images/bookAppointment.png" width="700">
</p>
  
- **Apply As Doctor**
<p align="center">
  <img alt="img-name" src="Images/applyDoctor.png" width="700">
</p>

- **New Notifications**
<p align="center">
  <img alt="img-name" src="Images/notification.png" width="700">
</p>

<h4>2. For Doctor Profile<h4/>
  
- **Homepage**
<p align="center">
  <img alt="img-name" src="Images/doctorProfile.png" width="700">
</p>
  
- **Appointment Lists**
<p align="center">
  <img alt="img-name" src="Images/doctorNotification.png" width="700">
</p>

- **Manage Profile**
<p align="center">
  <img alt="img-name" src="Images/manageProfile.png" width="700">
</p>
  
<h4>3. For Admin Profile<h4/>
  
- **Homepage**
<p align="center">
  <img alt="img-name" src="Images/adminProfile.png" width="700">
</p>

- **Doctors List**
<p align="center">
  <img alt="img-name" src="Images/adminDoctorList.png" width="700">
</p>
  
- **Users List**
<p align="center">
  <img alt="img-name" src="Images/adminUserList.png" width="700">
</p>

- **Notification**
<p align="center">
  <img alt="img-name" src="Images/adminNotification.png" width="700">
</p>

- **Chatbot**
<p align="center">
  <img alt="img-name" src="Images/chatBot.png" width="700">
</p>
  
## Installation

To set up BloodLife locally, follow these steps:

- Clone the repository:

      git clone https://github.com/devang1010/MediConnect.git
      
- Install the required dependencies for backend:

      npm install express joi jsonwebtoken moment mongoose morgan nodemon zxcvbn dotenv colors bcryptjs
     
- Navigate to the client directory: 

       cd client
    
- Install the dependencies for the client: 

       npm i react-router-dom react-redux axios antd @reduxjs/toolkit react-bootstrap moment
    
- Create a .env file in the root directory with the following environment variables:

       DB_URL = mongodb+srv://<user>:<pass>@cluster0.l17quyr.mongodb.net/database

       JWT_SECRET = A_Secret_Value
  
       PORT = 4000

- Start the server: 

       npm start
    
- In a new terminal window, navigate to the client directory:

       cd client
    
- Start the client: 

       npm start
    
- Access the application. Open your web browser and visit http://localhost:3000 to access the application.


## Usage

- The MediConnect application allows doctors to manage their appointments with ease. Doctors can create new appointments, view existing appointments, and approve or reject appointments as necessary.

- To create a new appointment, the user needs to click on the "New Appointment" button on the doctor's card. They will then be presented with a form where they can enter the details of the appointment, including date and time.

- To view existing appointments, the doctor needs to click on the "Appointments" button on the sidebar. They will then be presented with a list of all their appointments, presented by date and time. The doctor can click on any appointment to approve or reject to change it's pending status.

- To update time of availability, the doctor needs to click on the profile page where they wish to update the time of appointments. They will then be presented with a form where they can edit the start time and end time details of the appointment.

- There is also a chatbot available for further assistance in the website and for any queries you will face during the navigation of the website.

## Stack

- MongoDB - NoSQL database for storing data
- Express - Backend framework for building RESTful APIs
- React - Frontend framework for building user interfaces
- Node.js - JavaScript runtime environment for building scalable server-side applications
- JWT - JSON Web Token for user authentication and authorization
- Bcrypt - Password hashing library for secure password storage

## Thank you! follow for more exciting Projects :).
