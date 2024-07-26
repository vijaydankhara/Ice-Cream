import React from 'react'

function Faq2() {
  return (
    <div>
{/* <!-- FAQ 2 - Bootstrap Brain Component --> */}
<section class="bsb-faq-2 bg-light py-3 py-md-5 py-xl-8">
  <div class="container">
    <div class="row gy-5 gy-lg-0">
      <div class="col-12 col-lg-6">
        <h2 class="h1 mb-3">How can we help you? Unlocking possibilities for your web hosting FAQs answered. </h2>
        <p class="lead fs-4 text-secondary mb-4">We hope you have found an answer to your question. If you need any help, please search your query on our Support Center or contact us via email.</p>
        <a href="#!" class="btn btn-lg bsb-btn-2xl btn-primary">All FAQ</a>
      </div>
      <div class="col-12 col-lg-6">
        <div class="row justify-content-xl-end">
          <div class="col-12 col-xl-11">
            <div class="accordion accordion-flush" id="accordionExample">
              <div class="accordion-item mb-4 shadow-sm">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    How Do I Change My Billing Information?
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <p>To change your billing information, please follow these steps:</p>
                    <ul>
                      <li>Go to our website and sign in to your account.</li>
                      <li>Click on your profile picture in the top right corner of the page and select "Account Settings."</li>
                      <li>Under the "Billing Information" section, click on "Edit."</li>
                      <li>Make your changes and click on "Save."</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-4 shadow-sm">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How Does Payment System Work?
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo">
                  <div class="accordion-body">
                    A payment system is a way to transfer money from one person or organization to another. It is a complex process that involves many different parties, including banks, credit card companies, and merchants.
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-4 shadow-sm">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Will taxes be included in my monthly invoice?
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree">
                  <div class="accordion-body">
                    Whether or not taxes are included in your monthly invoice depends on a number of factors, including your location, the type of services you are receiving, and the policies of the company providing you with those services.
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-4 shadow-sm">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    What currency will I be charged in?
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour">
                  <div class="accordion-body">
                    The currency you are charged in when making a purchase will depend on a number of factors, including the merchant you are purchasing from, the country you are purchasing from, and the payment method you are using.
                  </div>
                </div>
              </div>
              <div class="accordion-item shadow-sm">
                <h2 class="accordion-header" id="headingFive">
                  <button class="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    How Do I Cancel My Account?
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive">
                  <div class="accordion-body">
                    <p>To cancel your account, please follow these steps:</p>
                    <ul>
                      <li>Go to our website and sign in to your account.</li>
                      <li>Click on your profile picture in the top right corner of the page and select "Account Settings."</li>
                      <li>Scroll to the bottom of the page and click on "Cancel Account."</li>
                      <li>Enter your password and click on "Cancel Account."</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Faq2
