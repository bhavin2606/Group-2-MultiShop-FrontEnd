import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './faqs.css'; // Import your CSS file for custom styles
import Accordion from 'react-bootstrap/Accordion';
import Breadcrumbs from "../../../Routes/Breadcrumbs";

const FAQs = () => {
  const [faqsData, setFaqsData] = useState({});
  const [filterFaqs, setFilterFaqs] = useState([]);
  const [activeCategory, setActiveCategory] = useState('1'); // Default active category

  // Fetch all FAQs data from JSON file
  const getAllFaqsData = async () => {
    try {
      const response = await axios.get('/JSON/faqs.json');
      if (response.data) {
        setFaqsData(response.data);
        // Filter FAQs by default active category
        setFilterFaqs(response.data.faqs.filter((faq) => faq.category === activeCategory));
      }
    } catch (error) {
      console.log('Error fetching FAQs:', error);
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
    <Breadcrumbs/>
    <div className="container mt-5">
      {/* Section title */}
      <div className="section-title" data-aos="fade-in">
        <h2 className='mb-5'>{faqsData.title}</h2>
        <p className='mb-4'>{faqsData.description}</p>
      </div>

      <div className="row mb-5">
        {/* Category buttons */}
        <div className="col-4">
          <button
            className={`btn btn-outline-warning p-2 text-dark w-100 ${activeCategory === '1' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('1')}
          >
            Category 1
          </button>
          <br />
          <button
            className={`btn btn-outline-warning p-2 text-dark mt-3 w-100 ${activeCategory === '2' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('2')}
          >
            Category 2
          </button>
        </div>

        {/* FAQs accordion */}
        <div className="col-8">
          <Accordion defaultActiveKey="0">
            {/* Display filtered FAQs */}
            {filterFaqs.map((faq, index) => (
              <Accordion.Item className="accordion" key={index} eventKey={index.toString()}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>  
    </div>
    </>
  );
};

export default FAQs;
