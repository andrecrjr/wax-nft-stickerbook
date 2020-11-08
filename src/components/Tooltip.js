import React, { useEffect } from "react";

const Tooltip = ({ timing, setCopy, copy, children }) => {
  useEffect(() => {
    if (copy) {
      setTimeout(() => setCopy({ copy: false }), timing);
    }
  }, [copy, setCopy, timing]);
  return (
    <section className={`donate ${copy ? `donate--show` : null}`}>
      <span
        style={{
          background: "green",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {children}
      </span>
    </section>
  );
};

export default Tooltip;
