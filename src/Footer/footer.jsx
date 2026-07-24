import React from 'react';
import './footer.css';
import footerLogoImg from '../Asset/New_logo.png';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSkype } from 'react-icons/fa';
import { FaPinterestSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	const product = [
		{ id: 1, listTitle: 'FORMIC ACID' },
		{ id: 2, listTitle: 'SULPHONIC ACID (LABSA)' },
		{ id: 3, listTitle: 'SINGLE SUPER PHOSPHATE (SSP)' },
		{ id: 4, listTitle: 'SULPHURIC ACID' },
		{ id: 5, listTitle: 'SODIUM SULPHATE' },
	];

	const renderProductList = product.map((productList) => {
		return (
			// <li> <a href="" className='footerLinks'>Sulphuric Acid</a></li>
			<li key={productList.id}>
				{/* <span className='footerLinks'> */}
				<Link
					className="footerLinks"
					onClick={scrollToTop}
					to={`/Productpage/${productList.id}`}
				>
					{productList.listTitle}{' '}
				</Link>
				{/* </span> */}
			</li>
		);
	});
	return (
		<div className="footerBg-Img">
			<div className="container">
				<div className="row py-5 ">
					<div className="col-lg-3 col-md-6 col-sm-12">
						<span>
							<img
								src={footerLogoImg}
								alt="footerLogoImg"
								className="footer-LogoImg img-fluid"
							/>
							{/* <p className=" text-white fw-bold logotext2">
								Akbari Chemical Industries (Pvt) Ltd
							</p> */}
						</span>
						<div className="social-Links py-3">
							<a href="">
								<FaTwitter />
							</a>
							<a href="">
								<FaLinkedin />
							</a>
							<a href="">
								<FaFacebookSquare />
							</a>
							<a href="">
								<FaSkype />
							</a>
							<a href="">
								<FaPinterestSquare />
							</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12 ">
						<ul className="ps-0">
							<h6 className="heading-Footer"> OUR PRODUCT </h6>
							<hr className="footerhr-Line" />
							{renderProductList}
						</ul>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12 pb-3">
						<h6 className="heading-Footer"> Quick Links </h6>
						<hr className="footerhr-Line" />
						<ul className="m-0 p-0">
							<li>
								<Link
									onClick={scrollToTop}
									className="footerLinks"
									to="/Company-Profile/1"
								>
									About Us
								</Link>{' '}
							</li>
							<li>
								{' '}
								<a href="" className="footerLinks">
									Careers
								</a>
							</li>
							<li>
								{' '}
								<a href="" className="footerLinks">
									Get Quote
								</a>
							</li>
							<li>
								{' '}
								<a href="" className="footerLinks">
									Events
								</a>
							</li>
						</ul>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12 pb-3">
						<h6 className="heading-Footer"> Get in Touch </h6>
						<hr className="footerhr-Line" />
						<ul className="m-0 p-0">
							<li>
								{' '}
								<a href="" className="footerLinks lh-1 ">
									Head Office: 18Km Multan Road, Lahore.
								</a>
							</li>
							<li>
								{' '}
								<a href="" className="footerLinks">
									+92 (0)42-3597 1446-8
								</a>
							</li>
							<li>
								{' '}
								<a href="" className="footerLinks">
									Site: 10KM Sheikhupura-Faisalabad road Kharianwala.
								</a>
							</li>
							<li>
								{' '}
								<a href="" className="footerLinks">
									Info@aci.com.pk
								</a>
							</li>
							<li>
								{' '}
								<a href="" className="footerLinks">
									Mon - Sat : 9:00 AM to 5:00 PM
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
