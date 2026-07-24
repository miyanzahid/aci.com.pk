import React from 'react';
import './contactus.css';
// import Button from '../Button/Button'
// import { Link } from 'react-router-dom'

const Contactus = () => {
	return (
		<>
			<div className="contactus-bgcolor">
				<div className="container contactus-bgcolor">
					<div className="row py-5">
						<div className="col-lg-12 col-md-12 text-center">
							<h2 className="contactus-text">
								To become an industrial leader in the chemical sector of
								Pakistan by constantly developing and upgrading our products
								while remaining true to our core values and maintaining our
								collective 'goodwill'.
							</h2>
						</div>
						{/* <div className="col-lg-3 col-md-3 col-sm-12 pt-sm-3 pt-lg-0">
            <Button> <Link to="/Contact-US" > Contact Us</Link></Button>
          </div> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Contactus;
