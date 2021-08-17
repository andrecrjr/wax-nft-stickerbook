import React, { useEffect, useState, useCallback } from "react";
import { useHistory, useParams } from "react-router";
import { getCardTemplate } from "../services";

const CardPage = () => {
  const { cardId } = useParams();
  const history = useHistory();
  const [card, setCard] = useState({});
  const fetchCardId = useCallback(async (cardId) => {
    const data = await getCardTemplate(cardId);
    setCard(data);
  }, []);
  useEffect(() => {
    fetchCardId(cardId);
  }, [fetchCardId, cardId]);

  return (
    <section className='card--page'>
      <span
        className='card--page__back'
        role='img'
        aria-labelledby='back'
        onClick={() => history.goBack()}
      >
        ⬅️
      </span>
      {Object.keys(card).length > 0 && (
        <section className='card--page__wrapper'>
          <div>
            <img
              src={`${process.env.REACT_APP_IPFS}${card.immutable_data.img}&w=150`}
            />
          </div>
          <div className='card--page__description'>
            <h3>
              <span className='card--page__info'>Card Name:</span> {card.name}
            </h3>
            <h3>
              <span className='card--page__info'>Created at:</span>
              {new Date(Number(card.created_at_time)).toDateString()}
            </h3>
            <h3>
              <span
                className='card--page__info'
                role='img'
                aria-labelledby='burn'
              >
                Burnable 🔥?:
              </span>
              <span>{card.is_burnable ? "yes" : "no"}</span>
            </h3>
            <h3>
              <span className='card--page__info'>Distribution:</span>
              <span>
                {card.issued_supply}/{card.max_supply}
              </span>
            </h3>
          </div>
        </section>
      )}
    </section>
  );
};

export default CardPage;
