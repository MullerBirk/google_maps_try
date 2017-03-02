 var map;

 var my_lat_lng = {lat: 55.706003, lng: 12.540806};

 var kea_lat_lng = {lat: 55.706371, lng: 12.53913};

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: my_lat_lng,
          zoom: 15
        });

        var marker = new google.maps.Marker({
          position: my_lat_lng,
          map: map,
          title: "NV!"
        })

        var marker_kea = new google.maps.Marker({
          position: kea_lat_lng,
          map: map,
          icon: 'marker.png',
          title: "KEA!"
        })



        marker_kea.addListener('click', function klik() {
          map.setZoom(20);
          map.setCenter(marker_kea.getPosition());

          //infowindow
            var infowindow = new google.maps.InfoWindow({
                content: "Dette er min skole",
                position: marker_kea.getPosition()
            });

                //lav klon af template
            var klon_info = document.querySelector("#info_template").content.cloneNode(true);

            console.log("klon lavet");

                //ændre tekst
            klon_info.querySelector("#info_window").textContent = "hej";

            console.log("tekst ændret");

                //append child
            //document.querySelector("body").appendChild(klon_info);

            console.log("append child");


            // info fra html
            //var info_indhold = document.querySelector("#info_window");

            infowindow.setContent(klon_info);

            //vis infowindow
            infowindow.open(map);
        });



      }



