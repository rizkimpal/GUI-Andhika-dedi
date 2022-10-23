import React, { FC } from "react";
import {
  Box,
  Theme,
  useTheme,
  Button,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const HomePage: FC = () => {
  const theme: Theme = useTheme();
  return (
    <SimpleGrid spacing="5" justifyContent={"center"}>
      <Box
        display={"grid"}
        justifyContent="center"
        flexDirection={["column", "row", "row", "row"]}
      >
        <Text fontFamily={"monospace"} fontSize={"3xl"}>
          Mau pilih yang mana?
        </Text>
        <Button
          m={"20"}
          bg={theme.colors.telegram[600]}
          size="lg"
          color={"white"}
        >
          Record audio
        </Button>
        <Button
        mx={"20"}
          bg={theme.colors.telegram[600]}
          size="lg"
          color={"white"}
        >
          Upload File
        </Button>
      </Box>
    </SimpleGrid>
  );
};

export default HomePage;
