var script = document.createElement('script');
script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAezdKjLeqB-080TI8RXvXViHZ9PV3b3xo&callback=initMap&libraries=&v=weekly"
script.defer = true;

function initMap() {
    var bna = {lat: -8.8105164, lng: 13.198614};

    var map = new google.maps.Map(document.getElementById("map"),
        {zoom: 12, 
        center: bna
        });
    
    var marker = new google.maps.Marker({position: bna, map: map});   
}

document.head.appendChild(script);