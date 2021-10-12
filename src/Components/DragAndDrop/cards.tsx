/* eslint-disable no-use-before-define */
/* eslint-disable node/no-extraneous-import */
import {Flex, Text} from '@chakra-ui/layout';
import React, {useContext} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import {ChangeDataContext} from '../../Context';
import number1Image from '../../assets/gold1.svg';
import number2Image from '../../assets/silver2.svg';
import number3Image from '../../assets/bronze3.svg';
import {Image} from '@chakra-ui/image';

type Item = {
  id: string;
  value: string;
  active: boolean;
  source: string;
};

const INCREMENT_DECREMENT = 1;
const Image1 = 1;
const Image2 = 2;

type LeftCardProps = {
  data: {value: string; id: string; active: boolean; source: string};
};

type RightCardProps = {
  data: {value: string; id: string; active: boolean; source: string};
  numbering: number;
};

const ItemTypes = {
  CARD: 'card',
};

const numberAdjuster: (number: number) => string = (number: number) => {
  if (number === Image1) {
    return number1Image;
  } else if (number === Image2) {
    return number2Image;
  }
  return number3Image;
};

export const LeftCard: React.FC<LeftCardProps> = ({data}) => {
  const [{isDragging}, drag] = useDrag({
    type: ItemTypes.CARD,
    item: data,
    collect: (monitor) => ({
      isDragging: Boolean(monitor.isDragging()),
    }),
  });
  return (
    <Flex
      ref={data.active ? drag : null}
      opacity={isDragging ? '0.5' : '1'}
      className={data.active ? 'LeftElement' : 'LeftElementDisabled'}
    >
      <Text
        className={data.active ? 'LeftElementText' : 'LeftElementTextDisabled'}
      >
        {data.value}
      </Text>
    </Flex>
  );
};

export const RightCard: React.FC<RightCardProps> = ({data, numbering}) => {
  const ContextData = useContext(ChangeDataContext);
  const [{isDragging}, drag] = useDrag({
    type: ItemTypes.CARD,
    item: data,
    collect: (monitor) => ({
      isDragging: Boolean(monitor.isDragging()),
    }),
  });

  const [{isOver}, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item: Item) => {
      ContextData?.DataChange(item, numbering);
    },
    collect: (monitor) => ({
      isOver: Boolean(monitor.isOver()),
    }),
  });
  return (
    <Flex className="RightBoxSingle" ref={drop}>
      <Image
        userSelect="none"
        width="100px"
        height="100px"
        src={numberAdjuster(numbering + INCREMENT_DECREMENT)}
        alt={(numbering + INCREMENT_DECREMENT).toString()}
        position="relative"
        left="75px"
      />
      <Flex
        ref={data.active ? drag : null}
        color={isDragging ? 'black' : 'red'}
        bg={isOver ? '#5d23e9' : 'transparent'}
        className={data.active ? 'RightElement' : 'RightElementDisabled'}
      >
        {data.value}
      </Flex>
    </Flex>
  );
};
