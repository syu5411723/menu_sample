import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import MenuToggle from './MenuToggle'

const Container = styled.header`
    width:100%;
    border-bottom:2px solid #fff;
`
const Inner = styled.div`
    height: 50px;
`
const Title = styled.h1`
    color:#fff;
`
const MenuWrapper = styled.div`
    cursor: pointer;
    position:fixed;
    top:0;
    right:10%;
    z-index:99;
    height: 30px;
    width:30px;
`
const MenuContainer = styled(motion.div)`
    position:fixed;
    top:0;
    left:60%;
    width:100%;
    height:100%;
    background-color: #fff;
    z-index:1;
`

const menuV = {
    closed: { x: "60%" },
    open: { x: 0 }
}
const transition = {type: "spring", stiffness:50, delay:0.1}

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!isOpen)
    }
    return (
        <>
            <Container>
                <Inner>
                    <Title>Sample</Title>
                    <MenuWrapper >
                        <MenuToggle toggle={toggle} isOpen={isOpen} />
                        <MenuContainer
                            variants={menuV}
                            initial={false}
                            animate={isOpen ? "open" : "closed"}
                            transition={transition}
                        >
                            <Menu isOpen={isOpen} />
                        </MenuContainer>
                    </MenuWrapper>
                </Inner>
            </Container>
        </>
    )
}

export default Header
