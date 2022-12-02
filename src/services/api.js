export const  getApi=async ()=>{
    const url='https://json-server-vert.vercel.app/Principais-Bebidas';
    let response=await fetch(url);
    let data=await response.json();
    return data;

}

export const putAPi=async (dados)=>{

    const dadosJson=JSON.stringify({
      nome: dados.target[1].value,
      sobrenome: dados.target[2].value,
      dataNascimento: dados.target[3].value,
      tel: dados.target[4].value,
    });
    

    const response=await fetch(`https://json-server-vert.vercel.app/Principais-Bebidas/${dados.target[1].dataset.bebidas}`, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: dadosJson
      }
      );
     
    return response;
}



export const deleteApi=async (bebidas)=>{

    const response=await fetch(`https://json-server-vert.vercel.app/Principais-Bebidas/${bebidas}`, {
      method: "DELETE"      
      }
      );
     
    return response;
}