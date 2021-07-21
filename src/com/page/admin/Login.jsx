import React, { useContext, useEffect } from "react";
import InputDefault from "../../component/input/InputDefault";
import useInput from "../../../Hooks/useInput";
import Submit from "../../component/input/Submit";
import { fbSignin } from "../../../Firebase/firebase";
import { AdminContext } from "../../context/AdminProvider";
import SectionTitle from "../../component/SectionTitle";
import { AppContext } from "../../../shared/App";

const Login = () => {
	const emailInput = useInput("");
	const passwordInput = useInput("");
	const { setIsLogin } = useContext(AdminContext);
	const { setLoading } = useContext(AppContext);

	useEffect(() => {
		setLoading(false);
	}, [setLoading]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fbSignin(emailInput.value, passwordInput.value);
			if (res) {
				setIsLogin(true);
				setLoading(true);
			} else {
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="pageWrapper admin">
			<div className="con-small">
				<SectionTitle title="log in" />
				<form onSubmit={handleSubmit}>
					<InputDefault {...emailInput} placeholder="email" label={"email"} type="email" />
					<InputDefault {...passwordInput} placeholder="password" label={"password"} type="password" />
					<Submit value="로그인" />
				</form>
			</div>
		</div>
	);
};

export default Login;
