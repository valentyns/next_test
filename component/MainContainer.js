import React from 'react'
import A from './A';
import styles from "../styles/Navbar.module.css";
import Head from 'next/head';

const MainContainer = ({ children, keywords, title }) => {
	return (
		<>
			<Head>
				<meta keywords={"123,456," + keywords}></meta>
				<title>{title + ' - title'}</title>
				<link rel="shortcut icon" href="/favicon.ico"></link>
			</Head>
			<div className={styles.navbar}>
				<A href={"/"} text="Main page" />
				<A href={"/users"} text="Users" />
			</div>
			<div>{children}</div>
		</>
	);
};

export default MainContainer