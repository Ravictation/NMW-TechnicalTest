import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import mongoose from 'mongoose'
import router from './router'

const app = express();

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, ()=> {
    console.log(`server running on port 8080`)
})

const DB_URL = 'mongodb+srv://ravictation:baledodokan@cluster0.ffow0kh.mongodb.net/?retryWrites=true&w=majority'

mongoose.Promise = Promise;
mongoose.connect(DB_URL)
mongoose.connection.on('error',(error: Error) => console.log(error))

app.use('/', router())