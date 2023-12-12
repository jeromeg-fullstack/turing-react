import React from "react";
import ContactInfo from "./UserContact";

const UserContactList = ({ listId, contactList }) => {
	// console.log("listId -->", listId, "contactList -->", contactList);
	return (
		<>
			{contactList.map((item, idx) => (
				<ContactInfo key={item.name + idx} item={item} />
			))}
		</>
	);
};

export default UserContactList;
