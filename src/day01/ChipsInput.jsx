import React, { useState } from "react";

function ChipsInput() {
  const [inputdata, setInputData] = useState("");
  const [chips, setChips] = useState([]);

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputdata.trim() !== "") {
      e.preventDefault();
      setChips([...chips, inputdata.trim()]);
      setInputData("");
    }
  };

  const handleDeleteChip = (index) => {
    
    setChips(chips.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "100px",
      }}
    >
      <h2>Chips Input</h2>
      {/* the input field */}
      <input
        type="text"
        placeholder="Type a chip and press enter"
        value={inputdata}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={{ padding: "8px", width: "200px" }}
      />
      {/* displaying chips on UI */}
      <div style={{ marginTop: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {chips.map((chip, index) => (
          <div
            key={index}
            style={{
              padding: "8px 12px",
              backgroundColor: "#eee",
              borderRadius: "20px",
              display: "inline-block",
              position: "relative",
            }}
          >
            {chip}
            <button
              onClick={() => handleDeleteChip(index)} 
              style={{
                cursor: "pointer",
                color: "red",
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
