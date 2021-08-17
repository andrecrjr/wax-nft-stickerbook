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
    return () => {
      setcardUser([]);
    };
  }, [userData, cardData.template_id]);

  return (
    <Link className='card--wrap' to={`/info/${cardData.template_id}`}>
      <img
        src={`${process.env.REACT_APP_IPFS}${
          cardData?.immutable_data?.img + `&w=95` ||
          "https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"
        }`}
        width='100'
        alt={cardData.name}
        className={`card--image ${cardUser.length > 0 && `user-have`}`}
      />
      {cardUser.length > 0 && (
        <span className='card--quantity'>x{cardUser[0].assets}</span>
      )}
    </Link>
  );
});
export default Card;
