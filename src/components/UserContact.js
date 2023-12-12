import React from "react";
import Image from "next/image";

const UserContact = ({ listId, info, item }) => {
	console.log("listId -->", listId, "info -->", info);
	return (
		<>
			<p>{item.name}</p>
			<Image src={item.thumbnail} alt={item.name} width={25} height={25} />
			<p>{item.email}</p>
			<p>{item.phone}</p>
		</>
	);
};

export default UserContact;
