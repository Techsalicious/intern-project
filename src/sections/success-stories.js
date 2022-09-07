import React from 'react'
import { Box, Button, Container, Flex, Heading, Image, Text } from 'theme-ui'

import moreInfo from "assets/images/more-info.jpg"

const SuccessStories = () => {
    return (
        <Box as="section" id="successStories" sx={styles.section}>
            <Container>
                <Flex sx={styles.wrapper}>
                    <Image sx={styles.image} src={moreInfo.src} />
                    <Flex sx={styles.content}>
                        <Heading sx={styles.heading}>Success <span>Stories</span></Heading>
                        <Text as="p" sx={styles.subHeading}>Hello, Central Bank of India - R Balasaraswati</Text>
                        <Text as="p">(Central Bank of India, Madurai)</Text>
                        <Text as="p" sx={styles.text}>At a first glance, R Balasaraswati, telephone operator, Central Bank of India, Madurai, looks no different from others. As she confidently answers the telephone, it is difficult to believe that she is visually challenged. One of the earliest students of IAB, the self-reliance mantra she learned here, she says, has made her completely independent....</Text>
                        <Button variant='primary'>Read More</Button>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
}

export default SuccessStories

const styles = {
    section: {
        // backgroundColor: 'red',
        
        // pt: [14, null, null, null, null, 0],
        // pb: [6, null, null, 7, 11, 0],
    },
    wrapper: {
        flexDirection: ["column", null, null, "row"],
        justifyContent: "center",
        // background: "pink",
    },
    image: {
            mb: 0,
            objectFit: "fill",
            display: "block",
            // maxWidth: "auto",
            maxHeight: "350px",
            width: "auto",
            height: "auto",
    },
    content: {
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "center",
        width: ["100%", , , "50%"],
        px: [2, 4, , , 6, 8, 10],
        py: 4,
        background: "backgroundSecondary",
    },
    heading: {
        fontSize: 10,
        mb: 2,
        "span": {
            color: "primary"
        }
    },
    subHeading: {
        fontSize: 3,
        fontWeight: "heading",
        "+p": {
            mb: 2,
            textTransform: "uppercase"
        }
    },
    text: {
        mb: 2,
        fontSize: [1,2]
    }
}