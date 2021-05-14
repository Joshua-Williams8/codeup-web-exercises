$(document).ready(function () {
  var weatherData;
  var dateTimesStrings = [];
// var todayDate
// var today
  var removeMarkerArray = [];
  var marker;

  mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN
  var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    center: [-97.6709, 31.0689], // starting position [lng, lat]
    zoom: 9 // starting zoom

  }).addControl(new mapboxgl.NavigationControl());


  function weatherAjax(lng, lat) {

    $.ajax(" https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lng + "&exclude=current,hourly,minutely&units=imperial&appid=" + OWM_TOKEN).done(function (resp) {
      resp.daily.splice(5, 3);
      // console.log(resp)
      weatherData = resp
      // today = resp.daily[0]

      // todayDate = new Date(today.dt * 1000)
      // console.log(todayDate)

      //  dt * 1000? but uh oof.

      function dayTimeHTML(day) {
        var result = new Date(weatherData.daily[day].dt * 1000).toString();
        // console.log(result);
        var resultArray = result.split(" ");
        // console.log(resultArray);
        var resultObject = {
          day: resultArray[0],
          month: resultArray[1],
          date: resultArray[2],
          year: resultArray[3],
        }
        if (day === 0) {
          resultObject.day = resultObject.day + " (Today)"
        }
        return resultObject;
      }

      function dateHTML(day) {
        var result = new Date(weatherData.daily[day].dt * 1000).toString();
        // console.log(result);
        var resultArray = result.split(" ");
        // console.log(resultArray);
        var resultObject = {
          day: resultArray[0],
          month: resultArray[1],
          date: resultArray[2],
          year: resultArray[3],
        }

        return resultObject;
      }


      function tempHTML(day) {
        return weatherData.daily[day].temp
      }

      function weatherHTML(day) {
        return weatherData.daily[day].weather[0]
      }

      function rainHTML(day) {
        var stuff = weatherData.daily[day].pop.toFixed(2) * 100;
        stuff = stuff.toFixed(0);
        return stuff + "%";
      }

      function humidHTML(day) {
        return weatherData.daily[day].humidity + "%";
      }


      function capitalizeFirst(string) {

        var stringArray = string.toLowerCase().split(" ");
        var resultArray = [];
        stringArray.forEach(function (element, index) {
          var elementArray = element.split("");
          // console.log(elementArray)
          var firstLetter = elementArray[0].toUpperCase();
          // console.log(firstLetter)
          elementArray.splice(0, 1, firstLetter);
          // console.log(elementArray)
          element = elementArray.join("")
          resultArray.push(element);
        });
        return resultArray.join(" ");
      }


      function loadData() {
        $("#days").html("");

        weatherData.daily.forEach(function (day, index) {
          // console.log(day,index)

          $("#days").append(
            "<div class=\"card weatherCard text-white bg-dark mx-2 grow animated fadeInDown\">\n" +
            "    <img class='icons' src=\"http://openweathermap.org/img/wn/" + weatherData.daily[index].weather[0].icon + "@2x.png\n\" class=\"card-img-top\" alt=\"...\">\n" +
            "    <div class=\"card-body cardInfo p-0\">\n" +
            "      <h4 class=\"card-title pl-2\">" + dayTimeHTML(index).day + "</h4>\n" +
            "      <ul class=\"list-group cardList m-0 py-0\">\n" +
            "        <li class=\"list-group-item m-0 py-0\">" + dateHTML(index).year + "-" + dateHTML(index).month + "-" + dateHTML(index).date + "</li>\n" +

            "        <li class=\"list-group-item m-0 py-0\">" + "<i class=\"fas fa-temperature-high\"></i>" + tempHTML(index).max + " - " + " <i class=\"fas fa-temperature-low\"></i>" + tempHTML(index).min + "</li>\n" +
            "        <li class=\"list-group-item m-0 py-0\">" + capitalizeFirst(weatherHTML(index).description) + "</li>\n" +
            "        <li class=\"list-group-item m-0 py-0\">" + "Chance of Rain: " + rainHTML(index) + "</li>\n" +
            "        <li class=\"list-group-item m-0 py-0\">" + "Humidity: " + humidHTML(index) + "</li>\n" +
            "      </ul>\n" +
            // "      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n" +
            "    </div>\n" +
            "  </div>"
          )

        });


      }

      loadData();
      var newCenter = {
        lng: lng,
        lat: lat
      };

      if (marker === undefined) {
      } else {
        marker.remove();
      }
      $("#markerLocation").html("");

      var testCode;
      // console.log(reverseGeocode(newCenter,MAPBOX_ACCESS_TOKEN))
      // reverseGeocode(newCenter,MAPBOX_ACCESS_TOKEN)
      reverseGeocode(newCenter, MAPBOX_ACCESS_TOKEN).then(function (info) {

        testCode = info.toString();
        var resultArray = testCode.split(", ");
        resultArray.shift();
        testCode = resultArray.join(", ");
        // console.log(testCode);

        // var markerInfo = markerNewLocation(newCenter)
        $("#markerLocation").html(
          testCode
        );

      });


      marker = new mapboxgl.Marker({
        draggable: true,
        color: "limegreen",


      })
        .setLngLat(newCenter)
        .addTo(map);

      marker.on("dragend", function () {
        // console.log(marker.getLngLat());
        var geoCenter = {
          lng: marker.getLngLat().lng,
          lat: marker.getLngLat().lat
        }
        map.flyTo({center: geoCenter, zoom: 9,});
        weatherAjax(marker.getLngLat().lng, marker.getLngLat().lat);
      });

    });
  }

  var defaultCenter =
    [-97.6709, 31.0689]
  ;
  weatherAjax(defaultCenter[0], defaultCenter[1]);


  removeMarkerArray.push(marker);


  $("#markers").click(function () {
    // resLocMarkers.remove();
    removeMarkerArray.forEach(function (markerx, index) {
      markerx.remove();
    });
  });

  $("#inputMapStyle").change(function () {
    var selected = $(this).val();
    // console.log(selected)
    map.setStyle(selected)
  });

  // $("#btn").click(function () {
  //   var userInput = $("#input").val();
  //   geocode(userInput, MAPBOX_ACCESS_TOKEN).then(function (info) {
  //     console.log(info);
  //     var newCenter = {
  //       lng: info[0],
  //       lat: info[1]
  //     };
  //     marker.setLngLat(newCenter);
  //     // popup.setHTML('<h3 class="font">' + userInput + '</h3>');
  //     map.flyTo({center: newCenter,zoom: 9,});
  //   });
  // });

  $("#geoSearch").click(function () {
    var search = $("#inputGeoSearch").val();
    // console.log(search);
    geocode(search, MAPBOX_ACCESS_TOKEN).then(function (info) {
      // console.log(info);
      var geoCenter = {
        lng: info[0],
        lat: info[1]
      };

      map.flyTo({center: geoCenter, zoom: 9,});

      // var markerNew = new mapboxgl.Marker({
      //   draggable: false,
      //   color: "blue",
      //
      // })
      //   .setLngLat(geoCenter)
      //   .addTo(map);


      // removeMarkerArray.push(markerNew);
      console.log(geoCenter)
      weatherAjax(geoCenter.lng, geoCenter.lat)
    });
  });


// var removeMarkerArray = [];
//
// resLoc.forEach(function (res, index) {
//   var testMark = new mapboxgl.Marker({
//     draggable: false,
//     color: res.color,
//
//   })
//     .setLngLat([res.lat, res.lng])
//     .addTo(map);
//   removeMarkerArray.push(testMark);
//
//   var testPopup = new mapboxgl.Popup()
//     .setHTML("<div class=\"card\" >\n" +
//       res.picture +
//       "  <div class=\"card-body\">\n" +
//       "    <h5 class=\"card-title\">" +res.name+ "</h5>\n" +
//       "    <p class=\"card-text\">" + res.info + "</p>\n" +
//       "    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n" +
//       "  </div>\n" +
//       "</div>")
//     .addTo(map);
//
//   testMark.setPopup(testPopup).togglePopup();
// });
});









