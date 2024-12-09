import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Style.css";
import { useState } from "react";

function AccordionItem({ item, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div
        onClick={ToggleAccordion}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <span>{item}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </div>

      {isOpen && <div style={{ color: "black" }}> {content}</div>}
    </div>
  );
}
function Faq() {
  return (
    <div>
      <Header></Header>
      <div class="faqheading">
        <h1>Frequently Asked Questions</h1>
        <a
          style={{
            marginLeft: "647px",
            padding: "20px",
            textDecoration: "none",
          }}
          href="/"
        >
          <i class="fa-solid fa-house"></i> Home
        </a>
        <a href="/" style={{ textDecoration: "none" }}>
          FAQ
        </a>
      </div>

      <div class="acc">
        <AccordionItem
          item="What are the courses whitebox-Learning offers?"
          content="AIML (Artificial Intelligence & Machine Learning), Full Stack Development"
        ></AccordionItem>
        <hr></hr>
        <AccordionItem
          item="Do you provide corporate traning? "
          content="Yes, we do."
        ></AccordionItem>
        <hr></hr>
        <AccordionItem
          item=" Are all your classes are online or in-person? "
          content="Most of our classes are online, but we also do in-person classes at our Dublin office.."
        ></AccordionItem>
        <hr></hr>
        <AccordionItem
          item="Are all classes are mandatory for traning? "
          content="Yes, you need to attend all our morning and evening classes for training. The topics covered in morning and evening sessions are different."
        ></AccordionItem>
        <hr></hr>
        <AccordionItem
          item="Where are you located? "
          content="We are located at 6500 Dublin Blvd #214, Dublin, CA 94568."
        ></AccordionItem>
        <hr></hr>
        <AccordionItem
          item="What if i miss any of your classes?"
          content="All our classes will be recorded and uploaded to our learning management portal. You can go through the recording of the class if you miss it and can access it at any given time. You may also go through previous batch recordings if you want to come prepared for a certain class.


"
        ></AccordionItem>
        <hr></hr>
        <AccordionItem
          item="What's the duration of courses you offer?"
          content="Courses are 8 to 12 weeks in duration."
        ></AccordionItem>
        <hr></hr>
        <AccordionItem
          item="Do i need to have any prior experience to join your classes?"
          content="No prior experience is required. Any bachelor's degree is sufficient to enroll in our courses and get placed in a project. We expect a minimum commitment of 20 hrs/week from candidates without a computer science background."
        ></AccordionItem>
        <hr></hr>
        <AccordionItem
          item="Do you have lab faclities in your institute?"
          content="Yes, we have a training room with sufficient machines equipped with the necessary tools. You can also access these machines online via TeamViewer.


"
        ></AccordionItem>
        <hr></hr>
        <AccordionItem
          item="Do you charge any fee for the traning? "
          content="Enrollment fee: $725 (for training and placement services). Training fee: $6500 (corporate training). Please contact our Recruiting Team at +1 925-557-1053 for more information.


"
        ></AccordionItem>
        <hr></hr>
        <AccordionItem
          item="What other formalities are required to enroll in your courses? "
          content="You need to sign our training agreement and submit a few documents. Please contact our Recruiting Team at +1 925-557-1053 for more information.


"
        ></AccordionItem>
        <hr></hr>
        <AccordionItem
          item="Will you help with resume preparation? "
          content="Yes, we provide assistance with resume preparation."
        ></AccordionItem>
        <hr></hr>
        <AccordionItem
          item="Will you help with interview preparations ? "
          content="Yes, our training team will conduct mock interviews and interview preparation sessions.


"
        ></AccordionItem>
        <hr></hr>
        <AccordionItem
          item="Where can i find your classes schdule and syllabus for traning ? "
          content={
            // "Please follow the link to view: Class Schedule and Syllabus(Course Content)"
            <a href="Schdule">
              Please follow the link to view: Class Schedule and Syllabus(Course
              Content)
            </a>
          }
        ></AccordionItem>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Faq;
