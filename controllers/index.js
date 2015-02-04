'use strict';

/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var contextData = {
    'title': 'Agile Aardvarks',
    'tagline': 'We can do it!'
  };
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};
