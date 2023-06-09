import useGastos from "../hooks/useGastos"
import Formulario from "./Formulario"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const Modal = () => {

    const { setModal} = useGastos()

    const ocultarModal = () => {
        setTimeout(() => {
            setModal(false);
        }, 300);
    }

    return (
        <div className="position-absolute bg-dark bg-opacity-75 top-0 start-0 end-0 vh-100 " >

            <div
                className="d-flex justify-content-end p-4"
                onClick={ocultarModal}
            >
                <FontAwesomeIcon icon={faXmark} size="2xl" style={{ color: "#ffffff", }} />
            </div>

            <Formulario/>
        </div>

    )
}

export default Modal