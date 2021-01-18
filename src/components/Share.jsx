import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Tooltip from "./Tooltip";

export const Share = ({ params, user }) => {
  const [copied, setCopy] = useState({ copy: null });

  return (
    <>
      <section className='share--block'>
        <p
          className='share--description'
          style={{ fontSize: ".75rem", color: "yellow" }}
        >
          Share your Sticker Book:{" "}
        </p>
        <input
          type='text'
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
