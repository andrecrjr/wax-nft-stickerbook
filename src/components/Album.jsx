import React, { useState, useCallback, useEffect } from "react";
import { Page } from "./Page";
import HTMLFlipBook from "react-pageflip";
import { getNumberTemplates, fetchUser } from "../services";
import { Footer } from "./Footer";
import { useParams } from "react-router";
import { Share } from "./Share";

export default function Album() {
  const params = useParams();
  const [page, setPaginate] = useState({});
  const [pageData, setPageData] = useState({});
  const [user, setUser] = useState({ user: params.username || "", data: [] });

  const getNumberPages = useCallback(() => {
    getNumberTemplates(setPageData, setPaginate);
  }, []);
  useEffect(() => {
    if (Object.keys(params).length > 0) {
      fetchUser(setUser, user);
    }
  }, [params]);
  React.useEffect(() => {
    getNumberPages();
  }, [getNumberPages]);

  const getUser = (e) => {
    e.preventDefault();
    try {
      fetchUser(setUser, user);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className='input--user'>
        <input
          type='text'
          onChange={(e) =>
            setUser((data) => ({ ...data, ...{ user: e.target.value } }))
          }
          placeholder='Input your WAX username (username.wam or username.waa)'
          value={user.user}
        />
        <button className='input--button' onClick={getUser}>
          Go!
        </button>
      </div>
      <AlbumContainer page={page} pageData={pageData} user={user} />
      {user.data.length > 0 && <Share user={user.user} params={params} />}
      <Footer />
    </>
  );
}

export const AlbumContainer = ({ page, user, pageData }) => {
  return (
    <div className='container'>
      {page.length > 0 && (
        <HTMLFlipBook width={340} height={500} showCover={true}>
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
  );
};

export const Cover = ({ user, data }) => {
  return (
    <>
      <h1 className='cover__green--title'>NFT's Sticker Book</h1>
      <img
        src={`https://wax.atomichub.io/ipfs/${data[0].collection.img}`}
        className='cover__green--image'
        alt='logo'
      />
      {user.data.length > 0 && (
        <section>
          <p>by {user.user}</p>
        </section>
      )}
    </>
  );
};
