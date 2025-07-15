import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className = {`${styles.paddingX} w-full flex items-center top-0 py-5 fixed z-20 bg-primary`}
    >
      <div 
        className = {"w-full flex items-center justify-between max-w-7xl mx-auto"}
      >
        <Link
          to = "/"
          className = {"flex items-center gap-6"}
          onClick = {() => 
          {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-12 h-14 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Grishma &nbsp;
            <span className="sm:block hidden">Nair</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => 
            <li
              key={Link.id}
              className={`${
                active===Link.title
                ? "text-white"
                : "text-secondary"
              } hover:text-white text-[18px] cursor-pointer font-medium`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          )}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'}
            mx-4 my-6 min-w-[140px] p-6 top-20 right-0 z-10 rounded-xl absolute black-gradient`}
          >
            <ul className="list-none flex justify-end items-start gap-4 flex-col">
          {navLinks.map((Link) => 
            <li
              key={Link.id}
              className={`${
                active===Link.title
                ? "text-white"
                : "text-secondary"
              } hover:text-white text-[16px] cursor-pointer font-poppins font-medium`}
              onClick={() => {
                setToggle(!toggle);
                setActive(Link.title);
              }}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          )}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar