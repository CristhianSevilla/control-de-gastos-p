import Filtros from "./Filtros"
import Balance from "./Balance"
import ListaTransacciones from "./ListaTransacciones"
import useGastos from "../hooks/useGastos"
import Modal from "./Modal"

const AppGastos = () => {

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

      <form
        onSubmit={handleMovimiento}
        className='d-flex justify-content-center mx-auto'
      >

        <input
          className="bg-primary border-0 px-5 py-2 mb-4  text-center text-white fw-bold position-fixed bottom-0"
          type="submit"
          value="Agregar Movimiento"
        />
      </form>

      {modal ? <Modal /> : ''}

    </div>
  )
}

export default AppGastos