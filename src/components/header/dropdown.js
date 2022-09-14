import Link from 'next/link'
import React from 'react'
import { Box } from 'theme-ui'

const Dropdown = ({ subMenus, dropdown }) => {
    console.log(dropdown)
    return (
        <Box as="ul" sx={styles.dropdownMenu} className={`${dropdown ? "show" : ""}`}>
            {
                subMenus.map((subMenu, index) => {
                    return (
                        <li key={index}>
                            <Link href={subMenu.path}>{subMenu.label}</Link>
                        </li>
                    )
                })
            }
        </Box>
    )
}

export default Dropdown

const styles = {
    dropdownMenu: {
        display: "none",
        width: "200px",
        py: 1,
        // height: "200px",
        backgroundColor: "textSecondary",
        color: "text",
        position: "absolute",
        top: "100%",
        left: '0',
        border: "1px solid",
        borderColor: "muted",

        "li": {
            width: "100%",
            px: 4,
            mx: 0,
            borderRadius: 0,
            textAlign: "left",
            // py: 1
        }
    }
}