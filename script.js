
const link = document.querySelector('#link')
const copyBtn = document.querySelector('#copy')

copyBtn.addEventListener('click', ()=>{
  alert("le lien va être copié")
  navigator.clipboard.writeText(link.textContent)
  alert("lien copié")
})