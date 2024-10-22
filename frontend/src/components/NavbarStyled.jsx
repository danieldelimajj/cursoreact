import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

export const NavStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    border-bottom: 1px solid #363636;
    padding: 0.1em 1em;
`

export const SearchFormStyled = styled.form`
    position: relative;
    width: 20%;
`

export const SearchIcon = styled(BsSearch)`
    position: absolute;
    top: 10px;
    left: 9px;
`

export const SearchInput = styled.input`
    padding-left: 2.5em;
    border: none;
    border-radius: 5px;
    width: 100%;
    margin: 0;
`

export const NavLinkStyled = styled.link`
    display: flex;
    align-items: center;
    
`

export const NavLinks = styled.ul`
    display: flex;
    align-items: center;
    
`

export const LiStyled = styled.li`
    margin-right: 1em;
    
`