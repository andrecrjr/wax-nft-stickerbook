import React, { useState, useCallback, memo } from "react";
import HTMLFlipBook from "react-pageflip";
import { Cover } from "./Cover";
import { Page } from "../Page";
import { getTemplate } from "../../services";

export const AlbumContainer = memo(({ page, user, pageData }) => {
  const [data, setData] = useState({});
  const getTemplateFetch = useCallback((page) => {
    getTemplate(page.data, setData);
    getTemplate(page.data + 1, setData);
  }, []);

  return (
    <div className='container'>
      {page.length > 0 && (
        <HTMLFlipBook
          width={340}
          height={500}
          maxHeight={550}
          showCover={true}
          swipeDistance={25}
          onFlip={getTemplateFetch}
        >
          <div className='cover__green'>
            <Cover user={user} data={pageData} />
          </div>
          {data &&
            page.map((item, index) => (
              <div className='cover__page' key={index}>
                <Page data={data[index]} user={user.data} />
              </div>
            ))}
          <div className='cover__page--final'>
            <p
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "15px",
              }}
              className='final--header'
            >
              Soon, new NFTs!
              <br></br>
              <a href='https://discord.gg/yyQFSdEyEz'>
                Visit cryptoMonkeys Discord
              </a>
            </p>
          </div>
        </HTMLFlipBook>
      )}
    </div>
  );
});
