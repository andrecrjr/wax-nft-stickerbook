import React, { useState, useEffect, useCallback, useContext } from "react";
import Card from "./Card";
import { SettingsContext } from "../context";
export const Page = ({ page, user }) => {
  const [data, setData] = useState([]);
  const { ATOMIC_WAX_API, sticks_by_page } = useContext(SettingsContext);

  const getTemplateFetch = useCallback(
    (pag) => {
      const getTemplate = async (pagination) => {
        const page = await fetch(
          `${ATOMIC_WAX_API}templates?collection_name=crptomonkeys&page=${pagination}&limit=${sticks_by_page}&order=asc&sort=created`
        );
        const { data } = await page.json();
        setData(data);
      };
      getTemplate(pag);
    },
    [ATOMIC_WAX_API, sticks_by_page]
  );
  useEffect(() => {
    getTemplateFetch(page);
  }, [page, getTemplateFetch]);

  return (
    <div className='cover__page--wrapper'>
      {data.length > 0 &&
        data.map((item, index) => {
          return <Card cardData={item} userData={user} />;
        })}
    </div>
  );
};
