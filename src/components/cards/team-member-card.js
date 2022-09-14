import React from 'react'
import { Box, Image, Text } from 'theme-ui'


const TeamMemberCard = ({ teamMemberData }) => {
    const { imageSrc, name, qualification, desc } = teamMemberData;

    return (
        <Box sx={styles.wrapper} mb={2}>
            <Image sx={styles.imgContainer} src={imageSrc} alt={name} />
            <Box sx={styles.content}>
                <Text as="h4">{name}</Text>
                <Text as="h6">{qualification.map((item, index) => (<p key={index}>{item}</p>) )}</Text>
                <Text as="p">{desc}</Text>
            </Box>
        </Box>
    )
}

export default TeamMemberCard

const styles = {
    wrapper: {
        // backgroundColor: "pink",
        height: "auto"
    },

    imgContainer: {
        width: "100%",
        maxWidth: "200px",
        maxHeight: "220px",
        // height: "220px",
        objectFit: "fill",
        pb: 1
    },

    content: {
        "h4": {
            color: "primary",
            fontWeight: "normal",
            pb: 1
        },
        "h6": {
            fontWeight: "normal",
            pb: 1,
            pr: 14,
            color: "muted"
        }
    }
}