$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AutoCorrectSearchTerms.feature");
formatter.feature({
  "id": "automatically-correct-mistyped-search-terms",
  "tags": [
    {
      "name": "@autocorrect",
      "line": 1
    }
  ],
  "description": "",
  "name": "Automatically correct mistyped search terms",
  "keyword": "Feature",
  "line": 2
});
formatter.scenario({
  "id": "automatically-correct-mistyped-search-terms;enter-search-term-and-view-related-images",
  "description": "",
  "name": "Enter search term and view related images",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the website \u0027http://www.google.com\u0027",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I submit the search term \u0027autoqa.org\u0027",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "accept the first search result",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I should be on the page \u0027http://autoqa.org/\u0027",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.google.com",
      "offset": 21
    }
  ],
  "location": "SearchStepDefs.I_am_on_the_website(String)"
});
formatter.result({
  "duration": 4242468106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "autoqa.org",
      "offset": 26
    }
  ],
  "location": "SearchStepDefs.I_submit_the_search_term(String)"
});
formatter.result({
  "duration": 851769443,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefs.accept_the_first_search_result()"
});
formatter.result({
  "duration": 3265691889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://autoqa.org/",
      "offset": 25
    }
  ],
  "location": "SearchStepDefs.I_should_be_on_the_page(String)"
});
formatter.result({
  "duration": 29396020,
  "status": "passed"
});
formatter.write("Current Page URL is http://autoqa.org/");
formatter.embedding("image/png", "8a5a2d5a-ccb6-4890-8b0e-595f86c12224.png");
});$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ViewSearchResults.feature");
formatter.feature({
  "id": "enter-a-search-term-into-google-and-view-results",
  "tags": [
    {
      "name": "@search",
      "line": 1
    }
  ],
  "description": "",
  "name": "Enter a search term into Google and view results",
  "keyword": "Feature",
  "line": 2
});
formatter.scenario({
  "id": "enter-a-search-term-into-google-and-view-results;submit-search-term",
  "description": "",
  "name": "Submit search term",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the website \u0027http://www.google.com\u0027",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I submit the search term \u0027autoqa.org\u0027",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "accept the first search result",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I should be on the page \u0027http://autoqa.org/\u0027",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.google.com",
      "offset": 21
    }
  ],
  "location": "SearchStepDefs.I_am_on_the_website(String)"
});
formatter.result({
  "duration": 4122977141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "autoqa.org",
      "offset": 26
    }
  ],
  "location": "SearchStepDefs.I_submit_the_search_term(String)"
});
formatter.result({
  "duration": 897965769,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefs.accept_the_first_search_result()"
});
formatter.result({
  "duration": 7576620710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://autoqa.org/",
      "offset": 25
    }
  ],
  "location": "SearchStepDefs.I_should_be_on_the_page(String)"
});
formatter.result({
  "duration": 42958929,
  "status": "passed"
});
formatter.write("Current Page URL is http://autoqa.org/");
formatter.embedding("image/png", "78826b05-078e-4a53-858b-9427eeeb85e1.png");
});