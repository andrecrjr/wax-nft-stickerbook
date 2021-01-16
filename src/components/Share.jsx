import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Tooltip from "./Tooltip";

export const Share = ({ params, user }) => {
  const [copied, setCopy] = useState({ copy: null });

  return (
    <>
      <section
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 10px",
        }}
      >
        <p
          className='share--description'
          style={{ fontSize: ".75rem", color: "yellow" }}
        >
          Share your book with friends copy the url:{" "}
        </p>
        <input
          type='text'
          style={{ marginLeft: "15px" }}
          defaultValue={`${window.location.origin}/user/${user}`}
        />
        <CopyToClipboard
          text={`${window.location.origin}/user/${user}`}
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
      <Tooltip copy={copied.copy} setCopy={setCopy} timing={2000}>
        Share url copied!
      </Tooltip>
    </>
  );
};
