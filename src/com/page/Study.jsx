import React, { useEffect, useContext } from "react";

import StudyList from "../section/StudyList";
import { useStudy, BASIC_CATEGORY } from "../../Data/study";
import { AppContext } from "../../shared/App";
import PageAnimation from "../component/PageAnimation";

const Study = () => {
	const { data } = useStudy();
	const { setLoading } = useContext(AppContext);
	useEffect(() => {
		if (data) {
			setLoading(false);
		} else {
			setLoading(true);
		}
	}, [data, setLoading]);
	return (
		<section className="Study paddingDefualt">
			<PageAnimation>
				<div className="ListGroupWrapper">
					{data && BASIC_CATEGORY.map((el) => data[el] && <StudyList data={data[el]} key={el} title={el} />)}

					{data &&
						Object.keys(data).map((key) => {
							if (BASIC_CATEGORY.includes(key)) return null;
							return data[key] && <StudyList data={data[key]} key={key} title={key} />;
						})}
				</div>
			</PageAnimation>
		</section>
	);
};

export default Study;
