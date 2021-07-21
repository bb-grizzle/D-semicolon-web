import React, { useContext, useEffect } from "react";
import { useProject } from "../../Data/project";
import { AppContext } from "../../shared/App";
import PageAnimation from "../component/PageAnimation";
import ProjectList from "../component/ProjectList";
const Project = () => {
	const { data, setData } = useProject();
	const { setLoading } = useContext(AppContext);

	useEffect(() => {
		setLoading(true);
	}, [setLoading]);

	useEffect(() => {
		if (data) {
			setLoading(false);
		}
	}, [data, setLoading]);

	useEffect(() => {
		return () => {
			setData(null);
		};
	}, [setData]);

	return (
		<section className="Project paddingDefualt">
			<PageAnimation>
				<div className="project-wrapper con ListWrapperDefault">
					{data && data[0] ? (
						data.map((el) => {
							return <ProjectList key={el.id} data={el} />;
						})
					) : (
						<p>project is empty</p>
					)}
				</div>
			</PageAnimation>
		</section>
	);
};

export default Project;
