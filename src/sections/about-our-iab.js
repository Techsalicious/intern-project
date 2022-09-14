import { Box, Container, Embed, Flex, Grid, Heading, Image, Text } from 'theme-ui'
import iabGrowth from "../assets/images/iab-growth.jpg"
import blockquote from "../assets/images/blockquote.png"

import { GiPerson } from "react-icons/gi"


const AboutOurIab = () => {

  const highlightData = [
    {
      id: 1,
      iconText: "20% + "
    }
  ]

  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <Heading sx={styles.heading}>We are <span>INDIAN ASSOCIATION FOR THE BLIND</span></Heading>
        <Text as="p">Redefining Abilities, Rescripting Lives</Text>

        <Flex sx={styles.imageContainer}>
          <Box sx={styles.imageSidebar}></Box>
          <Image src={iabGrowth.src} alt="Founder" />
        </Flex>

        <Text as="h4" sx={styles.textBold}>
          What once began with a mere room and 4 students is now the temple of rehabilitation for the visually challenged
        </Text>

        <Text as="p" sx={styles.text}>
          Nestled in the village of Sundarajanpatti in the outer fringes of Madurai in Tamilnadu, the Indian Association for the Blind (IAB) promises the visually challenged a life of confidence and opportunities. Started in 1985 by S.M.A. Jinnah, a visually challenged activist, IAB has been the pioneer in empowering the visually challenged towards self-reliance through various initiatives.
        </Text>

        <Text as="p" sx={styles.text}>
          Having undergone numerous struggles to complete his education, Jinnah envisioned a changed future for thousands of visually challenged children by providing them education. This dream led to establishing IAB, the institute that has made remarkable progress, be it in the number of lives it has touched or numerous services that are being offered. Currently, in Tamil Nadu, out of the 30,000 x educated and vocationally trained visually challenged people, 20% are being educated, rehabilitated, and even employed by IAB.
        </Text>


        <Box as="blockquote" sx={styles.quote}>
          <Image src={blockquote.src} />
          <Text as="h4" style={{ display: "inline" }}>
            <span>OUR VISION</span>IAB affirms its commitment to empower visually challenged people become self-reliant by providing comprehensive rehabilitation, education and employment opportunities. IAB has a special focus on the socio economically disadvantaged visually challenged children and adults, particularly those from rural areas.
          </Text>
        </Box>

        <Embed src="https://www.youtube.com/embed/lLvQFv-FEls" sx={styles.embed} />
        {/* <iframe width="1110" height="500" src="https://www.youtube.com/embed/lLvQFv-FEls" title="DIFFERENT VISION - THE JOURNEY OF INDIAN ASSOCIATION FOR THE BLIND - 10 MIN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}




        <Heading sx={styles.heading}>How we <br /> <span>STARTED</span></Heading>
        <Text as="p">The Indian Association for Blind</Text>

        <Text as="p" sx={styles.text}>
          The story of IAB stemmed out from the inspirational life of SMA Jinnah. Despite losing his vision at the age of 13, and much against the wishes of his family, Jinnah chased a dream called education. His passion for education saw him pass out of school and later college with a brilliant performance. The key to empowering people with visual disability that would help them travel the road to independence and self-reliance, Jinnah realized, was education.
        </Text>

        <Text as="p" sx={styles.text}>
          He established the Indian Association for the Blind (IAB), on January 14, 1985, with the support of well wishers. IAB began with just eight students. In the early years, it served as a tuition/guidance centre that also provided hostel facilities for four visually challenged boys.
        </Text>

        <Box as="blockquote" sx={styles.quote}>
          <Image src={blockquote.src} />
          <Text as="h4" style={{ display: "inline" }}>
            <span>OUR Mission</span>IAB is committed to promote comprehensive education, employment and rehabilitation opportunities for socioseconomically disempowered visually challenged children and adults, with a special focus on those living in rural areas.
          </Text>
        </Box>




        <Heading sx={styles.heading}>Highlights of <br /> <span>IAB GROWTH</span></Heading>
        <Text as="p">The Indian Association for Blind</Text>
      </Container>

      <Box sx={styles.highlightsWrapper}>
        <Container>
          <Grid sx={styles.grid}>
            <Box sx={styles.highlight}>
              <Box sx={styles.iconContainer}>
                20% + <Box sx={styles.icon}><GiPerson /><span><GiPerson /></span></Box>
              </Box>
              <Box sx={styles.textContainer}>
                <Text as="h4">OUT OF 30,0000 PEOPLE</Text>
                <Text as="p">Educated and vocationally trained visually challenged people in Tamilnadu are being educated, rehabilitated and employed by IAB</Text>
              </Box>
            </Box>

            <Box sx={styles.highlight}>
              <Box sx={styles.iconContainer}>
                30,000 + <Box sx={styles.icon}><GiPerson /><span><GiPerson /></span></Box>
              </Box>
              <Box sx={styles.textContainer}>
                <Text as="h4">PEOPLE WITH VISUAL DISABILITIES</Text>
                <Text as="p">Since inception IAB has educated and rehabilitated more than 30,000 people with visual disabilities</Text>
              </Box>
            </Box>

            <Box sx={styles.highlight}>
              <Box sx={styles.iconContainer}>
                24 + Projects
              </Box>
              <Box sx={styles.textContainer}>
                <Text as="h4">PROJECTS OF IAB</Text>
                <Text as="p">Project to build equality of opportunities and experience for people with visual disabilities</Text>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

    </Box>
  )
}

export default AboutOurIab

const styles = {
  section: {
    overflow: "hidden"
  },
  heading: {
    "span": {
      color: "primary",
      display: "block"
    }
  },
  imageContainer: {
    my: 4
  },
  imageSidebar: {
    backgroundColor: "primary",
    width: "5%",
  },
  embed: {
    my: 4
  },
  quote: {
    px: [4, , 6, 8],
    textAlign: "center",
    "h4": {
      fontSize: [5, , , 7]
    },
    my: 4,
    "span": {
      color: "primary",
      display: "block"
    },
    background: `url(${blockquote.src}) no-repeat right bottom`

  },
  text: {
    my: 2,
    lineHeight: "2",
    fontSize: 2
  },
  textBold: {
    my: 2,
    lineHeight: "1.5",
    fontSize: 4
  },

  highlightsWrapper: {
    backgroundColor: "primary",
    color: "textSecondary",
  },

  grid: {
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  },

  highlight: {
    // backgroundColor: "pink",
    px: [2, null, null, null, 4],
    // my: [2, null, null, null, 0],
    // width: ["90%", null, null, "30%"]
  },
  iconContainer: {
    fontSize: [10, null, null, null, 12],
  },
  icon: {
    display: "inline-block",
    position: "relative",

    "svg": {
      fontSize: 10,
      position: "relative",
      transform: "translateY(5px)"
    },

    "span": {
      position: "absolute",
      top: "-2px",
      right: "-5px",
      opacity: ".4"
    }
  },
  textContainer: {
    "h4": {
      color: "inherit",
      pb: 2,
      fontSize: 2,
    }
  }

}