import React from "react";
import Card from "./Card";

export const Page = ({ data, user }) => {
  return (
    <div className='cover__page--wrapper'>
      {data &&
        data.map((item, index) => {
          return (
            <section key={index} style={{ minHeight: "130px" }}>
              {item ? (
                <Card cardData={item} userData={user} index={index} />
              ) : (
                "loading"
              )}
            </section>
          );
        })}
    </div>
  );
};
