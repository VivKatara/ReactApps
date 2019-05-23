import React, { Component } from 'react';

class Title extends React.Component {
	render() {
		return (
			<h1 className="Title"> {this.props.name} </h1>
		);
	}
}

export default Title;