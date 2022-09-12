import FooterMenuItem from 'components/footer-menu-item'
import React from 'react'
import { Box, Container, Flex, Heading, Image } from 'theme-ui'

import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"

import logoLight from "assets/images/iab-logo.svg"

const Footer = () => {

    const menuItems = {
        contact_us: [
            { label: 'Indian Association for the Blind', type: 'text' },
            { label: 'Sundarajanapatty,', type: 'text' },
            { label: 'Alagar Koil Main Road,', type: 'text' },
            { label: 'Arumbanur Post, Madurai,', type: 'text' },
            { label: 'Tamil Nadu, India - 625104.', type: 'text' },
            {
                path: '+91 96008 33223',
                label: "+91 96008 33223",
                type: 'phone',
            },
            {
                path: 'contact@theiab.org',
                label: "contact@theiab.org",
                type: 'mail',
            },
        ],

        getInvolved: [
            {
                path: "/careers",
                label: 'Careers',
                type: 'link'
            },
            {
                path: "/",
                label: 'Volunteers',
                type: 'link'
            },
            {
                path: "/",
                label: 'Success Stories',
                type: 'link'
            },
            {
                path: "/",
                label: 'Press Note',
                type: 'link'
            },
            {
                path: "/contact",
                label: 'Contact Us',
                type: 'link'
            },
        ]
    }


    return (
        <Box as="footer" sx={styles.footer}>
            <Container>
                <Flex sx={styles.footerInner}>
                    <Box>
                        <Image variant='logo' src={logoLight.src} />
                        <Flex sx={styles.socialLinks}>
                            <Flex><FaLinkedinIn /></Flex>
                            <Flex><FaYoutube /></Flex>
                            <Flex><FaInstagram /></Flex>
                            <Flex><FaTwitter /></Flex>
                            <Flex><FaFacebookF /></Flex>
                        </Flex>
                    </Box>
                    <FooterMenuItem heading="Contact Us" links={menuItems.contact_us} />
                    <FooterMenuItem heading="Get Involved" links={menuItems.getInvolved} />
                </Flex>
            </Container>
            <Flex as='p' sx={styles.subFooter}>
                Copyright © 2020 INDIAN ASSOCIATION FOR THE BLIND
            </Flex>
        </Box>
    )
}

export default Footer

const styles = {
    footer: {
        backgroundColor: 'darkBackground',
    },
    footerInner: {
        alignItems: ["center", "null", null, "start"],
        justifyContent: 'space-between',
        flexDirection: ['column', null, null, 'row'],
        // padding: '50px 0',
        px: [0, null, 4, null, 8],
        // background: "pink",
        textAlign: "left",

        "div": {
            mb: [4, null, null, 0]
        }
    },
    socialLinks: {
        // background: "pink",
        justifyContent: "space-around",
        flexWrap: "wrap",
        mt: 2,
        height: "auto",
        "div": {
            background: "textSecondary",
            p: 1,
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
            mb: 0
        }
    },
    subFooter: {
        justifyContent: "center",
        background: "#343434",
        color: "#fff",
        py: 2,
        px: [2, null, 0],
        textAlign: "center"
    }
}