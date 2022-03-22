import React, { useEffect, useState } from "react"

export const Tabla = () => {
  const [producto, setProducto] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://scratchya.com.ar/react/datos.php")
    const data = await response.json()
    setProducto(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <center>
      <h1>Tabla. Actividad 5</h1><br /><br />
      <table>
          <thead>
              <tr>
              <td>Código</td>
              <td>Descripción</td>
              <td>Precio</td>
              </tr>
        </thead>
        <tbody>
          {producto.map(producto => (
            <tr>
              <td>{producto.codigo}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </center>
  )
}

