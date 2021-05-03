import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { Link } from  "react-router-dom"

const Container = styled.div``
const MenuList = styled(motion.ul)`
    margin-left:10px;
    margin-top: 50px;
`
const MenuItem = styled(motion.li)``
const Links = styled(Link)`
    color:#000;
    text-decoration:none;
    font-size: 18px;
    font-weight: bold;
`
const listV = {
    // closed:{transition:{staggerChildren:0.1, delayChildren:0.2}},
    // open:{transition:0.1, delayChildren:0.2}
    closed:{},
    open:{transition: { staggerChildren: 0.2, delayChildren: 0.5 }},
}

const itemV = {
    closed:{x:100, opacity:0},
    open:{x:0, opacity:1,}
}

const transition = {delay:1}

const Menu = ({isOpen}) => {
    return (
        <>
            <Container>
                <MenuList
                    variants={listV}
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                >
                    <MenuItem
                        variants={itemV}
                        // animate={isOpen ? "open" : "closed"}
                    >
                        <Links to="/">Home</Links>
                    </MenuItem>
                    <MenuItem
                        variants={itemV}
                        // animate={isOpen ? "open" : "closed"}
                    >
                        <Links to="/">Home</Links>
                    </MenuItem>
                    <MenuItem
                        variants={itemV}
                        // animate={isOpen ? "open" : "closed"}
                    >
                        <Links to="/">Home</Links>
                    </MenuItem>
                </MenuList>
            </Container>
        </>
    )
}

export default Menu
