import React from 'react'

const Paypal = () => {

  return (
    <div>
      <div className="container-fluid" style={{ marginTop: "100px", textAlign: "center" }}>
        <h2 className="display-5 mb-4">Dear Customer</h2>
        <p className="fs-5 mb-4">
          Kindley pay by using this QR code or payment gateway
        </p>
        <img src="https://i.ibb.co/0Z7qcRC/prexim-qrcode.png" alt="prexim-qrcode" border="0" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div id="paypal-button-container-P-2DV3252604510514CM2COSMI" />
            <button class="paypal-btn">PayPal Subscribe</button>
            <button class="card-btn">Debit or Credit Card</button>
            <div class="powered-by">Powered by PayPal</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Paypal
