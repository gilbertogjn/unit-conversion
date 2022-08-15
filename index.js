const btnConvert = document.getElementById("btn-convert")
const inputNum = document.getElementById("input-num")
const lengthDesc = document.getElementById("length-desc")
const volumeDesc = document.getElementById("volume-desc")
const massDesc = document.getElementById("mass-desc")

btnConvert.addEventListener("click", function() {
    let value = inputNum.value

    let meterFeet = value * 3.281
    let feetMeter = value / 3.281 
    lengthDesc.textContent = `
        ${value} meters = ${meterFeet.toFixed(2)} feet | 
        ${value} feet = ${feetMeter.toFixed(2)} meters
    `

    let literGallons = value * 0.264
    let gallonsLiter = value / 0.264 
    volumeDesc.textContent = `
        ${value} liters = ${literGallons.toFixed(2)} feet | 
        ${value} gallons = ${gallonsLiter.toFixed(2)} meters
    `

    let kilogramsPounds = value * 2.204
    let poundsKilograms = value / 2.204 
    massDesc.textContent = `
        ${value} kilograms = ${kilogramsPounds.toFixed(2)} feet | 
        ${value} pounds = ${poundsKilograms.toFixed(2)} meters
    `
})