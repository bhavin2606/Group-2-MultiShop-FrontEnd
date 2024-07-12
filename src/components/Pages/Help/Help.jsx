import React from "react";
import helpImg from "../../../assets/img/help.png";
import Accordion from "react-bootstrap/Accordion";
import Breadcrumbs from "../../../Routes/Breadcrumbs";
import { useGetHelpDataQuery } from "../../../Redux/Slices/GeneralSettingsApi";

export default function Help() {
  const { data: HelpData } = useGetHelpDataQuery();
  return (
    <>
      <Breadcrumbs />
      <div className="container-fluid">
        <h2 className="section-title mx-5 position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Help Us</span>
        </h2>
        <div className="container-fluid">
          <div className="container-fluid">
            <section className="p-0">
              <div className="mt-5 container-fluid">
                {/* Section title */}
                <h2 className="mb-5"></h2>
                <p className="mb-4"></p>

                <div className="row mb-5">
                  {/* Category buttons */}
                  <div className="col-12 col-sm-12 col-md-6 ">
                    <h4 className="h4 mb-3">How can we help you?</h4>
                    <p className="lead fs-6 mb-5">
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
                          process that involves many different parties,
                          including banks, credit card companies, and merchants.
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
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          How Does Payment System Work?
                        </Accordion.Header>
                        <Accordion.Body>
                          A payment system is a way to transfer money from one
                          person or organization to another. It is a complex
                          process that involves many different parties,
                          including banks, credit card companies, and merchants.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          How Does Payment System Work?
                        </Accordion.Header>
                        <Accordion.Body>
                          A payment system is a way to transfer money from one
                          person or organization to another. It is a complex
                          process that involves many different parties,
                          including banks, credit card companies, and merchants.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
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
              {/* FAQs accordion */}
              <div className="col-12 col-sm-12 col-md-6 mt-4 mt-sm-4 mt-md-0">
                <img
                  className="img-fluid rounded"
                  loading="lazy"
                  src={helpImg}
                  alt="How can we help you?"
                />
              </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
