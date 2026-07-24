import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/footer';
import CopyRights from './Copyrights/copyRights';
import Home from './Home/Home';
import ProductPage from './Products/ProductPage/ProductPage';
import CompanyProfile from './CompanyProfile/CompanyProfile';
import GroupMain from './GroupCompany/GroupMain';
import ContactForm from './Contact/ContactForm';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import Aboutus from './About us/Aboutus';

function App() {
	return (
		<>
			<Router>
				{/* <Topnav/> */}
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Productpage/:id" element={<ProductPage />} />
					<Route path="/Company-Profile/:id" element={<CompanyProfile />} />
					<Route path="/Group-Company/:id" element={<GroupMain />} />
					<Route path="/Contact-US" element={<ContactForm />} />
					<Route path="/What-We-Do" element={<WhatWeDo />} />
					<Route path="/about-us" element={<Aboutus />} />
				</Routes>
				<Footer />
				<CopyRights />
			</Router>
		</>
	);
}

export default App;
