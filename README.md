# react-runkit

RunKit Embed Component.

## Install

Install the package:

```sh
$ npm i -S react-runkit
```

Add the RunKit embed library to your page:

```html
<head>
    ...
    <script src='https://embed.runkit.com'></script>
    ...
</head>
```

## Usage

```js
const React = require('react')
const Embed = require('react-runkit')

const helloSource = `console.log('Hello, world!')`

module.exports = class HelloEmbed extends React.Component {
    render() {
        return <Embed source={ helloSource } />
    }
}
```

![](http://i.imgur.com/7mH8e6o.png)

Don't forget to check out the [RunKit embed docs](https://runkit.com/docs/embed#options).

## Props

### source : string

Specify the source code that the notebook will use.

```js
<Embed source={ `console.log('Hello, world!')` } />
```

### readOnly : boolean

If `true`, the user will not be able to edit or run the embed.

```js
<Embed source={ `console.log('Hello, world!')` } readOnly={ true } />
```

### mode : string

If `'endpoint'`, the notebook will be run as an [endpoint](https://runkit.com/docs/endpoint) and a link to the served page will be shown.

```js
<Embed source={ `exports.endpoint = (req, res) => res.end('Hello, world!')` } mode='endpoint' />
```

### nodeVersion : string

Request a version or semver range for the node engine.

```js
<Embed source={ `console.log('Hello, world!')` nodeVersion='7' } />
```

### env : [string]

Provide a list of environment variables accessible in the notebook through `process.env`.

```js
<Embed source={ 'console.log(`Hello, ${ process.env.FIRSTNAME } ${ process.env.LASTNAME }!`' } env={ ['FIRSTNAME=Haskell', 'LASTNAME=Curry'] } />
```

### title : string

Provide a title for the notebook when opened on RunKit.

```js
<Embed source={ `console.log('Hello, world!')` } title='Hello World' />
```

### minHeight : string

Provide a minimum height for the embed (`'130px'` by default).

```js
<Embed source={ `console.log('Hello, world!')` } minHeight='200px' />
```

### packageTimestamp : number

Specify the Unix time in milliseconds at which packages should resolved. Packages published after the date will be ignored.

```js
<Embed source={ `require('babel-core')` } packageTimestamp={ 1468195200000 } />
```

### preamble : string

Specify source code that is run before the main source. This code will not be shown in the embed.

```js
<Embed source={ `console.log(_.map(_.add(1), [1, 2, 3]))` } preamble={ `const _ = require('lodash/fp')` } />
```

### onLoad : function

Provide a callback that is run when the embed is loaded.

```js
<Embed source={ `console.log('Hello, world!')` } onLoad={ this.alertLoaded.bind(this) } />
```

### onURLChanged : function

Provide a callback that is run whenever the embed's URL changes.

```js
<Embed source={ `console.log('Hello, world!')` } onLoad={ this.alertURLChanged.bind(this) } />
```

### onEvaluate : function

Provide a callback that is run whenever the embed is evaluated.

```js
<Embed source={ `console.log('Hello, world!')` } onLoad={ this.alertEvaluated.bind(this) } />
```

## Methods

### evaluate(callback : function) : void

Evaluate the notebook.

### getURL() : string

Retrieve the URL of the notebook.

## Tips

### Autorun Embed

```js
class App extends React.Component {
    run() {
        this.refs.embed.evaluate()
    }
    render() {
        return (
            <Embed source={ `console.log('Hello, world!')` } ref='embed' onLoad={ this.run.bind(this) } />
        )
    }
}
```

