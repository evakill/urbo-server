const mongoose = require('mongoose')
const app = require('express')()
const server = require('http').Server(app)
const bodyParser = require('body-parser')
var cors = require('cors')

const port = process.env.PORT || 8000

mongoose.connection.on('connected', () => {
 console.log('Connected to MongoDb!')
})

mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const citiesRouter = require('./routes/cities')
const destinationsRouter = require('./routes/destinations')

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/cities', citiesRouter)
app.use('/dest', destinationsRouter)

server.listen(port, function(){
  console.log('Listening on ' + port)
})
