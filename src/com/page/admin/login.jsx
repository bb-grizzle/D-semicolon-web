import React, { useContext } from "react";
import InputDefault from "../../component/input/InputDefault";
import useInput from "../../../Hooks/useInput";
import Submit from "../../component/input/Submit";
import { fbSignin } from "../../../Firebase/firebase";
import { AdminContext } from "../../context/AdminProvider";

const Login = () => {
	const emailInput = useInput("test@test.com");
	const passwordInput = useInput("test@test.com");
	const { setIsLogin } = useContext(AdminContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fbSignin(emailInput.value, passwordInput.value);
			if (res) {
				setIsLogin(true);
			} else {
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="pageWrapper">
			<div className="con-small">
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
