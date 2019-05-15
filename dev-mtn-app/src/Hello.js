import React from 'react';





class Hello extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		likes: 0,
		}
	}

handleClick = () => {
		this.setState({
			likes: this.state.likes + 1, 
		});
	};

	render() {
	return [
	<h2>
	Hello {this.props.name} 
	</h2>,
	<button onClick={this.handleClick}>
	click me 
	</button>,
	<h2>
	{this.state.likes}
	</h2>
	]
}
} 
export default Hello;