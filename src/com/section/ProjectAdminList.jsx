import React from "react";
import ListAdmin from "../component/admin/ListAdmin";

const ProjectAdminList = ({ data, onDeleteClick, onClick }) => {
	return data ? (
		<ul className={"admin-project ListAdmin-wrapper"}>
			{data.map((el) => {
				const contents = [
					{
						keyValue: "user",
						value: `${el.user.firstName}, ${el.user.lastName}`,
					},
					{
						keyValue: "tag",
						value: `${el.tag[0] ? el.tag.map((el) => `#${el} `).join() : "-"}`,
					},
				];
				return <ListAdmin key={el.id} id={el.id} title={el.title} contents={contents} onDeleteClick={onDeleteClick} onClick={() => onClick(el)} image={el.thumbnail.url} />;
			})}
		</ul>
	) : null;
};

export default ProjectAdminList;
