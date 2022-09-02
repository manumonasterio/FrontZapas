import React from 'react'
import Item from "./Item"
import listaItems from "./data.json"
// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

export default function Listado(props) {
  function contador(){return props.contador()}
  return (
    <div className='container'>
        {listaItems.map((item)=>{  
        return <Item 
        contador={contador}
        key ={item.id}
        id ={item.id}
        nombre= {item.producto.nombre}
        descripcion= {item.producto.descripcion}
        stock= {item.stock}
        />
        })}
    </div>
  );
}
