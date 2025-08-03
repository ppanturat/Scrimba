/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const convertLength = document.getElementById("convert-length")
const convertVolume = document.getElementById("convert-volume")
const convertMass = document.getElementById("convert-mass")

convertBtn.addEventListener("click", function() {
    const input = inputEl.value
    const [feet, meter] = convertMeterFeet(input)
    const [gallon, liter] = convertLiterGallon(input)
    const [pound, kilogram] = convertKilogramPound(input)
    
    convertLength.textContent = `${input} meters = ${feet} feet | ${input} feet = ${meter} meters`
    convertVolume.textContent = `${input} liters = ${gallon} gallons | ${input} gallons = ${liter} liters`
    convertMass.textContent = `${input} kilos = ${pound} pounds | ${input} pounds = ${kilogram} kilos`
})

function convertMeterFeet(n) {
    const feet = Number(n) * 3.281
    const meter = Number(n) / 3.281
    return [feet.toFixed(3), meter.toFixed(3)]
}

function convertLiterGallon(n) {
    const gallon = Number(n) * 0.264
    const liter = Number(n) / 0.264
    return [gallon.toFixed(3), liter.toFixed(3)]
}

function convertKilogramPound(n) {
    const pound = Number(n) * 2.204
    const kilo = Number(n) / 2.204
    return [pound.toFixed(3), kilo.toFixed(3)]
}