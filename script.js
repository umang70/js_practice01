const button=document.getElementById("get-location-button");
function gotlocation(position){
    console.log(position)

}
function failed(){
    console.log("Failed to get location");

}


button.addEventListener("click", async function(){
    const location=navigator.geolocation.getCurrentPosition(gotlocation ,failed );


})