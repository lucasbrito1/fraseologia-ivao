import React, { useState } from 'react';
import { Box } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '@fontsource/roboto/400.css';
import { Atc, BoxFrase, BoxTexto, Piloto, Accordion } from './Styles';

const Frases = ({ getData, getAtis }) => {

	const [expanded, setExpanded] = useState(false);
	const [selectValue, setSelectValue] = useState({
		cauda: '',
		freq1: '',
		atcTwr: '',
		via: '',
		atcCentroDes: '',
		freqCentroDes: '',
		nivelVoo: '',
		freqApp: '',
	});

	const handleInputFrases = (e) => {
		const { name, value } = e.target

		setSelectValue((prev) => {
			const newDataInput = { ...prev, [name]: value };
			return newDataInput;
		});
	};

	const textAtcOri = () => {
		if (getData.delOri) {
			return 'trafego';
		}

		if (getData.gndOri) {
			return 'solo';
		}

		if (getData.twrOri) {
			return 'torre';
		}

		if (getData.appOri) {
			return 'controle';
		}

		if (getData.ctrOri) {
			return 'centro';
		}

		return 'N/A';
	};

	const textAtc1Ori = () => {
		if (getData.gndOri) {
			return 'solo';
		}

		if (getData.twrOri) {
			return 'torre';

		} else if (getData.appOri) {
			return 'controle';

		} else if (getData.ctrOri) {
			return 'centro';

		} else {
			return 'UNICOM';
		}
	};

	const textAtc2Ori = () => {
		if (getData.twrOri) {
			return 'torre';

		} else if (getData.appOri) {
			return 'controle';

		} else if (getData.ctrOri) {
			return 'centro';

		} else {
			return 'UNICOM';
		}
	};

	const textAtc3Ori = () => {
		if (getData.appOri) {
			return 'controle';

		} else if (getData.ctrOri) {
			return 'centro';

		} else {
			return 'UNICOM';
		}
	};

	const textAtc4Ori = () => {
		if (getData.ctrOri) {
			return 'centro';

		} else {
			return 'UNICOM';
		}
	};

	const textAtcDes = () => {
		if (getData.ctrDes) {
			return 'centro';
		}

		if (getData.appDes) {
			return 'controle';
		}

		if (getData.twrDes) {
			return 'torre';
		}

		if (getData.gndDes) {
			return 'solo';
		}

		return 'UNICOM';
	};

	const textAtcDes1 = () => {
		if (getData.appDes) {
			return 'controle';
		}

		if (getData.twrDes) {
			return 'torre';
		}

		if (getData.gndDes) {
			return 'solo';
		}

		return 'UNICOM';
	};

	const hora = () => {
		if (horas >= 1) {
			return 'boa noite';
		} else if (horas >= 5 && horas <= 11) {
			return 'bom dia';
		} else if (horas <= 17) {
			return 'boa tarde';
		} else {
			return 'boa noite';
		}
	};

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const atc = <b>{textAtcOri().toUpperCase()}</b>
	const atc1 = <b>{textAtc1Ori().toUpperCase()}</b>
	const atc2 = <b>{textAtc2Ori().toUpperCase()}</b>
	const atc3 = <b>{textAtc3Ori().toUpperCase()}</b>
	const atc4 = <b>{textAtc4Ori().toUpperCase()}</b>
	const atcDes = <b>{textAtcDes().toUpperCase()}</b>
	const atcDes1 = <b>{textAtcDes1().toUpperCase()}</b>
	const atis = <b>{getAtis}</b>
	const airline = <b>{getData.airline}{getData.flightN}</b>
	const arrive = <b>{getData.arrive}</b>
	const altitude = <b>{getData.altitude}</b>
	const pistaOri = <b>{getData.pistaOri}</b>
	const sid = <b>{getData.sid}</b>
	const trans = <b>{getData.trans}</b>
	const cauda = <b>{selectValue.cauda}</b>
	const taxiOri = <b>{getData.taxiOri}</b>
	const atcTwr = <b>{selectValue.atcTwr}</b>
	const atcControle = <b>{selectValue.atcControle}</b>
	const atcCentro = <b>{selectValue.atcCentro}</b>
	const atcCentroDes = <b>{selectValue.atcCentroDes}</b>
	const via = <b>{selectValue.via}</b>
	const freq = <b>122.800</b>
	const nivelVoo = <b>{selectValue.nivelVoo}</b>
	const freqApp = <b>{selectValue.freqApp}</b>
	const procedi = <b>{getData.procedi}</b>
	const pistaDes = <b>{getData.pistaDes}</b>
	const date = new Date();
	const horas = date.getHours();
	const bom = hora();

	return (
		<>
			<Box sx={{
				p: '0 1rem 1rem',
			}}>
				{getData.delOri || getData.gndOri || getData.twrOri || getData.appOri || getData.ctrOri ? <Accordion disableGutters expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
						sx={{ flexDirection: 'row-reverse' }}
					>
						<Typography>
							Aprovação do Plano de Voo
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<BoxFrase>
							<Piloto>
								P
							</Piloto>
							<BoxTexto>
								<Typography>
									{atc}, {bom} com você o {airline} solicita {arrive} no nível de voo {altitude} ciente da {atis}
								</Typography>
							</BoxTexto>
						</BoxFrase>
						<BoxFrase>
							<Atc>
								A
							</Atc>
							<Piloto>
								P
							</Piloto>
							<BoxTexto>
								<Typography>
									Autorizado {arrive} nível de voo {altitude} pista em uso {pistaOri} perfil de saída {sid} com transição {trans} transponder <Input type='number' sx={{ m: '0 3px', width: '4rem', fontWeight: 'bold' }} /> cotejou {airline}
								</Typography>
							</BoxTexto>
						</BoxFrase>
						{getData.delOri && <> <BoxFrase>
							<Atc>
								A
							</Atc>
							<BoxTexto>
								<Typography>
									{airline} cotejamento correto, para pushback e acionamento coordene com a {atc1} na frequência {getData.gndOri || getData.twrOri || getData.appOri || getData.ctrOri ? <Input
										type='number'
										name='freq1'
										value={selectValue.fre1}
										onChange={handleInputFrases}
										sx={{ margin: '0 3px', width: '5rem', fontWeight: 'bold' }}
									/> : freq}, bom voo!
								</Typography>
							</BoxTexto>
						</BoxFrase>
							<BoxFrase>
								<Piloto>
									P
								</Piloto>
								<BoxTexto>
									<Typography>
										Vai coordenar com a {atc1} na frequência {freq} para pushback e acionamento o {airline}. Até a próxima!
									</Typography>
								</BoxTexto>
							</BoxFrase></>}
						{!getData.delOri && <> <BoxFrase>
							<Atc>
								A
							</Atc>
							<BoxTexto>
								<Typography>{airline} cotejamento correto, reporte quando pronto para pushback e acionamento.</Typography>
							</BoxTexto>
						</BoxFrase>

							<BoxFrase>
								<Piloto>
									P
								</Piloto>
								<BoxTexto>
									<Typography>Vai reportar para pushback e acionamento o {airline}</Typography>
								</BoxTexto>
							</BoxFrase> </>}
					</AccordionDetails>
				</Accordion> : ''}

				{getData.gndOri || getData.twrOri || getData.appOri || getData.ctrOri ? <Accordion disableGutters expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
						sx={{ flexDirection: 'row-reverse' }}
					>
						<Typography>Autorização para o Pushback</Typography>
					</AccordionSummary>

					<AccordionDetails>
						<BoxFrase>
							<Piloto>
								P
							</Piloto>
							<BoxTexto>
								<Typography>
									{atc1} pronto para pushback e acionamento o {airline}
								</Typography>
							</BoxTexto>
						</BoxFrase>

						<BoxFrase>
							<Atc>
								A
							</Atc>
							<BoxTexto>
								<Typography>
									{airline} autorizado pushback e acionamento, com cauda à <FormControl variant="standard" sx={{ minWidth: 80, verticalAlign: 0 }}>
										<InputLabel id="demo-simple-select-standard-label"></InputLabel>
										<Select
											labelId="demo-simple-select-standard-label"
											id="demo-simple-select-standard"
											autoWidth
											name='cauda'
											value={selectValue.cauda}
											onChange={handleInputFrases}
											style={{ margin: '0 3px', fontWeight: 'bold' }}
										>
											<MenuItem value={'ESQUERDA'}>ESQUERDA</MenuItem>
											<MenuItem value={'DIREITA'}>DIREITA</MenuItem>
										</Select>
									</FormControl> reporte pronto para táxi
								</Typography>
							</BoxTexto>
						</BoxFrase>

						<BoxFrase>
							<Piloto>
								P
							</Piloto>
							<BoxTexto>
								<Typography>
									Autorizado pushback cauda a {cauda} e vai reportar pronto para o taxi o {airline}
								</Typography>
							</BoxTexto>
						</BoxFrase>
					</AccordionDetails>
				</Accordion> : ''}
				{getData.gndOri || getData.twrOri || getData.appOri || getData.ctrOri ? <Accordion disableGutters expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
						sx={{ flexDirection: 'row-reverse' }}
					>
						<Typography>
							Autorização para o Táxi de Origem
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<BoxFrase>
							<Piloto>
								P
							</Piloto>
							<BoxTexto>
								<Typography>
									{atc1} pronto para táxi o {airline}
								</Typography>
							</BoxTexto>
						</BoxFrase>

						<BoxFrase>
							<Atc>
								A
							</Atc>
							<BoxTexto>
								<Typography>
									{airline} táxi autorizado via {taxiOri} até o ponto de espera da pista {pistaOri}
								</Typography>
							</BoxTexto>
						</BoxFrase>

						<BoxFrase>
							<Piloto>
								P
							</Piloto>
							<BoxTexto>
								<Typography>
									Táxi autorizado via {taxiOri} até o ponto de espera da pista {pistaOri}, {airline}
								</Typography>
							</BoxTexto>
						</BoxFrase>
					</AccordionDetails>
				</Accordion> : ''}
				{getData.gndOri || getData.twrOri || getData.appOri || getData.ctrOri ? <><Accordion disableGutters expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
						sx={{ flexDirection: 'row-reverse' }}
					>
						<Typography>
							Autorização para a Decolagem de Origem
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						{getData.gndOri && <> <BoxFrase>
							<Piloto>
								P
							</Piloto>
							<BoxTexto>
								<Typography>
									{atc1} o {airline} no ponto de espera da pista {pistaOri}
								</Typography>
							</BoxTexto>
						</BoxFrase>
							<BoxFrase>
								<Atc>
									A
								</Atc>
								<BoxTexto>
									<Typography>
										Ciente {airline}, coordene agora com a {getData.twrOri ? atc2 : atc3} na frequência {getData.twrOri || getData.appOri || getData.ctrOri ? <Input
											type='number'
											name='atcTwr'
											value={selectValue.atcTwr}
											onChange={handleInputFrases}
											sx={{ margin: '0 3px', width: '5rem', fontWeight: 'bold' }}
										/> : freq}
									</Typography>
								</BoxTexto>
							</BoxFrase>
							<BoxFrase>
								<Piloto>
									P
								</Piloto>
								<BoxTexto>
									<Typography>
										Vai coordenar com a {atc2} na frequência {getData.twrOri ? atcTwr : freq} o {airline}
									</Typography>
								</BoxTexto>
							</BoxFrase> </>}
						{getData.twrOri || getData.appOri || getData.ctrOri ? <> <BoxFrase>
							<Piloto>
								P
							</Piloto>
							<BoxTexto>
								<Typography>
									{atc2} {airline} no ponto de espera da pista {pistaOri} pronto para decolagem
								</Typography>
							</BoxTexto>
						</BoxFrase>
							<BoxFrase>
								<Atc>
									A
								</Atc>
								<Piloto>
									P
								</Piloto>
								<BoxTexto>
									<Typography>
										Autorizada a decolagem da pista {pistaOri}, ajuste <Input type='number' sx={{ m: '0 3px', width: '4rem', fontWeight: 'bold' }} /> {airline}
									</Typography>
								</BoxTexto>
							</BoxFrase> </> : ''}
					</AccordionDetails>
				</Accordion> </> : ''}
				{getData.twrOri || getData.appOri || getData.ctrOri ? <> <Accordion disableGutters expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
						sx={{ flexDirection: 'row-reverse' }}
					>
						<Typography>
							Transferência para o Controle de Origem
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						{getData.twrOri && <> <BoxFrase>
							<Atc>
								A
							</Atc>
							<BoxTexto>
								<Typography>
									{airline} chame {atc3} na frequencia {getData.appOri || getData.ctrOri ? <Input type='number'
										name='atcControle'
										value={selectValue.atcControle}
										onChange={handleInputFrases}
										autoWidth
										sx={{ margin: '0 3px', width: '5rem', fontWeight: 'bold' }}
									/> : freq}
								</Typography>
							</BoxTexto>
						</BoxFrase>
							<BoxFrase>
								<Piloto>
									P
								</Piloto>
								<BoxTexto>
									<Typography>
										Vai chamar {atc3} na frequência {getData.appOri || getData.ctrOri ? atcControle : freq} o {airline}, obrigado e até a próxima
									</Typography>
								</BoxTexto>
							</BoxFrase> </>}
						{(getData.appOri || getData.ctrOri) && <> <BoxFrase>
							<Piloto>
								P
							</Piloto>
							<BoxTexto>
								<Typography>
									{atc3}, o {airline} com você
								</Typography>
							</BoxTexto>
						</BoxFrase>
							<BoxFrase>
								<Atc>
									A
								</Atc>
								<BoxTexto>
									<Typography>
										{airline} contate o radar na decolagem, suba <FormControl variant="standard" sx={{ verticalAlign: 0 }}>
											<InputLabel id="demo-simple-select-standard-label"></InputLabel>
											<Select
												labelId="demo-simple-select-standard-label"
												id="demo-simple-select-standard"
												autoWidth
												name='via'
												value={selectValue.via}
												onChange={handleInputFrases}
												style={{ margin: '0 3px', fontWeight: 'bold' }}
											>
												<MenuItem value={'via'}>via</MenuItem>
												<MenuItem value={'sem restrições'}>sem restrições</MenuItem>
											</Select>
										</FormControl> e reporte no nível de voo {altitude}
									</Typography>
								</BoxTexto>
							</BoxFrase>
							<BoxFrase>
								<Piloto>
									P
								</Piloto>
								<BoxTexto>
									<Typography>
										Vai subir {via} e reportar no {altitude}, {airline}
									</Typography>
								</BoxTexto>
							</BoxFrase>
							<BoxFrase>
								<Piloto>
									P
								</Piloto>
								<BoxTexto>
									<Typography>
										{airline} reportando nível de voo {altitude}
									</Typography>
								</BoxTexto>
							</BoxFrase>
							{getData.appOri && <> <BoxFrase>
								<Atc>
									A
								</Atc>
								<BoxTexto>
									<Typography>
										Ciente {airline}, coordene agora com o {atc4}, na frequência {getData.appOri && getData.ctrOri ? <Input
											type='number'
											name='atcCentro'
											value={selectValue.atcCentro}
											onChange={handleInputFrases}
											sx={{ margin: '0 3px', width: '5rem', fontWeight: 'bold' }}
										/> : freq} bom voo
									</Typography>
								</BoxTexto>
							</BoxFrase>
								<BoxFrase>
									<Piloto>
										P
									</Piloto>
									<BoxTexto>
										<Typography>
											Vai coordenar com o {atc4} na frequência {getData.ctrOri ? atcCentro : freq}, até a próxima, obrigado
										</Typography>
									</BoxTexto>
								</BoxFrase> </>} </>}
					</AccordionDetails>
				</Accordion> </> : ''}

				{(getData.ctrOri || getData.ctrDes) && <Accordion disableGutters expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
						sx={{ flexDirection: 'row-reverse' }}
					>
						<Typography>Transferência para o Centro</Typography>
					</AccordionSummary>

					<AccordionDetails>
						{getData.ctrOri && <> <BoxFrase>
							<Piloto>
								P
							</Piloto>
							<BoxTexto>
								<Typography>
									{atc4}, {bom}, {airline} com você
								</Typography>
							</BoxTexto>
						</BoxFrase>
							<BoxFrase>
								<Atc>
									A
								</Atc>
								<BoxTexto>
									<Typography>
										{airline} suba e matenha o nível voo {altitude} reporte no ideal de descida
									</Typography>
								</BoxTexto>
							</BoxFrase>
							<BoxFrase>
								<Piloto>
									P
								</Piloto>
								<BoxTexto>
									<Typography>
										Vai subir para o nível de voo {airline} e reportar no ideal de descida o {airline}
									</Typography>
								</BoxTexto>
							</BoxFrase>
							<BoxFrase>
								<Atc>
									A
								</Atc>
								<BoxTexto>
									<Typography>
										{airline} transfira {atcDes} na frequência {getData.ctrDes ? <Input
											type='text'
											name='atcCentroDes'
											value={selectValue.atcCentroDes}
											onChange={handleInputFrases}
											sx={{ margin: '0 3px', width: '5rem', fontWeight: 'bold' }}
										/> : freq}
									</Typography>
								</BoxTexto>
							</BoxFrase>
							<BoxFrase>
								<Piloto>
									P
								</Piloto>
								<BoxTexto>
									<Typography>
										Vai chamar {atcDes} na frequência {atcCentroDes}, {airline}
									</Typography>
								</BoxTexto>
							</BoxFrase> </>}

						{getData.ctrDes && <> <BoxFrase>
							<Piloto>
								P
							</Piloto>
							<BoxTexto>
								<Typography>
									{atcDes}, {bom} o {airline} com você
								</Typography>
							</BoxTexto>
						</BoxFrase>
							<BoxFrase>
								<Atc>
									A
								</Atc>
								<BoxTexto>
									<Typography>
										{airline} mantenha rota conforme o plano e informe no ideal de descida
									</Typography>
								</BoxTexto>
							</BoxFrase>
							<BoxFrase>
								<Piloto>
									P
								</Piloto>
								<BoxTexto>
									<Typography>
										Ciente, vai informar no ideal de descida, {airline}
									</Typography>
								</BoxTexto>
							</BoxFrase>
							<BoxFrase>
								<Piloto>
									P
								</Piloto>
								<BoxTexto>
									<Typography>
										{atcDes}, o {airline} no ideal de descida
									</Typography>
								</BoxTexto>
							</BoxFrase>
							<BoxFrase>
								<Atc>
									A
								</Atc>
								<BoxTexto>
									<Typography>
										{airline} desça via para o nível de voo <Input type='number'
											name='nivelVoo'
											value={selectValue.nivelVoo}
											onChange={handleInputFrases}
											sx={{ margin: '0 3px', width: '5rem', fontWeight: 'bold' }}
										/>, prepare chegada, {procedi} pista {pistaDes} de {arrive}
									</Typography>
								</BoxTexto>
							</BoxFrase>
							<BoxFrase>
								<Piloto>
									P
								</Piloto>
								<BoxTexto>
									<Typography>
										Vai descer via para o nível de voo {nivelVoo} e preparar chegada, {procedi} pista {pistaDes} de {arrive} o {airline}
									</Typography>
								</BoxTexto>
							</BoxFrase> </>}
						{getData.ctrDes && getData.appDes && <> <BoxFrase>
							<Atc>
								A
							</Atc>
							<BoxTexto>
								<Typography>
									{airline} serviço radar encerrado, coordene agora com o {atcDes1} na frequência <Input type='number'
										name='freqApp'
										value={selectValue.freqApp}
										onChange={handleInputFrases}
										sx={{ margin: '0 3px', width: '5rem', fontWeight: 'bold' }}
									/>
								</Typography>
							</BoxTexto>
						</BoxFrase>
							<BoxFrase>
								<Piloto>
									P
								</Piloto>
								<BoxTexto>
									<Typography>
										Vai coordenar com o {atcDes1} na frequência {freqApp} o {airline}, obrigado e até a próxima
									</Typography>
								</BoxTexto>
							</BoxFrase> </>}
					</AccordionDetails>
				</Accordion>}
			</Box>
		</>
	)
}

export default Frases