

var cltoken = ;
var queryURL = "https://api.instagram.com/v1/tags/coffee/media/recent?access_token=" + cltoken + "&callback=callbackFunction";

 $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: queryURL,
      success: function(data) {
        console.log("data:" + data);
        }
      }
    });


