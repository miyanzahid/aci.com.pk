import React from 'react';
import ProductHeading from '../ProductPage/ProductHeading';
import ProductSubHeading from '../ProductPage/ProductSuHeading';
import ProductList from './ProductList';
import ProductTable from './ProductTable';
import { ProductListData } from './ProductListData';
// import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PageHeader from '../../Heading/PageHeader';
import ParagraphHeading from '../../Heading/ParagraphHeading';
import PageNotFound from '../../Heading/PageNotFound';
import Button from '../../Button/Button';

function ProductPage() {
	const { id } = useParams();

	// const location = useLocation();

	// console.log(location.pathname);

	// this header is used into the table compoent as the heading of it
	const header = [
		{
			label: 'Parameter',
		},
		{
			label: 'Value',
		},
	];

	// Filter the ProductListData array based on the ID
	const filteredItems = ProductListData.filter(
		(item) => item.id === parseInt(id),
	);

	if (filteredItems.length === 0) {
		// Handle case when no matching item is found
		return <PageNotFound />;
	}

	const item = filteredItems[0]; // Get the first (and only) matching item
	// console.log(item.list2)
	return (
		<>
			{/* title component  */}
			<PageHeader title={item.title} />

			{/* this compoent is for the main heading  */}
			<ProductHeading title={item.title} descriptions={item.description} />
			{/* First List After Title */}
			{!item.list1 ? null : <ProductList list={item.list1} />}

			{/* this component is for the sub headings and paragraph on the compoent  */}

			{/* for heading  */}
			{!item.subtitle1 ? null : <ParagraphHeading title={item.subtitle1} />}

			<ProductSubHeading
				// subtitle={item.subtitle1}
				subdescriptions={item.subdescriptions}
			/>

			{/* this componets renedered when the more then 1 compoonent is showes */}

			{/* for heading  */}
			{!item.subtitle2 ? null : <ParagraphHeading title={item.subtitle2} />}

			{!item.subtitle2 ? null : (
				<ProductSubHeading
					// subtitle={item.subtitle2}
					subdescriptions={item.subdescriptions2}
				/>
			)}
			{item.subtitle2 ? null : <ParagraphHeading title={item.subtitle2} />}

			{!item.subtitle2 ? null : (
				<ProductSubHeading
					// subtitle={item.subtitle2}
					subdescriptions={item.subdescriptions3}
				/>
			)}

			{/* this component rendered when the list is present */}
			{!item.list2 ? null : <ProductList list={item.list2} />}

			{/* list where the list are showes  */}
			{!item.subheading3 ? null : <ParagraphHeading title={item.subheading3} />}
			{!item.list ? null : (
				<ProductList
					// listPassage={item.listPassage}
					list={item.list}
					notes={item.note}
				/>
			)}
			{!item.list2 ? null : <ProductList list={item.list2} />}

			{/* tables data here  */}

			<ProductTable
				ProdList={item.ProdList}
				header={header}
				tableTitle={item.tableheading}
			/>

			{/* if table are more then 1 then this component is rendered othervise it will be not rendered */}
			{!item.tableheading2 ? null : (
				<ProductTable
					ProdList={item.ProdList2}
					header={header}
					tableTitle={item.tableheading2}
				/>
			)}

			{/* this is button  */}
			<div className="container">
				<div className="row pb-5 m-5">
					<div className="col text-center">
						<Button>Request A Quote</Button>
						{/* <a className="viewall-btn">Request A Quote</a> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductPage;
