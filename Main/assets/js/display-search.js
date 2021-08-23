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
        
        var title = searchResult.results[i].title;
        console.log(title);
        var date = searchResult.results[i].date;
        console.log(date);
        var subject = searchResult.results[i].subject;
        console.log(subject);
        var description = searchResult.results[i].description;
        console.log(description);

        var searchResultEl = document.createElement('div');
        var titleEl = document.createElement('h2');
        var dateEl = document.createElement('p');
        var subjectEl = document.createElement('p');
        var descriptionEl = document.createElement('p');
        // // var linkEl = document.createElement('button');

        titleEl.textContent = title;
        console.log(title);
        dateEl.textContent = "Date : " + date;
        subjectEl.textContent = "Subject : " + subject;
        descriptionEl.textContent = "Description : " + description;
        // // linkEl.textContent = "Read More";

        resultContentEl.appendChild(searchResultEl);
        searchResultEl.appendChild(titleEl);
        searchResultEl.appendChild(dateEl);
        searchResultEl.appendChild(subjectEl);
        searchResultEl.appendChild(descriptionEl);
        // // linkEl.appendChild(searchResultEl);

        searchResultEl.setAttribute("style", "border: 2px solid white; margin: 25px; padding: 10px;");
      }
    });
}



getParams()