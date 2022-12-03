import React from 'react'
import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

function BlogBanner() {
  return (
    <>
    <Container to="home">
        <BannerImg >
           <img src="https://images.pexels.com/photos/4078342/pexels-photo-4078342.jpeg?auto=compress&cs=tinysrgb&w=600" alt="This is the image"/>
        </BannerImg>
        <BannerContent>
            <BannerH1>This is the blog</BannerH1>
            <BannerP>This is where all banner deytailes will go</BannerP>
        <Wrapper>
        <BannerButton>START READING</BannerButton>
       </Wrapper>
        </BannerContent>
    </Container></>
  )
}

export default BlogBanner

const Container = styled.div`
display:flex;
align-items:center;

justify-content:center;
z-index:1;
position:relative;
padding:0 30px;
height:300px;
`

const Wrapper=styled.div`

`

const BannerImg=styled(LinkR)`
position:absolute;
top:2px;
left:0;
right:0;
bottom:0;
height:100%;
width:100%;
overflow:hidden;

img{
    width:100%;
    height:100%;
    object-fit:cover;
    background:#232a34;
    -o-object-fit:cover;
}
`

const BannerContent=styled.div`
position:absolute;
display:flex;
flex-direction:column;
padding:5px 24px;
align-items:center;
z-index:3;
max-width:70vw;
height:35vh;
`

const BannerH1=styled.h1`
color:#fff;
align-items:center;
font-size:58px;

@media screen and(max-width:760px){
    font-size:40;
}

@media screen and (max-width: 460px){
    font-size:32px;
}
`

const BannerP=styled.p`
margin-top:24px;
color:#fff;
max-width:600px;
font-size:24px;
text-align:center;

@media screen and (max-width:760px){
font-size:24px;
}

@media screen and (max-width: 460px){
font-size:18px;
}
`

const BannerButton=styled(LinkR)`
border: