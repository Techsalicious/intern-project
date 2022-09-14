import TeamMemberCard from 'components/cards/team-member-card'
import { Box, Container, Embed, Flex, Grid, Heading, Image, Text } from 'theme-ui'

import team from "../assets/images/team.jpg"

import rama from "../assets/images/rama.jpg"
import roshan from "../assets/images/roshan.jpg"
import surendaranathan from "../assets/images/surendaranathan.jpg"
import abdul from "../assets/images/abdul.jpg"
import manjula from "../assets/images/manjula.jpg"

import chermathai from "../assets/images/chermathai.jpg"
import marimuthu from "../assets/images/marimuthu.jpg"
import anjali from "../assets/images/anjali.jpg"
import bala from "../assets/images/bala.jpg"


const TeamTheIab = () => {

  const teamData = [
    {
      id: 1,
      imageSrc: rama.src,
      name: "Dr.C.Ramasubramaniam",
      qualification: ["M.D., D.P.M.,", "President IAB"],
      desc: "Since its inception in 1985 he is been associated with the institution. He was professor of psychiatric (Rettired) Madurai, Medical college. Passionate about community based psychiatry, he is the founder of M.S.Chellamuthu Trust an NGO in Madurai, that serves people with mental disabilitis."
    },
    {
      id: 2,
      imageSrc: roshan.src,
      name: "M.Roshan Fathima",
      qualification: ["M.Com, B.Ed. (Spl).,PGPDM", "General Secretary IAB"],
      desc: "She holds a Bachelors degree in Special Education for Visually Challenged and a Masters degree in Commerce. She has specialised in NGO Management and has been associated with education and rehabilitation of the visually challenged right from her younger days."
    },
    {
      id: 3,
      imageSrc: surendaranathan.src,
      name: "Dr. R.Surendranathan",
      qualification: ["M.B.B.S., M.S.", "Treasurer IAB"],
      desc: "He is associated with the institution since 1985. He has an independent surgical practice at Laxmi nursing home in Madurai."
    },
    {
      id: 4,
      imageSrc: abdul.src,
      name: "M.Abdul Raheem",
      qualification: ["B.E., M.B.A.,", "Vice President IAB,"],
      desc: "He is an Engineering Graduate and also holds a Post Graduate Diploma in Business Administration. He started his career in Engineering sector and has worked at various capacities in Wipro Technologies and Honeywell."
    },
    {
      id: 5,
      imageSrc: manjula.src,
      name: "S.Manjula",
      qualification: ["M.A. B.Ed.", "Secretary IAB"],
      desc: "A visually challenged person and has a masters degree in Tamil and Masters in education. She also holds a Senior Diplomo in Teaching for the Blind. She is teacher at Palamedu Higher Secondary School. She is an alumnae of IAB and has been associated with the institution since 1985."
    },
  ]

  const governingCouncilData = [
    {
      id: 1,
      imageSrc: chermathai.src,
      name: "A.Chermathai",
      qualification: ["M.A. B.Ed.", "Member-Governing Council IAB"],
      desc: "A visually challenged person with a masters in History and Masters in education. She is among the first batch of IAB students and has thought for 12 years in government school."
    },
    {
      id: 2,
      imageSrc: marimuthu.src,
      name: "S.Marimuthu",
      qualification: ["M.A. B.Ed.", "Member-Governing Council IAB"],
      desc: "She is a visually challenged person and has done masters in Tamil and Masters in education. Since 2000 she teaches in government school for the Blind. A former student of IAB she is very well experienced in teaching visually challenged children."
    },
    {
      id: 3,
      imageSrc: anjali.src,
      name: "S.Anjali",
      qualification: ["M.A. B.Ed.", "Member-Governing Council IAB"],
      desc: "She is a visually challenged person and has done masters in Tamil and Masters in education. Since 2000 she teaches in government school for the Blind. A former student of IAB she is very well experienced in teaching visually challenged children."
    },
    {
      id: 4,
      imageSrc: bala.src,
      name: "R.Balasaraswathy",
      qualification: ["M.A. B.Ed.", "Member-Governing Council IAB"],
      desc: "She is a visually challenged person and has done masters in Tamil and bachelors in education. She is employed as Assistance Manager with central bank of India, Madurai, from 1989 where she repeatedly proves no different to sighted individuals. She is an alumnae of IAB."
    },
  ]

  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <Heading sx={styles.heading}>Meet <span>THE TEAM</span></Heading>
        <Text as="p">The Indian Association for the Blind</Text>

        <Flex sx={styles.imageContainer}>
          <Box sx={styles.imageSidebar}></Box>
          <Image src={team.src} alt="Founder" />
        </Flex>

        <Text as="h4" sx={styles.textBold}>
          IAB is governed by 9 board members who bring in variety of expertise from each field. Among the 9 members 5 are visually challenged persons and 6 are women.
        </Text>

        <Text as="p" sx={styles.text}>
          Everything conspired against Jinnah right from the start. Coming from a low income family, his father deserted them and soon his mother passed away when Jinnah was just five years old. When he was 13 years, a road accident resulted in Jinnah losing his vision in both eyes, due to irreversible damage to the optic nerve. He spent the next five years in futile search for native cures. Ultimately, however, he accepted that henceforth he would never again be able to see. “At that time I was studying in the seventh standard and was forced to discontinue my studies,” rues Jinnah.
        </Text>

        <Grid sx={styles.grid}>
          {teamData.map(teamMemberData => {
            return <TeamMemberCard key={teamMemberData.id} teamMemberData={teamMemberData} />
          })}
        </Grid>

        <Heading sx={styles.heading}>Members of <span>Governing Council IAB</span></Heading>

        <Grid sx={styles.grid}>
          {governingCouncilData.map(teamMemberData => {
            return <TeamMemberCard key={teamMemberData.id} teamMemberData={teamMemberData} />
          })}
        </Grid>

      </Container>
    </Box>
  )
}

export default TeamTheIab

const styles = {
  // section: {

  // }
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

  grid: {
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    my: 4,
    gridGap: 4
  }
}