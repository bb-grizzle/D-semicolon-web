import { useState, useEffect } from "react";
import { fbGetData } from "../Firebase/firebase";
import { arrayReverseObj } from "../fn/default";
const COL = "member";
export const LINK_KEY_INITIAL = ["web", "instagram", "facebook", "github"];

export const useMember = () => {
	const [data, setData] = useState();
	useEffect(() => {
		const get = async () => {
			const res = await fbGetData(COL, "grade", "desc");
			let filtered = {};
			res.forEach(el => {
				filtered[el.grade] = filtered[el.grade] ? [...filtered[el.grade], el] : [el]
			})			
			setData(arrayReverseObj(filtered))
		};
		get();
	}, []);

	

	return { data, setData };
};

export const useContactMember = () => {
	const [data, setData] = useState();
	useEffect(() => {
		const get = async () => {
			const res = await fbGetData(COL, "grade", "desc");
			const filter = res.filter(el => el.isContact===true)
			console.log(filter)

			setData(filter);
			
		};
		get();
	}, []);

	return { data, setData };
}

export const MEMBER_INIT = {
	firstName: "",
	lastName: "",
	profile: null,
	email: "",
	tell: "",
	contact: null
};

export default [
	{
		id: 1,
		date: "2018",
		member: [
			{
				firstName: "taewoong",
				lastName: "yoon",
				profile:
					"https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-1/p480x480/56520121_2533666066703855_5762240484953030656_o.jpg?_nc_cat=106&_nc_sid=7206a8&_nc_eui2=AeFJmSabgkuWCF439sja_H9RnYno2zmlqY6diejbOaWpjrX9jm6ePomqGGRf4MaL-sOSFJgTCuquH0l_acOTER5x&_nc_ohc=0WhbS76OJ1oAX8pR26-&_nc_ht=scontent-ssn1-1.xx&_nc_tp=6&oh=e8435628441348320c9fbc64bc6b0346&oe=5F3971CD",
				email: "firbigi1993@gmail.com",
				tell: "010.3603.4925",
				contact: [
					{
						name: "web",
						link: "https://grizzle.co.kr/"
					},
					{
						name: "instagram",
						link: "https://www.instagram.com/bb._.grizzle/"
					},
					{
						name: "facebook",
						link: "https://www.facebook.com/profile.php?id=100001814606690"
					},
					{
						name: "github",
						link: "https://github.com/bb-grizzle"
					}
				]
			},
			{
				firstName: "jusung",
				lastName: "kim",
				profile:
					"https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/41754432_535082890251972_6259641480726446080_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=ewgwHgGUKZYAX8qvKZ1&oh=5fb9ee80bde052cf2ea4122ab11392bd&oe=5F3CA158",
				email: "",
				tell: "",
				contact: [
					{
						name: "web",
						link: "https://jusungkim.kr/"
					},
					{
						name: "instagram",
						link: "https://www.instagram.com/jus0k/"
					}
				]
			},
			{
				firstName: "Haein",
				lastName: "Seo",
				profile:
					"https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/60352622_1934545739980515_700417103353610240_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=f2sqlrEavmEAX99M1Hs&oh=2dce89d9ca54779bb9114568aceb7b95&oe=5F3CDBBB",
				email: "she3719@naver.com",
				tell: "010.4129.2202",
				contact: [
					{
						name: "behance",
						link: "https://www.behance.net/haein3719e28a"
					},
					{
						name: "instagram",
						link: "https://www.instagram.com/haen_zz/"
					}
				]
			},
			{
				firstName: "hyunzoo",
				lastName: "lee",
				profile:
					"https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-1/s480x480/30594629_1514213988689309_4609362174832279552_n.jpg?_nc_cat=103&_nc_sid=7206a8&_nc_eui2=AeFua_sLXkMZkbGWPzN-EQhubmrRI53_eUJuatEjnf95QgyYiCj7BqdEWqfLTop4fbQxxKSBCgGwcbBcyIgQbriB&_nc_ohc=t5hufZRAOgoAX-WGvPW&_nc_ht=scontent-ssn1-1.xx&_nc_tp=7&oh=ec31f99d6f995fd1a375c76074fd11ca&oe=5F39E5D5",
				email: "",
				tell: "",
				contact: [
					{
						name: "facebook",
						link: "https://www.facebook.com/profile.php?id=100003021686358"
					}
				]
			}
		]
	},
	{
		id: 2,
		date: "2019",
		member: [
			{
				firstName: "yoonseo",
				lastName: "ko",
				profile:
					"https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/109178992_344142896577970_6478019605353147355_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=n3iC0De3u8cAX__19AK&oh=b7a7f6fcc8ffc5538d1b71e01e597be7&oe=5F3EBFA2",
				email: "",
				tell: "",
				contact: [
					{
						name: "instagram",
						link: "https://www.instagram.com/_ev_ys/"
					}
				]
			}
		]
	}
];

export const contactMember = [
	{
		firstName: "taewoong",
		lastName: "yoon",
		profile:
			"https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-1/p480x480/56520121_2533666066703855_5762240484953030656_o.jpg?_nc_cat=106&_nc_sid=7206a8&_nc_eui2=AeFJmSabgkuWCF439sja_H9RnYno2zmlqY6diejbOaWpjrX9jm6ePomqGGRf4MaL-sOSFJgTCuquH0l_acOTER5x&_nc_ohc=0WhbS76OJ1oAX8pR26-&_nc_ht=scontent-ssn1-1.xx&_nc_tp=6&oh=e8435628441348320c9fbc64bc6b0346&oe=5F3971CD",
		email: "firbigi1993@gmail.com",
		tell: "010.3603.4925",
		contact: [
			{
				name: "web",
				link: "https://grizzle.co.kr/"
			},
			{
				name: "instagram",
				link: "https://www.instagram.com/bb._.grizzle/"
			},
			{
				name: "facebook",
				link: "https://www.facebook.com/profile.php?id=100001814606690"
			},
			{
				name: "github",
				link: "https://github.com/bb-grizzle"
			}
		]
	},
	{
		firstName: "Haein",
		lastName: "Seo",
		profile:
			"https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/60352622_1934545739980515_700417103353610240_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=f2sqlrEavmEAX99M1Hs&oh=2dce89d9ca54779bb9114568aceb7b95&oe=5F3CDBBB",
		email: "she3719@naver.com",
		tell: "010.4129.2202",
		contact: [
			{
				name: "behance",
				link: "https://www.behance.net/haein3719e28a"
			},
			{
				name: "instagram",
				link: "https://www.instagram.com/haen_zz/"
			}
		]
	}
];
