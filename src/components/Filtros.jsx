import { MESES } from "../constants"
import { Fragment} from "react"
import useGastos from "../hooks/useGastos"

const Filtros = () => {
  const { setFiltro} = useGastos()

  return (
    <>
      <div className="d-flex justify-content-center bg-primary rounded-bottom ">
        <ul className="mx-auto list-group list-group-horizontal p-2 overflow-auto">
          {
            MESES.map(mes => (
              <Fragment
                key={mes.id}
              >
                <li
                  className="list-group-item  text-white fs-5 border-0 hover-overly"
                  onClick={() => setFiltro(mes.id)}
                >
                  {mes.nombre}
                </li>
              </Fragment>
            ))
          }
        </ul>
      </div>

    </>
  )
}

export default Filtros



