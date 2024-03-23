const {createServer} = require('http')
const {Server} = require('socket.io')

const httpServer = createServer()
const io = new Server(httpServer,{
    cors : {
        origin:"*",
        methods:["GET","POST"]
    }
})
let  number_connected = 0
io.on('connection',async (socket)=> {
    number_connected ++
    console.log(`[${number_connected}] Connected : ${socket.id}` )
    socket.on('sendmessage',(data)=>{
        console.log(`NEW MESSAGE : ${data}`)
        message = `MES${data}`
        console.log(message)
        io.emit(message,'new message')
    })
})

httpServer.listen(3001,()=> {
    console.log('listen to port 3001')
})