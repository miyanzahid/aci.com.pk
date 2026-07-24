import React from 'react';
import './pastevent.css';
import pasteventimg1 from '../Asset/748events70.jpg';
import pasteventimg2 from '../Asset/203events769.jpg';
import pasteventimg3 from '../Asset/605events543.jpg';
import pasteventimg4 from '../Asset/203events769.jpg';
import pasteventimg5 from '../Asset/605events543.jpg';
import pasteventimg6 from '../Asset/890events747.jpg';
import pasteventimg7 from '../Asset/605events543.jpg';
import pasteventimg8 from '../Asset/890events747.jpg';
import pasteventimg9 from '../Asset/569events516.jpg';

const PastEvents = () => {
	return (
		<>
			<div className="pastevents-bgimg">
				<div className="container pastevent-set-padding">
					<h2 className="pastevent-heading">PAST EVENTS</h2>
					<hr className="pastevents-hr" />
					<div
						id="carouselExampleIndicators"
						className="carousel slide"
						data-bs-ride="carousel"
					>
						<div className="carousel-indicators">
							<button
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide-to="0"
								className="active"
								aria-current="true"
								aria-label="Slide 1"
							></button>
							<button
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide-to="1"
								aria-label="Slide 2"
							></button>
							<button
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide-to="2"
								aria-label="Slide 3"
							></button>
						</div>
						<div className="carousel-inner">
							<div className="carousel-item active">
								{/* <img src="..." className="d-block w-100" alt="..." /> */}
								<div className="row ">
									<div className="col-sm-4 image-container">
										<img
											src={pasteventimg1}
											className="img-fluid pastevents-img"
											alt=""
										/>
									</div>
									<div className="col-sm-4 image-container">
										<img
											src={pasteventimg2}
											className="img-fluid pastevents-img"
											alt=""
										/>
									</div>
									<div className="col-sm-4 image-container">
										<img
											src={pasteventimg3}
											className="img-fluid pastevents-img"
											alt=""
										/>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								{/* <img src="..." className="d-block w-100" alt="..." /> */}
								<div className="row">
									<div className="col-sm-4 image-container">
										<img
											src={pasteventimg4}
											className="img-fluid pastevents-img"
											alt=""
										/>
									</div>
									<div className="col-sm-4 image-container">
										<img
											src={pasteventimg5}
											className="img-fluid pastevents-img"
											alt=""
										/>
									</div>
									<div className="col-sm-4 image-container">
										<img
											src={pasteventimg6}
											className="img-fluid pastevents-img"
											alt=""
										/>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								{/* <img src="..." className="d-block w-100" alt="..." /> */}
								<div className="row">
									<div className="col-sm-4 image-container">
										<img
											src={pasteventimg7}
											className="img-fluid pastevents-img"
											alt=""
										/>
									</div>
									<div className="col-sm-4 image-container">
										<img
											src={pasteventimg8}
											className="img-fluid pastevents-img"
											alt=""
										/>
									</div>
									<div className="col-sm-4 image-container">
										<img
											src={pasteventimg9}
											className="img-fluid pastevents-img"
											alt=""
										/>
									</div>
								</div>
							</div>
						</div>
						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide="prev"
						>
							<span
								className="carousel-control-prev-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide="next"
						>
							<span
								className="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default PastEvents;
