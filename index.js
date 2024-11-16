const jsonServer = require('json-server')

const EDServer = jsonServer.create()
const middleware = jsonServer.defaults()
const PORT = 3000
const route = jsonServer.router('db.json')

EDServer.use(middleware)
EDServer.use(route)

EDServer.listen(PORT,()=>{
    console.log(`MPServer started at PORT: ${PORT} and waiting for client request`);
    
})