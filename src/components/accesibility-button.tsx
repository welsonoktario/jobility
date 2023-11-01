import { Button, Container, Flex, Tooltip } from "@chakra-ui/react";
import { Contrast, Subtitles, Type } from "lucide-react";

const AccesibilityButton = () => {
  return (
    <Flex direction='row' p={4} gap={2} border='1px' backgroundColor='white' borderColor='gray.200'  rounded='3xl' boxShadow='md' position='fixed' alignItems='center' bottom={10} right={10}>
      <Tooltip label='Change the font size.' fontSize='sm'>
        <Button px={0} py={2} h='fit-content' backgroundColor='inherit' rounded='3xl'>
          <Type size={12} />
        </Button>
      </Tooltip>
      <Tooltip label='Turn on screen reader.' fontSize='sm'>
        <Button p={2} h='fit-content' backgroundColor='inherit' rounded='3xl'>
          <Subtitles size={12} />
        </Button>
      </Tooltip>
      <Tooltip label='Change the contrast of the screen.' fontSize='sm'>
        <Button p={0} h='fit-content' backgroundColor='inherit' rounded='3xl'>
          <Contrast size={12} />
        </Button>
      </Tooltip>
    </Flex>
  );
}
export default AccesibilityButton;