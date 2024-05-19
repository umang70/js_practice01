const btn=document.getElementById("button")
const input=document.getElementById("city-input")
const cityName=document.getElementById("city-name")
const cityTemp=document.getElementById("city-temp")
const cityTime=document.getElementById("city-time")
 async function getData(cityname){
      const promise=await fetch(`https://api.weatherapi.com/v1/current.json?key=dcfef66a77664348886144007240503&q=${cityname}&aqi=yes`)
      return await promise.json()

}





btn.addEventListener("click",  async function(){
   const value=input.value
  const result=await getData(value)
  cityName.innerText=`${result.location.name}`
  cityTemp.innerText=`${result.current.temp_c}`
  cityTime.innerText=`${result.location.localtime}`
  
})
//https://api.weatherapi.com/v1/current.json?key=dcfef66a77664348886144007240503&q=London&aqi=yes