/* eslint-disable node/no-extraneous-import */
/* eslint-disable no-use-before-define */

import {Image} from '@chakra-ui/image';
import {Box, Flex} from '@chakra-ui/layout';
import {useContext, FC} from 'react';
import './styles/styles.css';
import {StateContext} from '../../Context';
import {useMediaQuery} from 'react-responsive';
type Props = {
  options: string[][];
  graphic: string;
  dimension: string[];
  handleNext: () => void;
};

type TwoOptionsProps = {
  options: string[];
  graphic: string;
  dimension: string[];
  handleNext: () => void;
};

const FIRST_INDEX = 0;
const SECOND_INDEX = 1;
const IMAGE_SCALING_SMALL = 0.75;
const IMAGE_SCALING_LARGE = 1;

const RadioButton: FC<Props> = ({options, graphic, dimension, handleNext}) => {
  /**
   *React functional component which renders the option select question
   * @param options - The options for the question
   * @param graphic- The image associated with the question
   * @param dimension- The dimensions of the image
   * @param handleNext- Function to be triggered when an option is selected
   *
   * @returns Returns a react functional component which renders the option select question
   *
   */
  const valueFromContext = useContext(StateContext);
  return (
    <Box>
      <Flex
        position="relative"
        alignItems="center"
        direction="column"
        justifyContent="space-between"
      >
        <Image
          userSelect="none"
          src={graphic}
          height={[
            `calc(${dimension[SECOND_INDEX]} * ${IMAGE_SCALING_SMALL})`,
            `calc(${dimension[SECOND_INDEX]} * ${IMAGE_SCALING_LARGE})`,
          ]}
          width={[
            `calc(${dimension[FIRST_INDEX]} * ${IMAGE_SCALING_SMALL})`,
            `calc(${dimension[FIRST_INDEX]} * ${IMAGE_SCALING_LARGE})`,
          ]}
        />
        <Flex className="RadioButtonsContainer">
          {options.map((option: string[], index: number) => {
            return (
              <Flex
                key={index}
                className={
                  valueFromContext?.answers[valueFromContext.section][
                    valueFromContext.counter
                  ] === option[FIRST_INDEX]
                    ? 'RadioButtonSelected'
                    : 'RadioButton'
                }
                onClick={(): void => {
                  if (valueFromContext !== null) {
                    const tempAnswers = valueFromContext.answers;
                    tempAnswers[valueFromContext.section][
                      valueFromContext.counter
                    ] = option[FIRST_INDEX];
                    valueFromContext.setAnswers([...tempAnswers]);
                  }
                  handleNext();
                }}
              >
                {option[FIRST_INDEX]}
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
};

export const RadioButtonWithTwoOptions: FC<TwoOptionsProps> = ({
  options,
  graphic,
  handleNext,
  dimension,
}) => {
  /**
   *React functional component which renders the option select question
   * @param options - The options for the question
   * @param graphic- The image associated with the question
   * @param dimension- The dimensions of the image
   * @param handleNext- Function to be triggered when an option is selected
   *
   * @returns Returns a react functional component which renders the option select question
   *
   */
  const isMobile = useMediaQuery({query: '(max-width: 800px)'});
  const valueFromContext = useContext(StateContext);
  return (
    <Box marginTop="190px" marginBottom="6px">
      <Flex
        position="relative"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Image
          position="absolute"
          left="50%"
          bottom={isMobile ? '200px' : '100px'}
          transform="translate(-50%, 0)"
          margin="auto"
          userSelect="none"
          src={graphic}
          height={[
            `calc(${dimension[SECOND_INDEX]} * ${IMAGE_SCALING_SMALL})`,
            `calc(${dimension[SECOND_INDEX]} * ${IMAGE_SCALING_LARGE})`,
          ]}
          width={[
            `calc(${dimension[FIRST_INDEX]} * ${IMAGE_SCALING_SMALL})`,
            `calc(${dimension[FIRST_INDEX]} * ${IMAGE_SCALING_LARGE})`,
          ]}
        />
        <Flex className="RadioButtonsContainer">
          {options.map((option: string, index: number) => {
            return (
              <Flex
                key={index}
                className={
                  valueFromContext?.answers[valueFromContext.section][
                    valueFromContext.counter
                  ] === option
                    ? 'RadioButtonSelected'
                    : 'RadioButton'
                }
                onClick={(): void => {
                  if (valueFromContext !== null) {
                    const tempAnswers = valueFromContext.answers;
                    tempAnswers[valueFromContext.section][
                      valueFromContext.counter
                    ] = option;
                    valueFromContext.setAnswers([...tempAnswers]);
                  }
                  handleNext();
                }}
              >
                {option}
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
};

export default RadioButton;
