const greenBtn = document.getElementById('green-btn')
const redBtn = document.getElementById('red-btn')
const blueBtn = document.getElementById('blue-btn')
const body = document.getElementsByTagName('body')[0]

function setColor(colorName) {
  body.style.backgroundColor = colorName
}

function randomColor() {
  const hue = Math.floor(Math.random() * 360)
  const saturation = Math.floor(Math.random() * 100)
  const lightness = Math.floor(Math.random() * 100)

  let color = `hsl(${hue},${saturation}%,${lightness}%)`

  setColor(color)
}
