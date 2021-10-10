/* eslint-disable no-use-before-define */
/* eslint-disable node/no-extraneous-import */
import {Flex, Text} from '@chakra-ui/layout';
import React, {useContext} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import {ChangeDataContext} from '../../Context';
type Item = {
  id: string;
  value: string;
  active: boolean;
  source: string;
};

const NUMBER_CHECK = 10;
const INCREMENT_DECREMENT = 1;

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

const numberAdjuster: (number: number) => string | number = (
  number: number
) => {
  if (number < NUMBER_CHECK) {
    return `0${number}`;
  }
  return number;
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
    <Flex
      ref={drop}
      alignItems="center"
      justifyContent="center"
      marginRight="20px"
    >
      <Text className="NumberText">
        {numberAdjuster(numbering + INCREMENT_DECREMENT)}
      </Text>
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
