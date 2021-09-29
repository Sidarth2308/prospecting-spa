/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable radix */
/* eslint-disable no-magic-numbers */
/* eslint-disable node/no-extraneous-import */
import {Image} from '@chakra-ui/image';
import {Box, Flex, Text} from '@chakra-ui/layout';
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/slider';
import {useContext, FC} from 'react';
import sliderImage from '../../assets/slider.svg';
import './styles/styles.css';
import annotationArrow from '../../assets/annotationArrow.svg';
import sliderNotation1 from '../../assets/sliderNotation1.svg';
import annotationArrowReverse from '../../assets/annotationArrowReverse.svg';
import {StateContext} from '../../Context';
type Props = {
  graphic: string;
  dimension: string[];
  slider: any;
};
type TransitionProps = {
  graphic1: string;
  graphic2: string;
  dimension: string[];
  slider: any;
  options: string[];
};
type NotationProps = {
  graphic: string;
  slider: any;
  dimension: string[];
  options: string[];
};

// ValueFromContext?.answers[valueFromContext.counter]  || 50

export const SliderComponent: FC<Props> = ({graphic, dimension}) => {
  const valueFromContext = useContext(StateContext);
  let val = 0;
  if (valueFromContext !== null) {
    // eslint-disable-next-line radix
    val =
      parseInt(
        valueFromContext.answers[valueFromContext.section][
          valueFromContext.counter
        ]
      ) || 0;
  }
  return (
    <Box marginTop="200px" marginBottom="30px">
      <Flex
        position="relative"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <div>
          <div
            className="DarkAnnotation"
            style={{
              bottom: `${150 - val}px`,
              left: `${150 - val}px`,
            }}
          >
            You
          </div>

          <Image
            src={annotationArrow}
            className="AnnotationArrow"
            style={{
              bottom: `${145 - val}px`,
              left: `${160 - val}px`,
            }}
          />
        </div>

        <div>
          <div
            className="DarkAnnotation-side"
            style={{
              bottom: `${50 + val}px`,
              right: `${50 + val}px`,
            }}
          >
            Others
          </div>

          <Image
            src={annotationArrowReverse}
            className="AnnotationArrow-side"
            style={{
              bottom: `${43 + val}px`,
              right: `${60 + val}px`,
            }}
          />
        </div>
        <Image
          userSelect="none"
          zIndex="-10"
          bottom="0px"
          position="absolute"
          src={graphic}
          minWidth="30px"
          minHeight="30px"
          height={[
            `calc(${dimension[1]}*${((100 - val) * 0.5) / 100} )`,
            `calc(${dimension[1]}*${((100 - val) * 0.5) / 100} )`,
            `calc(${dimension[1]}*${((100 - val) * 0.8) / 100} )`,
          ]}
          width={[
            `calc(${dimension[0]}*${((100 - val) * 0.5) / 100} )`,
            `calc(${dimension[0]}*${((100 - val) * 0.5) / 100} )`,
            `calc(${dimension[0]}*${((100 - val) * 0.8) / 100} )`,
          ]}
        />
        <Image
          zIndex="-10"
          userSelect="none"
          bottom="0px"
          position="absolute"
          right="0"
          src={graphic}
          minWidth="30px"
          minHeight="30px"
          height={[
            `calc(${dimension[1]}*${(val * 0.5) / 100} )`,
            `calc(${dimension[1]}*${(val * 0.5) / 100} )`,
            `calc(${dimension[1]}*${(val * 0.8) / 100} )`,
          ]}
          width={[
            `calc(${dimension[0]}*${(val * 0.5) / 100} )`,
            `calc(${dimension[0]}*${(val * 0.5) / 100} )`,
            `calc(${dimension[0]}*${(val * 0.8) / 100} )`,
          ]}
        />
      </Flex>

      <Flex width={['300px', '400px', '600px']} alignItems="flex-end">
        <Slider
          aria-label="slider-ex-4"
          value={val}
          onChange={(newVal) => {
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
            boxSize={8}
            backgroundImage={sliderImage}
            backgroundSize="50px"
            backgroundRepeat="no-repeat"
            backgroundPosition="center center"
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
  dimension,
  slider,
  options,
}) => {
  const valueFromContext = useContext(StateContext);
  let val = parseInt(slider.default);
  if (valueFromContext !== null) {
    // eslint-disable-next-line radix
    val =
      parseInt(
        valueFromContext.answers[valueFromContext.section][
          valueFromContext.counter
        ]
      ) || parseInt(slider.default);
  }
  return (
    <Box marginTop="200px" marginBottom="30px">
      <Flex
        position="relative"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Image
          bottom="10px"
          right="30%"
          position="absolute"
          src={graphic1}
          opacity={(100 - val) / 100}
          height={dimension[1]}
          width={dimension[0]}
        />
        <Image
          bottom="10px"
          right="30%"
          position="absolute"
          opacity={val / 100}
          src={graphic2}
          height={dimension[1]}
          width={dimension[0]}
        />
      </Flex>

      <Flex width="600px" alignItems="flex-end">
        <Slider
          aria-label="slider-ex-4"
          value={val}
          onChange={(newVal) => {
            if (valueFromContext !== null) {
              const tempAnswers = valueFromContext.answers;
              tempAnswers[valueFromContext.section][valueFromContext.counter] =
                newVal.toString();
              valueFromContext.setAnswers([...tempAnswers]);
            }
          }}
        >
          <Image
            top="3px"
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
            boxSize={8}
            backgroundImage={sliderImage}
            backgroundSize="50px"
            backgroundRepeat="no-repeat"
            backgroundPosition="center center"
          >
            <Box color="tomato" />
          </SliderThumb>
        </Slider>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between">
        <Text className="NotationText">{options[0]}</Text>
        <Text className="NotationText">{options[1]}</Text>
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
  let val = 0;
  if (valueFromContext !== null) {
    // eslint-disable-next-line radix
    val =
      parseInt(
        valueFromContext.answers[valueFromContext.section][
          valueFromContext.counter
        ]
      ) || 0;
  }
  return (
    <Box marginTop="10px" marginBottom="30px">
      <Flex
        position="relative"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Image
          margin="0 auto 27px auto"
          src={graphic}
          height={dimension[1]}
          width={dimension[0]}
        />
      </Flex>

      <Flex width="600px" alignItems="flex-end">
        <Slider
          aria-label="slider-ex-4"
          step={parseInt(slider.step) * 10}
          min={0}
          max={parseInt(slider.max) * 10}
          value={val}
          onChange={(newVal) => {
            if (valueFromContext !== null) {
              const tempAnswers = valueFromContext.answers;
              tempAnswers[valueFromContext.section][valueFromContext.counter] =
                newVal.toString();
              valueFromContext.setAnswers([...tempAnswers]);
            }
          }}
        >
          <Image
            top="3px"
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
            boxSize={8}
            backgroundImage={sliderImage}
            backgroundSize="50px"
            backgroundRepeat="no-repeat"
            backgroundPosition="center center"
          >
            <Box color="tomato" />
          </SliderThumb>
        </Slider>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between">
        <Text className="NotationText">{options[0]}</Text>
        <Text className="NotationText">{options[1]}</Text>
      </Flex>
    </Box>
  );
};
