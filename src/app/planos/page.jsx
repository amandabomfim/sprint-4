import "../planos/planos.css";
import ComponenteLogo from "@/components/ComponenteLogo";
import ComponentePlano from "@/components/ComponentePlano";

export default function Plano() {
  return (
    <main>
      {" "}
      <div className="section-plano">
        <div className="logo">
          <ComponenteLogo />
        </div>
        <div className="titulo">ESCOLHA SEU SEGURO</div>

        <div className="plano-container">
          <Link to="/cadastro">
            <div className="pedalEssencial">
              <ComponentePlano titulo="Pedal Essencial">
                <ul>
                  <li>Reparo de câmaras de ar.</li>
                  <li>Reparo ou troca de correntes.</li>
                  <li>Substituição ou regulagem de selim e canote de selim.</li>
                  <li>
                    Substituição e regulagem manetes de freios e cabo de aço.
                  </li>
                  <li>
                    Substituição ou regulagem de freio dianteiro e traseiro.
                  </li>
                </ul>
              </ComponentePlano>
            </div>
          </Link>
          <Link to="/cadastro">
            <div className="pedalLeve">
              <ComponentePlano titulo="Pedal Leve">
                <ul>
                  <li>Todos os benefícios do Pedal Essencial.</li>
                  <li>Lubrificação de correntes e coroas.</li>
                  <li>
                    Transporte do segurado e Bike - limite de 50km, em caso de
                    quebra ou acidente.
                  </li>
                </ul>
              </ComponentePlano>
            </div>
          </Link>
          <Link to="/cadastro">
            <div className="pedalElite">
              <ComponentePlano titulo="Pedal Elite">
                <ul>
                  <li>Todos os beneficios do Pedal Leve.</li>
                  <li>
                    Transporte do segurado e Bike - limite de 150km, em caso de
                    quebra ou acidente.
                  </li>
                  <li>Instalação de suporte de parede e chão para bike.</li>
                  <li>
                    Serviço de Leva e Traz, com limite de 50km, mediante
                    agendamento prévio.
                  </li>
                </ul>
              </ComponentePlano>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
