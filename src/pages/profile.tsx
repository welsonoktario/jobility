import { PageWrapper } from '@/components/page-wrapper';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Heading, Stack, VStack, Text } from '@chakra-ui/react';
import { Mail, MapPin, Phone, User, UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProfilePage() {
  return (
    <PageWrapper>
      <div className="flex justify-between">
        <Heading size={'md'}>Profile Page</Heading>
        <div>
          <Link to={'/addsection'}>
            <Button className="mr-2 h-fit" color="info">
              Add Section
            </Button>
          </Link>
          <Link to={'/previewprofile'}>
            <Button className="h-fit" color="accent">
              Preview Profile
            </Button>
          </Link>
        </div>
      </div>
      <Accordion className="mt-2" allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: '#0070f3', color: 'white' }}>
              <AccordionIcon />
              <Box as="span" flex="1" textAlign="left">
                Basic Information
              </Box>
              <Button className="btn-info btn-sm flex justify-end">EDIT</Button>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Box overflow="hidden">
              <Center>
                <VStack>
                  <Heading size="lg">Dimas Samudra</Heading>
                </VStack>
              </Center>
              <Stack spacing={3} p={5}>
                <Stack direction="row" spacing={4} align="center">
                  <Phone />
                  <Text fontSize="md">+62 8123456789</Text>
                </Stack>
                <Stack direction="row" spacing={4} align="center">
                  <Mail />
                  <Text fontSize="md">dimass@gmail.com</Text>
                </Stack>
                <Stack direction="row" spacing={4} align="center">
                  <MapPin />
                  <Text fontSize="md">
                    Jalan bla bla
                  </Text>
                </Stack>
                <Stack direction="row" spacing={4} align="center">
                  <User />
                  <Text fontSize="md">
                    Tuna Wicara
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion className="mt-2" allowToggle>
        <AccordionItem>
          {/* <h2>
            <AccordionButton _expanded={{ bg: '#0070f3', color: 'white' }}>
              <AccordionIcon />
              <Box as="span" flex="1" textAlign="left">
                Salary Expectation
              </Box>
              <Button className="btn-info btn-sm flex justify-end">ADD</Button>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Provide a salary range for better job matches & increase chances to get hired by the
            perfect company. Click Add at the top right corner to add Salary.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion className="mt-2" allowToggle>
        <AccordionItem> */} 
          <h2>
            <AccordionButton _expanded={{ bg: '#0070f3', color: 'white' }}>
              <AccordionIcon />
              <Box as="span" flex="1" textAlign="left">
                Work Experience
              </Box>
              <Button className="btn-info btn-sm flex justify-end">ADD</Button>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Besides your last job title or company, employers want to know what you accomplished
            while there. Detail achievements and contributions made. Click Add at the top right
            corner to add Work History.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion className="mt-2" allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: '#0070f3', color: 'white' }}>
              <AccordionIcon />
              <Box as="span" flex="1" textAlign="left">
                Education
              </Box>
              <Button className="btn-info btn-sm flex justify-end">ADD</Button>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Your most recent and relevant educational attainment should come first. If you have a
            post-graduate or master's degree, no need to include where you went to high
            school. Click Add at the top right corner to add Educational Attainment.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion className="mt-2" allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: '#0070f3', color: 'white' }}>
              <AccordionIcon />
              <Box as="span" flex="1" textAlign="left">
                Skills
              </Box>
              <Button className="btn-info btn-sm flex justify-end">ADD</Button>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Enumerate your skills, competencies, and talents relevant to the position and industry
            you are applying to. Indicate proficiency levels (Basic, Novice, Intermediate, Advanced,
            Expert) for each skill. Click Add at the top right corner to add Skills.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion className="mt-2" allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: '#0070f3', color: 'white' }}>
              <AccordionIcon />
              <Box as="span" flex="1" textAlign="left">
                Resume
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Note: Your profile is the first thing recruiters see and not your uploaded resume, so
            make sure your Kalibrr profile is as complete and detailed as your uploaded resume.
            <div className="mt-2 flex items-center justify-center">
              <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </PageWrapper>
  );
}
