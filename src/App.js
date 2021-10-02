import logo from './logo.svg';
import './Styles/styles.css';
import Logo from "./media/descarga.jpg"
import BorderCollie from './media/Border Collie.jpg'
import Rhodesia from "./media/Rhodesia.jpg"

function App() {
  return (
    <div className="App">
      <header>
        <ul className="navpar">
            <li>
              <img src={Logo} alt="Logo" className="logo"/>
            </li>
            <li>
                <button className="button mainButton">Nuevo post</button>
            </li>
            <li>
                <div className="buscar button iconoBusqueda">
                    <input placeholder="Buscar una raza"/>
                    <i className="fas fa-search"></i>
                </div>
            </li>
            <li>
                <button className="button secondaryButton">Iniciar sesion</button>
            </li>
            <li>
                <button className="button mainButton">Registro</button>
            </li>

        </ul>
    </header>
    <main>
        <section>
            <h1 className="ajustesTitulo">RAZAS DE PERROS</h1>
            <ul className="breedCardContainer">
                <li className="Breadcard">
                    <div className="contenedorImagen">
                        <img src={BorderCollie} alt="Border Collie"/> 
                    </div>
                    <span className="BreadTittle">Border Collie</span>
                    <ul className="etiquetas">
                        <li>
                            <i className="fas fa-heart heard"></i>
                            150
                        </li>
                        <li>
                            <i className="fas fa-comment"></i>
                            1.5K
                        </li>
                        <li>
                            <i className="fas fa-eye"></i>
                            120
                        </li>
                    </ul>
                </li>
                <li className="Breadcard">
                    <div className="contenedorImagen">
                        <img src={Rhodesia} alt="Rhodesia"/>
                    </div>
                    <span className="BreadTittle">Rhodesia</span> 
                    <ul className="etiquetas">
                        <li>
                            <i className="fas fa-heart heard"></i>
                            450
                        </li>
                        <li>
                            <i className="fas fa-comment"></i>
                            1.1K
                        </li>
                        <li>
                            <i className="fas fa-eye"></i>
                            850
                        </li>
                    </ul>
                </li>
            </ul>
        </section>

        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
