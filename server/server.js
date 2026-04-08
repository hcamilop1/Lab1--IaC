const express = require('express');
const path = require('path');

const app1 = express();
const app2 = express();

app1.use(express.static(path.join(__dirname, '../web01')));
app1.listen(4000, () => {
    console.log('Web01 en http://localhost:4000');
});

app2.use(express.static(path.join(__dirname, '../web02')));
app2.listen(4001, () => {
    console.log('Web02 en http://localhost:4001');
});
