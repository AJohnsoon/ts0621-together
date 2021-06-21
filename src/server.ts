import express from "express";

const app = express();
app.get('/nlw', (request, response)=>{
    return response.json({
        router: "localhost",
        name: 'nlw-together',
        edtion: '062021' 
    })
})

app.post('/nlw', (request, response)=>{
    return response.json({
        router: "localhost",
        name: 'nlw-together',
        edtion: '062021',
        method: 'POST'
    })
})



app.listen(3000, ()=>{
    console.info('Server is running (Port: 3000)')
})
