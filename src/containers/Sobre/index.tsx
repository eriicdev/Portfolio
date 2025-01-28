import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
    <section>
        <Titulo fontSize={16}>Sobre mim</Titulo>
        <Paragrafo tipo ="principal">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi repudiandae amet quod saepe similique. Modi, eveniet quos dicta, ipsam, laborum sequi numquam obcaecati consectetur exercitationem atque provident repudiandae a tempore.
        </Paragrafo>
        <GithubSecao>
            <img src="https://github-readme-stats.vercel.app/api?username=eriicdev&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=eriicdev&layout=compact&langs_count=7&theme=dracula"/>
        </GithubSecao>
    </section>
)

export default Sobre;