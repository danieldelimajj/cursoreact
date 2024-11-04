import React from 'react'


// Components
import { NavLink, Link } from 'react-router-dom'
import {BsSearch, BsHouseDoorFill, BsFillPersonFill, BsFillCameraFill} from "react-icons/bs";
import { LiStyled, NavLinks, NavStyled, SearchFormStyled, SearchInput } from './NavBarStyled';


const Navbar = () => {
  return (
    <NavStyled>
      <Link to="/">ReactGram</Link>
      <SearchFormStyled>
        <BsSearch />
        <SearchInput type='text' />
      </SearchFormStyled>
      <NavLinks>
        <LiStyled>
          <NavLink to="/">
            <BsHouseDoorFill />
          </NavLink>
        </LiStyled>
        <LiStyled>
          <NavLink to="/login">Entrar</NavLink>
        </LiStyled>
        <LiStyled>
          <NavLink to="/register">Cadastrar</NavLink>
        </LiStyled>
      </NavLinks>
    </NavStyled>
  )
}

export default Navbar
