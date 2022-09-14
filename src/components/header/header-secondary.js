import { Box, Flex, Image, Text } from "theme-ui"
import Link from 'next/link';
import headerData from "./header-data"

import brandLogo2 from "assets/images/iab-logo-color.svg";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

import MobileMenu from "./mobile-menu";

import { IoMenu } from "react-icons/io5"
import Dropdown from "./dropdown";

const HeaderSecondary = () => {


    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [currentRoute, setCurrentRoute] = useState("/");

    const [dropdown, setDropdown] = useState(false);
    const [currentNavItem, setCurrentNavItem] = useState("");

    const handleMobileMenu = () => {
        // console.log("clicked")
        setShowMobileMenu(!showMobileMenu)
    };

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
        <>
            <Box as="header" sx={styles.headerWrapper}>
                <Flex sx={styles.innerHeader}>
                    <Box sx={styles.logo}>
                        <Link href="/">
                            <Image variant="logo" style={{ cursor: "pointer" }} src={brandLogo2.src} alt="logo" />
                        </Link>
                    </Box>

                    <Flex as="nav" sx={styles.navList}>
                        <Box as="ul">
                            {headerData.map(item => {
                                {/* { console.log(item.path === currentRoute) } */}
                                return (
                                    item.subMenu ?
                                        (
                                            <Text as="li"
                                                key={item.label}
                                                className={`${item.path !== "/" && item.path === currentRoute ? "active" : ""}`}
                                                onClick={() => {
                                                    setCurrentNavItem(item.label)
                                                    setCurrentRoute("/whoweare")
                                                    setDropdown(!dropdown)
                                                }}
                                            >
                                                {item.label}
                                                {currentNavItem === item.label && item.subMenu ? <Dropdown subMenus={item.subMenu} dropdown={dropdown} /> : null}
                                            </Text>
                                        )
                                        :
                                        (
                                            <Text as="li"
                                                className={`${item.path !== "/" && item.path === currentRoute ? "active" : ""}`}>
                                                <Link href={item.path}>{item.label}</Link>
                                            </Text>
                                        )
                                )
                            })}
                        </Box>
                    </Flex>
                    <Box sx={styles.hamburgerIcon}>
                        <span onClick={() => handleMobileMenu()}>
                            <IoMenu />
                        </span>
                    </Box>
                </Flex>

                <MobileMenu showMobileMenu={showMobileMenu} handleMobileMenu={handleMobileMenu} />
            </Box>
        </>
    )
}

export default HeaderSecondary

const styles = {
    headerWrapper: {
        position: "-webkit-sticky", /* Safari */
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
        height: ["60px", "80px"],
        zIndex: "999",
        // backgroundColor: "red",
    },
    innerHeader: {
        height: "100%",
        backgroundColor: "#fff",
        justifyContent: "space-between",
        alignItems: "center",
        // background: "yellow",
        margin: "auto",
        px: [4, null, null, null, 1, 4],
    },
    logo: {
        "img": {
            display: "block",
            height: ["60px", null, null, null, null, "65px"],
            width: [128, 180, null, '100%'],
        },
    },



    navList: {
        // background: "pink",
        justifyContent: "center",
        display: ["none", null, null, null, "inline-block"],

        "li": {
            display: "inline-block",
            borderRadius: "5px",
            // background: "cyan",
            textTransform: "capitalize",
            position: "relative",
            cursor: "pointer",
            transition: "300ms ease-in",
            borderRadius: "5px",
            mx: "5px",
            px: 2,
            py: 1,

            ":hover": {
                backgroundColor: "primary",
                color: "textSecondary"
            },
        },
        ".active": {
            backgroundColor: "primary",
            color: "textSecondary",

            ":hover": {
                color: "textSecondary",
            }
        },

        ".show": {
            display: "block",
        },
    },


    hamburgerIcon: {
        display: ["block", null, null, null, "none"],
        width: ["25px", "30px", "40px"],
        height: ["25px", "30px", "40px"],
        cursor: "pointer",

        svg: {
            width: "100%",
            height: "100%",
            color: "primary"
        }
    }
}