
const form = document.getElementById('form')
const inputValorBrl = document.getElementById('valor')
const cotacao = document.getElementById("container-convertido")
const url = "https://open.er-api.com/v6/latest/USD"

form.addEventListener("submit", async (e)=>{
  e.preventDefault()

  const resp = await fetch(url)  
  const obj = await resp.json()
  const { BRL } = obj.rates

  const valorContado = inputValorBrl.value / BRL

  cotacao.innerHTML = `
       <span>Valor USD:</span>
      <span> $ ${valorContado.toFixed(2)} </span>  `

})