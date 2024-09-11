let display = document.getElementById('display')
function deleteValue() {
  let newValue = display.value.substring(0, display.value.length - 1)
  console.log(display.value)

  display.value = newValue
}
function evaluate() {
  display.value += ` = ${eval(display.value)}`
}
