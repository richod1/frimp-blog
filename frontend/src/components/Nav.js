import React from 'react'
import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

function Nav() {
  return (
    <Container>
        <NavLogo >LOGO</NavLogo>
        <NavContent>
            <NavItems>
                <NavLink>Home</NavLink>
            </NavItems>
            <NavItems>
                <NavLink >Post</NavLink>
            </NavItems>
            <NavItems>
                <NavLink >Meme</NavLink>
            </NavItems>
            <NavItems>
                <NavLink >Code</NavLink>
            </NavItems>
            <Navbtn>
                <NavbtnLink >Read More.</NavbtnLink>
            </Navbtn>
        </NavContent>
    </Container>
  )
}

export default Nav
const Container=styled.div`
height:80px;
position:sticky;
display:flex;
width:92%;
border-radius:13px;
padding:0 30px;
margin-right:20px;
margin-top:10px;
margin-left:10px;

border:none;
justify-content:space-between;
align-items:center;
box-shadow:0 5px 15px rgba(0,0,0,0.25);

@media screen and (max-width:760px){
    width:90%;
    font-size:bold;
}
@media screen and (max-width:460px){
    width:50%;
    font-size:1.5rem;
}
`

const NavLogo=styled(LinkR)`
text-decoration:none;
font-size:2rem;
color:#000;
cursor:pointer;
`
const NavContent=styled.div`
display:flex;
grid-templete-columns:repeat(6, auto);
grid-gap:20px;
justify-content:center;
`

const NavItems=styled.ul`
display:flex;
justify-content:space-between;
text-align:center;

`
const NavLink=styled.li`
list-style:none;
text-decoration:none;
cursor:pointer;
margin-left:20px;
font-size:1.2rem;
padding:0.7rem 1rem;
color:#000;
white-space:nowrap;

&:hover{
    background:teal;
    color:#fff;
    border-radius:10px;
    
}

`

const Navbtn=styled.div`
display:flex;
justify-content:center;
align-items:center;

`

const NavbtnLink=styled(LinkR)`
text-decoration:none;
outline:none;
border-radius:10px;
background:powderblue;
border:none;
padding:0.7rem 1rem;
color:#000;

&:hover{
    background:#010607;
    transition:all 0.2s ease-in-out;
    color:#fff;
}
`