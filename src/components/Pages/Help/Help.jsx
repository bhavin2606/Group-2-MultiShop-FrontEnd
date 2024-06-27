import React from "react";
import helpImg from "../../../assets/img/help.png";
import Accordion from "react-bootstrap/Accordion";
import Breadcrumbs from "../../../Routes/Breadcrumbs";

export default function Help() {
  return (
    <>
      <Breadcrumbs/>
      <section className="px-xl-5 py-3 py-md-5">
        <div className="container">
          <div className="row gy-5 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6 ">
              <img
                className="img-fluid rounded"
                loading="lazy"
                src={helpImg}
                alt="How can we help you?"
              />
            </div>
            <div className="col-12 col-lg-6">
              <div className="row justify-content-xl-end">
                <div className="col-12 col-xl-11">
                  <h2 class="h1 mb-3">How can we help you?</h2>
                  <p class="lead fs-4 mb-5">
                    We hope you have found an answer to your question. If you
                    need any help, please search your query on our Support
                    Center or contact us via email.
                  </p>
                  <Accordion defaultActiveKey={["0"]} alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        {" "}
                        How Do I Change My Billing Information?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          To change your billing information, please follow
                          these steps:
                        </p>
                        <ul>
                          <li>
                            Go to our website and sign in to your account.
                          </li>
                          <li>
                            Click on your profile picture in the top right
                            corner of the page and select "Account Settings."
                          </li>
                          <li>
                            Under the "Billing Information" section, click on
                            "Edit."
                          </li>
                          <li>Make your changes and click on "Save."</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How Does Payment System Work?
                      </Accordion.Header>
                      <Accordion.Body>
                        A payment system is a way to transfer money from one
                        person or organization to another. It is a complex
                        process that involves many different parties, including
                        banks, credit card companies, and merchants.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        How Do I Cancel My Account?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          To cancel your account, please follow these steps:
                        </p>
                        <ul>
                          <li>
                            Go to our website and sign in to your account.
                          </li>
                          <li>
                            Click on your profile picture in the top right
                            corner of the page and select "Account Settings."
                          </li>
                          <li>
                            Scroll to the bottom of the page and click on
                            "Cancel Account."
                          </li>
                          <li>
                            Enter your password and click on "Cancel Account."
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
