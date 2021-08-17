import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";

const Card = memo(({ cardData, userData }) => {
  const [cardUser, setcardUser] = useState([]);
  console.log(cardData);

  useEffect(() => {
    setcardUser(
      userData.filter((card) => {
        return card.template_id === cardData.template_id;
      })
    );
  }, [userData, cardData.template_id]);
  if (cardData.immutable_data.img !== "")
    return (
      <Link className='card--wrap' to={`/info/${cardData.template_id}`}>
        <img
          src={`${process.env.REACT_APP_IPFS}${
            cardData.immutable_data.img || null
          }&w=95`}
          width='100'
          alt={cardData.name}
          className={`card--image ${cardUser.length > 0 && `user-have`}`}
        />
        {cardUser.length > 0 && (
          <span className='card--quantity'>x{cardUser[0].assets}</span>
        )}
      </Link>
    );
  return null;
});
export default Card;
