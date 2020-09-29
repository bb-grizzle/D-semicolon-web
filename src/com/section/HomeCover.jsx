import React, { useEffect, useState } from "react";

// image
import img_01 from "image/intro/intro_01.png";
import img_02 from "image/intro/intro_02.png";
import img_03 from "image/intro/intro_03.png";
import img_04 from "image/intro/intro_04.png";
import img_05 from "image/intro/intro_05.png";
import img_06 from "image/intro/intro_06.png";
import img_07 from "image/intro/intro_07.png";
import img_08 from "image/intro/intro_08.png";
import img_09 from "image/intro/intro_09.png";
import img_10 from "image/intro/intro_10.png";
import img_11 from "image/intro/intro_11.png";
import img_12 from "image/intro/intro_12.png";
import img_13 from "image/intro/intro_13.png";
import img_14 from "image/intro/intro_14.png";
import img_15 from "image/intro/intro_15.png";
import img_16 from "image/intro/intro_16.png";
import semi_w from "image/icon/semicolon_w.svg";
import semi_b from "image/icon/semicolon_b.svg";
import { useInterval } from "../../Hooks/useInterval";

const intro_arr = [img_01, img_02, img_03, img_04, img_05, img_06, img_07, img_08, img_09, img_10, img_11, img_12, img_13, img_14, img_15, img_16];

const HomeCover = () => {
	const [introImage, setIntroImage] = useState(0);
	const [semi, setSemi] = useState(0);

	const makeRandomImage = () => {
		const rand = Math.floor(Math.random() * intro_arr.length);
		setIntroImage(rand);

		let randSemi = false;
		if (rand % 2) {
			randSemi = false;
		} else {
			randSemi = true;
		}
		setSemi(randSemi);
	};

	useInterval(makeRandomImage, 500);

	useEffect(() => {
		makeRandomImage();
	}, []);

	return (
		<section className="HomeCover">
			<div className="con div">
				<div className="wrap-img">
					<div className="intro" style={{ backgroundImage: `url('${intro_arr[introImage]}')` }} alt="intro"></div>
					<img className="semicolon" src={semi ? semi_w : semi_b} alt="seicolon" />
				</div>
			</div>
		</section>
	);
};

export default HomeCover;
