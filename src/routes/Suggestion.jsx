import React from "react";
import Layout from "../components/Layout";
function Suggestion(props) {
  return (
    <Layout>
      <div className='block--page'>
        <h3>
          If you have some suggestions for this platform you can send in the
          form below:
        </h3>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSegdt6uKs67rqj2MyY4P46sO7x-G47fOAHb2jVOX5Haqo8ZBw/viewform?embedded=true'
          width={window.screen.width < 660 ? "325" : "660"}
          height='820'
          title='form'
          frameBorder='0'
          marginHeight='0'
          marginWidth='0'
        >
          Carregando…
        </iframe>
      </div>
    </Layout>
  );
}

export default Suggestion;
