const React = require('react')
const PropTypes = require('prop-types')

class Embed extends React.Component {
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

		const options = { ...this.props, element }

		this.notebook = RunKit.createNotebook(options)
	}
	render() {
		return (
			<div ref='notebook' />
		)
	}
}

Embed.propTypes = {
	source: PropTypes.string,
	readOnly: PropTypes.bool,
	mode: PropTypes.string,
	nodeVersion: PropTypes.string,
	env: PropTypes.array,
	title: PropTypes.string,
	minHeight: PropTypes.string,
	packageResolutionTimestamp: PropTypes.string,
	preamble: PropTypes.string,
	onLoad: PropTypes.func,
	onURLChanged: PropTypes.func,
	onEvaluate: PropTypes.func
}

module.exports = Embed
