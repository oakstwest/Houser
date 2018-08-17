const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()
const controller = require('./Houser_controller');


const app = express();
massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);

});

app.post('/api/listing', Houser_controller.create);
app.get('/api/listing', Houser_controller.getAll);
app.get('/api/listing/:id', Houser_controller.getOne);
app.put('/api/listing/:id', Houser_controller.update);
app.delete('/api/listing/:id', Houser_controller.delete);








app.use(bodyParser.json());
app.use(cors());


const port = process.env.PORT || 3006
app.listen(port, () => { console.log(`Server listening on port ${port}`) });
