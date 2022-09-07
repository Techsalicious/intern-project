import { Box, Flex, Image } from "theme-ui"
import Link from 'next/link';
import headerData from "./header-data"

import brandLogo from "assets/images/iab-logo.svg";
import HeaderSecondary from "./header-secondary";

const Header = () => {
    return (
        <>
            {/* <Box as='header' sx={styles.mainHeader}>
                <Flex sx={styles.innerHeader}>
                    <Box sx={styles.logo}>
                        <Link href="/">
                            <Image variant="logo" style={{ cursor: "pointer" }} src={brandLogo.src} />
                        </Link>
                    </Box>
                    <Flex as="nav" sx={styles.navList}>
                        {headerData.map(item => {
                            return (
                                <Link href={item.path}>
                                    <a key={item.label}>{item.label}</a>
                                </Link>
                            )
                        })}
                    </Flex>
                </Flex>
            </Box> */}
            <HeaderSecondary />
        </>
    )
}

export default Header

const styles = {
    mainHeader: {
        backgroundColor: "backgroundSecondary",
        // opacity: ".5",
        position: "-webkit-sticky", /* Safari */
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: "999",
    },
    innerHeader: {
        width: ["100%", "null", null, null, "900px", null, "1200px", "1400px"],
        justifyContent: "space-between",
        alignItems: "center",
        background: "yellow",
        margin: "auto",
        px: 2
    },
    logo: {

    }
}