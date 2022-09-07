import { Box, Flex, Text } from "theme-ui"

const FullWidthComponent = () => {
    return (
        <Box sx={styles.fullWidth}>
            <Flex sx={styles.fullWidthContent}>
                <Text as="p" variant="text.heroTitle">Redefining Abilities, Rescripting Lives</Text>
                <Text sx={styles.citation}>- Indian Association for the Blind</Text>
            </Flex>
        </Box>
    )
}

export default FullWidthComponent

const styles = {
    fullWidth: {
        background: "primary",
        color: "textSecondary",
    },
    fullWidthContent: {
        // width: ["90%", null, null, null, null, null, "70%"],
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        mx: "auto",
        py: 4,
        px: 1
    },
    citation: {
        mt: 2,
        fontSize: 1,
        letterSpacing: "1px"
    }
}