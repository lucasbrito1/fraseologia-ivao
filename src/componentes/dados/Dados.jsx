import React, { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Frases from '../frases/Frases';
import Metar from '../metar/Metar';
import { TextField } from './Styles';



const Dados = () => {

	const [selectAtis, setSelectAtis] = useState('');
	const [data, setData] = useState({
		airline: '',
		flightN: '',
		depart: '',
		altitude: '',
		pistaOri: '',
		taxiOri: '',
		sid: '',
		trans: '',
		arrive: '',
		procedi: '',
		start: '',
		pistaDes: '',
		taxiDes: '',
		atis: '',
		delOri: false,
		gndOri: false,
		twrOri: false,
		appOri: false,
		ctrOri: false,
		ctrDes: false,
		appDes: false,
		twrDes: false,
		gndDes: false
	});

	const handleChangeCheck = (e) => {
		const { name } = e.target
		setData((prev) => {
			return { ...prev, [name]: !prev[name] };
		});
	};

	const handleChangeInput = (e) => {
		const { name, value } = e.target

		setData((data) => {
			const newData = { ...data, [name]: value.toUpperCase() }
			return newData;
		});
	};

	const options = [
		'ALPHA',
		'BRAVO',
		'CHARLIE',
		'DELTA',
		'ECHO',
		'FOXTROT',
		'GOLF',
		'HOTEL',
		'INDIA',
		'JULIETT',
		'KILO',
		'LIMA',
		'MIKE',
		'NOVEMBER',
		'OSCAR',
		'PAPA',
		'QUEBEC',
		'ROMEO',
		'SIERRA',
		'TANGO',
		'UNIFORM',
		'VICTOR',
		'WHISKEY',
		'X-RAY',
		'YANKEE',
		'ZULU',
	];

	return (
		<>
			<Box sx={{
				display: 'flex',
				flexDirection: { xs: 'column', md: 'row' },
				justifyContent: 'space-between',
				gap: 2,
				p: '1rem',
			}}>
				<Paper elevation={0} sx={{
					borderRadius: '15px',
					p: '20px',
					width: '100%'
				}}>
					<Typography variant='h5' fontWeight='bold'>
						DADOS DE ORIGEM
					</Typography>
					<Box
						sx={{
							mt: 1,
							display: 'flex',
							alignItems: 'center',
							gap: 2
						}}>
						<Typography fontWeight='bold'>
							ATC Online:
						</Typography>
						<Autocomplete
							disablePortal
							size='small'
							inputValue={selectAtis.toUpperCase()}
							onInputChange={(event, newValueAtis) => { setSelectAtis(newValueAtis) }}
							options={options}
							isOptionEqualToValue={(option) => option}
							sx={{}}
							renderInput={(params) => <TextField {...params}
								variant="standard"
								label='INFO ATIS'
								sx={{ width: 160 }}
							/>}
						/>
					</Box>
					<Box sx={{
						m: '5px 0',
					}}>
						<FormControlLabel control={<Checkbox />} label="DEL" name='delOri' onChange={handleChangeCheck} title='Delivery' />
						<FormControlLabel control={<Checkbox />} label="GND" name='gndOri' onChange={handleChangeCheck} title='Ground' />
						<FormControlLabel control={<Checkbox />} label="TWR" name='twrOri' onChange={handleChangeCheck} title='Torre' />
						<FormControlLabel control={<Checkbox />} label="APP" name='appOri' onChange={handleChangeCheck} title='Controle' />
						<FormControlLabel control={<Checkbox />} label="CTR" name='ctrOri' onChange={handleChangeCheck} title='Centro' />
					</Box>

					<Box sx={{
						display: 'flex',
						flexWrap: 'wrap',
						mt: '19px',
					}} >
						<TextField
							id="outlined-size-small"
							size='small'
							label="AIRLINE"
							name='airline'
							value={data.airline}
							onChange={handleChangeInput}
						/>
						<TextField
							id="outlined-size-small"
							size='small'
							label="FLIGHT N°"
							name='flightN'
							value={data.flightN}
							onChange={handleChangeInput}
						/>
						<TextField
							id="outlined-size-small"
							size='small'
							label="DEPART"
							name='depart'
							value={data.depart}
							onChange={handleChangeInput}
							width='auto'
						/>
						<TextField
							id="outlined-size-small"
							size='small'
							label="ALTITUDE"
							name='altitude'
							value={data.altitude}
							onChange={handleChangeInput}
						/>
						<TextField
							id="outlined-size-small"
							size='small'
							label="PISTA"
							name='pistaOri'
							value={data.pistaOri}
							onChange={handleChangeInput}
						/>
						<TextField
							id="outlined-size-small"
							size='small'
							label="TAXI"
							name='taxiOri'
							value={data.taxiOri}
							onChange={handleChangeInput}
						/>
						<TextField
							id="outlined-size-small"
							size='small'
							label="SID"
							name='sid'
							value={data.sid}
							onChange={handleChangeInput}
						/>
						<TextField
							id="outlined-size-small"
							size='small'
							label="TRANS"
							name='trans'
							value={data.trans}
							onChange={handleChangeInput}
						/>
					</Box>
					<Metar
						localidade={data.depart}
					/>
				</Paper>

				<Paper elevation={0} sx={{
					borderRadius: '15px',
					p: '20px',
					width: '100%'
				}}>
					<Typography variant='h5' fontWeight='bold'>
						DADOS DE DESTINO
					</Typography>
					<Box sx={{ mt: '25px' }}>
						<Typography fontWeight='bold'>
							ATC Online:
						</Typography>
					</Box>
					<Box sx={{ m: '19px 0' }}>
						<FormControlLabel control={<Checkbox />} label="CTR" name='ctrDes' onChange={handleChangeCheck} title='Centro' />
						<FormControlLabel control={<Checkbox />} label="APP" name='appDes' onChange={handleChangeCheck} title='Controle' />
						<FormControlLabel control={<Checkbox />} label="TWR" name='twrDes' onChange={handleChangeCheck} title='Torre' />
						<FormControlLabel control={<Checkbox />} label="GND" name='gndDes' onChange={handleChangeCheck} title='Ground' />
					</Box>

					<Box sx={{
						display: 'flex',
						flexWrap: 'wrap',
					}} >
						<TextField
							id="outlined-size-small"
							size='small'
							label="ARRIVE"
							name='arrive'
							value={data.arrive}
							onChange={handleChangeInput}
						/>
						<TextField
							id="outlined-size-small"
							size='small'
							label="PROCEDI"
							name='procedi'
							value={data.procedi}
							onChange={handleChangeInput}
						/>
						<TextField
							id="outlined-size-small"
							size='small'
							label="STAR"
							name='star'
							value={data.star}
							onChange={handleChangeInput}
						/>
						<TextField
							id="outlined-size-small"
							size='small'
							label="PISTA"
							name='pistaDes'
							value={data.pistaDes}
							onChange={handleChangeInput}
						/>
						<TextField
							id="outlined-size-small"
							size='small'
							label="TAXI"
							name='taxiDes'
							value={data.taxiDes}
							onChange={handleChangeInput}
						/>
					</Box>
					<Metar
						localidade={data.arrive}
					/>
				</Paper>
			</Box>
			<Frases
				getData={data}
				getAtis={selectAtis}
			/>
		</>
	)
}

export default Dados