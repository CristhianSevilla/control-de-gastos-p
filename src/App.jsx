import AppGastos from "./components/AppGastos"
import { GastosProvider } from "./context/GastosProvider"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {

  return (
    <GastosProvider>
      <AppGastos />
    </GastosProvider>
  )
}

export default App
