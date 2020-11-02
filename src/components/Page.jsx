import React, { useState, useEffect, useCallback } from "react";
import Card from "./Card";
import { getTemplate } from "../services";

export const Page = ({ page, user }) => {
  const [data, setData] = useState([]);

  const getTemplateFetch = useCallback((pag) => {
    getTemplate(pag, setData);
  }, []);
  useEffect(() => {
    getTemplateFetch(page);
  }, [page, getTemplateFetch]);

  return (
    <div className='cover__page--wrapper'>
      {data.length > 0 &&
        data.map((item, index) => {
          return (
            <section key={index}>
              <Card cardData={item} userData={user} index={index} />
            </section>
          );
        })}
    </div>
  );
};
