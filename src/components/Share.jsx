import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export const Share = ({ params, user }) => {
  const [copied, setCopy] = useState({ copy: false });
  return (
    <>
      <section
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: ".75rem" }}>
          Share your book with friends copy the url:{" "}
        </p>
        <input
          type='text'
          style={{ marginLeft: "15px" }}
          value={`${window.location}${user}`}
        />
        <CopyToClipboard
          text={window.location}
          onCopy={() => setCopy({ copy: !copied.copy })}
        >
          <span
            role='img'
            aria-label='clip-to-clipboard'
            style={{ cursor: "pointer", fontSize: "1rem" }}
          >
            📋
          </span>
        </CopyToClipboard>
      </section>
      <p className={`donate ${copied.copy && `donate--show`}`}>
        <span
          style={{ background: "green", padding: "10px", borderRadius: "5px" }}
        >
          Share Link copied!
        </span>
      </p>
    </>
  );
};
