import React from 'react'
import { Box, Button, Container, Flex, Heading, Image, Text } from 'theme-ui'

import donateBanner from "assets/images/donate-banner.jpg"
import futureGrowthBg from "assets/images/fun-facts-bg.jpg"

const FutureGrowth = () => {
    return (
        <Box as="section" id="futureGrowth" sx={styles.section}>
            <Container>
                <Flex sx={styles.wrapper}>
                    <Flex sx={styles.content}>
                        <Heading sx={styles.heading}>Lead the way for the <span>future growth</span></Heading>
                        <Text as="p" sx={styles.text}>Donate to IAB to give visually challenged a confidence in them for their future. Your small contribution will make a big difference in their lives.</Text>
                        <Button variant='primary'>Donate Now</Button>
                    </Flex>
                    <Image style={{ flex: 1 }} src={donateBanner.src} />
                </Flex>
            </Container>
        </Box>
    )
}

export default FutureGrowth

const styles = {
    section: {
        background: `url(${futureGrowthBg.src})`,
        backgroundAttachment: "fixed",
        // pt: [14, null, null, null, null, 0],
        // pb: [6, null, null, 7, 11, 0],
    },
    wrapper: {
        flexDirection: ["column", null, null, "row"],
        alignItems: "center",

        "img": {
            mb: 0,
            objectFit: "fill",
            display: "block",
            // maxWidth: "auto",
            maxHeight: "300px",
            width: "auto",
            height: "auto",
        },
    },
    content: {
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "center",
        flex: 1,
        px: [2, , 4, 6, 10],
        py: 4,
        // background: "pink",
    },
    heading: {
        fontSize: 10,
        mb: 2,
        color: "textSecondary",
        "span": {
            color: "primary"
        }
    },
    text: {
        fontSize: 1,
        lineHeight: "2",
        mb: 2,
        color: "textSecondary",
    }
}