import Transaccion from "./Transaccion"
import useGastos from "../hooks/useGastos"

const listaTransacciones = () => {

    const { transacciones, movimientosFiltrados, filtro } = useGastos()

    return (
        <div className='contenedor mx-auto rounded-3 m-5'>

            {/* Evalua si existe un filtro activo si no existe renderiza todas las transacciones o movimientos */}
            {
                filtro ?

                    <>
                        <h3 className="text-primary text-center fs-4">{movimientosFiltrados.length ? '' : 'No hay movimientos aquí'}</h3>

                        {(movimientosFiltrados.map(transaccion => (
                            <Transaccion
                                key={transaccion.id}
                                transaccion={transaccion}
                            />
                        )))
                        }
                    </>

                    :

                    (
                        <>
                            <h3 className="text-primary text-center fs-4">{transacciones.length ? 'Todos los movimientos' : 'No hay movimientos aquí'}</h3>
                            {
                                transacciones.map(transaccion => (
                                    <Transaccion
                                        key={transaccion.id}
                                        transaccion={transaccion}
                                    />
                                ))
                            }
                        </>
                    )
            }

        </div>
    )
}

export default listaTransacciones