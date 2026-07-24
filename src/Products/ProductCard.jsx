import React from 'react';
import productimg1 from '../Asset/bag.jpg';
// import productimg2 from "../Asset/349product_290.jpg";
import productimg3 from '../Asset/46product_462.jpg';
import productimg2 from '../Asset/LABSA.jpg';
import { Link } from 'react-router-dom';

function ProductCard() {
	const productCards = [
		{
			id: 1,
			title: 'FORMIC ACID',
			discription:
				'Formic Acid is the simplest and strongest of the series of aliphatic monobasic acids. It can be represented chemically as H–COOH. It is a colourless liquid with a pungent, penetrating odour.',
			img: productimg3,
			Linlroute: '/Productpage/1',
		},
		{
			id: 2,
			title: 'SULPHONIC ACID (LABSA)',
			discription: (
				<p>
					Linear Alkyl Benzene Sulphonic Acid (LABSA) Dodecyl Benzene Sulphonic
					Acid (DBSA), or simply Sulphonic Acid are few of the several names
					given to a type of organic acid that can be represented by the general
					formula R–SO<sub>2</sub>OH.
				</p>
			),
			img: productimg2,
			Linlroute: '/Productpage/2',
		},
		{
			id: 3,
			title: 'SULPHURIC ACID',
			discription:
				'Sulphuric Acid is a strong dibasic acid. In addition, it is also a strong oxidizing and dehydrating agent. It is one of the most widely employed chemicals and enters into many industries, though infrequently appearing in the finished material.',
			img: productimg3,
			Linlroute: '/Productpage/4',
		},
	];

	return (
		<>
			{productCards &&
				productCards.map((items) => (
					<div className="col-md-4  m-2" key={items.id}>
						<figure>
							<div className="product-container">
								<img src={items.img} alt="" className=" d-block product-img" />

								<div className="content">
									<h3>{items.title}</h3>
								</div>
							</div>
						</figure>

						<b>{items.title}</b>
						<p className="product-textparagragh">{items.discription}</p>
						<Link to={items.Linlroute}>
							{' '}
							<button className="btn contact-btn">Read more</button>
						</Link>
					</div>
				))}
		</>
	);
}

export default ProductCard;
