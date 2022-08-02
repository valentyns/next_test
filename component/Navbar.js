import Link from "next/link";
import React from 'react'
import A from "./A";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
	return (
		<div>
			<div className={styles.navbar}>
				<A href={'/'} text="Main page" />
				<A href={'/users'} text="Users" />
			</div>
			{/* <style jsx>
				{`
				`}
			</style> */}
		</div>
	);
};

export default Navbar;
