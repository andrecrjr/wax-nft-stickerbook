import React, { useContext } from "react";
import { UserContext } from "../contexts";

export const Cover = () => {
  const { userData, page } = useContext(UserContext);

  return (
    <>
      <h1 className='cover__green--title'>NFT's Sticker Book</h1>
      <img
        src={`${process.env.REACT_APP_IPFS_NODE}${page?.collectionImage}`}
        className='cover__green--image'
        alt='logo'
      />
      {userData.user.length > 0 && (
        <section>
          <p>Collector: {userData.user}</p>
        </section>
      )}
    </>
  );
};
