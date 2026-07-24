import React from 'react';
import './topnav.css';

const Topnav = () => {
	return (
		<div className="container-fluid topnav-bg ">
			<div className="row pt-3 text-md-center text-lg-none   ">
				<div className="col-lg-6 col-sm-12 ">
					<p className="topnav-text float-sm-start float-md-none ">
						Welcome to Akbari Chemical Industries (Pvt) Ltd{' '}
						<span
						// className='text-dark'
						>
							since 1979
						</span>
					</p>
				</div>
				<div className="col-lg-6 col-sm-12   ">
					<p className="topnav-text  float-sm-end float-md-none ">
						Global Certificate:{' '}
						<span
						//  className='text-dark'
						>
							ISO 9001:2015, ISO 14001:2015
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Topnav;
