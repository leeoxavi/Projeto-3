import { useState } from "react";
import './Cadastro.css'
import { Outlet, Link } from "react-router-dom";
import validaCampos from "../../services/validaCampos";



function Cadastro() {

  return (
    <div className='container'>
    <main className='containerAreaGestor'>

      <h1 className='titleAreaGestor'>Não consegui o put :(</h1>

      <form className='formsAreaGestor' onSubmit="handleSubmit" action="#">
        <section className='sectionAreaGestor'>
          <div>

          </div>
        </section>

        <section className='btnAreaGestor'>
          <button

            type={"submit"}
            className='btnConectese'
          >
            Inserir Informações
          </button>
          <small id='textForm'></small>
        </section>
      </form>
    </main>
  </div>
  );
}
  
  export default Cadastro;