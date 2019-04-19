const express = require('express');
const app = express();
const port = process.env.PORT || '3000';

app.get('/', (req, res) => {
    if ( req.query.name != undefined ){
        res.send(`Hello Cloud Bootcamp and especially ${req.query.name}!`);
    }
    else {
        res.send(`Hello Cloud Bootcamp!`);
    }
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
