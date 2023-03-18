import React, { useState, useEffect } from 'react';
import { BoxMetar } from './Styles';

const url = 'https://api-redemet.decea.mil.br/mensagens/metar/';
const apiKey = '?api_key=ouyaq0gZ4pEyTFIz86fJyby2snpspM66yU728dB2';

const Metar = ({ localidade }) => {

	const [metar, setMetar] = useState([]);

	useEffect(() => {
		if (!localidade) return;

		const timer = setTimeout(async () => {
			const getUrl = await fetch(`${url + localidade + apiKey}`);
			const response = await getUrl.json();
			setMetar(response.data.data);
		}, 1000);

		return () => clearTimeout(timer);
	}, [localidade]);

	return (
		<BoxMetar>
			<b>METAR:</b> {metar[0] ? metar[0].mens.substring(6, metar[0].mens.lenght) : null}
		</BoxMetar>
	)
}

export default Metar