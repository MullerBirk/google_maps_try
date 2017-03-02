 var map;


 var my_lat_lng = {lat: 55.706003, lng: 12.540806};



      function initMap() {

        map = new google.maps.Map(document.getElementById('map'), {
          center: my_lat_lng,
          zoom: 15
        });

        $.getJSON('data.json', all_places);

        }



 //var kea_lat_lng = {lat: 55.706371, lng: 12.53913};





    function all_places(data){
        console.log(data);
        data.forEach(make_markers);
    }

    function make_markers(info){
        console.log(info.koordinater);

        var placering = info.koordinater;


        var marker = new google.maps.Marker({
          position: placering,
          map: map,
          icon: 'marker.png',
          title: "KEA!"
        });



        marker.addListener('click', function klik() {
          map.setZoom(20);
          map.setCenter(marker.getPosition());


          //infowindow
            var infowindow = new google.maps.InfoWindow({
                content: "Dette er min skole",
                position: marker.getPosition()
            });

            var klon_info = document.querySelector("#info_template").content.cloneNode(true);

            klon_info.querySelector(".data_navn").textContent = info.navn;
            klon_info.querySelector(".data_beskrivelse").textContent = info.beskrivelse;
            klon_info.querySelector(".data_img").src = "img/" + info.img + ".jpg";



            infowindow.setContent(klon_info);

            infowindow.open(map, marker);

        });
//
//                //lav klon af template
//
//
//            console.log("klon lavet");
//
//                //ændre tekst
//
//
//            console.log("tekst ændret");
//
//                //append child
//            //document.querySelector("body").appendChild(klon_info);
//
//            console.log("append child");
//
//
//            // info fra html
//            //
//
//            //vis infowindow
//
//        });
//


      }



