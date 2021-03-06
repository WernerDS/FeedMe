var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

var feeds = ['Mascus', 'IX', 'Toyota', 'Car Find', 'Barloworld', 'Barloworld Commercial', 'Call a Car', 'Imperial Select', 'Vehicle Traders', 'Auto SLM', 'Hyundai', 'Carshop Hub', 'DealerStockControl', 'Vmg', 'Imperial Auto', 'Auto Fuzion', 'Mascus Exports', 'Dunquip', 'Autoxloo', 'IX Trucks', 'ClearAsset', 'Integra', 'IX New', 'Junk Mail', 'Gumtree', 'OLX', 'Auto Mart', 'Truck and Trailer'];

$('#search-feed .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'feeds',
  source: substringMatcher(feeds)
});



