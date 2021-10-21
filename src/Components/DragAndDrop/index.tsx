/* eslint-disable node/no-extraneous-import */
/* eslint-disable no-use-before-define */
import {Flex} from '@chakra-ui/layout';
import React, {useContext, useState} from 'react';
// Import {useDrop} from 'react-dnd';
import {LeftCard, RightCard} from './cards';
import './styles/styles.css';
import {ChangeDataContext, StateContext} from '../../Context';
import {isUndefined} from 'lodash';
import {useDrop} from 'react-dnd';
type Props = {
  data?: string[][];
};

const FIRST_INDEX = 0;

type Item = {
  id: string;
  value: string;
  active: boolean;
  source: string;
};

const LeftDataRearrange: (data: string[][] | undefined) => {
  value: string;
  id: string;
  active: boolean;
  source: string;
}[] = (data: string[][] | undefined) => {
  if (isUndefined(data)) {
    return [{value: '0', id: '-1', active: false, source: 'none'}];
  }
  const returnData = data.map((singleData: string[], index: number) => {
    return {
      value: singleData[FIRST_INDEX],
      id: `column-0-${index}`,
      active: true,
      source: 'left-box',
    };
  });
  return returnData;
};

const RightDataRearrange: (data: string[][] | undefined) => {
  value: string;
  id: string;
  active: boolean;
  source: string;
}[] = (data: string[][] | undefined) => {
  if (isUndefined(data)) {
    return [{value: '0', id: '-1', active: false, source: 'none'}];
  }
  const returnData = [
    {value: '', id: '-1', active: false, source: 'right-box'},
    {value: '', id: '-1', active: false, source: 'right-box'},
    {value: '', id: '-1', active: false, source: 'right-box'},
  ];
  return returnData;
};

const NULL_INDEX = -2;

const ItemTypes = {
  CARD: 'card',
};

const DragAndDrop: React.FC<Props> = ({data}) => {
  const valueFromContext = useContext(StateContext);
  const [leftData, setLeftData] = useState(LeftDataRearrange(data));
  const [rightData, setRightData] = useState(RightDataRearrange(data));

  const DataChange: (
    item: {
      id: string;
      value: string;
      active: boolean;
      source: string;
    },
    index: number
  ) => void = (
    item: {id: string; value: string; active: boolean; source: string},
    index: number
  ) => {
    const source = item.source;
    if (index === NULL_INDEX) {
      const newRightData = rightData;
      const newLeftData = leftData;

      const LeftIndex = newLeftData.findIndex(
        (element: {
          id: string;
          value: string;
          active: boolean;
          source?: string;
        }) => element.value === item.value
      );
      newLeftData[LeftIndex] = {...newLeftData[LeftIndex], active: true};
      const RightIndex = newRightData.findIndex(
        (element: {
          id: string;
          value: string;
          active: boolean;
          source?: string;
        }) => element.value === item.value
      );

      newRightData[RightIndex] = {
        value: '',
        id: '-1',
        active: false,
        source: 'right-box',
      };

      setLeftData([...newLeftData]);
      setRightData([...newRightData]);
    } else if (source === 'left-box') {
      if (rightData[index].id === '-1') {
        const newRightData = rightData;
        newRightData[index] = {...item, source: 'right-box'};

        const newLeftData = leftData;
        const Index = newLeftData.findIndex(
          (element: {
            id: string;
            value: string;
            active: boolean;
            source?: string;
          }) => element.id === item.id
        );
        newLeftData[Index] = {...item, active: false};

        setLeftData([...newLeftData]);
        setRightData([...newRightData]);
      } else {
        const newRightData = rightData;

        const newLeftData = leftData;
        const Index = newLeftData.findIndex(
          (element: {
            id: string;
            value: string;
            active: boolean;
            source?: string;
          }) => element.value === item.value
        );

        const prevIndex = newLeftData.findIndex(
          (element: {
            id: string;
            value: string;
            active: boolean;
            source?: string;
          }) => element.id === rightData[index].id
        );

        newRightData[index] = {...item, source: 'right-box'};
        newLeftData[prevIndex] = {...newLeftData[prevIndex], active: true};
        newLeftData[Index] = {...item, active: false};
        setLeftData([...newLeftData]);
        setRightData([...newRightData]);
      }
    } else {
      const newRightData = rightData;
      const Index = newRightData.findIndex(
        (element: {
          id: string;
          value: string;
          active: boolean;
          source?: string;
        }) => element.id === item.id
      );
      if (newRightData[index].id === '-1') {
        newRightData[Index] = {
          value: '',
          id: '-1',
          active: false,
          source: 'right-box',
        };
      } else {
        newRightData[Index] = newRightData[index];
      }
      newRightData[index] = item;

      setRightData([...newRightData]);
    }
    if (valueFromContext !== null) {
      const tempAnswers = valueFromContext.answers;
      tempAnswers[valueFromContext.section][valueFromContext.counter] =
        rightData.map((single) => {
          return single.value;
        });
      valueFromContext.setAnswers([...tempAnswers]);
    }
  };
  const TextChange: (
    item: {
      id: string;
      value: string;
      active: boolean;
      source: string;
    },
    value: string
  ) => void = (
    item: {id: string; value: string; active: boolean; source: string},
    value: string
  ) => {
    const newLeftData = leftData;
    const Index = newLeftData.findIndex(
      (element: {id: string; value: string; active: boolean; source: string}) =>
        element.id === item.id
    );
    newLeftData[Index] = {...item, value: value};

    setLeftData([...newLeftData]);
  };

  const [{isOver}, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item: Item) => {
      DataChange(item, NULL_INDEX);
    },
    collect: (monitor) => ({
      isOver: Boolean(monitor.isOver()),
    }),
  });

  return (
    <ChangeDataContext.Provider value={{DataChange, TextChange}}>
      <Flex className="DNDContainer">
        <Flex>
          <Flex
            ref={drop}
            border={isOver ? '1px solid #333' : ''}
            borderRadius="12px"
            className="LeftContainer"
          >
            {leftData.map(
              (
                singleLeft: {
                  active: boolean;
                  value: string;
                  id: string;
                  source: string;
                },
                index: number
              ) => {
                return (
                  <LeftCard
                    data={singleLeft}
                    key={singleLeft.id}
                    numbering={index}
                  />
                );
              }
            )}
          </Flex>
        </Flex>
        <Flex>
          <Flex className="RightContainer">
            {rightData.map(
              (
                singleRight: {
                  active: boolean;
                  value: string;
                  id: string;
                  source: string;
                },
                index: number
              ) => {
                return (
                  <RightCard data={singleRight} numbering={index} key={index} />
                );
              }
            )}
          </Flex>
        </Flex>
      </Flex>
    </ChangeDataContext.Provider>
  );
};

export default DragAndDrop;
