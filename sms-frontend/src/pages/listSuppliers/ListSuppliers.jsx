import React from 'react';
import { useState, useEffect } from 'react';
import { listSuppliers,deleteSupplier} from '../../services/SupplierServicer'
import { useNavigate } from 'react-router-dom';
import './ListSuppliers.css';

const ListSuppliers = () => {

    const [suppliers,setSuppliers] = useState([])

    const navigator = useNavigate();

    
    useEffect(() => {
        getAllSuppliers();
    }, [])

    function getAllSuppliers() {
        listSuppliers().then((response) => {
            setSuppliers(response.data);
        }).catch(error => {
            console.error(error);
        })
    }
    function addNewSupplier(){
        navigator('/add-supplier')
    }

    function updateSupplier(id) {
        navigator(`/edit-supplier/${id}`)
    }

    function removeSupplier(id){
        console.log(id);

        deleteSupplier(id).then((response) =>{
            getAllSuppliers();
        }).catch(error => {
            console.error(error);
        })
    }

    const viewSupplier = (id) => {
        navigator(`/view-supplier/${id}`);
    };

  return (
    <div className='container'>
    
        <h2 className='text-center' id='title'>List of Suppliers</h2>
        <button className='btn btn-primary mb-2' onClick={addNewSupplier}>Add Supplier</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers.map(supplier => 
                        <tr key={supplier.id}>
                            <td>{supplier.id}</td>
                            <td>{supplier.name}</td>
                            <td>{supplier.phone}</td>
                            <td>{supplier.email}</td>
                            <td id='actions'>
                                <button className='btn btn-success' onClick={() => updateSupplier(supplier.id)}>Update</button>
                                <button className='btn btn-danger' onClick={()=> removeSupplier(supplier.id)}>Delete</button>
                                <button className='btn btn-info' onClick={()=> viewSupplier(supplier.id)}>Info</button>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListSuppliers