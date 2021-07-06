import { Link } from '@chakra-ui/react';
import React from 'react'

interface NavProps {

}

const Nav: React.FC<NavProps> = ({ }) => {
	return (
		<div>
			<Link href="/products">products</Link>
			<Link href="/sell">sell</Link>
			<Link href="/orders">orders</Link>
			<Link href="/account">account</Link>
		</div>
	);
}
export default Nav