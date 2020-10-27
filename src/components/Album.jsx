import React, { useState, useCallback, useContext } from "react";
import { Page } from "./Page";
import HTMLFlipBook from "react-pageflip";
import { SettingsContext } from "../context";

export default function Album() {
  const { ATOMIC_WAX_API, sticks_by_page } = useContext(SettingsContext);
  const [page, setPaginate] = useState({});
  const [user, setUser] = useState({ user: "", data: [] });

  const numberTemplateCallback = useCallback(() => {
    const getNumberTemplates = async () => {
      try {
        let getNumber = await fetch(
          `${ATOMIC_WAX_API}templates?collection_name=crptomonkeys&page=1&order=asc&sort=created`
        );
        const { data } = await getNumber.json();
        setPaginate([...Array(Math.ceil(data.length / sticks_by_page)).keys()]);
      } catch (e) {
        console.log(e);
      }
    };
    getNumberTemplates();
  }, [ATOMIC_WAX_API, sticks_by_page]);

  React.useEffect(() => {
    numberTemplateCallback();
  }, [numberTemplateCallback]);

  const fetchUser = async () => {
    const response = await fetch(
      `${ATOMIC_WAX_API}accounts/${user.user}/crptomonkeys`
    );
    const { data } = await response.json();
    setUser((oldata) => ({ ...oldata, data: data ? data.templates : [] }));
  };

  const getUser = (e) => {
    e.preventDefault();
    try {
      fetchUser();
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
          placeholder='Input your username'
          value={user.user}
        />
        <button className='input--button' onClick={getUser}>
          Go!
        </button>
      </div>
      <div className='container'>
        {page.length > 0 && (
          <HTMLFlipBook width={340} height={500} showCover={true}>
            <div className='cover__green'>
              <Cover user={user} />
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
                class='final--header'
              >
                More to come
              </p>
            </div>
          </HTMLFlipBook>
        )}
      </div>
    </>
  );
}

export const Cover = ({ user }) => {
  console.log(user);
  return (
    <>
      <h1 className='cover__green--title'>NFT's Sticker Book</h1>
      <img
        src='https://wax.atomichub.io/ipfs/QmUEr6noR9tF5qKPT68VWMARykdwT1vhigm9DzjBRCMSZm'
        className='cover__green--image'
        alt='logo'
      />
      {user.data.length > 0 && <p>by {user.user}</p>}
    </>
  );
};
