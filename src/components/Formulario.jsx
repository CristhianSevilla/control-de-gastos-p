import { Fragment } from "react"
import useGastos from "../hooks/useGastos"
import { TIPOMOV } from "../constants"
import Error from "./Error"

const Formulario = () => {

    const { datos, handleChangeDatos, error, setError, guardarTransaccion } = useGastos()

    const handleSubmit = e => {
        e.preventDefault()

        //Validaciones
        if (Object.values(datos).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }

        setError('')

        guardarTransaccion(datos)
    }

    return (
        <>

            <form className="contenedor align-items-center mx-auto bg-white p-4 rounded shadow" onSubmit={handleSubmit}>
                <legend className="text-center fs-1 mb-4">Nuevo Movimiento</legend>

                {error && <Error />}


                <div className="d-flex flex-column gap-2 mb-4">
                    <label className=" fs-5" htmlFor="movimiento">Tipo de Movimiento</label>
                    <div className="d-flex gap-3">
                        {TIPOMOV.map(tipoMovimiento => (
                            <Fragment
                                key={tipoMovimiento.id}
                            >
                                <label htmlFor={tipoMovimiento.id}>{tipoMovimiento.nombre}</label>
                                <input
                                    type="radio"
                                    name="tipo"
                                    id={tipoMovimiento.id}
                                    value={tipoMovimiento.id}
                                    onChange={e => handleChangeDatos(e)}

                                />
                            </Fragment>
                        ))}
                    </div>
                </div>

                <div className="d-flex flex-column gap-2 mb-4">
                    <label className=" fs-5" htmlFor="movimiento">Nombre del Movimiento</label>
                    <input
                        className="border-secondary rounded p-1"
                        name="movimiento"
                        type="text"
                        id="movimiento"
                        placeholder='Ejem: Netflix'
                        value={datos.movimiento}
                        onChange={e => handleChangeDatos(e)}
                    />
                </div>

                <div className="d-flex flex-column gap-2 mb-4">
                    <label className=" fs-5" htmlFor="cantidad">Cantidad</label>
                    <input
                        className="border-secondary rounded p-1"
                        type="number"
                        name="cantidad"
                        id="cantidad"
                        placeholder='Ejem: 200'
                        value={datos.cantidad}
                        onChange={e => handleChangeDatos(e)}
                    />
                </div>

                <div className="d-flex justify-content-center flex-column align-items-center w-75 mx-auto">
                    <input
                        className="text-white bg-primary border-0 px-5 py-2 mb-4  text-center  fw-bold"
                        type="submit"
                        value="Agregar Movimiento"
                    />
                </div>

            </form>
        </>
    )
}

export default Formulario