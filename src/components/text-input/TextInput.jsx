import React from 'react';
import { object, string } from 'prop-types';
import './TextInput.scss';

const TextInput = ({ field, form, label, placeholder }) => {
	const { errors, touched } = form;
	const { name } = field;
	const isDanger = touched[name] && errors[name];

	return (
		<div className="text-input">
			<label className="label">{label}</label>
			<input
				className={`input text-input__input ${isDanger ? 'is-danger' : ''}`}
				{...field}
				placeholder={placeholder}
				type="text"
			/>
			{isDanger && <p className="text-input__error">{errors[name]}</p>}
		</div>
	);
};

TextInput.propTypes = {
	field: object,
	form: object,
	label: string,
	placeholder: string
};

export default TextInput;
