const main = () => {
  // console.log(`window.RICKANDMORTY`, window.RICKANDMORTY);
  const showData = arrayData => {
    // Esta función debe de recibir una arraglo de objetos
    // Y debe de retornar una string de tarjetas.
    let template = '';
    arrayData.forEach(element => {
      template += `<div>
                    <img src="${element.image}"/>
                    <p>${element.name}</p>
                    <p>${element.species}</p>
                  <div>`;
    });
    return template;
  };

  document.getElementById('root').innerHTML = showData(window.RICKANDMORTY.results);


};
window.addEventListener('load', main);
