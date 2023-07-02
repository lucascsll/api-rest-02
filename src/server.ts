import fastify from "fastify"

const app = fastify()

app.get('/hello',()=>{
    return 'Hello Word2'
})

app.listen({
    port:3333
}).then(()=>{
    console.log('HTTP SERVER RUNNING')
})
