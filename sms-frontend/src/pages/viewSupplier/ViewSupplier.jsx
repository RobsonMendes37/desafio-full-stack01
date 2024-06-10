import React from 'react';
import { useState, useEffect } from 'react';
import { getSupplier } from '../../services/SupplierServicer';
import { useParams, useNavigate } from 'react-router-dom';

const ViewSupplier = () => {
  const [supplier, setSupplier] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getSupplier(id)
        .then(response => {
          setSupplier(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [id]);

  if (!supplier) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2 className="text-center">Supplier Details</h2>
      <div className="card col-md-6 offset-md-3">
        <div className="card-body">
        <p><strong>Name:</strong> {supplier.name}</p>
          <p><strong>Trade Name:</strong> {supplier.tradeName}</p>
          <p><strong>CNPJ/CPF:</strong> {supplier.cnpjOrCpf}</p>
          <p><strong>Tax Regime Code:</strong> {supplier.taxRegimeCode}</p>
          <p><strong>Customer Since:</strong> {supplier.customerSince}</p>
          <p><strong>State Registration:</strong> {supplier.stateRegistration}</p>
          <p><strong>State Registration Exempt:</strong> {supplier.stateRegistrationExempt ? 'Yes' : 'No'}</p>
          <p><strong>Municipal Registration:</strong> {supplier.municipalRegistration}</p>
          <p><strong>Zip Code:</strong> {supplier.zipCode}</p>
          <p><strong>State:</strong> {supplier.state}</p>
          <p><strong>City:</strong> {supplier.city}</p>
          <p><strong>Neighborhood:</strong> {supplier.neighborhood}</p>
          <p><strong>Street:</strong> {supplier.street}</p>
          <p><strong>Number:</strong> {supplier.number}</p>
          <p><strong>Complement:</strong> {supplier.complement}</p>
          <p><strong>Contact Info:</strong> {supplier.contactInfo}</p>
          <p><strong>Contact Person:</strong> {supplier.contactPerson}</p>
          <p><strong>Phone:</strong> {supplier.phone}</p>
          <p><strong>Fax:</strong> {supplier.fax}</p>
          <p><strong>Mobile:</strong> {supplier.mobile}</p>
          <p><strong>Email:</strong> {supplier.email}</p>
          <p><strong>Website:</strong> {supplier.website}</p>
          <button className="btn btn-primary" onClick={() => navigate('/suppliers')}>
            Back to List
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewSupplier;
