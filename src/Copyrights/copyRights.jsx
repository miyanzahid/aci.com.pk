import React from 'react';
import './copyRight.css';

const CopyRights = () => {
	return (
		<div className="copyRight-bgcolor">
			<div className="container">
				<div className="row py-3 ">
					<div className="col-lg-8 col-md-8 col-sm-12">
						<p className="footer-lasttext">
							2026 Akbari Chemical Industreis (Pvt) Ltd. All Rights Reserved
						</p>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12">
						<p className="footer-lasttext">
							Designed & Developed by:{' '}
							<a
								href="https://www.linkedin.com/in/mian-zahid-527717193/"
								target="blank"
							>
								Mian Zahid
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CopyRights;
