var randomurl = "https://en.wikipedia.org/wiki/Special:Random";
var searchvariable, searchurl;

function getjson() {
  searchvariable = $('input').val()
//  console.log(searchvariable);
  searchurl =
    "https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&srsearch=" + searchvariable + "&format=json&utf8=";
  
  $.getJSON(searchurl, function(a) {
    // iterate over each element in the array
 //   console.log(searchurl)
 //   console.log(a);
    $("#results").html("");
    for (var i=0; i < a.query.search.length; i++) {
      //console.log(a.query.search[i].title);
      //console.log(a.query.search[i].snippet);
      $("#results").append("<a target=\"blank\" href=\"http://en.wikipedia.org/?curid=" + a.query.search[i].pageid + "\" class=\"list-group-item list-group-item-action\"><kbd style=\"background-color:#6c757d;t\">" + a.query.search[i].title + "</kbd> " + "<span class=\"badge badge-primary badge-pill\">" + a.query.search[i].wordcount + "</span> " + a.query.search[i].snippet + "</a>");
    }
  });
}

$(document).ready(function() {
});


$("#myForm").submit(function( event ) {
  getjson();
  event.preventDefault();
});