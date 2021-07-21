import React from "react";
import Btnicon from "./Btnicon";
import ic_download from "image/icon/ic-download.svg";
import ic_link from "image/icon/ic-link.svg";

const StudylistDefault = ({ className, data }) => {
	return (
		<li className={`StudylistDefault ${className}`}>
			<div className="row header">
				<p className="title">{data.title}</p>
				<div className="btn-wrapper">
					{data.file && <Btnicon img={ic_download} href={data.file.url} download={true} />}
					{data.link && <Btnicon img={ic_link} href={data.link} />}
				</div>
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
