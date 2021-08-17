import React from "react";

export const Cover = ({ user, data }) => {
  return (
    <>
      <h1 className='cover__green--title'>NFT's Sticker Book</h1>
      <img
        src={`${process.env.REACT_APP_IPFS_NODE}${data[0].collection.img}`}
        className='cover__green--image'
        alt='logo'
      />
      {user.data.length > 0 && (
        <section>
          <p>Collector: {user.user}</p>
        </section>
      )}
    </>
  );
};
