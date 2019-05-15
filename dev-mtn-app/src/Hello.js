import React from 'react';

class Hello extends React.Component {
	render() {
	return [
	<h2>
	Hello {this.props.name} 
	</h2>,
	<button key="b">
	click me 
	</button>
	]
}
} 
export default Hello;