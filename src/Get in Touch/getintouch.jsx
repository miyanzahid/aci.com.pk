import React, { useEffect } from 'react';
import './getintouch.css';
import getInTounchSideImg from '../Asset/contact_index.png';
import ParagraphHeading from '../Heading/ParagraphHeading';
// import Button from "../Button/Button";
import GetContact from './GetContact';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Getintouch = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="container py-4 ">
			<div className="row ">
				<div
					className="col-sm-12 col-lg-12 "
					data-aos="zoom-in-down"
					data-aos-duration="1000"
				>
					<ParagraphHeading title={'Get in touch'} />
				</div>
			</div>
			<div className="row">
				<GetContact />
				<div
					className="col-lg-6 col-sm-12"
					data-aos="fade-left"
					data-aos-duration="1000"
				>
					<img
						src={getInTounchSideImg}
						alt="getInTounchSideImg"
						className="img-fluid getInTounch-SideImg"
					/>
				</div>
			</div>
		</div>
	);
};

export default Getintouch;
