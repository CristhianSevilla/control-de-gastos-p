import { useState } from "react";
import { createContext } from "react";
import { generarId, formatearFecha } from "../helpers";


const GastosContext = createContext()

const GastosProvider = ({ children }) => {

    const [modal, setModal] = useState(false);

    const [datos, setDatos] = useState({
        tipo: '',
        movimiento: '',
        cantidad: ''
    })

    const handleChangeDatos = e => {


        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const [error, setError] = useState('')

    const [transacciones, setTransacciones] = useState([])

    const guardarTransaccion = transaccion => {

        transaccion.id = generarId()
        transaccion.fecha = Date.now();

        setTransacciones([...transacciones, transaccion]);
        setModal(false)
    }

    const [movimientosFiltrados, setMovimientosFiltrados] = useState([])

    return (


        <GastosContext.Provider
            value={{
                modal,
                setModal,
                handleChangeDatos,
                datos,
                error,
                setError,
                guardarTransaccion,
                transacciones,
                movimientosFiltrados,
                setMovimientosFiltrados
            }}
        >
            {children}
        </GastosContext.Provider>
    )
}

export {
    GastosProvider
}

export default GastosContext