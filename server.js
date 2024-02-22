//Service WEB API REST MVC
//
//Auteur : Mira Paquin
//(c)2024 Projet Intégration Terminal
//
//Informations
//  	Installation des modules suivants:
//    npm install express mongoose cors --save
//    npm install swagger-ui-express
//    npm install swagger-jsdoc
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Swagger part (documentation)
const swaggerJSDoc=require('swagger-jsdoc');
const swaggerUI=require('swagger-ui-express');
const swaggerOptions={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Form API v(1.0)',
            version:'1.0.0',
            description:"Forms Api",
            contact:{
                name:'Mira Paquin',
                url:'https://cegeprdl.ca',
                email:'2065674@cegeprdl.ca'
            },
            servers:["http://localhost:3001"]
        }

    },
    apis:["./app/routes/*.js"],
    tags: [
        {
            "name": "User",
            "description": "Endpoints"
        }
    ],

}
const swaggerDocs=swaggerJSDoc(swaggerOptions);
app.use('/myApiDocs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
//Route utiliser dans le projet
var usersRoutes = require('./app/routes/users.routes.js'); 
var questionsRoutes = require('./app/routes/questions.routes.js');
var formsRoutes = require('./app/routes/forms.routes.js');

app.use("/api/users", usersRoutes);
app.use("/api/questions", questionsRoutes);
app.use("/api/forms", formsRoutes);

//Route par défaut
app.get('/',  (req, res) => {
    res.status(200).send("Bienvenue dans mon App! 🙌");
  });

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  console.log("Documentation: localhost:"+PORT+"/myApiDocs");
});

