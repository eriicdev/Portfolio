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
    color: #eee;
    font-size: 12px;
    font-weight: bold;
    background-color: #282a35;
    border: none;
    cursor: pointer;
`

export const SidebarContainer = styled.div`
    position: sticky;
    top: 80px;
    left: 0;
`