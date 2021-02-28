import React, { useState } from 'react'
import './User.css'


const User = ({contact}) => {
    const [adress, setAdress] = useState([]); // where to store the returned data
    return (
        
        <div className="ceo">
        <div className="container">
        <div className="main-body">
        
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                    <div className="mt-3">
                      <h4></h4>
                    </div>
                  </div>
                </div>
              </div>
           
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0"></h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {contact.name}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {contact.email}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {contact.phone}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    {contact.address.zipcode}
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                   { contact.address.street +' '+contact.address.suite+' '+contact.address.city
                   +'   '+contact.address.zipcode}
                    </div>
                  </div>
                </div>
              </div>
             
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                      <small>{contact.company.name}</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>{contact.company.catchPhrase}</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>{contact.company.bs}</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '89%'}} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                     
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    
    )
}

export default User
