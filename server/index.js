//vanilla node server
//const: never change the value of const
//let: can change the value of let, but scope is limited to the block
//var: can change the value of var, scope is bigger than let
const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

console.log('1: Trying to start server...');

app.listen(PORT, () => {
    console.log(`2: Server is running at http://localhost:${PORT}`);
});

console.log('3: End of file, waiting for requests');