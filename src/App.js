import React from 'react';
import './style.css';
import secure from './secure.png'

function voguepay() {
  return (
    <div className="voguepay">
      <header className="App-header">
      <form method='POST' id='payform' action='//voguepay.com/pay/' onsubmit='return false;'>
<input type='hidden' name='v_merchant_id' value='demo' />
<input type='hidden' name='cur' value='NGN' />
<input type='hidden' name='merchant_ref' value='6649-0037313' />
<input type='hidden' name='memo' value='Purchase MacBook Pro 16" Touchbar' />

<input type='hidden' name='notify_url' value='//www.mydomain.com/notification.php' />
<input type='hidden' name='success_url' value='//www.mydomain.com/thank_you.html' />
<input type='hidden' name='fail_url' value='//www.mydomain.com/failed.html' />

<input type='hidden' name='developer_code' value='pq7778ehh9YbZ' />
<input type='hidden' name='store_id' value='25' />
<input type='hidden' name='notify_url' value='//www.mydomain.com/notification.php' />

<input type='hidden' name='success_url' value='//www.mydomain.com/thank_you.html' />
<input type='hidden' name='fail_url' value='//www.mydomain.com/failed.html' />

<input type='hidden' name='total' value='13000' />


<input type='hidden' name='name' value='John Doe'/>
<input type='hidden' name='address' value='John Doe Avenue, Lagos, Nigeria.'/>
<input type='hidden' name='city' value='Lagos'/>
<input type='hidden' name='state' value='Lagos'/>
<input type='hidden' name='zipcode' value='234'/>
<input type='hidden' name='email' value='johndoe@john.com'/>
<input type='hidden' name='phone' value= '+2349010101010'/>

<input type='hidden' name='closed' value='closedFunction'/>
<input type='hidden' name='success' value='successFunction'/>
<input type='hidden' name='failed' value='failedFunction'/>

<div class="container">
<button class="payment-button">Make Payment</button>
</div>
</form>
      </header>
      <div className="secure">
            <img className="secure" src={secure} alt="secured-by-paystack"/>
            </div>
    </div>
  );
}

export default voguepay;
