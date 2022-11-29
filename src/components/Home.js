import React from 'react'
import NavHead from './NavHead'
import styled from 'styled-components'
import Blogpost from './Blogpost'

function Home() {
  return (

    <Container>
         <NavHead/>
         <Blogpost/>
         <Content>
        Home
         </Content>

    </Container>
  )
}

export default Home

const Container=styled.div`

`

const Content=styled.div`

`