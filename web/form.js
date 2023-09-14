import { server } from "./server.js"

const form = document.querySelector("#form")
const input = document.querySelector("#URL")
const content = document.querySelector("#content")

form.addEventListener("submit", async (event) => {
  event.preventDefault()

  const videoURL = input.value
  // console.log("URL do vídeo: ", videoURL)
  if (!videoURL.includes("shorts")) {
    return (content.textContent = "Esse vídeo não parece ser um short.")
  }

  const [_, params] = videoURL.split("/shorts/")
  const [videoID] = params.split("?")

  content.textContent = "Obtendo o texto do audio..."

  const transcription = await server.get("/summary/" + videoID)

  content.textContent = "Realizando o resumo..."

  transcription.data.result
})
