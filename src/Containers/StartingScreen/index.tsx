/* eslint-disable node/no-extraneous-import */
/* eslint-disable no-use-before-define */
import {Image} from '@chakra-ui/image';
import {Flex, Text} from '@chakra-ui/layout';
import React from 'react';
import './styles/styles.css';
import logoImage from '../../assets/Logo.svg';
import graphic1 from '../../assets/self-awareness 1.png';
import graphic2 from '../../assets/starting-graphic-4.png';
type Props = {
  start: {
    part1: boolean;
    part2: boolean;
  };
  name: string;
  startSetter: React.Dispatch<
    React.SetStateAction<{
      part1: boolean;
      part2: boolean;
    }>
  >;
  nameSetter: React.Dispatch<React.SetStateAction<string>>;
};

const StartingScreen: React.FC<Props> = ({
  start,
  name,
  nameSetter,
  startSetter,
}) => {
  if (!start.part1) {
    return (
      <Flex className="StartContainer">
        <Image
          userSelect="none"
          src={logoImage}
          width="164px"
          height="20px"
          alt="Syntoniq"
        />
        <Flex className="Starting-CenterContainer">
          <Flex direction="column">
            <Text className="Starting-HeadingText">
              What factors guide your
              <br /> financial behavior ?
            </Text>
            <Text className="Starting-SubText">
              Examine the unconscious factors that influence your money
              decisions and how you can get better at making them.
            </Text>
            <button
              className="Starting-Button"
              onClick={(): void => {
                startSetter({
                  part1: true,
                  part2: false,
                });
              }}
            >
              Yes, I like to learn more!
            </button>
            <Text className="Starting-MiniText">
              We bet you can learn something new about yourself in less than 5
              minutes!
            </Text>
          </Flex>
          <Flex width="100%">
            <Image
              className="Starting-GraphicImage1"
              src={graphic1}
              alt="Financial Happiness"
            />
          </Flex>
        </Flex>
      </Flex>
    );
  }
  return (
    <Flex className="StartContainer">
      <Image src={logoImage} width="164px" height="20px" alt="Syntoniq" />
      <Flex className="Starting-CenterContainer" justifyContent="space-between">
        <Flex direction="column">
          <Text className="Starting-HeadingText">
            That’s great! Let’s go...now
            <br /> how do we call you?
          </Text>
          <input
            className="Starting-InputBox"
            value={name}
            onChange={(event): void => {
              nameSetter(event.target.value);
            }}
            placeholder="Enter your first name"
          />
          <button
            disabled={name === ''}
            className={
              name === '' ? 'Starting-ButtonDisabled' : 'Starting-Button'
            }
            onClick={(): void => {
              if (name !== '') {
                startSetter({
                  part1: true,
                  part2: true,
                });
              }
            }}
          >
            Start The Assessment
          </button>
        </Flex>
        <Flex>
          <Image
            className="Starting-GraphicImage2"
            src={graphic2}
            alt="Financial Questions"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StartingScreen;
