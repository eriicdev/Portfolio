import styled from 'styled-components';
import { P } from '../../components/Paragrafo/styles';

export const Descricao = styled(P)`
    margin-top: 24px;
    margin-bottom: 40px;
    font-weight: bold;
`

export const BotaoTema = styled.button`
    padding: 12px;
    border-radius: 12px;
    color: ${(props) => props.theme.corDeFundo};
    font-size: 12px;
    font-weight: bold;
    background-color: ${(props) => props.theme.corPrincipal};
    border: none;
    cursor: pointer;
`

export const SidebarContainer = styled.div`
    position: sticky;
    top: 80px;
    left: 0;

    @media (max-width: 768px){
        margin-bottom: 40px;
        text-align: center;
    }
`