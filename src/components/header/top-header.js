import { Box, Flex, Text } from "theme-ui"
// import { IoCall, FiMail, FiInstagram, FiFacebook, FiYoutube, FiTwitter, FiLinkedin, FiArrowRight } from "react-icons/io5"
import { IoCall, IoMail, IoLogoLinkedin, IoLogoYoutube, IoLogoInstagram, IoLogoTwitter, IoLogoFacebook, IoChevronForwardCircle } from "react-icons/io5"
import { HiPhoneArrowDownLeft } from "react-icons/io5"

const TopHeader = () => {
    const contactDetails = [
        {
            id: 1,
            type: "tel",
            label: "96008 33223",
            path: "9600833223",
        },
        {
            id: 2,
            type: "mail",
            label: "contact@gmail.com",
            path: "contact@gmail.com",
        },
    ]

    
    return (
        <Flex sx={styles.topHeader}>
            <Flex sx={styles.innerHeader}>
                <Flex sx={styles.contact}>
                    {contactDetails.map(item => {
                        return (
                            <Flex sx={styles.contactItem} variant="links.bold">
                                <a href={`${item.type === "tel" ? "tel" : "mailto"}:${item.path}`}>{item.type === "tel" ? <IoCall /> : <IoMail />} <span>{item.label}</span></a>
                            </Flex>
                        )
                    })}
                </Flex>

                <Flex as="ul" sx={styles.navList}>
                    <li><a href=""><IoLogoLinkedin /></a></li>
                    <li><a href=""><IoLogoYoutube /></a></li>
                    <li><a href=""><IoLogoInstagram /></a></li>
                    <li><a href=""><IoLogoTwitter /></a></li>
                    <li><a href=""><IoLogoFacebook /></a></li>
                    <li><IoChevronForwardCircle /> <span>Donate</span></li>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default TopHeader

const styles = {
    topHeader: {
        height: "50px",
        display: ["none", null, null, null, "flex"],
        background: "primary",
        // py: 1,
        justifyContent: "space-between",
        overflow: "hidden"
    },
    innerHeader: {
        height: "100%",
        width: ["100%", null, null, "900px", "1200px", "1400px"],
        justifyContent: "space-between",
        alignItems: "center",
        // background: "yellow",
        margin: "auto"
    },


    contact: {
        // background: "pink",
        alignItems: "center",
    },
    contactItem: {
        // background: "green",
        justifyContent: "space-between",
        position: "relative",
        "a": {
            px: 2,
            color: "textSecondary",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
        },
        "svg": {
            fontSize: 5,
        },
        "span": {
            ml: 1,
            //    fontSize: 1
        },
        "&::after": {
            content: `""`,
            width: ".1px",
            height: "300%",
            background: "textSecondary",
            position: "absolute",
            top: "-100%",
            right: "0%",
            opacity: ".4"
        }
    },
    navList: {
        // background: "green",
        alignItems: "center",
        height: "100%",
        "li": {
            display: "flex",
            alignItems: "center",
            fontSize: 5,
            mr: 2,
            transition: "200ms ease-in",
            color: "textSecondary",
            ":hover": {
                opacity: ".8"
            },
            "a": {
                // background: "pink",
                display: "inline-flex",
                alignItems: "center"
            },
            ":last-child": {
                height: "100%",
                background: "white",
                color: "primary",
                fontSize: 5,
                cursor: "pointer",
                px: 2,
                border: "2px solid transparent",
                fontVariant: "small-caps",
                ":hover": {
                    opacity: 1,
                    background: "primary",
                    color: "white",
                    borderColor: "white"
                },
                "span": {
                    pl: 0,
                    fontSize: 3
                }
            }
        }
    }
}