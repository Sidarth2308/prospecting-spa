/* eslint-disable node/no-extraneous-import */
/* eslint-disable no-use-before-define */
import {Image} from '@chakra-ui/image';
import {Flex, Text} from '@chakra-ui/layout';
import {CircularProgress, CircularProgressLabel} from '@chakra-ui/progress';
import reportMockup from '../../assets/report-preview.svg';
import React from 'react';
import './styles/styles.css';
import ReactPlayer from 'react-player';

type Props = {
  progressData: {
    counter: number;
    total: number;
    heading: string;
  };
  email: {
    email: string;
    selected: boolean;
  };
  emailSetter: React.Dispatch<
    React.SetStateAction<{
      selected: boolean;
      email: string;
    }>
  >;
  data: {
    preface: string;
    body: string;
  };
  end: boolean;
  endSetter: React.Dispatch<React.SetStateAction<boolean>>;
  showFloat: boolean;
};
const percentageConstant = 100;

import topCircle from '../../assets/top-semicircle.svg';
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PenultimateScreen: React.FC<Props> = ({
  progressData,
  data,
  endSetter,
  email,
  emailSetter,
  showFloat,
}) => {
  const notDisabled = email.selected && !regexEmail.test(email.email);
  if (showFloat) {
    return (
      <Flex className="Loading-Container">
        <Text className="Loading-Text">
          Our behavioral engines are now running, your report should be ready in
          a moment...
        </Text>
        <Flex>
          <ReactPlayer
            width="360px"
            height="360px"
            url={
              'https://res.cloudinary.com/dmrpikki0/video/upload/v1634299125/Solera-Assessment/animation_rdjxaz.mp4'
            }
            playing={true}
            muted={true}
            loop={true}
          />
        </Flex>
      </Flex>
    );
  }
  return (
    <Flex className="Penultimate-Container">
      <Flex className="Penultimate-Container-Secondary">
        <Flex
          alignItems="center"
          justifyContent="center"
          marginTop="20px"
          marginBottom="32px"
        >
          <Image src={topCircle} zIndex="-1" position="absolute" top="0px" />
          <Flex position="absolute" top="30px" alignItems="center">
            <Flex
              alignItems="center"
              justifyContent="center"
              marginRight="10px"
            >
              <CircularProgress
                value={Math.round(
                  (progressData.counter / progressData.total) *
                    percentageConstant
                )}
                color="#775ef0"
              >
                <CircularProgressLabel color="#fff">
                  <b style={{color: '#fff'}}>
                    {Math.round(
                      (progressData.counter / progressData.total) *
                        percentageConstant
                    )}
                    %
                  </b>
                </CircularProgressLabel>
              </CircularProgress>
            </Flex>
            <Flex direction="column">
              <Text className="PercentageHeading" color="#fff">
                {progressData.heading}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex className="HeadingContainer">
          {data.preface !== '' && (
            <Text
              fontSize={['14px', '14px', '19px']}
              lineHeight={['20px', '24px', '32px']}
              className="HeadingQuestionDescription"
            >
              {data.preface}
            </Text>
          )}

          <div
            style={{
              width: '100%',
              maxWidth: '1000px',
              borderBottom: '2px solid rgba(202, 201, 209, 0.44)',
            }}
          ></div>
          <Text
            fontSize={['22px', '28px', '34px']}
            lineHeight={['30px', '32px', '48px']}
            className="HeadingQuestion"
          >
            {data.body}
          </Text>
        </Flex>

        <input
          className="Ending-InputBox"
          value={email.email}
          onChange={(event): void => {
            if (event.target.value === '') {
              emailSetter({
                selected: false,
                email: '',
              });
            } else {
              emailSetter({
                selected: true,
                email: event.target.value,
              });
            }
          }}
          placeholder="Enter your email"
        />
        <button
          className={
            notDisabled ? 'Starting-ButtonDisabled' : 'Starting-Button'
          }
          onClick={(): void => {
            if (!notDisabled) {
              endSetter(true);
            }
          }}
        >
          Get My Report
        </button>
      </Flex>
      <Image
        opacity="0.8"
        position="absolute"
        bottom="0px"
        width="400"
        height="300"
        alt="Report mockup"
        src={reportMockup}
      />
    </Flex>
  );
};

export default PenultimateScreen;
