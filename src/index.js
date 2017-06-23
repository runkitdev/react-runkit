const React = require('react')
const PropTypes = require('prop-types')

class Embed extends React.Component {
	shouldComponentUpdate() {
		return false
	}
	componentWillReceiveProps(nextProps) {
		if (this.embed) {
			const { props } = this
			if (props.source !== nextProps.source) this.embed.setSource(nextProps.source)
			if (props.preamble !== nextProps.preamble) this.embed.setPreamble(nextProps.preamble)
		}
	}
	evaluate(callback) {
		this.embed.evaluate(callback)
	}
	getURL() {
		return this.embed.URL
	}
	componentDidMount() {
		const element = this.refs.embed
		const options = { ...this.props, element }

		this.embed = RunKit.createNotebook(options)
	}
	componentWillUnmount() {
		this.embed.destroy()
		this.embed = null
	}
	render() {
		return (
			<div ref='embed' />
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
	packageTimestamp: PropTypes.string,
	preamble: PropTypes.string,
	onLoad: PropTypes.func,
	onURLChanged: PropTypes.func,
	onEvaluate: PropTypes.func
}

module.exports = Embed
