import React from 'react';

const InputCheck = ({label, onChange, value, text}) => {
    return (
        <div className="InputDefault InputCheck inputItem">
			<div className="row">
				<label className="label">{label}</label>
			</div>
			<div className="row">
				<div className="text-wrapper">
                    <p className="text">{text}</p>

                    <label className={`label-checkbox ${value ? 'active' : ''}`}>
                        <p>{value ? "active" : "false"}</p>
					    <input value={label} checked={value} onChange={onChange} type={"checkbox"}  />
                    </label>
					
				</div>
			</div>
		</div>
    );
}

export default InputCheck;