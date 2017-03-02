 var map;

 var my_lat_lng = {lat: 55.706003, lng: 12.540806};

 var kea_lat_lng = {lat: 55.706371, lng: 12.53913};

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: my_lat_lng,
          zoom: 15
        });

        var marker = new google.maps.Marker({
          position: kea_lat_lng,
          map: map,
          title: "NV!"
        })
      }
