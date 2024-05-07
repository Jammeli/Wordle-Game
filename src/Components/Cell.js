import React from "react";
import { useRef } from "react";

function Cell({ index, cell, cells, handelInputs, inputRefs }) {
  const handleKeyDown = (e, index) => {
    // Prevent default behavior for arrow keys
    if (["ArrowLeft", "ArrowRight"].includes(e.key)) {
      e.preventDefault();
    }

    // Move to the previous input on backspace
    if (e.key === "Backspace" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  return (
    <div className="cell">
      <input
        type="text"
        id="element"
        key={index}
        ref={(ref) => (inputRefs.current[index] = ref)}
        maxLength="1"
        onChange={(e) => handelInputs(e.target.value, index)}
        onKeyDown={(e) => handleKeyDown(e, index)}
      />
    </div>
  );
}

export default Cell;
