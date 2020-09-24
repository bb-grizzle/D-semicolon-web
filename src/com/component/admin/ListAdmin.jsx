import React from "react";
import PropTypes from "prop-types";
const ListAdmin = ({ title, contents }) => {
	return (
		<li className="ListAdmin">
			<h3 className="listTitle">{title}</h3>
			<ul className="contents-wrapper">
				{contents.map((el) => {
					return (
						<li key={el.keyValue}>
							<p className="key">{el.keyValue}</p>
							<p className="value">{el.value}</p>
						</li>
					);
				})}
			</ul>
		</li>
	);
};

ListAdmin.propTypes = {
	title: PropTypes.string.isRequired,
	contents: PropTypes.arrayOf(
		PropTypes.shape({
			keyValue: PropTypes.shape,
			value: PropTypes.shape
		})
	).isRequired
};

export default ListAdmin;
