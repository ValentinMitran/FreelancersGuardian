<h1 align="center">
  <br>
<img src="https://github.com/ValentinMitran/FreelancersGuardian/blob/master/logo.png" alt="Freelancer's Guardian" width="300">
  <br>
Freelancer's Guardian
  <br>
</h1>

<h4 align="center">Project Management and CRM by <a href="https://www.linkedin.com/in/valentinmitran/" target="_blank">Valentin Mitran</a>.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#folder-structure">Folder Structure</a> •
  <a href="#rest-api">Rest API</a> •
</p>

## Key Features

- Admin Dashboard
  - See statistics about sales, users and more...
- Client Dashboard
  


## App Screenshots

Landing Page         |  Admin Dashboard | Client View   
:-------------------------:|:-------------------------:|:-------------------------:
<img src="https://via.placeholder.com/1920x1080" title="LandingPage " width="100%"> |<img src="https://via.placeholder.com/1920x1080" title="Admin Dashboard " width="100%">|<img src="https://via.placeholder.com/1920x1080" title="Client View" width="100%">

## Folder Structure

    .
    ├── doc                          # All Api doc and gif files
    ├── web                          # React.js app folder
    ├── server                       # Node JS MongoDB and Express JS server folder
    ├── .gitignore
    ├── LICENSE
    └── README.md


## REST API

### API Reference

- PH - Placeholder
- ":userID" -  User ID

### Client API

Web API| URL | Type | Description
------------ | ------------- |------------- | -------------
User Register| /api/user/register | post | -
User Login | /api/user/login | post | -
User Logout | /api/user/logout | post | -
User isLoggedIn | /api/user/isLoggedIn | get | -



### Admin Dashboard API

Web API| URL | Type | Description
------------ | ------------- |------------- | -------------
List clients | /api/admin/clients/getClients | get | -
Get services | /api/admin/service/ | get | -
New service | /api/admin/service/new | post | -

