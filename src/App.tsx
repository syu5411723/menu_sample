import React from 'react'
import styled from 'styled-components'
import { BrowserRouter } from "react-router-dom"

import Header from './components/Header'
import GlobalStyles from './GlobalStyles'
import { motion } from 'framer-motion'

const Contaier = styled.div`
  background-color: #000;
  height: 100vh;
  width: 100vw;
`
const Box = styled(motion.div)`
  background-color: #fff;
  margin:0 auto;
  height:200px;
  width:200px;
  display:flex;
  justify-content:space-around;
  align-items:center;
  flex-wrap:wrap;
`
const Item = styled(motion.div)`
  border-radius: 50%;
  width:80px;
  height:80px;
  background-color:#000;
`
const boxV = {
  hidden:{},
  visible:{transition: { staggerChildren: 0.07, delayChildren: 0.2 }},
}
const itemV = {
  hidden:{opacity:0, y:-30},
  visible:{opacity:1, y:0, transitioin:{duration:0.5}},
}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Contaier>
          <GlobalStyles />
          <Header />
          <Box
            variants={boxV}
            initial="hidden"
            animate="visible"
          >
            <Item 
              variants={itemV}
            />
            <Item 
              variants={itemV}
            />
            <Item 
              variants={itemV}
            />
            <Item 
              variants={itemV}
            />
        </Box>
        </Contaier>

      </BrowserRouter>
    </>
  )
}

export default App
