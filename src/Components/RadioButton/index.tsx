/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable node/no-extraneous-import */
import {Image} from '@chakra-ui/image';
import {Box, Flex} from '@chakra-ui/layout';
import {useContext, FC} from 'react';
import './styles/styles.css';
import {StateContext} from '../../Context';
type Props = {
  options?: string[];
  graphic?: string;
};

const RadioButton: FC<Props> = ({options, graphic}) => {
  const valueFromContext = useContext(StateContext);
  return (
    <Box marginTop="30px" marginBottom="30px">
      <Flex
        position="relative"
        alignItems="center"
        direction="column"
        justifyContent="space-between"
      >
        <Image src={graphic} />
        <Flex className="RadioButtonsContainer">
          {options?.map((option, index) => {
            return (
              <Flex
                key={index}
                className={
                  valueFromContext?.answers[valueFromContext.counter] === option
                    ? 'RadioButtonSelected'
                    : 'RadioButton'
                }
                onClick={() => {
                  if (valueFromContext !== null) {
                    const tempAnswers = valueFromContext.answers;
                    tempAnswers[valueFromContext.counter] = option;
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
