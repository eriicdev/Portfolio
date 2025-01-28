import Avatar from "../../components/Avatar";
import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Titulo";
import { Descricao, BotaoTema, SidebarContainer } from "./styles";

const Sidebar = () => (
    <aside>
        <SidebarContainer>
        <Avatar/>
        <Titulo fontSize={20}>Erik Costa</Titulo>
        <Paragrafo fontSize={16} tipo="secundario" >eriicdev</Paragrafo>
        <Descricao tipo="principal" fontSize={12}>Engenheiro de Software</Descricao>
        <BotaoTema>Trocar tema</BotaoTema>
        </SidebarContainer>
    </aside>
)

export default Sidebar;