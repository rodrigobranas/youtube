const express = require('express');
const app = express();

app.use('/', require('./route/postsRoute'));

app.listen(3000);
