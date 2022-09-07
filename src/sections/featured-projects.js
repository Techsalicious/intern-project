import FeaturedProjectCard from "components/cards/featured-project-card"
import { Box, Container, Flex, Heading } from "theme-ui"

import service1 from "assets/images/service_01.jpg"
import service2 from "assets/images/service_02.jpg"
import service3 from "assets/images/service_03.jpg"
import service4 from "assets/images/service_04.jpg"



const FeaturedProjects = () => {
  const data = [
    {
      id: 1,
      title: "Higher Secondary Special School",
      desc: "I.A.B. Higher Secondary School established in June 1992, the IAB Higher secondary school for the visually challenged imparts technology aided quality education...",
      imageSrc: service1.src,
      link: ""
    },
    {
      id: 2,
      title: "Higher Secondary Special School",
      desc: "I.A.B. Higher Secondary School established in June 1992, the IAB Higher secondary school for the visually challenged imparts technology aided quality education...",
      imageSrc: service2.src,
      link: ""
    },
    {
      id: 3,
      title: "BPO Training",
      desc: "In Students are trained in client center communication etiquette, English and Hindi and special training in industry specific knowledge such as Retail Telecom...",
      imageSrc: service3.src,
      link: ""
    },
    {
      id: 4,
      title: "Basic Engineering",
      desc: "Started in 2010 this program trains visually challenged people to operate machines. This initiative addresses the employment needs of the visually challenged...",
      imageSrc: service4.src,
      link: ""
    },
    
  ]

  return (
    <Box as="section" id="featuredProjects" sx={styles.section}>
      <Container>
        <Heading sx={styles.heading}>Featured <span>Projects</span></Heading>
        <Flex sx={styles.cardsContainer}>
          {data.map(item => <FeaturedProjectCard key={item.id} data={item} />)}
        </Flex>
      </Container>
    </Box>
  )
}

export default FeaturedProjects

const styles = {
  section: {
    backgroundColor: 'background',
    // pt: [10, null, null, 9, 10, 11, 11],
    // pb: [7, null, null, 7, 7, 9, 9],
  },
  heading: {
    mb: 4,
    textAlign: "center",
    "span": {
      color: "primary"
    }
  },
  cardsContainer: {
    flexWrap: "wrap"
  }
}