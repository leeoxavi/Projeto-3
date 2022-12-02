import React from 'react';



function DashboardEscolha() {
  return (
    <main className={styles.container}>
        <h1>Escolha de funcionalidade</h1>

        <div className={styles.container__func}>
            <CardFunc imagem={imgCria} texto="Cadastrar novos alunos" textoAlt="Cadastro de novos Alunos" url="cadastro"/>
            <CardFunc imagem={imgSearch} texto="Buscar alunos" textoAlt="Buscar alunos" url="dashboard-busca"/>           

        </div>

    </main>
  )
}

export default DashboardEscolha;