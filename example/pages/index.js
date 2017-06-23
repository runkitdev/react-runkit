import React from 'react'
import Head from 'next/head'
import Embed from'./react-runkit'

const global_css = `
html, body {
	padding: 0;
	margin: 0;
}
`

const wrapper_style = {
	padding: '50px',
	position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	backgroundColor: '#fafafa'
}

export default class Index extends React.Component {
	constructor(...args) {
		super(...args)
		this.run = this.run.bind(this)
		this.add = this.add.bind(this)
		this.remove = this.remove.bind(this)
		this.state = {
			visible: true
		}
	}
	run() {
		this.refs.embed.evaluate()
	}
	add() {
		this.setState({
			visible: true
		})
	}
	remove() {
		this.setState({
			visible: false
		})
	}
	render() {
		const content = this.state.visible ? (
			<div>
				<Embed nodeVersion='7' source='process.env.ANSWER' minHeight='200px' env={ ['ANSWER=42'] } ref='embed' onLoad={ this.run } />
				<button onClick={ this.run }>Run</button>
				<button onClick={ this.remove }>Remove</button>
			</div>
		) : (
			<button onClick={ this.add }>Add</button>
		)

		return (
			<div>
				<Head>
					<style>{ global_css }</style>
					<script src='https://embed.runkit.com'></script>
				</Head>
				<div style={ wrapper_style }>{ content }</div>
			</div>
		)
	}
}
