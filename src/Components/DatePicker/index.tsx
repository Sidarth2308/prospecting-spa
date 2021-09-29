/* eslint-disable node/no-extraneous-import */
/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable no-use-before-define */

import {Flex} from '@chakra-ui/layout';
import React from 'react';
import './styles/styles.css';
import Draggable from 'react-draggable';
interface Props {}
const DatePicker: React.FC<Props> = () => {
  return (
    <Flex
      className="DatePickerContainer"
      alignItems="center"
      direction="column"
      justifyItems="center"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        direction="column"
        marginRight="67px"
      >
        <Flex className="DatePickerHeadline">Days</Flex>

        <div className="DateDivider"></div>

        <Draggable axis="y" handle=".handle">
          <Flex
            direction="column"
            height="167px"
            overflow="hidden"
            cursor="grab"
            className="handle"
          >
            <Flex className="DisplayNumber">1</Flex>
            <Flex className="DisplayNumber">2</Flex>
            <Flex className="DisplayNumber">3</Flex>
            <Flex className="DisplayNumber">4</Flex>
            <Flex className="DisplayNumber">5</Flex>
            <Flex className="DisplayNumber">6</Flex>
            <Flex className="DisplayNumber">7</Flex>
            <Flex className="DisplayNumber">8</Flex>
            <Flex className="DisplayNumber">9</Flex>
            <Flex className="DisplayNumber">10</Flex>
          </Flex>
        </Draggable>
      </Flex>
    </Flex>
  );
};

export default DatePicker;
