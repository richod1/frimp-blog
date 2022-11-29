import React from 'react'
import styled from 'styled-components' 
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import {FaBars} from 'react-icons/fa'

function NavHead() {
  return (
    <>
    <Nav>
        <NavContainer>
            <NavLogo to="/">fimp Blog</NavLogo>
            <MobileIcon>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about">About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="discover">Discover</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="contact">Contact</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="sevices">Sevices</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="signup">SignUp</NavLinks>
                </NavItem>
            </NavMenu>
        </NavContainer>

    </Nav>
    </>
  )
}

export default NavHead

const Nav=styled.nav`
background:#000;
height:80px;

display:flex;
justify-content:center;
align-items:center;
position:stiky;
top:0;
z-index:10;
@media screen and(max-width: 960px){
    transition:0.8s all ease;
}
`

const NavContainer=styled.nav`
display:flex;
width:100%;
justify-content:space-between;
z-index:1;
padding:0 24px;
height:80px;
max-width:1100px;
`
const NavLogo=styled(LinkR)`
color:red;
display:flex;
justify-content:flex-start;
cursor:pointer;
font-size:1.5rem;
align-items:center;
text-decoration:none;
margin-left:24px;
font-weight:bold;
`

const MobileIcon=styled.div`
display:none;

@media screen and (max-width: 768px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100,60%);
    font-size:1.8rem;
    cursor:pointer;
    color:#fff;
}
`
const NavMenu=styled.ul`
display:flex;
list-style:none;
text-align:center;
margin-right:-22px;

@media screen and(max-width: 780px){
    display:none
}
`
const NavItem=styled.li`
height:80px;
`

const NavLinks=styled(LinkS)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
padding:0 1rem;
height:100%;
cursor:pointer;

&.active{
    border-bottom:3px solid #01bf71;
}
`

