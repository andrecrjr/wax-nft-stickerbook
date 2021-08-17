import React from "react";
import HTMLFlipBook from "react-pageflip";
import { Cover } from "./Cover";
import { Page } from "../Page";

export const AlbumContainer = React.forwardRef(
  ({ page, user, pageData }, ref) => (
    <div className='container'>
      {page.length > 0 && (
        <HTMLFlipBook
          width={340}
          height={500}
          maxHeight={550}
          showCover={true}
          ref={ref}
          swipeDistance={25}
        >
          <div className='cover__green'>
            <Cover user={user} data={pageData} />
          </div>
          {page.map((item, index) => (
            <div className='cover__page' key={index}>
              {<Page page={item + 1} user={user.data} />}
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
  )
);
