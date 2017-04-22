
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 13,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(-0.8480556,-78.9141384),

        //zoomControl: boolean,
        mapTypeControl: false,
        scrollwheel: false,
        //scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,

        mapTypeId: 'hybrid',
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-0.8480556,-78.9141384),
        map: map,
        title: 'Snazzy!'
    });
}
