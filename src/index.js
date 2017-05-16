const React = require('react')

module.exports = class Embed extends React.Component {
	shouldComponentUpdate() {
		return false
	}
	componentWillReceiveProps(nextProps) {
		if (this.notebook) {
			const { props } = this
			if (props.source !== nextProps.source) this.notebook.setSource(nextProps.source)
			if (props.preamble !== nextProps.preamble) this.notebook.setPreamble(nextProps.preamble)
		}
	}
	evaluate(callback) {
		this.notebook.evaluate(callback)
	}
	getURL() {
		return this.notebook.URL
	}
	componentDidMount() {
		const element = this.refs.notebook
		element.innerHTML = ''

		const options = { element, ...this.props }

		this.notebook = RunKit.createNotebook(options)
	}
	render() {
		return (
			<div ref='notebook' />
		)
	}
}

