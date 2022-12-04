import React from 'react'
import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

function BlogBanner() {
  return (
   <>
   <Container>
    <HoverBg>
        <img src="https://images.pexels.com/photos/7046399/pexels-photo-7046399.jpeg?auto=compress&cs=tinysrgb&w=600" alt="bg"/>
    </HoverBg>
    <HoverContent>
        <HoverH1>Blog ono on </HoverH1>
        <HoverP>this is the blog we are talking abaout..</HoverP>
        <HoverBtn>
            <HoverBtnLink>GET STARTED</HoverBtnLink>
        </HoverBtn>
    </HoverContent>
   </Container>
   
   </>
  )
}

export default BlogBanner
const Container=styled.div`

display:flex;
justify-content:center;
align-items:center;
padding:0 30px;
height:800px;
position:relative;
z-index:1;
`





const HoverBg=styled(LinkR)`
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:85%;
overflow:hidden;

  img{
    width:100%;
    height:100%;
    -o-object-fit:cover;
    object-fit:cover;
    
  }



`

const HoverContent=styled.div`
text-align: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

`

const HoverH1=styled.h1`
font-size:2.5rem;
color:#fff;
`
const HoverP=styled.p`
font-size:2.5rem;
color:#000;

@media screen and (max-width:760px){
    font-size:1.5rem;
}

@media screen and (max-width:460px){
    font-size:4px;
}
`
const HoverBtn=styled.div`
font-size:1.5rem;
outline:none;
margin-top:4px;

`
const HoverBtnLink=styled(LinkR)`
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
`