import { useState, useEffect } from "react";
import { createContext } from "react";
import { generarId} from "../helpers";

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

    //Sube los datos al state de transacciones
    const guardarTransaccion = transaccion => {
        transaccion.id = generarId()
        transaccion.fecha = Date.now();
        setTransacciones([...transacciones, transaccion]);
        setModal(false)
    }

    //Filtros
    const [filtro, setFiltro] = useState('')
    const [movimientosFiltrados, setMovimientosFiltrados] = useState([])

    const compararMes = () => {
        const transaccionesFiltradas = transacciones.filter(transaccion => {
            const fecha = new Date(transaccion.fecha)
            const mesTransaccion = fecha.getMonth()
            return (mesTransaccion + 1) === filtro

        })

        setMovimientosFiltrados(transaccionesFiltradas)
    }

    useEffect(() => {
        compararMes()
    }, [transacciones, filtro])

    //Leer los datos de la API
    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const respuesta = await fetch(import.meta.env.VITE_API_URL);
                const resultado = await respuesta.json();
                setTransacciones(resultado);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        obtenerDatos();
    }, []);

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
                setMovimientosFiltrados,
                filtro,
                setFiltro,
                compararMes
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