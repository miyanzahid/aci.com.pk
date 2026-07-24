import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Button from '../Button/Button';
// import brandlogo from '../Asset/a_logo_white.png'
import brandlogo from '../Asset/Logo_ACI.png';

const Navbar = () => {
	const product = [
		{ id: 4, listTitle: 'SULPHURIC ACID' },
		{ id: 1, listTitle: ' FORMIC ACID' },
		{ id: 2, listTitle: 'SULPHONIC ACID (LABSA)' },
		{ id: 3, listTitle: 'SODIUM SULPHATE' },
		{ id: 5, listTitle: 'ALUMINUM SULPHATE' },
		{ id: 6, listTitle: 'ACETECH®' },
		{ id: 7, listTitle: 'SOAP NOODLES' },
		{ id: 8, listTitle: 'GLYCERIN' },
	];

	const renderProductList = product.map((productList) => {
		return (
			<li key={productList.id}>
				<Link to={`/Productpage/${productList.id}`}>
					{productList.listTitle}{' '}
				</Link>
			</li>
		);
	});
	return (
		<nav className="navbar navbar-expand-xl navbar-light navbar-bgcolor    ">
			<div className="container-fluid ">
				<Link to="/" className="navbar-brand text-white float-left">
					<img
						src={brandlogo}
						alt=""
						style={{ width: '192px', height: '60px' }}
						className="navbar-brand-image "
					/>
					<p className=" text-dark fw-bold logotext">
						<h6>Akbari Chemcial Industries (Pvt) Ltd</h6>
					</p>
					{/* <h2>LOGO</h2> */}
				</Link>
				<button
					className="navbar-toggler "
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse  " id="navbarSupportedContent">
					<ul className="d-block d-lg-flex justify-content-between mb-2 mb-lg-0 ">
						<li className="nav-item">
							<Link className="nav-link " to={`/`}>
								Home
							</Link>
						</li>

						<li>
							<div className="dropdown product-mt">
								<buttton className="dropbtnss ">ABOUT US</buttton>

								<div className="dropdown-content">
									<ul>
										{/* <li>
                    <Link to="/Company-Profile/1">COMPANY PROFILE</Link>
                  </li> */}
										{/* <li>
                    <Link to="/Company-Profile/2">OUR TEAM</Link>
                  </li> */}
										<li>
											<Link to="/about-us">OUR PROFILE</Link>
										</li>
										<li>
											<Link to="/Company-Profile/3">ENVIRONMENTAL POLICY</Link>
										</li>
										<li>
											<Link to="/Company-Profile/4">CERTIFICATIONS</Link>
										</li>
									</ul>
								</div>
							</div>
						</li>

						<div className="dropdown product-mt">
							<buttton className="dropbtnss ">PRODUCTS</buttton>
							<div className="dropdown-content">{renderProductList}</div>
						</div>
						{/* <div className="dropdown">
              <li className="nav-item">
                <a className="nav-link">GROUP COMPANIES</a>
              </li>
              <div className="dropdown-content">
                <ul>
                  <li>
                    <Link to="/Group-Company/1">AKBARI STORE(PVT.) LTD.</Link>
                  </li>
                  <li>
                    <Link to="/Group-Company/2">
                      AKBARI PAPPER STORE LAHORE
                    </Link>
                  </li>
                  <li>
                    <Link to="/Group-Company/3">
                      AKBARI INTERNATIONAL CORPORATION
                    </Link>
                  </li>
                  <li>
                    <Link to="/Group-Company/4">
                    <a>AKBARI PYBLIC SCHOOL (TRUST)</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}

						<li className="nav-item">
							{/* <a className="nav-link">What We Do</a> */}
							<Link className="nav-link" to="/What-We-Do">
								What We Do
							</Link>
						</li>
						{/* <li className="nav-item">
							<a className="nav-link">EVENTS</a>
						</li> */}
						<li className="nav-item">
							<a className="nav-link">CAREERS</a>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/Contact-US">
								CONTACT US
							</Link>
						</li>
					</ul>
					<Link to="https://webmail.mukhost.uk/">
						{' '}
						<button className="contact-btn btn ms-5 ">WEBMAIL</button>
					</Link>
				</div>

				{/* <div className="d-xl-block  ">
          <button className=" requestquote-btn ">WEBMAIL</button>
        </div> */}
			</div>
		</nav>
	);
};

export default Navbar;
