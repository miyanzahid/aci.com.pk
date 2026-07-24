import React, { useEffect } from 'react';
import './about.css';
import Aboutusimg from '../../src/Asset/page-0.jpg';
import ParagraphHeading from '../Heading/ParagraphHeading';
import Paragraph from '../Heading/Paragraph';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Aboutus = () => {
	const passage1 =
		'We established our first manufacturing unit in 1979 in Lahore with a Sulphuric Acid plant. Over the past four decades, we have added Aluminium Sulphate, Formic Acid, Sodium Sulphate, Linear Alkyl Benzene Sulphonic Acid, Soap noodles, Refined Glycerin, Single Super Phosphate, Sulphate of Potash and Hydrochloric Acid to our product range. Currently we have two manufacturing sites located in Sheikhupura district, Punjab. ';
	const passage2 =
		'Our most recent diversification came in 2020 when we established Akbari Agrichem (Pvt) Limited; a project dedicated solely for agricultural industry. Keeping in mind that our cultivable land is alkaline, our focus is to produce acidic fertilizers. We’re manufacturing Single Super Phosphate and Sulphate of Potash at our imported manufacturing plans to counter our soil’s alkalinity. ';
	const passage3 =
		' The company is working under the same brand name of ‘Akbari’ reflecting our commitment towards ‘quality’ and our ‘goodwill’. ';

	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<div className="aboutus-bgcolor">
				<div className="container pt-3 pb-5">
					<div data-aos="zoom-in-down" data-aos-duration="1000">
						<div className="row">
							<div className="col-md-12">
								<div className="mt-5">
									<ParagraphHeading title={'About Akbari Group'} />
								</div>
							</div>
						</div>
						<div className="row ">
							<Paragraph
								subdescriptions={
									'Akbari group was established by Sheikh Siraj-ud-Din Ahmed and his son Sheikh Fazal Elahi Akbar in 1948, and since then it has become a trusted name for quality chemicals in Pakistan. With a product range of over 200 chemicals, Akbari Store is a market leader in chemical trading circles of Pakistan. '
								}
							/>
						</div>

						<div className="row">
							<div className="col-md-12">
								<div className="mt-3">
									<ParagraphHeading title={'Our Manufacturing Portfolio'} />
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div
							className="col-lg-6 col-sm-12 "
							data-aos="fade-right"
							data-aos-duration="1000"
						>
							<Paragraph subdescriptions={passage1} />
							<Paragraph subdescriptions={passage2} />
							<Paragraph subdescriptions={passage3} />
						</div>
						<div
							className="col-lg-6 col-sm-12 "
							data-aos="fade-left"
							data-aos-duration="1000"
						>
							<div className="port-img-main">
								<img
									src={Aboutusimg}
									className="aboutusside-img  img-fluid"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Aboutus;
