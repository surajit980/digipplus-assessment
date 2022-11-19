import React from 'react'
import Navbar from '../components/Navbar'

const MyPayment = () => {
  
  function changeActive(e) {
    let element;
    if (e.target.id === "payment-link1") {
      element=document.getElementById("payment-link2");
    } else {
      element=document.getElementById("payment-link1");
    }
    
    // for changing active link
    if (e.target.className === "payment-link") {
      e.target.className += " active-payment-link"
      element.className = "payment-link"
    }else{
      e.target.className = "payment-link";
    } 
    
    // for changing display content
    if (e.target.id === "payment-link2") {
      document.getElementById("invoices").style.display="none";
      document.getElementById("bank-details").style.display="block";
    } else {
      document.getElementById("invoices").style.display="block";
      document.getElementById("bank-details").style.display="none";
    }

  }

  return (
    <div>
      <Navbar active="my-payment"/>
      <div id='payment-main' className='main'>
        <div className='payment-left'>
          <h4 style={{color:"#EEA94D"}}>PAYMENT NEVIGATION</h4>
          <div id='payment-link1' className='payment-link active-payment-link' onClick={changeActive}>INVOICES</div>
          <div id='payment-link2' className='payment-link' onClick={changeActive}>MY BANK DETAILS</div>
        </div>

        <div className='payment-mid'>
          <ul id='invoices'>
            <li>Payment Date: <strong>Oct. 25, 2022, 11:07 a.m.</strong> Amount Paid: <strong>₹3150</strong></li>
            <li>Payment Date: <strong>Oct. 25, 2022, 11:07 a.m.</strong> Amount Paid: <strong>₹3150</strong></li>
            <li>Payment Date: <strong>Oct. 25, 2022, 11:07 a.m.</strong> Amount Paid: <strong>₹3150</strong></li>
            <li>Payment Date: <strong>Oct. 25, 2022, 11:07 a.m.</strong> Amount Paid: <strong>₹3150</strong></li>
            <li>Payment Date: <strong>Oct. 25, 2022, 11:07 a.m.</strong> Amount Paid: <strong>₹3150</strong></li>
            <li>Payment Date: <strong>Oct. 25, 2022, 11:07 a.m.</strong> Amount Paid: <strong>₹3150</strong></li>
            <li>Payment Date: <strong>Oct. 25, 2022, 11:07 a.m.</strong> Amount Paid: <strong>₹3150</strong></li>
          </ul>

          <ul id='bank-details'>
            <li>Name: <strong>Surajit Mirbar</strong></li>
            <li>Address: <strong>Kolkata</strong></li>
            <li>Account Number: <strong>12345678910</strong></li>
            <li>Mobile Number: <strong>6295864928</strong></li>
            <li>Ifsc Code: <strong>PYTM123456</strong></li>
          </ul>
        </div>

        <div className='payment-right'>
          <ul>
          <li>Lifetime Earning: <strong>₹3150</strong></li>
          <li>This Month Earning: <strong>₹0</strong></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MyPayment
