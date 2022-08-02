import Navbar from "../../component/Navbar";
import {useRouter} from "next/router"
import React from "react";
import styles from "../../styles/user.module.scss"
import MainContainer from "../../component/MainContainer";

export default function User({user}) {
	// const router = useRouter()
	const { query } = useRouter();
	// console.log(query);
	return (
		<MainContainer keywords={user.name} title={user.name}>
			<div className={styles.user}>
				{/* <Navbar /> */}
				<h1>User {query.id}</h1>
				<div>Name - {user.name}</div>
			</div>
		</MainContainer>
	);
};

// export async function getStaticProps(context) {
// 	const response = await fetch("https://jsonplaceholder.typicode.com/users");
// 	const user = await response.json();
// 	// setUsers(data);
// 	return {
// 		props: { user }, // will be passed to the page component as props
// 	};
// }

export async function getServerSideProps({ params }) {
	// console.log(params);
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
	const user = await response.json();
	return {
		props: {user}, // will be passed to the page component as props
	};
}