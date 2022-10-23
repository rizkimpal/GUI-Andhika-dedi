import React, { FC } from "react";
import { ColorModeSwitcher } from "utils/ColorModeSwitcher";
import { Flex, Heading, Theme, useTheme } from "@chakra-ui/react";

const AppHeader: FC = () => {
  const theme: Theme = useTheme();
  return (
    <Flex
      as={"nav"}
      flex={"1"}
      mb={4}
      padding="1.5rem"
      bg={theme.colors.purple[700]}
      color="white"
    >
      <Heading size={"md"} >
        Project Dulloh dan Dedi <ColorModeSwitcher justifySelf="self-end" />
      </Heading>
    </Flex>
  );
};
export default AppHeader;
