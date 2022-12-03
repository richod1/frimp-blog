import React from 'react'
import styled from 'styled-components'
import {NavLink as LinkR} from 'react-router-dom'
import PostCards from './PostCards'
import BlogBanner from './BlogBanner'

function Home(props) {
  return (
   <>
    <Nav>
   <NavContainer to="/">
    <NavLogo>
    <img src="" alt="LOGO"/>
    </NavLogo>
<NavMenu>
    <NavItems>
        <NavLink>Home</NavLink>
    </NavItems>
    <NavItems>
        <NavLink to="post">Post</NavLink>
    </NavItems>
    <NavItems>
        <NavLink to="stack">Stack</NavLink>
    </NavItems>
    <NavItems>
        <NavLink to="memes">Memes</NavLink>
    </NavItems>
</NavMenu>
<NavBtn>
    <NavbtnLink to="signup">
        Sign Up
    </NavbtnLink>
</NavBtn>

   </NavContainer>
   </Nav>

   <BlogBanner/>
   <PostCards/>
   {props.children}
   </>
  )
}

export default Home

const Nav=styled.nav`
height:80px;
display:flex;
background:#000;
justify-content:center;
align-items:center;
z-index;10;
top:0;
position:sticky;


@media screen and(max-width:960px){
    transition:0.8s all ease-out;
}
`

const NavLogo=styled(LinkR)`
justify-content:flex-start;
color:#fff;
display:flex;
font-size:1.5rem;
text-decoration:none;
font-weight:bold;
margin-left:24px;
cursor:pointer;
align-items:center;

`

const NavContainer=styled.nav`
display:flex;
justify-content:space-between;
height:80px;
width:100%;
z-index:1;
padding:0 24px;
max-width:1100px;
`

const NavMenu=styled.ul`
display:flex;
list-style:none;
text-align:center;
margin-left:-22px;

@media screen and (max-width: 780px){
    display:none;
}
`

const NavItems=styled.div`
height:80px;
`

const NavLink=styled.li`
display:flex;
align-items:center;
color:#fff;
flex-direction:row;
text-decoration:none;
padding: 0 1rem;
height:100%;
cursor:pointer;



&:active{
    border-bottom:3px solid #01bf71;

}

`

const NavBtn=styled.div`
display:flex;
align-items:center;

@media screen and (max-width; 760px){
display:none;
}
`

const NavbtnLink = styled(LinkR)`
font-size:16px;
outline:none;
border:none;
border-radius:10px;
white-spacing:nowrap;
background:#01bf71;
padding:10px 20px;
text-decoration:none;
color:#010606;
transition:all 0.2s all ease-out;

&:hover{
color:blue;
background:#fff;
transition:all 0.2s ease-out;
}
`