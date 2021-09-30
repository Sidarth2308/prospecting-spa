/* eslint-disable @typescript-eslint/no-explicit-any */
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

import {Image} from '@chakra-ui/image';
import {Box, Flex} from '@chakra-ui/layout';
import {useContext, FC} from 'react';
import './styles/styles.css';
import {StateContext} from '../../Context';
type Props = {
  options: any;
  graphic: string;
  dimension: string[];
};

const RadioButton: FC<Props> = ({options, graphic, dimension}) => {
  const valueFromContext = useContext(StateContext);
  return (
    <Box marginTop="32px">
      <Flex
        position="relative"
        alignItems="center"
        direction="column"
        justifyContent="space-between"
      >
        <Image
          src={graphic}
          style={{height: dimension[1], width: dimension[0]}}
        />
        <Flex className="RadioButtonsContainer">
          {options?.map((option: string[], index: number) => {
            return (
              <Flex
                key={index}
                className={
                  valueFromContext?.answers[valueFromContext.section][
                    valueFromContext.counter
                  ] === option[0]
                    ? 'RadioButtonSelected'
                    : 'RadioButton'
                }
                onClick={() => {
                  if (valueFromContext !== null) {
                    const tempAnswers = valueFromContext.answers;
                    tempAnswers[valueFromContext.section][
                      valueFromContext.counter
                    ] = option[0];
                    valueFromContext.setAnswers([...tempAnswers]);
                  }
                }}
              >
                {option[0]}
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
};

export const RadioButtonWithTwoOptions: FC<Props> = ({
  options,
  graphic,
  dimension,
}) => {
  const valueFromContext = useContext(StateContext);
  return (
    <Box marginTop="32px">
      <Flex
        position="relative"
        alignItems="center"
        direction="column"
        justifyContent="space-between"
      >
        <Image
          src={graphic}
          style={{height: dimension[1], width: dimension[0]}}
        />
        <Flex className="RadioButtonsContainer">
          {options?.map((option: string, index: number) => {
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
                onClick={() => {
                  if (valueFromContext !== null) {
                    const tempAnswers = valueFromContext.answers;
                    tempAnswers[valueFromContext.section][
                      valueFromContext.counter
                    ] = option;
                    valueFromContext.setAnswers([...tempAnswers]);
                  }
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
