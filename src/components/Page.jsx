import React, { useState, useEffect, useCallback } from "react";

export const Page = ({ page, api, by_page, user }) => {
  const [data, setData] = useState([]);

  const templateBack = useCallback(
    (pag) => {
      const getTemplate = async (number) => {
        const page = await fetch(
          `${api}templates?collection_name=crptomonkeys&page=${number}&limit=${by_page}&order=asc&sort=created`
        );
        const { data } = await page.json();
        setData(data);
      };
      getTemplate(pag);
    },
    [by_page, api]
  );
  useEffect(() => {
    templateBack(page);
  }, [page, templateBack]);

  return (
    <div className='cover__page--wrapper'>
      {(data.length > 0 &&
        data.map((item, index) => {
          return <Card cardData={item} userData={user} />;
        })) || <p>Loading</p>}
    </div>
  );
};

const Card = ({ cardData, userData }) => {
  const [cardUser, setcardUser] = useState([]);
  useEffect(() => {
    setcardUser(
      userData.filter((card) => {
        return card.template_id === cardData.template_id;
      })
    );
  }, [userData, cardData.template_id]);
  return (
    <div className='card--wrap'>
      <img
        src={`https://wax.atomichub.io/ipfs/${
          cardData.immutable_data.img || null
        }`}
        width='100'
        alt={cardData.name}
        className={`card--image ${cardUser.length > 0 && `user-have`}`}
      />
      {cardUser.length > 0 && (
        <span className='card--quantity'>{cardUser[0].assets}</span>
      )}
    </div>
  );
};
