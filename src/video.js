const React = require('react');
const ReactDom = require('react-dom');
const ReactPlayer = require('react-player');

const ph = 'Video should be here';
const element = <h1>{ph}</h1>;

const root = ReactDOM.createRoot(
  document.getElementById('video')
);

root.render(element)
