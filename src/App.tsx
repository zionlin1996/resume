import {
  Box,
  Flex,
  Image,
  Link,
  List,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import profile from "./assets/images/profile.png";

const skills = [
  "React.js",
  "JavaScript",
  "Web3.js",
  "Redux",
  "HTML/CSS",
  "NodeJS",
  "Ruby on Rails",
  "Laravel",
  "Solidity",
  "AWS",
  "GCP",
];

const experiences = [
  {
    startAt: "2021.05",
    endAt: "2023.04",
    title: "Frontend Team Lead",
    company: "Blocto",
    content: (
      <>
        In my tenure at Blocto, a versatile B2B2C web3 platform, I was
        instrumental in the development and growth of our flagship product—a
        cross-chain smart contract wallet—and its integrated ecosystem. In March
        2022, I was promoted to Team Lead, where I directed a team of five
        skilled frontend engineers, steering the project towards innovative
        advancements and enhanced functionality. Key projects I contributed to
        during my tenure at Blocto include:
        <UnorderedList mt={1}>
          <ListItem>
            Blocto Web Wallet & SDK: An integrated crypto wallet solution for
            third-party web dApps with over 30000+ weekly downloads.
          </ListItem>
          <ListItem>
            BloctoBay: an NFT marketplace built on flow blockchain.
          </ListItem>
          <ListItem>
            BloctoSwap: A decentralized finance (DeFi) protocol developed on the
            Flow blockchain with 2M+ daily trading volume.
          </ListItem>
          <ListItem>
            BloctoDAO: A decentralized autonomous organization utilizing
            Blocto's governance token, BLT.
          </ListItem>
        </UnorderedList>
      </>
    ),
  },
  {
    startAt: "2020.04",
    endAt: "2021.04",
    title: "Senior Frontend Developer",
    company: "Tainai",
    content: (
      <>
        TaiNai Tech is an international company focusing on B2B payment
        solutions. Projects I've participated in during my career in TaiNai:
        <UnorderedList mt={1}>
          <ListItem>B2B payment dashboard</ListItem>
          <ListItem>Embedded payment service UI</ListItem>
        </UnorderedList>
      </>
    ),
  },
  {
    startAt: "2018.11",
    endAt: "2020.01",
    title: "Web Application Developer",
    company: "Yourator",
    content: (
      <>
        Yourator is a company focusing on providing HR solutions to startups.
        Key features I contributed to during my tenure at Yourator include:
        <UnorderedList mt={1}>
          <ListItem>
            Building mail service, notification, and i18n modules in the ATS
            SaaS system.
          </ListItem>
          <ListItem>
            Conduct the project architecture, infra, DevOps flow & unit test.
          </ListItem>
          <ListItem>
            Analyze & optimize the product, reduce unnecessary page re-renders
            make it 10x faster.
          </ListItem>
        </UnorderedList>
      </>
    ),
  },
];

const App = () => {
  return (
    <Box>
      <Flex>
        <Box
          position="sticky"
          top={0}
          height="100vh"
          width="35%"
          bg="theme.dark"
          p={6}
        >
          <VStack align="left" height="100%">
            <Box>
              <Image src={profile} width="100%" maxW={300} />
              <Text color="theme.light" fontWeight="bold" fontSize="4xl" mt={3}>
                Yang Lin
              </Text>
              <Text color="theme.light" fontSize="2xl">
                Senior Full-Stack Developer
              </Text>
            </Box>

            <Box mt={10} flex={1}>
              <Text color="theme.light" fontWeight="bold" fontSize="3xl" mb={3}>
                About me
              </Text>
              <Text color="theme.light" fontSize="lg">
                As a product-oriented software developer, I bring a strong
                foundation in computer science and over a decade of coding
                expertise. My experience spans diverse industries, equipping me
                with the proficiency to construct robust systems across various
                domains and development stages. Known for adaptability, I
                seamlessly integrate into teams of any size, contributing to our
                collective success.
              </Text>
            </Box>
            <Box>
              <Text color="theme.light" fontSize="3xl" fontWeight="bold" mb={3}>
                Contact Me
              </Text>
              <List color="theme.light">
                <ListItem display="flex" alignItems="center" my={1}>
                  <Text
                    width="1.5rem"
                    className="fa-solid fa-earth"
                    mr={3}
                    fontSize="2xl"
                  />
                  <Link href="https://yanglin.site" fontSize="xl">
                    yanglin.site
                  </Link>
                </ListItem>

                <ListItem display="flex" alignItems="center" my={1}>
                  <Text
                    width="1.5rem"
                    className="fa-solid fa-envelope"
                    mr={3}
                    fontSize="2xl"
                  />
                  <Text fontSize="xl">yanglin5689446@gmail.com</Text>
                </ListItem>
                <ListItem display="flex" alignItems="center" my={1}>
                  <Text
                    width="1.5rem"
                    className="fa-brands fa-linkedin"
                    mr={3}
                    fontSize="2xl"
                  />
                  <Link
                    href="https://www.linkedin.com/in/yanglin-1996/"
                    fontSize="xl"
                  >
                    @yanglin-1996
                  </Link>
                </ListItem>
                <ListItem display="flex" alignItems="center" my={1}>
                  <Text
                    width="1.5rem"
                    className="fa-brands fa-twitter"
                    mr={3}
                    fontSize="2xl"
                  />
                  <Link href="https://twitter.com/yanglin5566/" fontSize="xl">
                    @yanglin5566
                  </Link>
                </ListItem>
                <ListItem display="flex" alignItems="center" my={1}>
                  <Text
                    width="1.5rem"
                    className="fa-brands fa-github"
                    mr={3}
                    fontSize="2xl"
                  />
                  <Link
                    href="https://github.cim.com/yanglin5689556"
                    fontSize="xl"
                  >
                    @yanglin5689446
                  </Link>
                </ListItem>
                <ListItem display="flex" alignItems="center" my={1}>
                  <Text
                    width="1.5rem"
                    className="fa-solid fa-location-dot"
                    mr={2}
                    fontSize="2xl"
                    ml={1}
                  />
                  <Text fontSize="xl">Taiwan, Taichung</Text>
                </ListItem>
              </List>
            </Box>
          </VStack>
        </Box>
        <Box flex={1} width={0}>
          <Box p={10}>
            <Box mb={3}>
              <Text fontWeight="bold" fontSize="3xl" color="theme.dark" mb={2}>
                Skills
              </Text>
              <Box height="2px" background="theme.dark" />
              <Wrap gap={1} pt={4}>
                {skills.map((skill) => (
                  <Box
                    key={skill}
                    bg="theme.dark"
                    color="theme.light"
                    borderRadius={4}
                    p={2}
                  >
                    {skill}
                  </Box>
                ))}
              </Wrap>
            </Box>
            <Box mb={3}>
              <Text fontWeight="bold" fontSize="3xl" color="theme.dark" mb={2}>
                Work Experience
              </Text>
              <Box height="2px" background="theme.dark" />
              <VStack pt={4} alignItems="flex-start">
                {experiences.map((item, index) => (
                  <Flex alignItems="start" key={item.title}>
                    <Box
                      bg="theme.dark"
                      color="theme.light"
                      px={3}
                      py={2}
                      borderRadius={30}
                      whiteSpace="nowrap"
                    >
                      {item.startAt} - {item.endAt}
                    </Box>
                    <Box alignSelf="stretch" position="relative">
                      <Box
                        height={3}
                        width={3}
                        m={4}
                        bg="theme.dark"
                        borderRadius="50%"
                      />
                      {index !== experiences.length - 1 && (
                        <Box
                          position="absolute"
                          height="100%"
                          width={1}
                          left={5}
                          top={6}
                          bg="theme.dark"
                        />
                      )}
                    </Box>
                    <Box pt={2}>
                      <Text fontWeight="bold">{item.title}</Text>
                      <Text fontWeight="bold">{item.company}</Text>
                      <Box fontSize="sm" fontWeight={500} lineHeight={1.25}>
                        {item.content}
                      </Box>
                    </Box>
                  </Flex>
                ))}
              </VStack>
            </Box>
            <Box mb={3}>
              <Text fontWeight="bold" fontSize="3xl" color="theme.dark" mb={2}>
                Education
              </Text>
              <Box height="2px" background="theme.dark" />
              <VStack pt={4} alignItems="flex-start">
                <Flex alignItems="start">
                  <Box
                    bg="theme.dark"
                    color="theme.light"
                    px={3}
                    py={2}
                    borderRadius={30}
                    whiteSpace="nowrap"
                  >
                    2015 - 2019
                  </Box>

                  <Box pl={4} pt={2}>
                    <Text fontWeight="bold">
                      Computer Science and Information Engineering
                    </Text>
                    <Text fontWeight="bold">
                      National Chiao Tung University
                    </Text>
                  </Box>
                </Flex>
              </VStack>
            </Box>
            <Box mb={3}>
              <Text fontWeight="bold" fontSize="3xl" color="theme.dark" mb={2}>
                Languages
              </Text>
              <Box height="2px" background="theme.dark" />
              <Box pt={4}>
                <UnorderedList>
                  <ListItem>
                    <Text fontWeight="bold" display="inline">
                      Chinese
                    </Text>
                    : Native
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="bold" display="inline">
                      English
                    </Text>
                    : Fluent
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
            <Box fontSize="sm" fontWeight={500} textAlign="right">
              For more info please visite my website{" "}
              <Link href="https://yanglin.site">yanglin.site</Link> :)
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default App;
