import React from 'react';
import { ImLocation, ImPhone } from 'react-icons/im';
import { FaEnvelope } from 'react-icons/fa';

function ContactPortion() {
	return (
		<>
			<div className="col-lg-4 col-md-5">
				<div className="left-side">
					<div className="address details">
						<i className="fas fa-map-marker-alt">
							<ImLocation />
						</i>
						<div className="topic">Address</div>
						<div className="text-one">Head Office: 18Km Multan Road,</div>
						<div className="text-two">
							Site: 10KM Sheikhupura-Faisalabad road Kharianwala{' '}
						</div>
					</div>
					<div className="phone details">
						<i className="fas fa-phone-alt">
							<ImPhone />
						</i>
						<div className="topic">Phone</div>
						<div className="text-one">+92 (0)42-3597 1446-8</div>
						<div className="text-two">+92 (0)56-3882 228</div>
					</div>
					<div className="email details">
						<i className="fas fa-envelope">
							<FaEnvelope />
						</i>
						<div className="topic">Email</div>
						<div className="text-one">Info@aci.com.pk</div>
						{/* <div className="text-two">info.codinglab@gmail.com</div> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default ContactPortion;
