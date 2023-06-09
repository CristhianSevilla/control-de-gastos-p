import useGastos from "../hooks/useGastos"

const Error = () => {

  const { error } = useGastos()

  return (
    <div className="border text-center border-danger bg-danger bg-opacity-25 py-2 mb-4">
      <p className="text-danger text-uppercase  m-0">{error}</p>
    </div>
  )
}

export default Error