import { IoChevronForwardSharp } from "react-icons/io5"
import { Box } from "theme-ui"

const FooterMenuItem = ({ heading, links }) => {

    const renderLink = (link) => {
        switch (link.type) {
            case "link":
                return (
                    <li key={link.label}>
                        <a href={link.path}>
                            <IoChevronForwardSharp />
                            <span>{link.label}</span>
                        </a>
                    </li>
                )

            case "phone":
                return (
                    <li key={link.label}>
                        <a href={`tel:${link.path}`}>{link.label}</a>
                    </li>
                )
            case "mail":
                return (
                    <li key={link.label}>
                        <a href={`mail:${link.path}`}>{link.label}</a>
                    </li>
                )
            case "text":
                return (
                    <li key={link.label}>{link.label}</li>
                )
        }
    }
    return (
        <Box sx={styles.links}>
            <h3>{heading}</h3>
            <Box as="ul" sx={styles.linksList}>
                {links.map(link => renderLink(link))}
            </Box>
        </Box>
    )
}

export default FooterMenuItem

const styles = {
    links: {
        color: "grey",
        "h3": {
            color: "textSecondary"
        },
        alignSelf: ["start"]
    },
    linksList: {
        mt: 2,
        "li": {
            "a": {
                display: "inline-block",
                mt: 2,
                fontSize: 2,
                ":hover": {
                    color: "primary"
                },
            },
            "span": {
                ml: 2
            }
        }
    }
}