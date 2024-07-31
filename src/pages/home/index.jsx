import React, { useState } from "react";
import Form from "../../components/navbar/Create-Investor-Form";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Form isOpen={isOpen} closeModal={closeModal} />
      <div className="add">
        <button className="add-button" onClick={openModal}>
          +
        </button>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
