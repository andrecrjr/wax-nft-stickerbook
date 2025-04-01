import React, { useContext } from "react";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { Footer } from "../Footer";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts";
import { fetchUser } from "../../services";

function Header() {
  const { userData, dispatchUser, page } = useContext(UserContext);

  return (
    <header className='pt-2'>
      <div className='lg:w-full md:pl-5'>
        <Link to='/' className='menu--link'>
          <img
            src={`${process.env.REACT_APP_LOGO_COLLECTION}`}
            width='50'
            alt='cryptomonkey logo'
          />
        </Link>
      </div>
      <div className='input--user lg:pr-5'>
        {window.location.pathname !== "/suggestion" ? (
          <form className='input--user__form'>
            <input
              type='text'
              onChange={(e) =>
                dispatchUser({ type: "UPDATE_USER", payload: e.target.value })
              }
              placeholder='Input your WAX address (username.wam or username.waa)'
              value={userData?.user}
              className='text-xs'
            />
            <button
              type='submit'
              className='bg-gradient-to-b to-mainPrimary from-mainSecondary'
              onClick={async (e) => {
                e.preventDefault();
                try {
                  const searchUser = await fetchUser(userData.user).then(
                    (response) => {
                      return response;
                    }
                  );
                  dispatchUser({ type: "SET_USER", payload: searchUser });
                } catch (e) {}
              }}
            >
              <span aria-label='search user' role='img'>
                🔍
              </span>
            </button>
          </form>
        ) : (
          <Link to='/' className='no-underline'>
            <span role='img' aria-label='back to index'>
              👈
            </span>
          </Link>
        )}
      </div>
      <div>
        <label htmlFor={"open"}>
          <Menu width={25} height={35} fill={"yellow"} />
        </label>
        <input type='checkbox' id='open' className='menu--check' />
        <MenuHeader />
      </div>
    </header>
  );
}

function MenuHeader() {
  return (
    <nav className='menu--aside'>
      <ul className='menu--aside__block'>
        <li>
          <Link to='/suggestion'>Suggestions</Link>
        </li>
        <li>
          <Footer />
        </li>
      </ul>
    </nav>
  );
}

export default Header;
