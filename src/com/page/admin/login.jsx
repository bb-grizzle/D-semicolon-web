import React, { useContext } from "react";
import InputDefault from "../../component/input/InputDefault";
import useInput from "../../../Hooks/useInput";
import Submit from "../../component/input/Submit";
import { fbSignin } from "../../../Firebase/firebase";
import { AdminContext } from "../../context/AdminProvider";
import InputFile from "../../component/input/InputFile";
import useFileInput from "../../../Hooks/useFileInput";
import InputKeyValue from "../../component/input/InputKeyValue";
import useKyevalueInput from "../../../Hooks/useKeyevalueInput";
import SectionTitle from "../../component/SectionTitle";

const keys = ["link", "git", "web", "facebook"];

const Login = () => {
	const emailInput = useInput("test@test.com");
	const passwordInput = useInput("test@test.com");
	const { setIsLogin } = useContext(AdminContext);

	const textInput = useInput("");
	const fileInput = useFileInput();
	const keyvalueInput = useKyevalueInput({
		initialKey: keys[0],
		keys: keys
	});

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

	const handleOnCLick = () => {
		console.log("test");
	};
	return (
		<div className="pageWrapper admin">
			<div className="con-small x2">
				<SectionTitle title="log in" />
				<form onSubmit={handleSubmit}>
					<InputDefault {...emailInput} placeholder="email" label={"email"} type="email" />
					<InputDefault {...passwordInput} placeholder="password" label={"password"} type="password" />
					<InputDefault {...textInput} placeholder="input with btn" label="label" type="text" onClick={handleOnCLick} />
					<InputFile {...fileInput} label="input file" />
					<InputKeyValue label="label" {...keyvalueInput} onClick={handleOnCLick} placeholder={"placeholder"} />
					<Submit value="로그인" />
				</form>
			</div>
		</div>
	);
};

export default Login;
