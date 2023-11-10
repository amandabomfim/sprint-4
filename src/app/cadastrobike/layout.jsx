import ComponenteLogo from '../components/ComponenteLogo';
import ComponenteCadastroBike from '../components/ComponenteCadastroBike';
import "../styles/CadastroBike.css"

export default function CadastroBike() {
    return (
        <main>
        <div className='logo'>
        <ComponenteLogo/>
        </div>
        <div className='titulo'>CADASTRO BIKE</div>
        <div>
            <ComponenteCadastroBike/>
        </div>
        </main>
    );
}