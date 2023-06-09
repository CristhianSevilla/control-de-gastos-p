import { useEffect, useState } from "react"
import useGastos from "../hooks/useGastos"
import { formatearDinero } from "../helpers"

const Balance = () => {

  const [totalIngresos, setTotalIngresos] = useState(0)
  const [totalGastos, setTotalGastos] = useState(0)
  const { movimientosFiltrados, filtro } = useGastos()
  const todosLosGastos = movimientosFiltrados.filter(transaccion => Number(transaccion.tipo) === 2)
  const todosLosIngresos = movimientosFiltrados.filter(transaccion => Number(transaccion.tipo) === 1)

  useEffect(() => {

    //Calculando lo gastado
    const totalGastado = todosLosGastos.reduce((total, gasto) => Number(gasto.cantidad) + total, 0);
    setTotalGastos(totalGastado)

    //Calculando los Ingresos
    const totalIngresos = todosLosIngresos.reduce((total, ingreso) => Number(ingreso.cantidad) + total, 0);
    setTotalIngresos(totalIngresos)


  }, [movimientosFiltrados])

  return (
    <div className='contenedor mx-auto bg-white rounded-3 shadow m-5 p-4'>

      <h2 className='text-center fs-4'>Balance del mes</h2>
      <p className='text-primary text-center fw-bolder fs-1'>{formatearDinero(totalIngresos-totalGastos)}</p>

      <div className="d-flex  justify-content-center mt-4">
        <div className="border-end px-3 text-success mb-3">
          <h3 className="fs-5 text-center">Ingresos</h3>
          <p className='text-center fw-bolder fs-2'>+{formatearDinero(totalIngresos)}</p>
        </div>
        <div className="px-3 text-danger text-center">
          <h3 className="fs-5">Gastos</h3>
          <p className='text-center fw-bolder fs-2' >-{formatearDinero(totalGastos)}</p>
        </div>
      </div>

      <a href="#" className="text-secondary text-decoration-none"><p className="m-0 text-center">Ver analiticas</p></a>

    </div>
  )
}

export default Balance