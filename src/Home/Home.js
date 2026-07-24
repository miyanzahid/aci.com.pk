import React from 'react';
import NavbarImgslider from '../Navbar-Carousel-Image/NavbarImgslider';
import Product from '../Products/Product';
import Contactus from '../Contact/Contactus';
import Aboutus from '../About us/Aboutus';
import PastEvents from '../PastEvents/PastEvents';
import Getintouch from '../Get in Touch/getintouch';
import Query from '../querySection/query';

export default function Home() {
	return (
		<>
			<NavbarImgslider />
			<Product />
			<Contactus />
			<Aboutus />
			{/* <PastEvents /> */}
			<Getintouch />
			<Query />
		</>
	);
}
