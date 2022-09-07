import { Button, Flex, Text } from "theme-ui"

const BannerComponent = ({ slideData }) => {
  const { title, desc, src } = slideData

  return (
    <Flex sx={styles.bannerComponent}
      style={{backgroundImage: `url(${src})`}}
    >
      <Flex sx={styles.bannerText}>
        <Text style={{marginBottom: "30px"}} variant="text.heroTitle">{title}</Text>
        <Text sx={styles.para} style={{marginBottom: "30px"}} as="p">{desc}</Text>
        <Button sx={styles.readMore} variant="primary">Read More</Button>
      </Flex>
    </Flex>
  )
}

export default BannerComponent

const styles = {
  bannerComponent : {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundSize: "cover",
    backgroundPosition: "center"
    // background: "red",
  },
  bannerText: {
    width: "70%",
    height: "auto",
    flexDirection: "column",
    pr: [0, "0", null, "200px", "200px"],
    color: "textSecondary",
    textAlign: ["left", null, null, "left"],
    // background: "pink"
  },
  para: {
    marginRight: ["0%", "10%",  "20%", "30%", "40%"]
  },
  readMore:{
    width: "fit-content",
    borderRadius: "50px"
  }
}