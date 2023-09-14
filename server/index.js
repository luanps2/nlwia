import cors from "cors"
import express, { json } from "express"

import { download } from "./download.js"
import { transcribe } from "./transcribe.js"
import { summarize } from "./summarize.js"

const app = express()
app.use(cors())

app.get("/summary/:id", async (request, response) => {
  await download(request.params.id)
  const result = await transcribe()
  // response.send("ID do vídeo: " + request.params.id)

  response.json({ result })
})

app.listen(3333, () => console.log("Server is running on port 3333"))
