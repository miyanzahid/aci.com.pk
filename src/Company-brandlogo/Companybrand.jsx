import React from 'react';
import './companybrand.css';
import brandlogo from '../Asset/New_logo.png';

const Companybrand = () => {
	return (
		<div className="container">
			<div className="row pt-4">
				<div className="col-lg-8  ">
					<figure>
						<img
							src={brandlogo}
							alt=""
							style={{ width: '200px', height: '80px' }}
							className="d-sm-none d-md-block "
						/>
					</figure>
				</div>
				<div className="col-lg-4    d-flex justify-content-lg-evenly justify-content-md-center  "></div>
			</div>
		</div>
	);
};

export default Companybrand;
