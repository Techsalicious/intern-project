import { Box, Flex, Image } from "theme-ui"
import Link from 'next/link';
import headerData from "./header-data"

import brandLogo2 from "assets/images/iab-logo-color.svg";
import { useState } from "react";
import MobileMenu from "./mobile-menu";

import { IoMenu } from "react-icons/io5"

const HeaderSecondary = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleMobileMenu = () => {
        // console.log("clicked")
        setShowMobileMenu(!showMobileMenu)
    };

    return (
        <>
            <Box as="header" sx={styles.headerWrapper}>
                <Flex sx={styles.innerHeader}>
                    <Box sx={styles.logo}>
                        <Link href="/">
                            <Image variant="logo" style={{ cursor: "pointer" }} src={brandLogo2.src} />
                        </Link>
                    </Box>
                    <Flex as="nav" sx={styles.navList}>
                        {headerData.map(item => {
                            return (
                                <Link key={item.label} href={item.path}>
                                    <a>{item.label}</a>
                                </Link>
                            )
                        })}
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
        height: ["60px","80px"],
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

        "a": {
            display: "inline-block",
            px: 2,
            py: 1,
            borderRadius: "5px",
            // background: "cyan",
            textAlign: "center",
            textTransform: "capitalize",
            position: "relative",
            overflowX: "hidden",

            "::after": {
                content: `""`,
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "2px",
                backgroundColor: "primary",
                transform: "translateX(-100%)",
                transition: ".4s ease-in"
            },
            ":hover": {
                color: "primary",

                "::after": {
                    transform: "translateX(0)",
                }
            }
        }
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