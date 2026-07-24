import React from 'react';
import './Company.css';
import ParagraphHeading from '../Heading/ParagraphHeading';
import SubHeading from '../Heading/SubHeading';
import PageHeader from '../Heading/PageHeader';
import { AboutData } from './AboutPageDataList';
import { useParams } from 'react-router';
import Cards from '../Heading/Cards';
import Paragraph from '../Heading/Paragraph';

function CompanyProfile() {
	const { id } = useParams();

	const DataRendered = AboutData.filter((items) => items.id === parseInt(id));

	let items = DataRendered[0];
	const dataRender = !items.detail ? null : (
		<div className="col-md-12 CP-main">
			{items.detail.map((items) => {
				return (
					<div>
						{!items.subtitle ? (
							<Paragraph subdescriptions={items.description} />
						) : (
							<SubHeading
								subtitle={items.subtitle}
								subdescriptions={items.description}
							/>
						)}
					</div>
				);
			})}
		</div>
	);

	const cardRender = !items.cardData ? null : (
		<>
			{items.cardData.map((cards) => {
				return (
					<div className="col-md-3 m-2 ">
						<div>
							{!cards.title ? null : (
								<Cards
									className={'hoverCards'}
									title={cards.title}
									Subtitle={cards.subtitle}
								/>
							)}
						</div>
					</div>
				);
			})}
		</>
	);

	return (
		<>
			<>
				{!items.title1 ? (
					<PageHeader title={items.title} />
				) : (
					<PageHeader title={items.title1} />
				)}
				<div className="container">
					<div className="row">
						<div className="col-md-12 CP-Heading">
							<ParagraphHeading title={items.title} />
						</div>
						{dataRender}
					</div>
				</div>
				<div className="container">
					<div className="row card-align">{cardRender}</div>
				</div>
			</>
		</>
	);
}

export default CompanyProfile;
