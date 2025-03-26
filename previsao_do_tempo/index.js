const axios = require('axios');

const protocol = 'https'
const baseUrl = 'api.openweathermap.org/data/2.5/forecast'
const appId = 'd054dca8420da46a7296831108bd7373'
const q = 'Itu'
const units = 'metric'
const lang = 'pt_br'
const cnt = 2

const url = `${protocol}://${baseUrl}?appid=${appId}&q=${q}&units=${units}&lang=${lang}&cnt=${cnt}`;


axios.get(url)
    .then(function(res) {
        console.log(res)
        console.log('++++++++++++++++++++')
        return res.data
    })
.then((res) => {
    console.log(res)
    console.log('++++++++++++++++++++')
    return res
})
.then(res => {
    console.log(`cnt: ${res.cnt}`)
    console.log('++++++++++++++++++++')
    return res
})
.then(res => {
    console.log(`Temperatura máxima do primeiro dia: ${res.list[0].main.temp_max}`)
    return res
})
.catch((error) => {console.error('Error:', error)})
