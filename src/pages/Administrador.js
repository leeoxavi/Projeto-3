import './Administrador.css'
import { Outlet, Link } from "react-router-dom";

const Administrador = () => {
    return (

        <section className='features2'>
            <h1>O QUE QUER FAZER?</h1>

                <div class="box-container2">
                    <div class="box2">
                        <img src='https://cdn-icons-png.flaticon.com/512/151/151899.png'></img>
                        <li>
                        <Link to="/cadastro">Adicionar</Link>
                        </li>
                    </div>
                    <div class="box2">
                        <img src='https://cdn-icons-png.flaticon.com/512/3917/3917754.png'></img>
                        <li>
                        <Link to="/busca">Procurar, editar e deletar</Link>
                        </li>
                    </div>
                </div>

        </section>
    )
  };
  
  export default Administrador;