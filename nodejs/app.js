const express = require('express');
const cors = require('cors');
var admin = require("firebase-admin");
var serviceAccount = require("./ejemplo-angular-9-firebase-adminsdk-l536t-07e8937600.json");
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');
const app = express();
app.use(bodyParser.json());
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
let db = admin.firestore();
app.use(cors());
app.post('/formulario', (req, res) => {
 configMensaje(req.body);
 res.status(200).send();
})
app.get('/qr', (req,res) => {
    let aux = new Array();
    db.collection('promos').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      aux.push(doc.data());
    });
    res.status(200).send(aux);
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
});
app.listen(3000, () => {
 console.log('Servidor corriendo');
});