import { Box, Button, Container, Flex, Heading, Input, Text, Textarea } from 'theme-ui'

import { IoHome, IoMail } from "react-icons/io5";

const Contact = () => {
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
        <Box as="section" sx={styles.section}>
            <Container>
                <Heading sx={styles.heading}>Contact <span>Us</span></Heading>
                <Text as="p" sx={styles.subHeading}>You're here to get in touch. Give us a call or even better, drop in for a chat.</Text>

                <Text as="h2">Say Hello,</Text>

                <Flex sx={styles.wrapper}>
                    <Box as="form" sx={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <Input name="username" id="username" mb={3} placeholder="Name" />
                        <Flex sx={styles.formFlex}>
                            <Input type="number" name="mobile" id="mobile" mb={3} placeholder="Mobile"  />
                            <Input type="email" name="email" id="email" mb={3} placeholder="Email" />
                        </Flex>
                        <Textarea name="comment" id="comment" rows={6} mb={2} placeholder='Text here...' style={{fontSize: "16px"}}></Textarea>
                        <Button variant='primary' style={{textTransform:"upperCase"}}>Submit Your Message</Button>
                    </Box>

                    <Box sx={styles.details}>
                        <Box sx={styles.address}>
                            <Flex>
                                <Box sx={styles.icon}><IoHome /></Box>
                                <Box>
                                    <Text as="h2">Address</Text>
                                    <Text as="h4">Association for the Blind</Text>
                                    <Text as="p">Sundarajanapatty</Text>
                                    <Text as="p">Alagar Koil Main Road,</Text>
                                    <Text as="p">Arumbanur Post, Madurai,</Text>
                                    <Text as="p">Tamil Nadu, India - 625104.</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box sx={styles.contactDetails}>
                            <Flex>
                                <Box sx={styles.icon}><IoMail /></Box>
                                <Box>
                                    <Text as="h2">Contact</Text>
                                    {contactDetails.map(item => {
                                        return (
                                            <p>
                                                {item.type === "tel" ? "Mobile: " : "E-mail: "}
                                                <a href={`${item.type === "tel" ? "tel" : "mailto"}:${item.path}`}>{item.label}</a>
                                            </p>
                                        )
                                    })}
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Contact

const styles = {
    heading: {
        textTransform: "Uppercase",
        span: {
            color: "primary",
        },
    },
    subHeading: {
        mb: 2
    },
    wrapper: {
        flexDirection: ["column", null, null, "row"],
        // backgroundColor: "pink",    
        justifyContent: [null, null, null, "space-between"],
    },
    form: {
        width: ["100%", "90%", null, "50%", "60%"],
        margin: "auto",
        mt: 2,
        mb: [6, null, null, 0],
    },
    details: {
        width: ["100%", null, null, "50%", "40%"],
        px: [0, null, null, 2, 2, 8],
        // px: [8],
        // backgroundColor: "crimson",

        "h2, h4, p": {
            mb: 1
            // fontSize: 6
        },
    },
    address: {
        mb: 2
    },
    icon: {
        // backgroundColor: "cyan",
        px: 2,
        "svg": {
            fontSize: 12,
            color: "primary"
        },
    },
    contactDetails: {
        "a": {
            color: "primary"
        }
    },
    formFlex: {
        flexDirection: ["column", null, null, "row"],
        "input:first-child": {
            mr: [0, 0, 0, 2]
        }
    }
}