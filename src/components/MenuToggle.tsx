import { motion } from 'framer-motion'
import React, {useState} from 'react'
import styled from 'styled-components'

const Button = styled(motion.div)`
    top:10px;
    right:30px;
    position:fixed;
    z-index:99;
    display:flex;
    height:30px;
    flex-direction:column;
    justify-content:space-around;
`
const Line01 = styled(motion.div)`
    width:25px;
    height:2px;
`
const Line02 = styled(motion.div)`
    width:25px;
    height:2px;
`
const Line03 = styled(motion.div)`
    width:25px;
    height:2px;
`

const line01V = {
    closed:{backgroundColor: "#fff",},
    open:{
        backgroundColor: "#000",
        transform: "rotate(45deg) translate(5px, 9px)",
    },
}
const line02V = {
    closed:{backgroundColor: "#fff",},
    open:{opacity:0, transform:"translateX(30px)"},
}
const line03V = {
    closed:{backgroundColor: "#fff",},
    open:{
        backgroundColor: "#000",
        transform: "rotate(-45deg) translate(5px, -9px)", backgorundColor :"#000"},
}

const transiton = {transition:{duration:0.7}}

const MenuToggle = ({toggle, isOpen}) => {
    return (
        <>
            <Button onClick={toggle} >
                <Line01 
                    variants={line01V}
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    transition={transiton}
                />
                <Line02 
                    variants={line02V}
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    transition={transiton}
                />
                <Line03 
                    variants={line03V}
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    transition={transiton}
                />
            </Button>
        </>
    )
}

export default MenuToggle
