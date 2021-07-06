import React from 'react'
import Header from './Header';

interface PagesProps {
	cool: any,
}

const Pages: React.FC<PagesProps> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
export default Pages