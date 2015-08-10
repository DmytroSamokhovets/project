(function () {
  let React = require('react/addons');
  let injectTapEventPlugin = require('react-tap-event-plugin');
  let Main = require('./components/main.jsx'); // Our custom react component

  window.React = React;

  injectTapEventPlugin();

  React.render(<Main />, document.body);

})();
