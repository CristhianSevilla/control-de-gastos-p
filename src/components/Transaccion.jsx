import { formatearFecha, formatearDinero } from '../helpers'
import Circulo from './Circulo'
import Cuadrado from './Cuadrado'

const Transaccion = ({transaccion}) => {

    const fechaFormateada = formatearFecha(transaccion.fecha)
    const dineroFormateado = formatearDinero(Number(transaccion.cantidad))

    const tipo = Number(transaccion.tipo) 

    return (
        <>
            <p className="fw-bolder m-0">{fechaFormateada}.</p>
            <div className='w-100 mx-auto bg-white rounded-3 shadow mt-1 mb-3 p-3 d-flex align-items-center justify-content-between '>

                <div className='d-flex gap-2 justify-center align-items-center'>

                    {tipo === 1 ? <Circulo/> : <Cuadrado/>}

                    <p className='m-0 fs-5'>{transaccion.movimiento}</p>
                </div>
                <div>
                    <p className={(tipo === 1 ? 'text-success' : 'text-danger').concat(' m-0 fs-5 fw-bolder')}>{`${tipo === 1 ? '+' : '-'} ${dineroFormateado}`}</p>
                </div>

            </div>
        </>

    )
}

export default Transaccion