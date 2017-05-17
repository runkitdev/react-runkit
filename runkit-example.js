const React = require('react')
const ReactDOM = require('react-dom')
const Embed = require('react-runkit')

ReactDOM.renderToString(<Embed source={ `console.log('Hello, world'!)` } />)
