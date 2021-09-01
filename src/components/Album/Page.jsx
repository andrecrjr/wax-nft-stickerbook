import React from "react";
import Card from "./Card";

export const Page = ({ data, user }) => {
  return (
    <div className='flex flex-wrap justify-evenly h-full items-center'>
      {data &&
        data.map((item, index) => {
          return (
            <section key={index} className='contents'>
              {Object.keys(item).length > 0 ? (
                <Card cardData={item} userData={user} index={index} />
              ) : (
                <p className='text-xl'>"loading"</p>
              )}
            </section>
          );
        })}
    </div>
  );
};
