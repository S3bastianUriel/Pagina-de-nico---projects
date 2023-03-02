import React from 'react';
import '@styles/Menu.scss';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<a href="https://nicolassantivanez.netlify.app/" className="title">HOME</a>
				</li>
				<li>
					<a href="https://nicolassantivanez-aboutme.netlify.app/" className="title">ABOUT ME</a>
				</li>
				<li>
					<a href="/">PROJECTS</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
