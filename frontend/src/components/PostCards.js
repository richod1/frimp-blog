import React,{useState} from 'react'
import styled from 'styled-components'

const PostCards = () => {
const [post, setPost]=useState([
  {
    id:1,
    title:"",
    img:"",
    detail:"",
    date:"",
    author:""
  },
  {
    id:1,
    title:"",
    img:"",
    detail:"",
    date:"",
    author:""
  },
  {
    id:1,
    title:"",
    img:"",
    detail:"",
    date:"",
    author:""
  },
  {
    id:1,
    title:"",
    img:"",
    detail:"",
    date:"",
    author:""
  },
  {
    id:1,
    title:"",
    img:"",
    detail:"",
    date:"",
    author:""
  },
  {
    id:1,
    title:"",
    img:"",
    detail:"",
    date:"",
    author:""
  },
])

  return (
    <CardContainer>
      <CardTitle>TITLE</CardTitle>
      <CardWrapper>
        <PostTitle></PostTitle>
        <PostImg></PostImg>
        <PostDetail></PostDetail>
        <PostDate></PostDate>
        <PostAuthor></PostAuthor>

      </CardWrapper>

    </CardContainer>
  )
}

export default PostCards

const CardContainer=styled.div`

`

const CardTitle=styled.div`

`

const CardWrapper=styled.div`

`

const PostTitle=styled.h2`

`

const PostImg=styled.img`

`

const PostDetail=styled.h3`

`

const PostDate=styled.p`

`

const PostAuthor=styled.span`

`