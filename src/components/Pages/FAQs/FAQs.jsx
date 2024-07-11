import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./faqs.css"; // Import your CSS file for custom styles
import Accordion from "react-bootstrap/Accordion";
import Breadcrumbs from "../../../Routes/Breadcrumbs";
import { useGetFaqDataQuery } from "../../../Redux/Slices/GeneralSettingsApi";

const FAQs = () => {
  const [faqsData, setFaqsData] = useState({});
  const [filterFaqs, setFilterFaqs] = useState([]);
  const [activeCategory, setActiveCategory] = useState("1"); // Default active category

  // Fetch all FAQs data from JSON file
  const getAllFaqsData = async () => {
    try {
      const response = await axios.get("/JSON/faqs.json");
      if (response.data) {
        setFaqsData(response.data);
        // Filter FAQs by default active category
        setFilterFaqs(
          response.data.faqs.filter((faq) => faq.category === activeCategory)
        );
      }
    } catch (error) {
      console.log("Error fetching FAQs:", error);
    }
  };

  // Load FAQs data on component mount
  useEffect(() => {
    getAllFaqsData();
  }, [activeCategory]); // Reload FAQs when activeCategory changes

  // Handle button click to filter FAQs by category
  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Set active category
  };

  return (
    <>
      <Breadcrumbs />
      <div className="container-fluid">
        <h2 className="section-title mx-5 position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">{faqsData.title}</span>
        </h2>
        <div className="container-fluid">
          <div className="container-fluid">
            <section className="p-0">
              <div className="mt-5 container-fluid">
                {/* Section title */}
                <h2 className="mb-5"></h2>
                <p className="mb-4">{faqsData.description}</p>

                <div className="row mb-5">
                  {/* Category buttons */}
                  <div className="col-xs-12 col-sm-4">
                    <button
                      className={`btn btn-outline-warning p-2 text-dark w-100 ${
                        activeCategory === "1" ? "active" : ""
                      }`}
                      onClick={() => handleCategoryClick("1")}
                    >
                      Category 1
                    </button>
                    <br />
                    <button
                      className={`btn btn-outline-warning p-2 text-dark mt-3 w-100 ${
                        activeCategory === "2" ? "active" : ""
                      }`}
                      onClick={() => handleCategoryClick("2")}
                    >
                      Category 2
                    </button>
                  </div>

                  {/* FAQs accordion */}
                  <div className="col-xs-12 col-sm-8 mt-3 mt-sm-0 mt-md-0">
                    <Accordion defaultActiveKey="0">
                      {/* Display filtered FAQs */}
                      {filterFaqs.map((faq, index) => (
                        <Accordion.Item
                          className="accordion"
                          key={index}
                          eventKey={index.toString()}
                        >
                          <Accordion.Header>{faq.question}</Accordion.Header>
                          <Accordion.Body>{faq.answer}</Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
