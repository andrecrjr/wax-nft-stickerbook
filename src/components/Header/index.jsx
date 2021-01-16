import React from "react";
import { ReactComponent as Menu } from "../../assets/menu.svg";

function Header({ setUser, user, getUser }) {
  return (
    <header>
      <div className='header--logo'>
        <img
          src='https://cdn.discordapp.com/attachments/740685225608216609/750693304399691806/image0.png'
          width='50'
        />
      </div>
      <div className='input--user'>
        <form className='input--user__form'>
          <input
            type='text'
            onChange={(e) =>
              setUser((data) => ({ ...data, ...{ user: e.target.value } }))
            }
            placeholder='Input your WAX username (username.wam or username.waa)'
            value={user.user}
          />
          <button type='submit' className='input--button' onClick={getUser}>
            Go!
          </button>
        </form>
      </div>
      <div>
        <label htmlFor={"open"}>
          <Menu width={20} height={35} fill={"yellow"} className='menu' />
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
      <ul></ul>
    </nav>
  );
}

export default Header;
