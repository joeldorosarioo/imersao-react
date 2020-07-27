import React from 'react';
import Logo from '../../assets/images/personalflix-logo.png';
import './Menu.css';
// import ButtonLink from '../ButtonLink';

import Button from '../Button';

function Menu() {
	return (
		<nav className="Menu">
			<a href="/">
				<img src={Logo} alt="Personalflix Logo" className="logo" />
			</a>

			<Button as="a" href="/" className="ButtonLink">Novo vídeo</Button>
		</nav>
	);
}

export default Menu;
