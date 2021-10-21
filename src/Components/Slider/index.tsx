/* eslint-disable radix */
/* eslint-disable node/no-extraneous-import */
/* eslint-disable no-use-before-define */
import {Image} from '@chakra-ui/image';
import {Box, Flex, Text} from '@chakra-ui/layout';
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/slider';
import {useMediaQuery} from 'react-responsive';
import {useContext, FC} from 'react';
import sliderImage from '../../assets/slider.svg';
import './styles/styles.css';
import annotationArrow from '../../assets/annotationArrow.svg';
import sliderNotation1 from '../../assets/sliderNotation1.svg';
import sliderNotation2 from '../../assets/slider-notation2.png';
import annotationArrowReverse from '../../assets/annotationArrowReverse.svg';
import {StateContext} from '../../Context';
import {isUndefined} from 'lodash';
type Props = {
  graphic: string;
  dimension: string[];
  slider?: {
    default: string;
    min: string;
    max: string;
    step: string;
    ticks: boolean;
  };
};
type TransitionProps = {
  graphic1: string;
  graphic2: string;
  graphic3: string;
  dimension: string[];
  slider?: {
    default: string;
    min: string;
    max: string;
    step: string;
    ticks: boolean;
  };
  options: string[];
};
type NotationProps = {
  graphic: string;
  slider?: {
    default: string;
    min: string;
    max: string;
    step: string;
    ticks: boolean;
  };
  dimension: string[];
  options: string[];
};

const FIRST_INDEX = 0;
const SECOND_INDEX = 1;
const PERCENTAGE_CONSTANT = 100;
const PERCENTAGE_CONSTANT2 = 200;
const ENLARGING_CONSTANT = 10;

const RIGHT_BOX_RIGHT = 100;
const RIGHT_ARROW_RIGHT = 110;
const RIGHT_BOX_BOTTOM = 70;
const RIGHT_ARROW_BOTTOM = 63;

const LEFT_BOX_LEFT = 200;
const LEFT_ARROW_LEFT = 210;
const LEFT_BOX_BOTTOM = 170;
const LEFT_ARROW_BOTTOM = 165;

const SECONDARY_SLIDER_VALUE = 40;

const MULTIPLICATION_CONSTANT_SMALL = 0.5;
const MULTIPLICATION_CONSTANT_EXTRA_SMALL = 0.5;
const MULTIPLICATION_CONSTANT_LARGE = 0.4;

const IMAGE_SCALING_SMALL = 0.75;
const IMAGE_SCALING_LARGE = 1;
const IMAGE_SCALING_EXTRA_SMALL = 0.5;

const LOW_VALUE = -50;
const MID_VALUE = 0;
const HIGH_VALUE = 50;
const DIVISION_CONSTANT = 3;
const DECIMAL_CONSTANT = 0.1;
const NEW_DECIMAL_CONSTANT = 0.7;

// ValueFromContext?.answers[valueFromContext.counter]  || 50

const getStateValue: (
  state: string | string[],
  defaultValue: string
) => number = (state: string | string[], defaultValue: string) => {
  if (typeof state === 'string') {
    return parseInt(state);
  }
  return parseInt(defaultValue);
};

const checkUndefined: (value: string | undefined) => string = (
  value: string | undefined
) => {
  if (isUndefined(value)) {
    return '';
  }
  return value;
};

export const SliderComponent: FC<Props> = ({graphic, dimension}) => {
  const valueFromContext = useContext(StateContext);
  const isMobile = useMediaQuery({query: '(max-width: 770px)'});
  let val = HIGH_VALUE;
  if (valueFromContext !== null) {
    val = getStateValue(
      valueFromContext.answers[valueFromContext.section][
        valueFromContext.counter
      ],
      HIGH_VALUE.toString()
    );
  }
  return (
    <Box marginTop="244px" marginBottom="48px">
      <Flex
        position="relative"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <div style={{zIndex: 1}}>
          <div
            className="DarkAnnotation"
            style={{
              bottom: isMobile
                ? `${LEFT_BOX_BOTTOM * NEW_DECIMAL_CONSTANT - val}px`
                : `${LEFT_BOX_BOTTOM - val}px`,
              left: isMobile
                ? `${LEFT_BOX_LEFT * NEW_DECIMAL_CONSTANT - val}px`
                : `${LEFT_BOX_LEFT - val}px`,
            }}
          >
            You
          </div>

          <Image
            userSelect="none"
            src={annotationArrow}
            className="AnnotationArrow"
            style={{
              bottom: isMobile
                ? `${LEFT_ARROW_BOTTOM * NEW_DECIMAL_CONSTANT - val}px`
                : `${LEFT_ARROW_BOTTOM - val}px`,
              left: isMobile
                ? `${LEFT_ARROW_LEFT * NEW_DECIMAL_CONSTANT - val}px`
                : `${LEFT_ARROW_LEFT - val}px`,
            }}
          />
        </div>

        <div style={{zIndex: 1}}>
          <div
            className="DarkAnnotation-side"
            style={{
              bottom: isMobile
                ? `${RIGHT_BOX_BOTTOM * NEW_DECIMAL_CONSTANT + val}px`
                : `${RIGHT_BOX_BOTTOM + val}px`,
              right: isMobile
                ? `${RIGHT_BOX_RIGHT * NEW_DECIMAL_CONSTANT + val}px`
                : `${RIGHT_BOX_RIGHT + val}px`,
            }}
          >
            Others
          </div>

          <Image
            userSelect="none"
            src={annotationArrowReverse}
            className="AnnotationArrow-side"
            style={{
              bottom: isMobile
                ? `${RIGHT_ARROW_BOTTOM * NEW_DECIMAL_CONSTANT + val}px`
                : `${RIGHT_ARROW_BOTTOM + val}px`,
              right: isMobile
                ? `${RIGHT_ARROW_RIGHT * NEW_DECIMAL_CONSTANT + val}px`
                : `${RIGHT_ARROW_RIGHT + val}px`,
            }}
          />
        </div>
        <Image
          userSelect="none"
          bottom="0px"
          position="absolute"
          src={graphic}
          minWidth="30px"
          minHeight="30px"
          height={[
            `calc(${dimension[SECOND_INDEX]}*${
              ((PERCENTAGE_CONSTANT - val) *
                MULTIPLICATION_CONSTANT_EXTRA_SMALL) /
              PERCENTAGE_CONSTANT
            } )`,
            `calc(${dimension[SECOND_INDEX]}*${
              ((PERCENTAGE_CONSTANT - val) * MULTIPLICATION_CONSTANT_SMALL) /
              PERCENTAGE_CONSTANT
            } )`,
            `calc(${dimension[SECOND_INDEX]}*${
              ((PERCENTAGE_CONSTANT2 - val) * MULTIPLICATION_CONSTANT_LARGE) /
              PERCENTAGE_CONSTANT
            } )`,
          ]}
          width={[
            `calc(${dimension[FIRST_INDEX]}*${
              ((PERCENTAGE_CONSTANT - val) *
                MULTIPLICATION_CONSTANT_EXTRA_SMALL) /
              PERCENTAGE_CONSTANT
            } )`,
            `calc(${dimension[FIRST_INDEX]}*${
              ((PERCENTAGE_CONSTANT - val) * MULTIPLICATION_CONSTANT_SMALL) /
              PERCENTAGE_CONSTANT
            } )`,
            `calc(${dimension[FIRST_INDEX]}*${
              ((PERCENTAGE_CONSTANT2 - val) * MULTIPLICATION_CONSTANT_LARGE) /
              PERCENTAGE_CONSTANT
            } )`,
          ]}
        />
        <Image
          userSelect="none"
          bottom="0px"
          position="absolute"
          right="0"
          src={graphic}
          minWidth="30px"
          minHeight="30px"
          height={[
            `calc(${dimension[SECOND_INDEX]}*${
              (val * MULTIPLICATION_CONSTANT_EXTRA_SMALL) / PERCENTAGE_CONSTANT
            } )`,
            `calc(${dimension[SECOND_INDEX]}*${
              (val * MULTIPLICATION_CONSTANT_SMALL) / PERCENTAGE_CONSTANT
            } )`,
            `calc(${dimension[SECOND_INDEX]}*${
              ((val + PERCENTAGE_CONSTANT) * MULTIPLICATION_CONSTANT_LARGE) /
              PERCENTAGE_CONSTANT
            } )`,
          ]}
          width={[
            `calc(${dimension[FIRST_INDEX]}*${
              (val * MULTIPLICATION_CONSTANT_EXTRA_SMALL) / PERCENTAGE_CONSTANT
            } )`,
            `calc(${dimension[FIRST_INDEX]}*${
              (val * MULTIPLICATION_CONSTANT_SMALL) / PERCENTAGE_CONSTANT
            } )`,
            `calc(${dimension[FIRST_INDEX]}*${
              ((val + PERCENTAGE_CONSTANT) * MULTIPLICATION_CONSTANT_LARGE) /
              PERCENTAGE_CONSTANT
            } )`,
          ]}
        />
      </Flex>

      <Flex width={['280px', '400px', '600px']} alignItems="flex-end">
        <Slider
          aria-label="slider-ex-4"
          value={val}
          onChange={(newVal): void => {
            if (valueFromContext !== null) {
              const tempAnswers = valueFromContext.answers;
              tempAnswers[valueFromContext.section][valueFromContext.counter] =
                newVal.toString();
              valueFromContext.setAnswers([...tempAnswers]);
            }
          }}
        >
          <SliderTrack
            height="13px"
            borderRadius="100px"
            bgGradient="linear(to-l, #FA94FC,#86BDFE,#FA94FC)"
          >
            <SliderFilledTrack bg="transparent" />
          </SliderTrack>
          <SliderThumb
            background="transparent"
            boxSize={12}
            backgroundImage={sliderImage}
            backgroundSize="80px"
            backgroundRepeat="no-repeat"
            backgroundPosition="center center"
            userSelect="none"
          >
            <Box color="tomato" />
          </SliderThumb>
        </Slider>
      </Flex>
    </Box>
  );
};

export const SliderComponentWithTransition: FC<TransitionProps> = ({
  graphic1,
  graphic2,
  graphic3,
  dimension,
  options,
}) => {
  const valueFromContext = useContext(StateContext);
  let val = 40;
  if (valueFromContext !== null) {
    val = getStateValue(
      valueFromContext.answers[valueFromContext.section][
        valueFromContext.counter
      ],
      HIGH_VALUE.toString()
    );
  }
  return (
    <Box marginTop="224px" marginBottom="44px">
      <Flex
        position="relative"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Image
          userSelect="none"
          bottom="10px"
          right="0"
          left="0"
          marginRight="auto"
          marginLeft="auto"
          // Right={['8%', '22%', '30%']}
          position="absolute"
          src={graphic1}
          opacity={((val - LOW_VALUE) / DIVISION_CONSTANT) * DECIMAL_CONSTANT}
          height={dimension[SECOND_INDEX]}
          width={dimension[FIRST_INDEX]}
        />
        <Image
          userSelect="none"
          bottom="10px"
          right="0"
          left="0"
          marginRight="auto"
          marginLeft="auto"
          // Right={['8%', '22%', '30%']}
          position="absolute"
          src={graphic3}
          opacity={((val - MID_VALUE) / DIVISION_CONSTANT) * DECIMAL_CONSTANT}
          height={dimension[SECOND_INDEX]}
          width={dimension[FIRST_INDEX]}
        />
        <Image
          bottom="10px"
          right="13px"
          left="0"
          marginRight="auto"
          marginLeft="auto"
          // Right={['5%', '22%', '30%']}
          position="absolute"
          opacity={((val - HIGH_VALUE) / DIVISION_CONSTANT) * DECIMAL_CONSTANT}
          src={graphic2}
          height={dimension[SECOND_INDEX]}
          width={dimension[FIRST_INDEX]}
        />
      </Flex>

      <Flex width={['280px', '400px', '600px']} alignItems="flex-end">
        <Slider
          aria-label="slider-ex-4"
          value={val}
          onChange={(newVal): void => {
            if (valueFromContext !== null) {
              const tempAnswers = valueFromContext.answers;
              tempAnswers[valueFromContext.section][valueFromContext.counter] =
                newVal.toString();
              valueFromContext.setAnswers([...tempAnswers]);
            }
          }}
        >
          <Image
            userSelect="none"
            top="10px"
            width="95%"
            left="2.5%"
            src={sliderNotation1}
            position="absolute"
          />
          <SliderTrack height="13px" borderRadius="100px" bg="#CEC3FF">
            <SliderFilledTrack bg="transparent" />
          </SliderTrack>
          <SliderThumb
            background="transparent"
            boxSize={12}
            backgroundImage={sliderImage}
            backgroundSize="80px"
            backgroundRepeat="no-repeat"
            backgroundPosition="center center"
          >
            <Box color="tomato" />
          </SliderThumb>
        </Slider>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between">
        <Text className="NotationText" fontSize={['12px', '15px', '20px']}>
          {options[FIRST_INDEX]}
        </Text>
        <Text className="NotationText" fontSize={['12px', '15px', '20px']}>
          {options[SECOND_INDEX]}
        </Text>
      </Flex>
    </Box>
  );
};

export const SliderComponentWithNotation: FC<NotationProps> = ({
  graphic,
  dimension,
  slider,
  options,
}) => {
  const valueFromContext = useContext(StateContext);
  let val = SECONDARY_SLIDER_VALUE;
  if (valueFromContext !== null) {
    val = getStateValue(
      valueFromContext.answers[valueFromContext.section][
        valueFromContext.counter
      ],
      SECONDARY_SLIDER_VALUE.toString()
    );
  }
  return (
    <Box marginTop="280px" marginBottom="62px">
      <Flex
        position="relative"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Image
          position="absolute"
          userSelect="none"
          left="0"
          right="0"
          margin="0 auto 27px auto"
          src={graphic}
          height={[
            `calc(${dimension[SECOND_INDEX]}*${IMAGE_SCALING_EXTRA_SMALL})`,
            `calc(${dimension[SECOND_INDEX]}*${IMAGE_SCALING_SMALL})`,
            `calc(${dimension[SECOND_INDEX]}*${IMAGE_SCALING_LARGE})`,
          ]}
          width={[
            `calc(${dimension[FIRST_INDEX]}*${IMAGE_SCALING_EXTRA_SMALL})`,
            `calc(${dimension[FIRST_INDEX]}*${IMAGE_SCALING_SMALL})`,
            `calc(${dimension[FIRST_INDEX]}*${IMAGE_SCALING_LARGE})`,
          ]}
        />
      </Flex>

      <Flex alignItems="flex-end">
        <Slider
          width={['280px', '400px', '600px']}
          aria-label="slider-ex-4"
          step={parseInt(checkUndefined(slider?.step)) * ENLARGING_CONSTANT}
          min={0}
          max={parseInt(checkUndefined(slider?.max)) * ENLARGING_CONSTANT}
          value={val}
          onChange={(newVal): void => {
            if (valueFromContext !== null) {
              const tempAnswers = valueFromContext.answers;
              tempAnswers[valueFromContext.section][valueFromContext.counter] =
                newVal.toString();
              valueFromContext.setAnswers([...tempAnswers]);
            }
          }}
        >
          <Image
            userSelect="none"
            bottom="30px"
            width="100%"
            src={sliderNotation2}
            position="absolute"
          />
          <SliderTrack height="13px" borderRadius="100px" bg="#CEC3FF">
            <SliderFilledTrack bg="transparent" />
          </SliderTrack>
          <SliderThumb
            background="transparent"
            boxSize={12}
            backgroundImage={sliderImage}
            backgroundSize="80px"
            backgroundRepeat="no-repeat"
            backgroundPosition="center center"
          >
            <Box color="tomato" />
          </SliderThumb>
        </Slider>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between">
        <Text className="NotationText" fontSize={['12px', '15px', '20px']}>
          {options[FIRST_INDEX]}
        </Text>
        <Text className="NotationText" fontSize={['12px', '15px', '20px']}>
          {options[SECOND_INDEX]}
        </Text>
      </Flex>
    </Box>
  );
};
