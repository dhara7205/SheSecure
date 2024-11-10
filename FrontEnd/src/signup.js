import React from 'react';
import './signup.css'; // Importing custom styles
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Signup() {

    const [firstName , setFirstName] = React.useState();
    const [lastName , setLastName] = React.useState();
    const [phoneno , setPhoneNo] = React.useState();
    const [email ,setEmail] = React.useState();
    const [password , setPassword] = React.useState();
    const [date , setDate] = React.useState();
    const [address, setAddress] = React.useState();
    const [state , setState] = React.useState();
    const [country, setCountry] = React.useState();
    const [e1 , setE1] = React.useState();
    const [e2 , setE2] = React.useState();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const data = {
            "first_name": firstName,
            "last_name": lastName,
            "password": password,
            "mobile_number": phoneno,
            "email_id": email,
            "address":address,
            "state":state,
            "country":country,
            "emergency_contact_1" : e1, 
            "emergency_contact_2" : e2,
            "age" : date,
        }

        try {
            const response = await axios.post('http://localhost:5000/signup', data);
            if(response.data == "User data inserted successfully"){
              console.log(response.data);
            navigate('/login');}
            console.log(response.data);
 
        } catch (err) {
            console.error('Singup failed:', err);
        }

    }
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-left">
          <h3 className="title">Personal Information</h3>


          <div className="row">
            <div className="col">
              <input type="text" className="input-field" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div className="col">
              <input type="text" className="input-field" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>

          <input type="" className="input-field" placeholder="Phone Number" onChange={(e) => setPhoneNo(e.target.value)}/>  
          <input type="" className="input-field" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <input type="" className="input-field" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <input type="number" className="input-field" placeholder="Age" onChange={(e) => setDate(e.target.value)}/>

        </div>

        <div className="form-right">
          <h3 className="title text-white">Contact Details</h3>

          <input type="text" className="input-field white-input" placeholder="Address" onChange={(e) => setAddress(e.target.value)}/>
          

          <div className="row">
            {/* <div className="col">
              <input type="text" className="input-field white-input" placeholder="Zip Code" onChange={(e) => setPincode(e.target.value)}/>
            </div> */}
            <div className="col">
            <select className="input-field" defaultValue="State" onChange={(e) => setState(e.target.value)}>
                <option value="" >State</option>
                <option value="1">Andaman and Nicobar</option>
                <option value="2">Andhra Pradesh</option>
                <option value="3">Arunachal Pradesh</option>
                <option value="4">Assam</option>
                <option value="5">Bihar</option>
                <option value="6">Chandigarh</option>
                <option value="7">Chhattisgarh</option>
                <option value="8">Daman and Diu</option>
                <option value="9">Delhi</option>
                <option value="10">Goa</option>
                <option value="11">Gujarat</option>
                <option value="12">Haryana</option>
                <option value="13">Himachal Pradesh</option>
                <option value="14">Jammu and Kashmir</option>
                <option value="15">Jharkhand</option>
                <option value="16">Karnataka</option>
                <option value="17">Kerala</option>
                <option value="18">Ladakh</option>
                <option value="19">Lakshadweep</option>
                <option value="20">Madhya Pradesh</option>
                <option value="21">Maharashtra</option>
                <option value="22">Manipur</option>
                <option value="23">Meghalaya</option>
                <option value="24">Mizoram</option>
                <option value="25">Nagaland</option>
                <option value="26">Odisha</option>
                <option value="27">Puducherry</option>
                <option value="28">Punjab</option>
                <option value="29">Rajasthan</option>
                <option value="30">Sikkim</option>
                <option value="31">Tamil Nadu</option>
                <option value="32">Telangana</option>
                <option value="33">Tripura</option>
                <option value="34">Uttar Pradesh</option>
                <option value="35">Uttarakhand</option>
                <option value="36">West Bengal</option>
              </select>
            </div>
          </div>
          

          <input type="text" className="input-field white-input" placeholder="Country" onChange={(e) => setCountry(e.target.value)}/>

          <div className="row">
            <div className="col">
              <input type="number" className="input-field white-input" placeholder="E Contact 1" onChange={(e) => setE1(e.target.value)} />
            </div>
            <div className="col">
              <input type="number" className="input-field white-input" placeholder="E contact 2" onChange={(e) => setE2(e.target.value)} />
            </div>
          </div>

          <label className="checkbox-label">
            <input type="checkbox" /> I do accept to turn on my location.  
          </label>
          <label className="checkbox-label">
            <input type="checkbox" /> I do accept the Terms and Conditions of your site.
          </label>

          <button className="btn" onClick={handleSubmit}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;