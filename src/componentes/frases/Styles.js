import { styled } from "@mui/material/styles";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

export const BoxFrase = styled('div')`
    margin: 15px 0;
    display: flex;
    justify-content: flex-start;
`;

export const BoxTexto = styled('div')`
    display: flex;
    align-items: center;
    width: 15rem;
    
    @media screen and (min-width: 800px) {
        width: 50rem;
    }
`;

export const Piloto = styled('div')`
    background-color: #008a17;
    border-radius: 5px;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 20px;
    margin-right: 10px;
`;

export const Atc = styled('div')`
    background-color: #e20000;
    border-radius: 5px;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 20px;
    margin-right: 10px;
`;

export const Accordion = styled(MuiAccordion)`
    :first-of-type {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }

    :last-of-type {
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    
    box-shadow: none;
`;

export const AccordionDetails = styled(MuiAccordionDetails)`
    border-top: 1px solid rgba(0, 0, 0, .125);
`;