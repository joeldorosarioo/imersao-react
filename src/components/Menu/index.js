import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/personalflix-logo.png';
import './Menu.css';
// import ButtonLink from '../ButtonLink';

import Button from '../Button';

function Menu() {
	return (
		<nav className="Menu">
			<Link to="/">
				<img src={Logo} alt="Personalflix Logo" className="logo" />
			</Link>

			<Button as={Link} to="/cadastro/video" className="ButtonLink">Novo vídeo</Button>
		</nav>
	);
}

export default Menu;
