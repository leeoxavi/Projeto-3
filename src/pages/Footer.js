import './Footer.css'
import { Outlet, Link } from "react-router-dom";



const Contact = () => {

    function addItem(elmt) {
        alert("E-mail cadastrado em nosso sistema!");
        }

    return (

        <footer className='footer'>
        <div className='container-footer'>
            <div className='row-footer'>
                <div className='footer-col'>
                    <h4>Informações</h4>
                    <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Produtos</Link>
                    </li>
                    <li>
                        <Link to="/contact">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/Adm">Administrador</Link>
                    </li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h4>Mais Pedidos</h4>
                    <ul>
                    <li>
                        <Link to="/blogs">Heineken</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Stella Artois</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Vodka</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Whisky</Link>
                    </li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h4>Outros</h4>
                    <ul>
                        <li><a></a>Política de Privacidade</li>
                        <li><a></a>Política de Reembolso</li>
                        <li><a></a>Política de Cookies</li>
                        <li><a></a>Termos e Condições</li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h4>Newsletter e Cupons</h4>
                    <input type="email" placeholder='Digite seu email...' className='email'></input>
                    <button onClick={addItem} className='botaofinal'>Registrar email</button>
                </div>
            </div>
        </div>
    </footer>

    )
  };
  
  export default Contact;