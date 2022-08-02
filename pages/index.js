import Head from "next/head.js";
import Link from "next/link";
import React from "react";
import MainContainer from "../component/MainContainer.js";
import Navbar from '../component/Navbar.js'

const index = () => {
	return (
		<MainContainer keywords={'main page'} title={'main page'}>
			{/* <Navbar /> */}
			<h1>Main page</h1>
		</MainContainer>
	);
};

export default index;
