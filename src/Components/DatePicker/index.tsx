/* eslint-disable node/no-extraneous-import */
/* eslint-disable no-use-before-define */

import {Box, Flex} from '@chakra-ui/layout';
import {isUndefined} from 'lodash';
import React, {useContext, useEffect, useState} from 'react';
import {StateContext} from '../../Context';
import './styles/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const dates = ['0', '1', '2', '3', '4'];
const weeks = [
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
];

const months = ['00', '01', '02', '03', '04'];
const FIRST_INDEX = 0;
const SECOND_INDEX = 1;
const INCREMENT_DECREMENT = 1;

const settings = {
  speed: 500,
  vertical: true,
  infinite: false,
  slidesToShow: 7,
  verticalSwiping: true,
  arrows: false,
  swipeToSlide: true,
};

const DatePicker: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState('');
  const valueFromContext = useContext(StateContext);
  const [selectedMonth, setSelectedMonth] = useState<string>(() => {
    if (
      valueFromContext !== null &&
      !isUndefined(
        valueFromContext.answers[valueFromContext.section][
          valueFromContext.counter
        ]
      )
    ) {
      return valueFromContext.answers[valueFromContext.section][
        valueFromContext.counter
      ][FIRST_INDEX];
    }
    return '00';
  });
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    if (
      valueFromContext !== null &&
      !isUndefined(
        valueFromContext.answers[valueFromContext.section][
          valueFromContext.counter
        ]
      )
    ) {
      return valueFromContext.answers[valueFromContext.section][
        valueFromContext.counter
      ][SECOND_INDEX];
    }
    return '0';
  });

  useEffect(() => {
    if (selectedMonth && selectedDate) {
      if (valueFromContext !== null) {
        const tempAnswers = valueFromContext.answers;
        tempAnswers[valueFromContext.section][valueFromContext.counter] = [
          selectedMonth,
          selectedDate,
        ];
        valueFromContext.setAnswers([...tempAnswers]);
      }
    }
  }, [selectedDate, selectedMonth]);
  return (
    <Flex
      width="316px"
      alignItems="center"
      justifyContent="space-between"
      margin="0 20px"
    >
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
                  onClick={(): void => {
                    setSelectedDate(date);
                  }}
                >
                  <Flex
                    color={selectedDate === date ? '#191c2c' : '#8A95D6'}
                    className="DisplayNumber"
                  >
                    {date}
                  </Flex>
                  {index < dates.length - INCREMENT_DECREMENT && (
                    <div className="DateDivider"></div>
                  )}
                </Box>
              );
            })}
          </Flex>
        </Flex>
      </Flex>

      <Flex
        className="DatePickerContainer"
        alignItems="center"
        justifyItems="center"
      >
        <Flex alignItems="center" justifyContent="center" direction="column">
          <Flex className="DatePickerHeadline">Month</Flex>

          <div className="DateDivider"></div>

          <Flex className="HandleNumber">
            {months.map((month: string, index: number) => {
              return (
                <Box
                  key={index}
                  onClick={(): void => {
                    setSelectedMonth(month);
                  }}
                >
                  <Flex
                    color={selectedMonth === month ? '#191c2c' : '#8A95D6'}
                    className="DisplayNumber"
                  >
                    {month}
                  </Flex>
                  {index < months.length - INCREMENT_DECREMENT && (
                    <div className="DateDivider"></div>
                  )}
                </Box>
              );
            })}
          </Flex>
        </Flex>
      </Flex>

      <Flex
        className="DatePickerContainer"
        alignItems="center"
        justifyItems="center"
      >
        <Flex alignItems="center" justifyContent="center" direction="column">
          <Flex className="DatePickerHeadline">Weeks</Flex>

          <div className="DateDivider"></div>
          <Slider {...settings}>
            {weeks.map((week: string, index: number) => {
              return (
                <Box
                  key={index}
                  cursor="grab"
                  onClick={(): void => {
                    setSelectedWeek(week);
                  }}
                >
                  <Flex
                    color={selectedWeek === week ? '#191c2c' : '#8A95D6'}
                    className="DisplayNumber"
                  >
                    {week}
                  </Flex>
                  {index < weeks.length - INCREMENT_DECREMENT && (
                    <div className="DateDivider"></div>
                  )}
                </Box>
              );
            })}
          </Slider>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DatePicker;
