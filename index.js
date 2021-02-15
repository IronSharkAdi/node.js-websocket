const express = require('express')
const webSocket = require('ws')
const app = express()

const server = require('http').createServer(app)

app.get('/' , (req , res)=>{
    res.send("Hello World")
})

const wss = new webSocket.Server({server : server})

var port = 3000

wss.on('connection' , function connection(ws){
    console.log("A Client connected")
    ws.send("Welcome new client")

    ws.on('message' , function incoming(message){
        console.log(`client sent ${message}`)
        ws.send('Got your msg')
    })
})

app.listen(port , () => console.log(`server started at http://localhost:${port}/`))