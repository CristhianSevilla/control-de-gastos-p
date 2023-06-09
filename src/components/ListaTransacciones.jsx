import Transaccion from "./Transaccion"
import useGastos from "../hooks/useGastos"


const listaTransacciones = () => {

    const { transacciones, movimientosFiltrados } = useGastos()

    return (
        <div className='contenedor mx-auto rounded-3 m-5'>

            <h3 className="text-primary fs-4">{movimientosFiltrados.length ? '' : 'Aun no hay Transacciones'}</h3>

            {transacciones.map(transaccion => (
                <Transaccion
                    key={transaccion.id}
                    transaccion={transaccion}
                />
            ))}
            {/* {
                movimientosFiltrados ? (movimientosFiltrados.map(transaccion => (
                    <Transaccion
                        key={transaccion.id}
                        transaccion={transaccion}
                    />
                ))) :

                (
                    transacciones.map(transaccion => (
                        <Transaccion
                            key={transaccion.id}
                            transaccion={transaccion}
                        />
                    ))
                )
            } */}

        </div>
    )
}

export default listaTransacciones