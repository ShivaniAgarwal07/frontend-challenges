import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 

function Accordion({ items }) {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (index) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  return (
    <div>
      {items.length === 0 ? (
        <div>No items available</div>
      ) : (
        items.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => handleToggle(index)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                padding: "10px",
                fontSize: "16px"
              }}
            >
              {item.title}
              {openItem === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openItem === index && (
              <div style={{ padding: "10px", backgroundColor: "#f9f9f9" }}>
                {item.content}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Accordion;
