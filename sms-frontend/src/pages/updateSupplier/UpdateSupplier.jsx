import  { useState, useEffect } from 'react'
import { getSupplier,updateSupplier } from '../../services/SupplierServicer'
import { useNavigate, useParams } from 'react-router-dom';
import "./UpdateSupplier.css"

const UpdateSupplier = () => {
  
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [tradeName, setTradeName] = useState('');
    const [cnpjOrCpf, setCnpjOrCpf] = useState('');
    const [taxRegimeCode, setTaxRegimeCode] = useState('');
    const [customerSince, setCustomerSince] = useState('');
    const [stateRegistration, setStateRegistration] = useState('');
    const [municipalRegistration, setMunicipalRegistration] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [phone, setPhone] = useState('');
    const [fax, setFax] = useState('');
    const [mobile, setMobile] = useState('');
    const [website, setWebsite] = useState('');

    const {id} = useParams();
    const [errors, setErrors] = useState({
        email:'',
        name: '',
        tradeName: '',
        cnpjOrCpf: '',
        taxRegimeCode: '',
        customerSince: '',
        stateRegistration: '',
        municipalRegistration: '',
        zipCode: '',
        state: '',
        city: '',
        neighborhood: '',
        street: '',
        number: '',
        complement: '',
        contactInfo: '',
        contactPerson: '',
        phone: '',
        fax: '',
        mobile: '',
        website: ''
    })

    const navigator = useNavigate();

    useEffect(() => {

        if(id){
            getSupplier(id).then((response) => {
                setEmail(response.data.email);
                setName(response.data.name);
                setTradeName(response.data.tradeName);
                setCnpjOrCpf(response.data.cnpjOrCpf);
                setTaxRegimeCode(response.data.taxRegimeCode);
                setCustomerSince(response.data.customerSince);
                setStateRegistration(response.data.stateRegistration);
                setMunicipalRegistration(response.data.municipalRegistration);
                setZipCode(response.data.zipCode);
                setState(response.data.state);
                setCity(response.data.city);
                setNeighborhood(response.data.neighborhood);
                setStreet(response.data.street);
                setNumber(response.data.number);
                setComplement(response.data.complement);
                setContactInfo(response.data.contactInfo);
                setContactPerson(response.data.contactPerson);
                setPhone(response.data.phone);
                setFax(response.data.fax);
                setMobile(response.data.mobile);
                setWebsite(response.data.website);
            }).catch(error => {
                console.error(error);
            })
        }

    }, [id])

    function UpdateSupplier(e){
        e.preventDefault();

        const supplier = {email,name,tradeName,cnpjOrCpf,taxRegimeCode,customerSince,stateRegistration,municipalRegistration,zipCode,
            state,city,neighborhood,street,number,complement,contactInfo,contactPerson,phone,fax,mobile,website}
        console.log(supplier)

        if(validateForm()){
            updateSupplier(id, supplier).then((response) => {
                console.log(response.data);
                navigator('/suppliers');
            }).catch(error => {
                console.error(error);
            })
        }
    }


    function validateForm(){
        let valid = true;

        const errorsCopy = {... errors}

        if(email.trim()){
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
            valid = false;
        }

            if (name.trim()) {
                errorsCopy.name = '';
            } else {
                errorsCopy.name = 'Name is required';
                valid = false;
            }
        
            if (cnpjOrCpf.trim()) {
                errorsCopy.cnpjOrCpf = '';
            } else {
                errorsCopy.cnpjOrCpf = 'CNPJ/CPF is required';
                valid = false;
            }
        
        
            if (zipCode.trim()) {
                errorsCopy.zipCode = '';
            } else {
                errorsCopy.zipCode = 'Zip Code is required';
                valid = false;
            }
        
            if (state.trim()) {
                errorsCopy.state = '';
            } else {
                errorsCopy.state = 'State is required';
                valid = false;
            }
        
            if (city.trim()) {
                errorsCopy.city = '';
            } else {
                errorsCopy.city = 'City is required';
                valid = false;
            }
        
            if (street.trim()) {
                errorsCopy.street = '';
            } else {
                errorsCopy.street = 'Street is required';
                valid = false;
            }
        
            if (contactPerson.trim()) {
                errorsCopy.contactPerson = '';
            } else {
                errorsCopy.contactPerson = 'Contact Person is required';
                valid = false;
            }

            if (tradeName.trim()) {
                errorsCopy.tradeName = '';
            } else {
                errorsCopy.tradeName = 'Trade Name is required';
                valid = false;
            }

            if (taxRegimeCode.trim()) {
                errorsCopy.taxRegimeCode = '';
            } else {
                errorsCopy.taxRegimeCode = 'Tax Regime Code is required';
                valid = false;
            }

            if (customerSince.trim()) {
                errorsCopy.customerSince = '';
            } else {
                errorsCopy.customerSince = 'Customer Since is required';
                valid = false;
            }

            if (stateRegistration.trim()) {
                errorsCopy.stateRegistration = '';
            } else {
                errorsCopy.stateRegistration = 'State Registration is required';
                valid = false;
            }

            if (municipalRegistration.trim()) {
                errorsCopy.municipalRegistration = '';
            } else {
                errorsCopy.municipalRegistration = 'Municipal Registration is required';
                valid = false;
            }

            if (neighborhood.trim()) {
                errorsCopy.neighborhood = '';
            } else {
                errorsCopy.neighborhood = 'Neighborhood is required';
                valid = false;
            }

            if (number.trim()) {
                errorsCopy.number = '';
            } else {
                errorsCopy.number = 'Number is required';
                valid = false;
            }

            if (complement.trim()) {
                errorsCopy.complement = '';
            } else {
                errorsCopy.complement = 'Complement is required';
                valid = false;
            }

            if (contactInfo.trim()) {
                errorsCopy.contactInfo = '';
            } else {
                errorsCopy.contactInfo = 'Contact Info is required';
                valid = false;
            }

            if (phone.trim()) {
                errorsCopy.phone = '';
            } else {
                errorsCopy.phone = 'Phone is required';
                valid = false;
            }

            if (fax.trim()) {
                errorsCopy.fax = '';
            } else {
                errorsCopy.fax = 'Fax is required';
                valid = false;
            }

            if (mobile.trim()) {
                errorsCopy.mobile = '';
            } else {
                errorsCopy.mobile = 'Mobile is required';
                valid = false;
            }

            if (website.trim()) {
                errorsCopy.website = '';
            } else {
                errorsCopy.website = 'Website is required';
                valid = false;
            }

        setErrors(errorsCopy);
        
        return valid;

    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Supplier</h2>
        }
    }

  return (
    <div className='container'>
        <br /> <br />
        <div className='row'>
            <div className='card col-md-10 offset-md-1 offset-md-1'>
               {
                    pageTitle()
               }
                <div className='card-body'>
                <form id="myForm2">
                        <h2>Basic Data:</h2>
                        <hr></hr>
                        
                        <div className="line">
                            {/* Name */}
                            <div className='form-group mb-2'>
                                <label className='form-label'>Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Supplier Name'
                                    name='name'
                                    value={name}
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {errors.name && <div className='invalid-feedback'> {errors.name} </div>}
                            </div>

                            {/* Trade Name: */}
                            <div className='form-group mb-2'>
                                <label className='form-label'>Trade Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Trade Name'
                                    name='tradeName'
                                    value={tradeName}
                                    className={`form-control ${errors.tradeName ? 'is-invalid' : ''}`}
                                    onChange={(e) => setTradeName(e.target.value)}
                                />
                                {errors.tradeName && <div className='invalid-feedback'> {errors.tradeName} </div>}
                            </div>


                            {/* CNPJ/CPF: */}
                            <div className='form-group mb-2'>
                                <label className='form-label'>CNPJ/CPF:</label>
                                <input
                                    type='text'
                                    placeholder='Enter CNPJ/CPF'
                                    name='cnpjOrCpf'
                                    value={cnpjOrCpf}
                                    className={`form-control ${errors.cnpjOrCpf ? 'is-invalid' : ''}`}
                                    onChange={(e) => setCnpjOrCpf(e.target.value)}
                                />
                                {errors.cnpjOrCpf && <div className='invalid-feedback'> {errors.cnpjOrCpf} </div>}
                            </div>
                        </div>


                        <div className='line'>
                            {/* Tax Regime Code: */}
                            <div className='form-group mb-2'>
                                <label className='form-label'>Tax Regime Code:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Tax Regime Code'
                                    name='taxRegimeCode'
                                    value={taxRegimeCode}
                                    className={`form-control ${errors.taxRegimeCode ? 'is-invalid' : ''}`}
                                    onChange={(e) => setTaxRegimeCode(e.target.value)}
                                />
                                {errors.taxRegimeCode && <div className='invalid-feedback'> {errors.taxRegimeCode} </div>}
                            </div>

                            {/* Customer Since: */}
                            <div className='form-group mb-2'>
                                <label className='form-label'>Customer Since:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Customer Since'
                                    name='customerSince'
                                    value={customerSince}
                                    className={`form-control ${errors.customerSince ? 'is-invalid' : ''}`}
                                    onChange={(e) => setCustomerSince(e.target.value)}
                                />
                                {errors.customerSince && <div className='invalid-feedback'> {errors.customerSince} </div>}
                            </div>    

                            {/* State Registration: */}
                            <div className='form-group mb-2'>
                                <label className='form-label'>State Registration:</label>
                                <input
                                    type='text'
                                    placeholder='Enter State Registration'
                                    name='stateRegistration'
                                    value={stateRegistration}
                                    className={`form-control ${errors.stateRegistration ? 'is-invalid' : ''}`}
                                    onChange={(e) => setStateRegistration(e.target.value)}
                                />
                                {errors.stateRegistration && <div className='invalid-feedback'> {errors.stateRegistration} </div>}
                            </div>


                            {/* Municipal Registration: */}
                            <div className='form-group mb-2'>
                                <label className='form-label'>Municipal Registration:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Municipal Registration'
                                    name='municipalRegistration'
                                    value={municipalRegistration}
                                    className={`form-control ${errors.municipalRegistration ? 'is-invalid' : ''}`}
                                    onChange={(e) => setMunicipalRegistration(e.target.value)}
                                />
                                {errors.municipalRegistration && <div className='invalid-feedback'> {errors.municipalRegistration} </div>}
                            </div>
                        </div>


                        <h3>Address:</h3>
                        <hr></hr>

                        <div className='line'>
                            {/* Zip Code: */}
                            <div className='form-group mb-2'>
                                <label className='form-label'>Zip Code:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Zip Code'
                                    name='zipCode'
                                    value={zipCode}
                                    className={`form-control ${errors.zipCode ? 'is-invalid' : ''}`}
                                    onChange={(e) => setZipCode(e.target.value)}
                                />
                                {errors.zipCode && <div className='invalid-feedback'> {errors.zipCode} </div>}
                            </div>

                            {/* State: */}
                            <div className='form-group mb-2'>
                                <label className='form-label'>State:</label>
                                <input
                                    type='text'
                                    placeholder='Enter State'
                                    name='state'
                                    value={state}
                                    className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                                    onChange={(e) => setState(e.target.value)}
                                />
                                {errors.state && <div className='invalid-feedback'> {errors.state} </div>}
                            </div>


                            {/* City: */}
                            <div className='form-group mb-2'>
                                <label className='form-label'>City:</label>
                                <input
                                    type='text'
                                    placeholder='Enter City'
                                    name='city'
                                    value={city}
                                    className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                                {errors.city && <div className='invalid-feedback'> {errors.city} </div>}
                            </div>

                            {/* Neighborhood: */}
                            <div className='form-group mb-2'>
                                <label className='form-label'>Neighborhood:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Neighborhood'
                                    name='neighborhood'
                                    value={neighborhood}
                                    className={`form-control ${errors.neighborhood ? 'is-invalid' : ''}`}
                                    onChange={(e) => setNeighborhood(e.target.value)}
                                />
                                {errors.neighborhood && <div className='invalid-feedback'> {errors.neighborhood} </div>}
                            </div>
                        </div>

                        <div className='line'>
                            {/* Street: */}
                            <div className='form-group mb-2'>
                                <label className='form-label'>Street:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Street'
                                    name='street'
                                    value={street}
                                    className={`form-control ${errors.street ? 'is-invalid' : ''}`}
                                    onChange={(e) => setStreet(e.target.value)}
                                />
                                {errors.street && <div className='invalid-feedback'> {errors.street} </div>}
                            </div>

                            {/* Number: */}
                            <div className='form-group mb-2'>
                                <label className='form-label'>Number:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Number'
                                    name='number'
                                    value={number}
                                    className={`form-control ${errors.number ? 'is-invalid' : ''}`}
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                                {errors.number && <div className='invalid-feedback'> {errors.number} </div>}
                            </div>

                            {/* Complement: */}
                            <div className='form-group mb-2'>
                                <label className='form-label'>Complement:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Complement'
                                    name='complement'
                                    value={complement}
                                    className={`form-control ${errors.complement ? 'is-invalid' : ''}`}
                                    onChange={(e) => setComplement(e.target.value)}
                                />
                                {errors.complement && <div className='invalid-feedback'> {errors.complement} </div>}
                            </div>
                        </div>

                        <h3>Contact:</h3>
                        <hr></hr>

                        <div className='line'>
                            {/* Contact Info: */}
                            <div className='form-group mb-2'>
                                <label className='form-label'>Contact Info:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Contact Info'
                                    name='contactInfo'
                                    value={contactInfo}
                                    className={`form-control ${errors.contactInfo ? 'is-invalid' : ''}`}
                                    onChange={(e) => setContactInfo(e.target.value)}
                                />
                                {errors.contactInfo && <div className='invalid-feedback'> {errors.contactInfo} </div>}
                            </div>

                            {/* Contact Person: */}
                            <div className='form-group mb-2'>
                                <label className='form-label'>Contact Person:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Contact Person'
                                    name='contactPerson'
                                    value={contactPerson}
                                    className={`form-control ${errors.contactPerson ? 'is-invalid' : ''}`}
                                    onChange={(e) => setContactPerson(e.target.value)}
                                />
                                {errors.contactPerson && <div className='invalid-feedback'> {errors.contactPerson} </div>}
                            </div>

                            {/* Phone: */}
                            <div className='form-group mb-2'>
                                <label className='form-label'>Phone:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Phone'
                                    name='phone'
                                    value={phone}
                                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                {errors.phone && <div className='invalid-feedback'> {errors.phone} </div>}
                            </div>
                        </div>

                        <div className='line'>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Supplier Email'
                                    name='email'
                                    value={email}
                                    className={`form-control ${ errors.email ? 'is-invalid': '' }`}
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                </input>
                                { errors.email && <div className='invalid-feedback'> { errors.email} </div> }
                            </div>

                            {/* Fax: */}
                            <div className='form-group mb-2'>
                                <label className='form-label'>Fax:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Fax'
                                    name='fax'
                                    value={fax}
                                    className={`form-control ${errors.fax ? 'is-invalid' : ''}`}
                                    onChange={(e) => setFax(e.target.value)}
                                />
                                {errors.fax && <div className='invalid-feedback'> {errors.fax} </div>}
                            </div>

                            {/* Mobile: */}
                            <div className='form-group mb-2'>
                                <label className='form-label'>Mobile:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Mobile'
                                    name='mobile'
                                    value={mobile}
                                    className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                                {errors.mobile && <div className='invalid-feedback'> {errors.mobile} </div>}
                            </div>

                            {/* website: */}
                            <div className='form-group mb-2'>
                                <label className='form-label'>Website:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Website'
                                    name='website'
                                    value={website}
                                    className={`form-control ${errors.website ? 'is-invalid' : ''}`}
                                    onChange={(e) => setWebsite(e.target.value)}
                                />
                                {errors.website && <div className='invalid-feedback'> {errors.website} </div>}
                            </div>  
                        </div>

                        <button className='btn btn-success' onClick={UpdateSupplier} >Submit</button>
                    </form>

                </div>
            </div>

        </div>

    </div>
  )
}

export default UpdateSupplier