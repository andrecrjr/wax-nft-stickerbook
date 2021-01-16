import React from "react";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { Footer } from "../Footer";
import { Link } from "react-router-dom";

function Header({ setUser, user, getUser }) {
  return (
    <header>
      <div className='header--logo'>
        <img
          src='https://cdn.discordapp.com/attachments/740685225608216609/750693304399691806/image0.png'
          width='50'
          alt='cryptomonkey logo'
        />
      </div>
      <div className='input--user'>
        {window.location.pathname !== "/suggestion" ? (
          <form className='input--user__form'>
            <input
              type='text'
              onChange={(e) =>
                setUser((data) => ({ ...data, ...{ user: e.target.value } }))
              }
              placeholder='Input your WAX username (username.wam or username.waa)'
              value={user?.user}
            />
            <button type='submit' className='input--button' onClick={getUser}>
              <span aria-label='search user' role='img'>
                🔍
              </span>
            </button>
          </form>
        ) : (
          <Link to='/' className='menu--link'>
            <span role='img' aria-label='back to index'>
              👈
            </span>
          </Link>
        )}
      </div>
      <div>
        <label htmlFor={"open"}>
          <Menu width={20} height={35} fill={"yellow"} />
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

        <Footer />
      </ul>
    </nav>
  );
}

export default Header;
