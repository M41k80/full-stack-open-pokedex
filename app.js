const express = require('express')
const path = require('path')
const app = express()


const PORT = process.env.PORT || 5000


app.use(express.static(path.join(__dirname, 'dist')))


app.get('/health', (req, res) => {
  res.send('OK')
})


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// Inicia el servidor
app.listen(PORT, () => {

  console.log(`Servidor iniciado en el puerto ${PORT}`)
})


