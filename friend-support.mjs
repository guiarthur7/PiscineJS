import http from 'node:http'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const PORT = 5000
const GUESTS_DIR = './guests'

const server = http.createServer(async (req, res) => {
  try {
    const guestName = (req.url || '').slice(1)
    res.setHeader('Content-Type', 'application/json')

    if (!guestName) {
      res.statusCode = 404
      res.end(JSON.stringify({ error: 'guest not found' }))
      return
    }

    const filePath = join(GUESTS_DIR, `${guestName}.json`)

    try {
      const data = await readFile(filePath, 'utf8')
      res.statusCode = 200
      res.end(data)
    } catch (err) {
      if (err && err.code === 'ENOENT') {
        res.statusCode = 404
        res.end(JSON.stringify({ error: 'guest not found' }))
      } else {
        res.statusCode = 500
        res.end(JSON.stringify({ error: 'server failed' }))
      }
    }
  } catch (err) {
    res.statusCode = 500
    res.end(JSON.stringify({ error: 'server failed' }))
  }
})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default server