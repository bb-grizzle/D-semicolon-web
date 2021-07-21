import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";

const ProjectList = ({ data }) => {
	const [sourceLoaded, setSourceLoaded] = useState(null);

	useEffect(() => {
		const img = new Image();
		img.src = data.thumbnail.url;
		img.onload = () => setSourceLoaded(data.thumbnail.url);
	}, [data.thumbnail.url]);

	const projectClick = () => {
		window.open(data.url);
	};

	return (
		<div className={"project-list"} onClick={projectClick}>
			<div className="item">
				<div className={`thumbnail ${sourceLoaded !== null ? "active" : null}`} style={{ backgroundImage: `url("${data.thumbnail.url}")` }}></div>
				<ul className="tags">
					{data.tag.map((el, index) => (
						<li className={"tag-list"} key={index}>{`#${el}`}</li>
					))}
				</ul>
				<div className="info">
					<div className="title">
						<p className="title-text">{data.title}</p>
						{/* <Avatar url={data.user.profile.url} /> */}
					</div>
					<p className="text">{data.text}</p>
					<div className="user">
						<Avatar url={data.user.profile.url} />
						<p className="username">{`${data.user.firstName}, ${data.user.lastName}`}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectList;
