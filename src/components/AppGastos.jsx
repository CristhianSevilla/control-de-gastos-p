import Filtros from "./Filtros"
import Balance from "./Balance"
import ListaTransacciones from "./ListaTransacciones"
import useGastos from "../hooks/useGastos"
import Modal from "./Modal"

const AppGastos = () => {

  //Ventana modal para el formulario de nuevo movimiento
  const { modal, setModal } = useGastos()

  const handleMovimiento = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setModal(true);
    }, 300);
  }

  return (
    <div className={modal ? 'overflow-hidden vh-100' : ''}>
      <Filtros />
      <Balance />
      <ListaTransacciones />

      <div className='d-flex justify-content-center mx-auto'>
        <button
          className="btn btn-primary rounded-0 border-0 px-5 py-2 mb-4  text-center text-white fw-bold position-fixed bottom-0"
          type="button"
          onClick={handleMovimiento}
        >
          Agregar Movimiento
        </button>
      </div>

      {modal ? <Modal /> : ''}

    </div>
  )
}

export default AppGastos