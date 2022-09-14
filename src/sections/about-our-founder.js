import { Box, Container, Embed, Flex, Heading, Image, Text } from 'theme-ui'
import founder from "../assets/images/founder.jpg"
import blockquote from "../assets/images/blockquote.png"

const AboutOurFounder = () => {
    return (
        <Box as="section" sx={styles.section}>
            <Container>
                <Heading sx={styles.heading}>Meet <span>LATE S.M.A JINNAH</span></Heading>
                <Text as="p">The Founder of the Indian Association for the Blind</Text>
                <Flex sx={styles.imageContainer}>
                    <Box sx={styles.imageSidebar}></Box>
                    <Image src={founder.src} alt="Founder" />
                </Flex>

                <Text as="h4" sx={styles.textBold}>
                    December 19, 2013 was a fateful day for IAB as our Founder, Mr.S.M.A.Jinnah reached the abode of God. It is indeed a huge loss for us, as we really miss his guidance and support. But we can still feel him amidst us as he is and will always be our guiding light and lead us in the right path. IAB continues to empower the visually challenged by providing the required skills needed to lead self-reliant, dignified lives.
                </Text>

                <Text as="p" sx={styles.text}>
                    Everything conspired against Jinnah right from the start. Coming from a low income family, his father deserted them and soon his mother passed away when Jinnah was just five years old. When he was 13 years, a road accident resulted in Jinnah losing his vision in both eyes, due to irreversible damage to the optic nerve. He spent the next five years in futile search for native cures. Ultimately, however, he accepted that henceforth he would never again be able to see. “At that time I was studying in the seventh standard and was forced to discontinue my studies,” rues Jinnah.
                </Text>

                <Box as="blockquote" sx={styles.quote}>
                    <Image src={blockquote.src} />
                    <Text as="h4" style={{ display: "inline" }}>
                        People were more likely to give alms to a blind person. There was no awareness of the potentialities of such people and their need to be treated with dignity and respect <span>says Jinnah.</span>
                    </Text>
                </Box>

                <Box sx={styles.text}>
                    <Text as="p">Social stereotypes about the blind</Text>
                    <Text as="p">
                        - During Jinnah’s growing up years, societal attitudes to the blind were based on stigma, and discrimination. “People were more likely to give alms to a blind person. There was no awareness of the potentialities of such people and their need to be treated with dignity and respect,” says Jinnah. Against this backdrop, Jinnah decided to resume his education against family opposition. His family saw to it that he would be well looked after and spend the rest of his life in a dark world. Their concept of security was to provide money to generate a regular income for his basic requirements.
                    </Text>
                </Box>

                <Box sx={styles.text}>
                    <Text as="p">A dream is born</Text>
                    <Text as="p">
                        - However,Jinnah had different dreams and aspirations. He kept himself abreast of the latest developments by listening to the radio and asking his friends to read the newspaper to him. He thus heard about the Palayamkottai School for the Blind on one such radio talk. Sensing an opportunity to pursue his education, Jinnah, defying his family, approached the headmaster for admission. Initially he was refused admission because his age (18) exceeded the prescribed limit of 14 years. But thanks to the helpful mediation of an MLA who impressed by this tenacity of purpose, Jinnah was admitted to class 7.
                    </Text>
                </Box>
                <Box sx={styles.text}>
                    <Text as="p">A dream is born</Text>
                    <Text as="p">
                        - However,Jinnah had different dreams and aspirations. He kept himself abreast of the latest developments by listening to the radio and asking his friends to read the newspaper to him. He thus heard about the Palayamkottai School for the Blind on one such radio talk. Sensing an opportunity to pursue his education, Jinnah, defying his family, approached the headmaster for admission. Initially he was refused admission because his age (18) exceeded the prescribed limit of 14 years. But thanks to the helpful mediation of an MLA who impressed by this tenacity of purpose, Jinnah was admitted to class 7.
                    </Text>
                </Box>

                <Embed src="https://www.youtube.com/embed/lLvQFv-FEls" sx={styles.embed}
                //  src='<iframe width="1110" height="500" src="" title="DIFFERENT VISION - THE JOURNEY OF INDIAN ASSOCIATION FOR THE BLIND - 10 MIN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                />
                <Box sx={styles.text}>
                    <Text as="p">Addressing multiple challenges</Text>
                    <Text as="p">
                        - He was at a disadvantage because he did not know Braille. Jinnah responded to the challenge by mastering Braille within a month and passed the eight standard examinations. However, the school had no provision for continuing his education. “My family and school authorities dissuaded further studies because felt that there was no scope for jobs for the visually impaired and this would lead to frustration,” recalls Jinnah.
                    </Text>
                </Box>

                <Box as="blockquote" sx={styles.quote}>
                    <Image src={blockquote.src} />
                    <Text as="h4" style={{ display: "inline" }}>
                        My goal has always been equality of opportunities and experience for people with visual disabilities. People need to be sensitized to the potentials and problems. of the visually impaired. They are no different from others. Typically society tends to overestimate the disability and underestimate the potentials of people with disabilities <span>reiterates Jinnah.</span>
                    </Text>
                </Box>

                <Text as="p" sx={styles.text}>
                    A chance meeting with Mr. R. Jayaraman, Professor of English, Madras Christian College, who was orthopaedically and visually impaired, changed Jinnah’s life. Jinnah relocated to Madurai,, where his mentor coached him to appear for the matriculation examination as a private candidate. Since then there was no looking back. At the American College in Madurai,, where Jinnah enrolled for an undergraduate course in Economics, he competed with non- disabled students on equal terms, and topped the class with a university gold medal. He later went on to do his post graduation in Economics, once again capping his academic achievements with a gold medal.
                </Text>

                <Text as="p" sx={styles.text}>
                    Following this , he persued his master degree in Thiyagaraja College.At this phase of his life, he, with the support of his mentor and friends from his alma mater, American College, started Students Association for the Blind (SAB), of which he was the President. In 1977, Jinnah joined the Government School for the Blind, following which we was happily married to Nainammal on 27th December, 1977, after a lot of thought and hesitation, considering his situation. Hellen Keller Education Service for the Blind was started by Jinnah which had 70 students who had enrolled for the higher education within a very short period of time.
                </Text>

                <Text as="h4" sx={styles.textBold}>
                    In 1981, Jinnah went to Boston University on a Rotary International scholarship. He did a one-year postgraduate diploma in teaching the visually impaired at the Perkins Institute for the Blind, Boston, USA.
                </Text>

                <Text as="p" sx={styles.text}>
                    The visit to Perkins was an eye opener because he realized the importance of professional service for the visually impaired. He was also sensitized to the importance of technology in fostering sense of autonomy. Jinnah started a school for the visually impaired. Eminent ophthalmologist Dr G. Venkataswamy of Aravind Eye Hospitals, Madurai, provided technical assistance for this venture. Later Jinnah handed over the school to the government. In 1985, Jinnah established the Indian Association for the Blind (IAB).
                </Text>

                <Text as="h4" sx={styles.textBold}>
                    IAB was the culmination of Jinnah’s dream of comprehensive rehabilitation services for the visually impaired through skill training, create access to education and generate employment opportunities for economic independence.
                </Text>



            </Container>
        </Box>
    )
}

export default AboutOurFounder

const styles = {
    // section: {

    // },
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
}