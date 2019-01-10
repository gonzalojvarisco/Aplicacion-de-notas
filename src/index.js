//Archivo principal de toda nuestra aplicacion. Sirve para arrancar nuestro servidor
const express= require('express');
const path= require('path');
const exphbs= require('express-handlebars');
const methodOverride= require('method-override');
const session = require('express-session');
const flash= require('connect-flash');

//initializations
const app= express();
require('./database');

//settings.
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname:'.hbs'
}) ); //configuracion de handlebars

app.set('view engine', '.hbs'); //lo seteo. configuro el motor de las vistas

//middleware.
app.use(express.urlencoded({extended: false})); //metodo que permitira que cuando un usuario me quiera enviar datos como un formulario pueda entenderlo. Extended false es para evitar que me envie datos no necesarios como fotos
app.use(methodOverride('_method')); //Este metodo sirve para que los formularios nos puedan enviar otros tipos de metodos, no solo GET y POST, sinjo tambien PUT y DELETE. Para eso se envia un input oculto '_method'
app.use(session({
    secret:'ClaveSecreta',
    resave: true,
    saveUninitialized: true
})); //config basica que nos permitira luego autenticar y almacenar usuario temporalmente
app.use(flash());

//global variables

//routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

//static files
app.use(express.static(path.join(__dirname,'public')));

//server is listenning
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});
