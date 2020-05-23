/***************|
|* DEPENDECIES *|
|***************/
/* GENERAL */
// Utilities for working with file and directory paths
const path = require('path');
/* WEB FRAMEWORKS */
// lightweight web framework for node server
const express = require('express');
// Initialize express under app variable
const app = express();
const PORT = process.env.PORT || 3001;
/*****************|
|* SET UP ROUTES *| 
|*****************/

// Setup app to serve static files from React App depending on dev/prod
if (process.env.NODE_ENV === 'production') {
	app.use(express.static("client/build"));

}
/*********************************|
|* LISTEN FOR CONNECTION ON PORT *| 
|*********************************/
app.listen(PORT, () => { console.log(`App listening on PORT: ${PORT}`) });
