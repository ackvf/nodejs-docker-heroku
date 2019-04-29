'use strict'

import express from 'express'

// internal imports
import { printEnv } from './utils'

// Constants
const PORT = process.env.PORT || 8080
const HOST = '0.0.0.0'

// App
const app = express()
app.get('/', (req, res) => {
  res.send(`
    Hello Babel!\n
    <br><br>\n
    <h3>Follows process.env</h3>\n
      <pre>${printEnv()}</pre>
  `)
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
