import React, { useContext } from "react";
import { UserContext } from "../contexts";

export const Cover = () => {
  const { userData, page } = useContext(UserContext);
  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <h1 className='text-black text-lg font-bold'>NFT's Sticker Book</h1>
      <img
        src={`${process.env.REACT_APP_LOGO_COLLECTION}`}
        className='h-16 my-5'
        alt='logo'
      />
      {userData.user.length > 0 && (
        <p className='text-sm text-black'>
          Collector: <span className='font-bold'>{userData?.user}</span>
        </p>
      )}
    </div>
  );
};
