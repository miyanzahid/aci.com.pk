import React from 'react';
import './navbarimg.css';
import img1 from '../Asset/Screenshot 2023-05-15 at 4.39.41 PM.png';
// import img2 from '../Asset/Pic-ok.png';
import img5 from '../Asset/New_Slider_1.jpg';
import img3 from '../Asset/New_slider2.jpg';
// import img4 from '../Asset/page-1.jpg';
// import img from "../Asset/Screenshot 2023-05-15 at 4.39.41 PM.png";

const NavbarImgslider = () => {
	return (
		<div
			id="carouselExampleInterval"
			className="carousel slide"
			data-bs-ride="carousel"
		>
			<div className="carousel-inner">
				<div className="carousel-item active h-75" data-bs-interval="4000">
					<img
						src={img1}
						className="d-block w-100 "
						style={{ height: '80vh' }}
						alt="..."
					/>
					{/* <div className="carousel-caption d-none d-md-block">
            <h1>First</h1>
            <p>passage</p>
          </div> */}
				</div>
				<div className="carousel-item" data-bs-interval="5000">
					<img
						src={img5}
						className="d-block w-100"
						style={{ height: '80vh' }}
						alt="..."
					/>
				</div>
				<div className="carousel-item" data-bs-interval="10000">
					<img
						src={img3}
						className="d-block w-100"
						style={{ height: '80vh' }}
						alt="..."
					/>{' '}
				</div>
				{/* <div className="carousel-item" data-bs-interval="10000">
          <img src={img4} className="d-block w-100" style={{height:"80vh"}} alt="..." /> </div> */}
				<div className="carousel-item" data-bs-interval="10000">
					<img
						src={img5}
						className="d-block w-100"
						style={{ height: '80vh' }}
						alt="..."
					/>{' '}
				</div>
			</div>
			<button
				className="carousel-control-prev "
				type="button"
				data-bs-target="#carouselExampleInterval"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleInterval"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default NavbarImgslider;
