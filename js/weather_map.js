var weatherData;
var dateTimesStrings = [];
var sevenDays = [];
var todayDate
var today
$.ajax(" https://api.openweathermap.org/data/2.5/onecall?lat=31.0835&lon=-97.6597&exclude=current,hourly,minutely&units=imperial&appid=" + OWM_TOKEN).done(function (resp) {
  console.log(sevenDays)
  weatherData = resp
  console.log(resp)
  console.log(resp.daily[0])
  console.log(resp.daily[0].dt * 1000)
  today = resp.daily[0]
  console.log(today)
  todayDate = new Date(today.dt * 1000)
  console.log(todayDate)

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
    return resultObject;

  }

  function tempHTML(day) {
    return weatherData.daily[day].temp
  }

  var day0Day = dayTimeHTML(0)

  $("#day0Date").text(
    day0Day.day + " " + day0Day.year + "-" + day0Day.month + "-" + day0Day.date
  );

  // function tempHTML(day) {
  //   return weatherData.daily[day].temp
  // } I moved it up but here incase I forget what it's for.

  var day0Temp = tempHTML(0)

  $("#day0Temp").text(
    "Min: " + day0Temp.min + " Max: " + day0Temp.max
  );

  $("#day0Humid").text(
    "Humidity: " + weatherData.daily[0].humidity
  );

  $("#day0Rain").text(
    "Chance of Rain: " + weatherData.daily[0].pop * 100 + "%"
  );

  $("#day0Desc").text(
    weatherData.daily[0].weather[0].description
  );


  function loadData() {
    $("#days").html("");

    weatherData.daily.forEach(function (day, index) {
      // console.log(day,index)

      $("#days").append(
        "<div class=\"card\" style=\"width: 15rem;\">\n" +
        "    <img src=\"img/140-place-holder.png\" class=\"card-img-top\" alt=\"...\">\n" +
        "    <div class=\"card-body p-0\">\n" +
        "      <h5 class=\"card-title pl-2\">" + dayTimeHTML(index).day + "</h5>\n" +
        "      <ul class=\"list-group m-0 p-0\">\n" +
        "        <li class=\"list-group-item m-0 p-0\">day0Date</li>\n" +
        "        <li class=\"list-group-item m-0 p-0\">day0Rain</li>\n" +
        "        <li class=\"list-group-item m-0 p-0\">day0Temp</li>\n" +
        "        <li class=\"list-group-item m-0 p-0\">day0Desc</li>\n" +
        "        <li class=\"list-group-item m-0 p-0\">day0Humid</li>\n" +
        "      </ul>\n" +
        "      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n" +
        "    </div>\n" +
        "  </div>"
      )

    });


  }

  loadData();
});


mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN
var map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/dark-v10', // style URL
  center: [-97.6709, 31.0689], // starting position [lng, lat]
  zoom: 9 // starting zoom
});


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

$("#btn").click(function () {
  var userInput = $("#input").val();
  geocode(userInput, MAPBOX_ACCESS_TOKEN).then(function (info) {
    console.log(info);
    var newCenter = {
      lng: info[0],
      lat: info[1]
    };
    marker.setLngLat(newCenter);
    // popup.setHTML('<h3 class="font">' + userInput + '</h3>');
    map.flyTo({center: newCenter});
  });
});

$("#geoSearch").click(function () {
  var search = $("#inputGeoSearch").val();
  console.log(search);
  geocode(search, MAPBOX_ACCESS_TOKEN).then(function (info) {
    console.log(info);
    var geoCenter = {
      lng: info[0],
      lat: info[1]
    };

    map.flyTo({center: geoCenter});

    var markerNew = new mapboxgl.Marker({
      draggable: false,
      color: "blue",

    })
      .setLngLat(geoCenter)
      .addTo(map);


    // removeMarkerArray.push(markerNew);

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










