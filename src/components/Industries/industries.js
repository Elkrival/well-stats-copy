import React from 'react';

const Industries = () =>{
 return(
  <section className="section-industries">
   <div className="u-center-text u-margin-bottom-big">
    <h2 className="heading-secondary">Industries Served</h2>
   </div>
   <div className="row">
    <div className="col-1-of-3">
     <div className="card">
      <div className="card__side card__side--front card__side--front--industries">
       <div className="card__picture card__picture--4">
        &nbsp;
       </div>
       <div className="card__details">
        <ul>
         <li>Disability Services</li>
         <li>Home and Community Services</li>
         <li>Residential Services</li>
        </ul>
       </div>
      </div>
     </div>
    </div>
    <div className="col-1-of-3">
     <div className="card">
      <div className="card__side card__side--front card__side--front--industries">
       <div className="card__picture card__picture--5">
        &nbsp;
       </div>
       <div className="card__details">
        <ul>
         <li>Day Habilitation</li>
         <li>Community Habilitation</li>
         <li>SEMP/Pre Vocational Services</li>
        </ul>
       </div>
      </div>
     </div>
    </div>
    <div className="col-1-of-3">
     <div className="card">
      <div className="card__side card__side--front card__side--front--industries">
       <div className="card__picture card__picture--6">
        &nbsp;
       </div>
       <div className="card__details">
        <ul>
         <li>Individual Support Services</li>
         <li>Home Care Services</li>
         <li>Foster Care/UAC</li>
        </ul>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 )
}
export default Industries
