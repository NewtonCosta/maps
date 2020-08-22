// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAezdKjLeqB-080TI8RXvXViHZ9PV3b3xo&callback=initMap&libraries=&v=weekly"
script.defer = true;

document.head.appendChild(script);

