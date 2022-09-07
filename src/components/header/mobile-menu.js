import Link from 'next/link'
import React from 'react'
import { Box, Flex } from 'theme-ui'
import headerData from './header-data'

const MobileMenu = ({ showMobileMenu }) => {
    console.log(showMobileMenu)

    return (
        <Box sx={styles.navBar}
            style={{ 
                transform: `${showMobileMenu ? "translateY(0%)" : "translateY(-150%)"}`,
            }}
        >
            <Flex sx={styles.navList}>
                {headerData.map(item => {
                    return (
                        <Link key={item.label} href={item.path}>
                            <a key={item.label} onClick={() => handleMobileMenu()}>{item.label}</a>
                        </Link>
                    )
                })}
            </Flex>
        </Box>
    )
}

export default MobileMenu

const styles = {
    navBar: {
        backgroundColor: "#fff",
        py: 4,
        transition: ".4s ease-in",
        position: "absolute",
        top: ["60px", "80px"],
        left: 0,
        right: 0,
        zIndex: "-1",
        borderTop: "1px solid",
        borderColor: "primary"
    },

    navList: {
        flexDirection: "column",

        "a": {
            width: "100%",
            textAlign: "center",
            fontSize: 4,
            py: 2,
            borderBottom: "1px solid #eee",

            ":hover": {
                color: "primary"
            }
        }
    }
}