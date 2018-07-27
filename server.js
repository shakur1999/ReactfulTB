const express = require("express");
const expressGraphQL = require("express-graphql");
const app = express();
// const nodemon = require("nodemon");
const schema = require("./schema/schema"); 

app.use("/graphql", expressGraphQL({
    schema,
    graphiql: true,
}));


app.listen(4000, () => {
    console.log("GraphQL/Express server is running...");
});