const express = require ('express')
const path = require ('path')
const app = express ()
const port = 3030

app.use(express.static(path.resolve(__dirname,'public')))

app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','home.html')))

app.listen(port,() => console.log(`El servidor se a levantado con exito en http://localhost:${port}`))
/* Crear una rama con git branch veo las ramas existente
con git checkout -b 'nombre de la rama' creo y cambio de rama */