import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import AddSupplier from './pages/addSupplier/AddSupplier'
import UpdateSupplier from './pages/updateSupplier/UpdateSupplier'
import ListSuppliers from './pages/listSuppliers/ListSuppliers'
import ViewSupplier from './pages/viewSupplier/ViewSupplier'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            {/* //http://localhost:3000 */}
            <Route path='/' element = {<Home/>}></Route>
            {/* //https://localhost:3000/suppliers */}
            <Route path='/suppliers' element = {<ListSuppliers/>}></Route>
            {/* //https://localhost:3000/add-supplier */}
            <Route path='/add-supplier' element={<AddSupplier/>}></Route>
            {/* //https://localhost:3000/edit-supplier/1 */}
            <Route path='/edit-supplier/:id' element={<UpdateSupplier/>}></Route>
            {/* //https://localhost:3000/view-supplier/1 */}
            <Route path='/view-supplier/:id' element={<ViewSupplier />}></Route>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App