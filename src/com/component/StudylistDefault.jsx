import React from "react";
import Btnicon from "./Btnicon";
import ic_download from "image/icon/ic-download.svg";

const StudylistDefault = ({ className, data }) => {
	return (
		<li className={`StudylistDefault ${className}`}>
			<div className="row header">
				<p className="title">{data.title}</p>
				<Btnicon img={ic_download} href={data.file.url} download={true} />
			</div>
			<div className="row body">
				<ul>
					{data.contents.map((el, index) => {
						return (
							<li className="text" key={index}>
								_ {el}
							</li>
						);
					})}
				</ul>
			</div>
		</li>
	);
};

export default StudylistDefault;
