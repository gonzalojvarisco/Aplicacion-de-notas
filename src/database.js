//sirve para tener una coneccion a una base de datos y sera utilizado por el 
//archivo principal index.js
//Lo primero que tengo que hacer es con el comando mongod iniciar mongodb por consola
const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/notes-db-app', {
    useCreateIndex: true,
    useNewUrlParser:true,
    useFindAndModify:false
})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));