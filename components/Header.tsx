import { Link } from '@chakra-ui/react';
import React from 'react'
import Nav from './Nav';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({ }) => {
	return (
		<header>
			<div className="bar">
				<Link href="/">
					Sick fits
				</Link>

				<Nav />
			</div>
			<div className="sub-bar">
				<div>Search ...</div>
			</div>
		</header>
	);
}
export default Header