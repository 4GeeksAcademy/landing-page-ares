
import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = props => {
	return (
		//here you have to return expected html using the properties being passed to the component
		<div className="jumbotron">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<a
				className="btn btn-primary btn-lg"
				target="_blank"
				rel="noreferrer"
				href={props.buttonURL}
				role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};
Jumbotron.defaultProps = {
	title: "Welcome to react",
	description: "React is the most popular rendering library in the world",
	buttonLabel: "Go to the official website",
	buttonURL: "https://reactjs.org/"
};

Jumbotron.propTypes = {
	//proptypes here
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};
