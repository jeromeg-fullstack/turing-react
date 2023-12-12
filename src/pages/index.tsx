import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import * as React from "react";
import UserContactList from "../components/UserContactList";
import useContactList from "../customhooks/useContactList";
import Header from "../components/Header";
import Paginator from "../components/Paginator";


export default function App() {
	const {
		hasNextPage,
		hasPrevPage,
		contactList,
		isSyncing,
		prevPage,
		nextPage,
		sync,
		currentPageList,
		page,
		onFilter,
		totalPages
	} = useContactList();

	return (
		<div>
			<Header isSyncing={isSyncing} sync={sync} onFilter={onFilter} />
			{/* Do not edit test id in below div, it's added for testing purpose */}
			<div data-testid="user-contact-list-wrapper">
				<UserContactList listId={page} contactList={currentPageList} />
			</div>
			<Paginator
				hasPrevPage={hasPrevPage}
				prevPage={prevPage}
				hasNextPage={hasNextPage}
				nextPage={nextPage}
				page={page}
				totalPages={totalPages}
			/>
		</div>
	);
}
