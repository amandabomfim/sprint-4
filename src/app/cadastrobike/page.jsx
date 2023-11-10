import ComponenteLogo from "../components/ComponenteLogo";
import ComponenteCadastroBike from "../components/ComponenteCadastroBike";
import "../cadastrobike/cadastrobike.css";

export default function CadastroBike() {
  return (
    <main>
      <div className="logo">
        <ComponenteLogo />
      </div>
      <div className="titulo">CADASTRO BIKE</div>
      <div>
        <ComponenteCadastroBike />
      </div>
    </main>
  );
}
