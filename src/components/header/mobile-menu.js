import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Box, Flex, Text } from 'theme-ui'
import headerData from './header-data'

const MobileMenu = ({ showMobileMenu, handleMobileMenu }) => {
    console.log(showMobileMenu)

    const [currentRoute, setCurrentRoute] = useState("/");
    const [dropdown, setDropdown] = useState(false);
    const [currentNavItem, setCurrentNavItem] = useState("");

    const router = useRouter()
    // console.log(router.route) 

    const currentPage = () => {
        if (router.route === "/about-our-founder" || router.route === "/about-our-iab" || router.route === "/team-theiab") setCurrentRoute("/who-we-are")
        if (router.route === "/contact") setCurrentRoute("/contact")
    }

    useEffect(() => {
        currentPage()
    }, [currentRoute])

    return (
        <Box sx={styles.navBar}
            style={{
                transform: `${showMobileMenu ? "translateY(0%)" : "translateY(-150%)"}`,
            }}
        >
            <Flex sx={styles.navList}>
                <Box as="ul">
                    {headerData.map(item => {
                        return (
                            <Text key={item.label} as="li" sx={styles.menuItem} className={`${item.path !== "/" && item.path === currentRoute ? "active" : ""}`}
                                style={{ height: `${(currentNavItem === item.label && dropdown) ? "auto" : "60px"}` }}
                            >
                                {item.subMenu ?
                                    (
                                        <>
                                            <Text key={item.label} 
                                                onClick={() => {
                                                setDropdown(!dropdown)
                                                setCurrentNavItem(item.label)
                                            }}>
                                                {item.label}
                                            </Text>
                                            <Box as="ul" sx={styles.subMenuItem} className={`${(currentNavItem === item.label && dropdown) ? "show" : ""}`}>
                                                {item.subMenu.map(item => {
                                                    return (
                                                        <Text key={item.label} as="li" onClick={() => handleMobileMenu()}>
                                                            <Link href={item.path}>{item.label}</Link>
                                                        </Text>
                                                    )
                                                })
                                                }
                                            </Box>
                                        </>
                                    )
                                    :
                                    (
                                        <Text onClick={() => handleMobileMenu()}><Link href={item.path}>{item.label}</Link></Text>
                                    )
                                }
                            </Text>
                        )
                    })}
                </Box>
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
        // borderTop: "1px solid",
        borderColor: "primary"
    },

    navList: {
        flexDirection: "column",

        "li": {
            width: "100%",
            textAlign: "center",
            fontSize: 4,
            py: 2,
            position: "relative",
        },

        ".active": {
            backgroundColor: "primary",
            color: "textSecondary",
        },
        ".show": {
            transform: "translate(0)",
        }
    },
    menuItem: {
        // backgroundColor: "pink",
        overflow: "hidden",
        transition: "300ms ease-in",
    },
    subMenuItem: {
        backgroundColor: "backgroundSecondary",
        color: "text",
        transform: "translate(-100%)",
        boxShadow: "inset 0 0 32px -15px #ddd",
    }
}