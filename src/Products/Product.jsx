import React, { useEffect } from 'react';
import './product.css';
import ProductCard from './ProductCard';
import Button from '../Button/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Product = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<div className="bg-color pb-5">
				<div className="container ">
					<div
						className="row pt-5 product-row"
						data-aos="zoom-in-down"
						data-aos-duration="1000"
					>
						<div className="col-3 ">
							<h2 className="our-product">OUR PRODUCTS</h2>
						</div>
						<div className="col-9">
							<p className="product-text">
								<em>
									{' '}
									Akbari Chemical Industries (Pvt.) Ltd produces quality
									industrial chemicals and fertilizers at its state of the art
									chemical facility. A complete list of our products is given
									below:{' '}
								</em>
							</p>
						</div>
					</div>
				</div>
				<div
					className="container "
					data-aos="zoom-in-down"
					data-aos-duration="1000"
				>
					<div className="row">
						<div className="col-md-12">
							<div className=" product-cards-list">
								<ProductCard />
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					{/* <div className="row pb-5">
            <div className="col text-center">
              <Button>VIEW ALL</Button>
            
            </div>
          </div> */}
				</div>
			</div>
		</>
	);
};

export default Product;
