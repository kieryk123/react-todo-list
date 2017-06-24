import React from 'react';
import {Link} from 'react-router-dom';

class About extends React.Component {
	render() {
		return(
			<div>
				<Link className="link" to={'/'}>Home</Link>
				<Link className="link" to={'/about'}>About</Link>
				<h2>All about me</h2>
				<p>Hello! My name is Paul and this is my very first React application. Enjoy it!</p>
			</div>
		)
	}
}

export default About;
