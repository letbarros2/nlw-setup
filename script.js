//  <form id="form-habitos"></form>
const form = document.querySelector("#form-habits")
// colocar uma variavel no formulario
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")
button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  // const today = "01/01"
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert("Dia Já incluso ❌")
    return
  }
  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}
// criando um novo objeto
// const data = {
//   run: ["01-01", "01-02", "01-03"],
//   takePills: ["01-03", "01-04", "01-07"],
//   journal: ["01-04", "01-06", "01-07"],
// }

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
