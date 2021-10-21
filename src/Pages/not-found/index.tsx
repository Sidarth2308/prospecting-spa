/* eslint-disable no-use-before-define */
/* eslint-disable node/no-extraneous-import */
import {Flex, Text} from '@chakra-ui/layout';
import React from 'react';
import './styles/styles.css';
const NotFound: React.FC = () => {
  return (
    <Flex className="Text404Container">
      <Text className="Text404">The Requested page was not Found</Text>
    </Flex>
  );
};

export default NotFound;
