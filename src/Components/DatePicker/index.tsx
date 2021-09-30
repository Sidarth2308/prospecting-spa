/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-undefined */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable node/no-extraneous-import */
/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable no-use-before-define */

import {Box, Flex} from '@chakra-ui/layout';
import React, {useContext, useEffect, useState} from 'react';
import {StateContext} from '../../Context';
import './styles/styles.css';
interface Props {}

const dates = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
];
const months = ['00', '01', '02', '03', '04', '05', '06'];
const DatePicker: React.FC<Props> = () => {
  const valueFromContext = useContext(StateContext);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(() => {
    if (
      valueFromContext !== null &&
      valueFromContext.answers[valueFromContext.section][
        valueFromContext.counter
      ]
    ) {
      return valueFromContext.answers[valueFromContext.section][
        valueFromContext.counter
      ][1];
    }
    return '00';
  });
  const [selectedDate, setSelectedDate] = useState<string | null>(() => {
    if (
      valueFromContext !== null &&
      valueFromContext.answers[valueFromContext.section][
        valueFromContext.counter
      ]
    ) {
      return valueFromContext.answers[valueFromContext.section][
        valueFromContext.counter
      ][0];
    }
    return '0';
  });

  console.log(selectedDate, selectedMonth);

  useEffect(() => {
    if (selectedMonth && selectedDate) {
      if (valueFromContext !== null) {
        const tempAnswers = valueFromContext.answers;
        tempAnswers[valueFromContext.section][valueFromContext.counter] = [
          selectedDate,
          selectedMonth,
        ];
        valueFromContext.setAnswers([...tempAnswers]);
      }
    }
  }, [selectedDate, selectedMonth]);
  return (
    <Flex
      className="DatePickerContainer"
      alignItems="center"
      justifyItems="center"
    >
      <Flex alignItems="center" justifyContent="center" direction="column">
        <Flex className="DatePickerHeadline">Days</Flex>

        <div className="DateDivider"></div>

        <Flex className="HandleNumber">
          {dates.map((date: string, index: number) => {
            return (
              <Box
                key={index}
                onClick={() => {
                  setSelectedDate(date);
                }}
              >
                <Flex
                  color={selectedDate === date ? '#191c2c' : '#8A95D6'}
                  className="DisplayNumber"
                >
                  {date}
                </Flex>
                {index < dates.length - 1 && (
                  <div className="DateDivider"></div>
                )}
              </Box>
            );
          })}
        </Flex>
      </Flex>

      <Flex alignItems="center" justifyContent="center" direction="column">
        <Flex className="DatePickerHeadline">Month</Flex>

        <div className="DateDivider"></div>

        <Flex className="HandleNumber">
          {months.map((month: string, index: number) => {
            return (
              <Box
                key={index}
                onClick={() => {
                  setSelectedMonth(month);
                }}
              >
                <Flex
                  color={selectedMonth === month ? '#191c2c' : '#8A95D6'}
                  className="DisplayNumber"
                >
                  {month}
                </Flex>
                {index < months.length - 1 && (
                  <div className="DateDivider"></div>
                )}
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DatePicker;
