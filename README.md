# 2022 New York Yankees Roster Statistics
America's National Pastime has developed over the course of its 200-year history. In today's modern era, baseball relies heavily on advanced metrics and statistics in an effort to analyze players' tendencies and effectiveness. This web application serves as a means to retrieve notable statistics from the 2022 New York Yankees' active 40-man roster.

**Live Website:** https://2022yankees.netlify.app/

![alt tag](/2022Yankees.png)

## How It's Made:

**Tech used:** Node.js, Express, MongoDB, JavaScript, HTML, CSS

This web application is built with the intention of being able to convey notable statistics from the New York Yankees' 40-man roster. 

Player information is derived by an asynchronous fetch request from the user's input. The server-side constructed API handles the user's requests and retrieves appropriate data from the respective MongoDB collection. Player information is then pushed to a corresponding array and sent back as a JSON response. The client-side JavaScript utilizes the JSON response and responds with the player statistics the user had requested, displaying it to the DOM.

## Optimizations
Additional optimizations for this project are currently on-going.

<li>Added .env file to hide connection string to MongoDB.</li>

## Lessons Learned:
The largest lesson with this project is gaining familiarity with Node.js, Express, and MongoDB. By utilizing CRUD methods, my server-side code is simplified and legible for others to read and understand. Taking the user's request and being able to serve the appropriate data opens a multitude of doors. Furthermore, seeing the transition from retrieving data locally to having the API hosted online and receiving and responding fluidly demonstrated some of the "magic" involved with programming.