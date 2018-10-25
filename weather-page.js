var url = 'https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=eb2b9ff3e51ab5bbb90d6beba9d41d00';
var map;
var state = null;
var selected = document.querySelectorAll('#btn');
selected.onclick = function select(e){
 state = e.target.textContent;
 console.log(state);
}
function fetchData() {
    fetch(url)
    .then((resp) => resp.json())
    .then(function(resp){
        console.log(resp.coord);
        console.log('works')
    });
}

fetchData();      
function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }

