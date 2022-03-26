const { Server, Socket } = require("socket.io")
const express = require("express")
const app  = express()
const port = process.env.PORT || 9000

app.use(express.static(__dirname + "/public"))

const server = app.listen(port , console.log(port))

const io = new Server(server)

io.on("connection" , socket =>{
    socket.on("new-user" , data =>{
        socket.broadcast.emit("joined-user" , data)
    })
    socket.on("new-message" , data =>{
        socket.broadcast.emit("joined-message" , data)
        console.log(data);
    })
})