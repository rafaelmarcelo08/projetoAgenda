require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session'); //salva um cookie no pc do cliente em memoria
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const helmet = require('helmet'); // deixa a aplicacao mais segura
const csurf = require('csurf');

const routes = require('./routes');
const {
    middleGlobal,
    checkCsrfError,
    csrfMiddleWare
} = require('./src/middlewares/middlewares');

mongoose.connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

const sessionOptions = session({
    secret: 'fasdfasdf',
    store: MongoStore.create({
        mongoUrl: process.env.CONNECTION_STRING
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.use(helmet());
app.use(csurf());

app.use(checkCsrfError);
app.use(middleGlobal);
app.use(csrfMiddleWare);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor execultado na porta 3000');
        console.log('Acessar http://localhost:3000');
    });
});