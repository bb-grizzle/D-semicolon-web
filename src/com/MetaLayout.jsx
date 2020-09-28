import React from "react";
import { Helmet } from "react-helmet";
const MetaLayout = ({ headData }) => {
	return (
		<Helmet>
			<meta name="description" content={headData.description} />

			<meta
				name="viewport"
				content="height=device-height, 
                  width=device-width, initial-scale=1.0, 
                  minimum-scale=1.0, maximum-scale=1.0, 
                  user-scalable=no"
			></meta>

			<meta property="og:title" content={headData.title} />
			<meta property="og:site_name" content={headData.title} />
			<meta property="og:url" content={headData.url} />
			<meta property="og:description" content={headData.description} />
			<meta property="og:image" content="/thumbnail.png" />
			<meta property="og:type" content="website" />

			<link rel="apple-touch-icon" href="/favicon.png"></link>
			<link rel="shortcut icon" href="/favicon.png"></link>
		</Helmet>
	);
};

export default MetaLayout;
