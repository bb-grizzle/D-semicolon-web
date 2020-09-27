import React from "react";
import PropTypes from "prop-types";
import { useSetNowAction } from "../../context/AdminProvider";
const ListAdmin = ({ id, title, contents, onDeleteClick, onClick, image }) => {
	const setNowAction = useSetNowAction();

	const handleListClick = () => {
		setNowAction("EDIT");
		onClick();
	};
	return (
		<li className="ListAdmin" onClick={handleListClick}>
			{image && (
				<div className="wrap-image">
					<div className="image-full" style={{ backgroundImage: `url("${image}")` }}></div>
				</div>
			)}
			<div className="wrap-text">
				<div className="wrap-title">
					<h3 className="title">{title}</h3>
					<div className="btn-edit" onClick={(e) => onDeleteClick(e, id)}>
						<p>DELETE</p>
					</div>
				</div>
				<ul className="contents-wrapper">
					{contents.map((el) => {
						return (
							<li key={el.keyValue} className="contents">
								<p className="key">{el.keyValue}</p>
								<p className="value">{el.value}</p>
							</li>
						);
					})}
				</ul>
			</div>
		</li>
	);
};

ListAdmin.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	contents: PropTypes.arrayOf(
		PropTypes.shape({
			keyValue: PropTypes.shape,
			value: PropTypes.shape
		})
	).isRequired,
	onDeleteClick: PropTypes.func.isRequired,
	onClick: PropTypes.func.isRequired,
	image: PropTypes.string
};

export default ListAdmin;
