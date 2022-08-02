// import React from 'react'
import Link from "next/link";
import Navbar from "../component/Navbar";
import { useEffect, useState } from "react";
import React from "react";
import MainContainer from "../component/MainContainer";

const users = ({users}) => {
// 	const [users, setUsers] = useState([
// 		{ id: 1, name: "Name1" },
// 		{ id: 2, name: "Name2" },
// 	]);


	return (
		<MainContainer keywords={'users'} title={'users'}>
			{/* <Navbar /> */}
			<h1>Users</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						<Link href={`/users/${user.id}`}>
							<a>{user.name}</a>
						</Link>
					</li>
				))}
			</ul>
		</MainContainer>
	);
};

export default users;

export async function getStaticProps(context) {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await response.json();
	// setUsers(data);
	return {
		props: {users}, // will be passed to the page component as props
	};
}