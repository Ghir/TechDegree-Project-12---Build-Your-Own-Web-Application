(function(){

  const options = {
    zoom: 3,
  };

  const mapItem = document.getElementById("map-item");
  const map = new google.maps.Map(mapItem, options);

  function getPosition() {

    $.getJSON('/track', data => {

      const latitude = parseFloat(data['iss_position']['latitude']);
      const longitude = parseFloat(data['iss_position']['longitude']);

      $('#latitude').html(latitude + '&deg; N, ');
      $('#longitude').html(longitude + '&deg; E.');

      const position = {lat: latitude, lng: longitude};
      map.setCenter(new google.maps.LatLng(position));

      const marker = new google.maps.Marker({
          position: position,
          map: map,
          icon: 'static/images/marker.png',
        });
    });
  }

  $('button').click( () => {
    $.post('/', $('form').val(), function() {
    })
  })

  getPosition();
  window.setInterval(getPosition, 3000);

})();
