const contenedorProductos = document.getElementById('contenedor-productos');
const selecTalles = document.getElementById('selecTalles')

selecTalles.addEventListener('change', ()=>{
    console.log(selecTalles.value)
    if(selecTalles.value == 'all'){
        mostrarProductos(stockProductos)
    }else{
        console.log(stockProductos.filter(el => el.talle == selecTalles.value))
        mostrarProductos(stockProductos.filter(el => el.talle == selecTalles.value))
    }
})


mostrarProductos(stockProductos)


function mostrarProductos(array){
    contenedorProductos.innerHTML= "";
  array.forEach(producto =>{
      let div = document.createElement('div')
      div.className = 'producto'
      div.innerHTML = `
                        <div class="card">
                            <span class="card-title">${producto.nombre}</span>
                            <div class="card-content">
                                <p>${producto.desc}</p>
                                <p>Talle: ${producto.talle}</p>
                                <p> $${producto.precio}</p>
                            </div>
                    </div>
      `
      contenedorProductos.appendChild(div)
  })
     
 }