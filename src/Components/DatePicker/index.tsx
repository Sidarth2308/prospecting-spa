/* eslint-disable node/no-extraneous-import */
/* eslint-disable no-use-before-define */

import {Flex} from '@chakra-ui/layout';
import React, {useContext, useState} from 'react';
import {StateContext} from '../../Context';
import './styles/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const weeks = [
  ['1', '2', '3', '4'],
  ['5', '6', '7', '8'],
  ['9', '10', '11', '12'],
  ['13', '14', '15', '16'],
];

const FIRST_INDEX = 0;
const SECOND_INDEX = 1;
const THIRD_INDEX = 2;
const FOURTH_INDEX = 3;
const LAST_INDEX = 3;

const DatePicker: React.FC = () => {
  const valueFromContext = useContext(StateContext);
  const [selectedWeek, setSelectedWeek] = useState(() => {
    if (valueFromContext !== null) {
      return valueFromContext.answers[valueFromContext.section][
        valueFromContext.counter
      ] as string;
    }
    return '';
  });

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      margin="0 0 30px 0"
    >
      <Flex
        className="DatePickerContainer-2"
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Flex width="100%">
          {weeks[FIRST_INDEX].map((week, i) => {
            return (
              <Flex
                className={
                  selectedWeek === week
                    ? 'DateNumberSelected-2'
                    : 'DateNumber-2'
                }
                borderRight={i !== LAST_INDEX ? '1px solid #E1E1E1' : ''}
                borderBottom="1px solid #E1E1E1"
                onClick={(): void => {
                  if (valueFromContext !== null) {
                    const tempAnswers = valueFromContext.answers;
                    tempAnswers[valueFromContext.section][
                      valueFromContext.counter
                    ] = week.toString();
                    valueFromContext.setAnswers([...tempAnswers]);
                    setSelectedWeek(week);
                  }
                }}
              >
                {week}
              </Flex>
            );
          })}
        </Flex>
        <Flex width="100%">
          {weeks[SECOND_INDEX].map((week, i) => {
            return (
              <Flex
                className={
                  selectedWeek === week
                    ? 'DateNumberSelected-2'
                    : 'DateNumber-2'
                }
                borderRight={i !== LAST_INDEX ? '1px solid #E1E1E1' : ''}
                borderBottom="1px solid #E1E1E1"
                onClick={(): void => {
                  if (valueFromContext !== null) {
                    const tempAnswers = valueFromContext.answers;
                    tempAnswers[valueFromContext.section][
                      valueFromContext.counter
                    ] = week.toString();
                    valueFromContext.setAnswers([...tempAnswers]);
                    setSelectedWeek(week);
                  }
                }}
              >
                {week}
              </Flex>
            );
          })}
        </Flex>
        <Flex width="100%">
          {weeks[THIRD_INDEX].map((week, i) => {
            return (
              <Flex
                className={
                  selectedWeek === week
                    ? 'DateNumberSelected-2'
                    : 'DateNumber-2'
                }
                borderRight={i !== LAST_INDEX ? '1px solid #E1E1E1' : ''}
                borderBottom="1px solid #E1E1E1"
                onClick={(): void => {
                  if (valueFromContext !== null) {
                    const tempAnswers = valueFromContext.answers;
                    tempAnswers[valueFromContext.section][
                      valueFromContext.counter
                    ] = week.toString();
                    valueFromContext.setAnswers([...tempAnswers]);
                    setSelectedWeek(week);
                  }
                }}
              >
                {week}
              </Flex>
            );
          })}
        </Flex>
        <Flex width="100%">
          {weeks[FOURTH_INDEX].map((week, i) => {
            return (
              <Flex
                className={
                  selectedWeek === week
                    ? 'DateNumberSelected-2'
                    : 'DateNumber-2'
                }
                borderRight={i !== LAST_INDEX ? '1px solid #E1E1E1' : ''}
                onClick={(): void => {
                  if (valueFromContext !== null) {
                    const tempAnswers = valueFromContext.answers;
                    tempAnswers[valueFromContext.section][
                      valueFromContext.counter
                    ] = week.toString();
                    valueFromContext.setAnswers([...tempAnswers]);
                    setSelectedWeek(week);
                  }
                }}
              >
                {week}
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DatePicker;
