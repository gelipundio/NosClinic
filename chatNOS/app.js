let express = require('express')
let app = express()
let http = require('http').Server(app)
let io = require('socket.io')(http)

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/chat.html')
})

io.on('connection', socket => {
    console.log('alguien se conecto')

    socket.on('send', data =>{
        console.log(data)        
        socket.emit('new_message', data)
        socket.broadcast.emit('new_message',data)
    })
})

http.listen(3000, ()=>{
    console.log('App corriendo')
})
