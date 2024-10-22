import React from 'react'

//Components
import { NavLink, Link } from 'react-router-dom'
import { BsSearch, BsHouseDoorFill, BsFillPersonFill, BsFillCameraFill } from "react-icons/bs"
import { LiStyled, NavLinks, NavStyled, SearchFormStyled, SearchIcon, SearchInput } from './NavbarStyled'

const Navbar = () => {
  return (
    <NavStyled>
      <Link to="/">ReactGram</Link>
      <SearchFormStyled>
        <SearchIcon />
        <SearchInput type='text' placeholder='Pesquisar' />
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
