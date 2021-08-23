var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');

function getParams() {
  // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
  var searchParamsArr = document.location.search.split('&');

  // Get the query and format values
  var query = searchParamsArr[0].split('=').pop();
  var format = searchParamsArr[1].split('=').pop();

  searchApi(query, format);
}

function searchApi(query, format) {

  var apiRequest = "https://www.loc.gov/search/?q=" + query + "&fo=json";

  fetch(apiRequest)
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(searchResult) {

      resultTextEl.textContent = searchResult.search.query;

      console.log(searchResult.results);

      for (i = 0; i < searchResult.results.length; i++) {
        
        var titleEl = searchResult.results.i.title;
        console.log(titleEl);

        // var searchResultEl = document.createElement('div');
        // titleEl = document.createElement('h1');
        // var dateEl = document.createElement('p');
        // var subjectEl = document.createElement('p');
        // var descriptionEl = document.createElement('p');
        // // var linkEl = document.createElement('button');

        // titleEl.textContent = searchResult.results.title;
        // console.log(titleEl);
        // dateEl.textContent = searchResult.results.date;
        // subjectEl.textContent = searchResult.results.subject;
        // descriptionEl.textContent = searchResult.results.description;
        // // linkEl.textContent = "Read More";

        // searchResultEl.appendChild(resultContentEl);
        // titleEl.appendChild(searchResultEl);
        // dateEl.appendChild(searchResultEl);
        // subjectEl.appendChild(searchResultEl);
        // descriptionEl.appendChild(searchResultEl);
        // // linkEl.appendChild(searchResultEl);
      }
    });
}



getParams()