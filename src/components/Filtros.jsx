import { MESES } from "../constants"
import { Fragment, useState } from "react"
import useGastos from "../hooks/useGastos"


const Header = () => {
  const { transacciones } = useGastos()
  const { movimientosFiltrados, setMovimientosFiltrados } = useGastos()

  const comprarMes = claveMes => {

    const transaccionesFiltradas = transacciones.filter(transaccion => {
      const fecha = new Date(transaccion.fecha);
      const mesTransaccion = fecha.getMonth();
      return (mesTransaccion + 1) === claveMes;
    });

    setMovimientosFiltrados(transaccionesFiltradas)

    console.log(movimientosFiltrados);
  }

  return (
    <>
      <div className="d-flex justify-content-center bg-primary rounded-bottom overflow-hidden">
        <ul className="list-group list-group-horizontal p-2   ">
          {
            MESES.map(mes => (
              <Fragment
                key={mes.id}
              >
                <li
                  className="list-group-item  text-white fs-5 border-0 hover-overly"
                  onClick={() => comprarMes(mes.id)}
                >
                  {mes.nombre}
                </li>
              </Fragment>
            ))
          }
        </ul>
      </div>

    </>
  )
}

export default Header



