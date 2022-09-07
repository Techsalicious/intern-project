import { Box, Button, Flex, Image, Text } from "theme-ui"

import service1 from "assets/images/service_01.jpg"

const FeaturedProjectCard = ({ data }) => {
    const { title, desc, imageSrc } = data
    return (
        <Flex sx={styles.projectCard}>
            <Image src={imageSrc} />
            <span></span>
            <Box>
                <h3>{title}</h3>
                <Text as="p">{desc}</Text>
                <Button variant="primary">Read More</Button>
            </Box>
        </Flex>
    )
}

export default FeaturedProjectCard

const styles = {
    projectCard: {
        width: ["100%", null, "90%", "48%"],
        height: "fit-content",
        flexDirection: "column",
        margin: "auto",
        backgroundColor: "backgroundSecondary",
        // backgroundColor: "cyan",
        borderRadius: 5,
        p: '25px 35px 30px',
        transition: 'all 0.3s ease 0s',
        ':hover': {
            boxShadow: '0px 13px 40px rgba(75, 102, 135, 0.1)',
        },
        boxShadow: "rgb(38 78 118 / 35%) 0px 0px 1px",
        mb: 8,

        "img": {
            mb: 0,
            objectFit: "fill",
            display: "block",
            // maxWidth: "auto",
            maxHeight: "300px",
            width: "auto",
            height: "auto",
        },

        "span": {
            display: "block",
            width: "100%",
            height: "10px",
            backgroundColor: "primary",
        },

        "> div": {
            px: [2, 4, , , 6],
            // px: 6,
            py: 4,
            // backgroundColor: "red",

            "h3": {
                fontSize: 3,
                color: "dark",
                mb: 2
            },

            "p": {
                mb: 2
            }
        },

        "p": {
            fontSize: 2
        }
    }
}