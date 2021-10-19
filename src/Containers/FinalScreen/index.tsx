/* eslint-disable complexity */
/* eslint-disable no-use-before-define */
/* eslint-disable node/no-extraneous-import */
import {Image} from '@chakra-ui/image';
import {Flex, Link, Text} from '@chakra-ui/layout';
import React, {useState} from 'react';
import './styles/styles.css';
export const Increment_Decrement = 1;
const PieChartLarge = 316;
const PieChartMobile = 200;

type Props = {
  name: string;
  email: string;
  SectionScores: number[][];
  DndAnswers: string | string[];
};

import PieChart, {
  Legend,
  Export,
  Series,
  Label,
  Font,
  AdaptiveLayout,
} from 'devextreme-react/pie-chart';

import LogoImage from '../../assets/Logo.svg';
import Section1Image from '../../assets/finalScreenSection1.png';
import scrollIcon from '../../assets/scroll.svg';
import rightArrowLight from './rightChevronLight.svg';
import stars from '../../assets/finalScreenStars.png';

import {Door, LightBulb, LookingGlass} from './donutCenters';
import {
  DecisionStyleTextCalc1,
  DecisionStyleTextCalc2,
  DecisionStyleTextCalc3,
  FocusTextCalc1,
  FocusTextCalc2,
  FocusTextCalc3,
  FooterTextCalc,
  ThinkingStyleTextCalc1,
  ThinkingStyleTextCalc2,
  ThinkingStyleTextCalc3,
} from './textLogic';
import {useMediaQuery} from 'react-responsive';

export const FIRST_INDEX = 0;
export const SECOND_INDEX = 1;
export const THIRD_INDEX = 2;
export const FOURTH_INDEX = 3;

const customizeText: (arg: {valueText: number}) => string = (arg: {
  valueText: number;
}) => {
  return `${arg.valueText}`;
};
const FinalScreen: React.FC<Props> = ({
  DndAnswers,
  SectionScores,
  name,
  email,
}) => {
  const isMobile = useMediaQuery({query: '(max-width: 800px)'});
  const [footerOption, setFooterOption] = useState(DndAnswers[FIRST_INDEX]);
  return (
    <Flex className="FinalMainScreen">
      <Flex id="Section-1">
        <Flex className="Final-TopHeadingSection">
          <Image userSelect="none" src={LogoImage} marginBottom="30px" />
          <Flex direction="column">
            <Text className="Final-TopHeadingText-bold">
              This report is generated for{' '}
              <b style={{color: '#5D23E9'}}>{name}</b>
            </Text>
            <Text className="Final-TopHeadingText">{email}</Text>
          </Flex>
        </Flex>
        <Flex direction="column" marginBottom="40px">
          <Text className="Final-SectionHeading">
            Going beyond greed and fear
          </Text>
          <Text className="Final-SectionSubheading">
            Understanding the psychological factors that influence our financial
            decision-making process
            <br /> is key to making the right decisions to securing our
            financial future.
          </Text>
        </Flex>
        <Flex className="Final-Section1MiddleContainer">
          <Flex direction="column" className="Final-Section1ImageContainer">
            <Image
              src={Section1Image}
              height={['262.5px', '356px']}
              width={['352.5px', '470px']}
              userSelect="none"
              className=""
            />
            <Flex
              alignItems="center"
              justifyContent="space-between"
              width={['320.5px', '430px']}
              userSelect="none"
            >
              <Flex
                className="Final-CrownIcons"
                bg="linear-gradient(97.18deg, #B294FC -40.71%, #86BDFE 134.95%)"
              >
                <Flex className="Final-CrownIconsNumber">1</Flex>
                <Flex className="Final-CrownIconsText">
                  {DndAnswers[FIRST_INDEX]}
                </Flex>
                <Image src={stars} alt="stars" />
              </Flex>
              <Flex
                className="Final-CrownIcons"
                bg="linear-gradient(204.5deg, #BE6CFD 15.65%, #7367FF 129.17%)"
              >
                <Flex className="Final-CrownIconsNumber">2</Flex>
                <Flex className="Final-CrownIconsText">
                  {DndAnswers[SECOND_INDEX]}
                </Flex>
                <Image src={stars} alt="stars" />
              </Flex>
              <Flex
                className="Final-CrownIcons"
                bg="linear-gradient(97.18deg, #FA94FC -40.71%, #8692FE 82.8%)"
              >
                <Flex className="Final-CrownIconsNumber">3</Flex>
                <Flex className="Final-CrownIconsText">
                  {DndAnswers[THIRD_INDEX]}
                </Flex>
                <Image src={stars} alt="stars" />
              </Flex>
            </Flex>
          </Flex>

          <Flex direction="column" flex="1" marginTop="24px">
            <Flex direction="column">
              <Text className="Final-SectionSideMainHeading">
                What will you learn from this report
              </Text>
              <Text className="Final-SectionSideMainText">
                This report is divided into three key sections: your{' '}
                <b>Thinking Style</b>, your <b>Decision Style</b>, and your{' '}
                <b>Focus</b>; and how they impact your money decisions and
                values.
              </Text>
            </Flex>
            <Flex direction="column" marginTop="12px">
              <Text className="Final-SectionSideSubHeading">
                From unconscious to conscious
              </Text>
              <Text className="Final-SectionSideSubText">
                By bringing these factors from the unconscious to the conscious,
                you are now in a better place to take greater control over your
                financial future.
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <Image
            position="relative"
            bottom="50px"
            userSelect="none"
            src={scrollIcon}
          />
        </Flex>
      </Flex>
      <Flex id="Section-2">
        <Flex alignItems="center" className="Final-Section1MiddleContainer">
          <Flex className="Final-DonutChart" direction="column">
            <PieChart
              id="pie"
              type="doughnut"
              palette={['#fff', '#6353EC']}
              dataSource={[
                {
                  name: 'Regret Aversion',
                  value: SectionScores[SECOND_INDEX][FIRST_INDEX],
                },
                {
                  name: 'Optimism',
                  value: SectionScores[FIRST_INDEX][FIRST_INDEX],
                },
              ]}
              centerRender={LightBulb}
              startAngle={90}
              segmentsDirection="clockwise"
            >
              <AdaptiveLayout
                height={isMobile ? PieChartMobile : PieChartLarge}
                width={isMobile ? PieChartMobile : PieChartLarge}
              />
              <Legend
                visible={false}
                orientation="vertical"
                itemTextPosition="right"
                horizontalAlignment="center"
                verticalAlignment="bottom"
              />
              <Export enabled={false} />
              <Series argumentField="name" valueField="value" hoverMode="none">
                <Label
                  visible={true}
                  position="inside"
                  customizeText={customizeText}
                  backgroundColor="none"
                >
                  <Font color="#000" weight="600" size={28} family="Inter" />
                </Label>
              </Series>
            </PieChart>

            <Flex direction="column" marginTop="40px">
              <Flex marginBottom="18px">
                <Flex className="Final-ChartLegend1"></Flex>
                <Text className="Final-LegendText">Over - Optimism</Text>
              </Flex>
              <Flex>
                <Flex className="Final-ChartLegend2"></Flex>
                <Text className="Final-LegendText">Regret Aversion </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex flex="2" direction="column">
            <Flex className="Final-SectionMiddleTextBoxContainer">
              <Text className="Final-SectionHeading" marginBottom="30px">
                Thinking Style
              </Text>
            </Flex>
            <Flex
              marginBottom="60px"
              className="Final-SectionMiddleTextBoxContainer"
            >
              <Flex direction="column" className="Final-MiddleTextContainer">
                <Text className="Final-Section2MainHeading">Awareness</Text>
                <Text
                  className="Final-Section2SubText"
                  marginTop="20px"
                  maxWidth="360px"
                >
                  Thinking Style refers to how our decisions get influenced by
                  thinking about outcomes instead of thinking about the process.
                  Research has shown that optimism and regret aversion are key
                  traits that influence our thinking.
                </Text>
                <Text
                  className="Final-Section2SubText"
                  marginTop="20px"
                  maxWidth="360px"
                >
                  Optimism is when we expect to experience good outcomes
                  compared to bad ones.
                  <br />
                  <br />
                  Regret Aversion refers to the tendency to postpone action for
                  fear of regretting the outcome.
                </Text>
              </Flex>
              <Flex direction="column" className="Final-SectionRight">
                <Text className="Final-Section2MainHeading">Analysis</Text>

                <Text
                  className="Final-Section2SubHeading"
                  margin="18px 0 12px 0"
                >
                  What's awesome about it
                </Text>
                <Text className="Final-Section2SubText" maxWidth="360px">
                  {ThinkingStyleTextCalc1(
                    SectionScores[FIRST_INDEX][FIRST_INDEX],
                    SectionScores[SECOND_INDEX][FIRST_INDEX]
                  )}
                </Text>

                <Text
                  className="Final-Section2SubHeading"
                  margin="24px 0 12px 0"
                >
                  What to watch out for
                </Text>
                <Text className="Final-Section2SubText" maxWidth="360px">
                  {ThinkingStyleTextCalc2(
                    SectionScores[FIRST_INDEX][FIRST_INDEX],
                    SectionScores[SECOND_INDEX][FIRST_INDEX]
                  )}
                </Text>
              </Flex>
            </Flex>

            <Flex direction="column" marginBottom="50px">
              <Flex alignItems="center" marginBottom="10px">
                <Text className="Final-Section2MainHeading">Action</Text>
                <div className="Final-ScreenDivider"></div>
              </Flex>
              <Text className="Final-Section2BottomText" maxWidth="748px">
                {ThinkingStyleTextCalc3(
                  SectionScores[FIRST_INDEX][FIRST_INDEX],
                  SectionScores[SECOND_INDEX][FIRST_INDEX]
                )}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex id="Section-3">
        <Flex alignItems="center" className="Final-Section1MiddleContainer">
          <Flex className="Final-DonutChart" direction="column">
            <PieChart
              id="pie"
              type="doughnut"
              palette={['#fff', '#AD6BFD']}
              dataSource={[
                {
                  name: 'Satisfice',
                  value: SectionScores[FOURTH_INDEX][FIRST_INDEX],
                },

                {
                  name: 'Maximize',
                  value: SectionScores[FOURTH_INDEX][SECOND_INDEX],
                },
              ]}
              centerRender={Door}
              startAngle={90}
              segmentsDirection="clockwise"
            >
              <AdaptiveLayout
                height={isMobile ? PieChartMobile : PieChartLarge}
                width={isMobile ? PieChartMobile : PieChartLarge}
              />
              <Legend
                visible={false}
                orientation="vertical"
                itemTextPosition="right"
                horizontalAlignment="center"
                verticalAlignment="bottom"
              />
              <Export enabled={false} />
              <Series argumentField="name" valueField="value" hoverMode="none">
                <Label
                  visible={true}
                  position="inside"
                  customizeText={customizeText}
                  backgroundColor="none"
                >
                  <Font color="#000" weight="600" size={28} family="Inter" />
                </Label>
              </Series>
            </PieChart>
            <Flex direction="column" marginTop="40px">
              <Flex marginBottom="18px">
                <Flex className="Final-ChartLegend1"></Flex>
                <Text className="Final-LegendText">Maximizing</Text>
              </Flex>
              <Flex>
                <Flex className="Final-ChartLegend2"></Flex>
                <Text className="Final-LegendText">Satisficing</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex flex="2" direction="column">
            <Flex className="Final-SectionMiddleTextBoxContainer">
              <Text className="Final-SectionHeading" marginBottom="30px">
                Decision Style
              </Text>
            </Flex>
            <Flex
              marginBottom="60px"
              className="Final-SectionMiddleTextBoxContainer"
            >
              <Flex direction="column" className="Final-MiddleTextContainer">
                <Text className="Final-Section2MainHeading">Awareness</Text>
                <Text
                  className="Final-Section2SubText"
                  marginTop="20px"
                  maxWidth="360px"
                >
                  Decision Style shows how we balance over-processing and
                  under-processing when making decisions. By understanding how
                  we evaluate different options, we can get better at making the
                  right choices.
                </Text>
                <Text
                  className="Final-Section2SubText"
                  marginTop="20px"
                  maxWidth="360px"
                >
                  Maximizing refers to our tendency to try and find the most
                  optimal solution possible.
                  <br />
                  <br />
                  Satisficing refers to the tendency to arrive at decisions that
                  provide a satisfactory solution
                </Text>
              </Flex>
              <Flex direction="column" className="Final-MiddleTextContainer">
                <Text className="Final-Section2MainHeading">Analysis</Text>
                <Text
                  className="Final-Section2SubHeading"
                  margin="18px 0 12px 0"
                >
                  What's awesome about it
                </Text>
                <Text className="Final-Section2SubText" maxWidth="360px">
                  {DecisionStyleTextCalc1(
                    SectionScores[FOURTH_INDEX][FIRST_INDEX],
                    SectionScores[FOURTH_INDEX][SECOND_INDEX]
                  )}
                </Text>
                <Text
                  className="Final-Section2SubHeading"
                  margin="24px 0 12px 0"
                >
                  What to watch out for
                </Text>
                <Text className="Final-Section2SubText" maxWidth="360px">
                  {DecisionStyleTextCalc2(
                    SectionScores[FOURTH_INDEX][FIRST_INDEX],
                    SectionScores[FOURTH_INDEX][SECOND_INDEX]
                  )}
                </Text>
              </Flex>
            </Flex>

            <Flex direction="column" marginBottom="50px">
              <Flex alignItems="center" marginBottom="10px">
                <Text className="Final-Section2MainHeading">Action</Text>
                <div className="Final-ScreenDivider"></div>
              </Flex>
              <Text className="Final-Section2BottomText" maxWidth="748px">
                {DecisionStyleTextCalc3(
                  SectionScores[FOURTH_INDEX][FIRST_INDEX],
                  SectionScores[FOURTH_INDEX][SECOND_INDEX]
                )}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex id="Section-4">
        <Flex className="Final-Section1MiddleContainer">
          <Flex className="Final-DonutChart" direction="column">
            <PieChart
              id="pie"
              type="doughnut"
              palette={['#fff', '#6353EC']}
              dataSource={[
                {
                  name: 'Promotion',
                  value: SectionScores[THIRD_INDEX][FIRST_INDEX],
                },
                {
                  name: 'Prevention',
                  value: SectionScores[THIRD_INDEX][SECOND_INDEX],
                },
              ]}
              centerRender={LookingGlass}
              startAngle={90}
              segmentsDirection="clockwise"
            >
              <AdaptiveLayout
                height={isMobile ? PieChartMobile : PieChartLarge}
                width={isMobile ? PieChartMobile : PieChartLarge}
              />
              <Legend
                visible={false}
                orientation="vertical"
                itemTextPosition="right"
                horizontalAlignment="center"
                verticalAlignment="bottom"
              />
              <Export enabled={false} />
              <Series argumentField="name" valueField="value" hoverMode="none">
                <Label
                  visible={true}
                  position="inside"
                  customizeText={customizeText}
                  backgroundColor="none"
                >
                  <Font color="#000" weight="600" size={28} family="Inter" />
                </Label>
              </Series>
            </PieChart>
            <Flex direction="column" marginTop="40px">
              <Flex marginBottom="18px">
                <Flex className="Final-ChartLegend1"></Flex>
                <Text className="Final-LegendText">Prevention</Text>
              </Flex>
              <Flex>
                <Flex className="Final-ChartLegend2"></Flex>
                <Text className="Final-LegendText">Promotion</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex flex="2" direction="column">
            <Flex className="Final-SectionMiddleTextBoxContainer">
              <Text className="Final-SectionHeading" marginBottom="30px">
                Focus
              </Text>
            </Flex>
            <Flex
              marginBottom="60px"
              className="Final-SectionMiddleTextBoxContainer"
            >
              <Flex direction="column" className="Final-MiddleTextContainer">
                <Text className="Final-Section2MainHeading">Awareness</Text>
                <Text
                  className="Final-Section2SubText"
                  marginTop="20px"
                  maxWidth="360px"
                >
                  Focus shows how you pursue goals that matter to you. Becoming
                  aware of your style of focus empowers you to understand why
                  and how you arrive at the decisions that you make.
                </Text>
                <Text
                  className="Final-Section2SubText"
                  marginTop="20px"
                  maxWidth="360px"
                >
                  Promotion focus refers to our tendency to take active behavior
                  to pursue our goals.
                  <br />
                  <br /> Prevention on the other hand means that we tend to be
                  more cautious and pay more attention to the downside than the
                  upside
                </Text>
              </Flex>
              <Flex direction="column" className="Final-MiddleTextContainer">
                <Text className="Final-Section2MainHeading">Analysis</Text>

                <Text
                  className="Final-Section2SubHeading"
                  margin="18px 0 12px 0"
                >
                  What's awesome about it
                </Text>
                <Text className="Final-Section2SubText" maxWidth="360px">
                  {FocusTextCalc1(
                    SectionScores[THIRD_INDEX][FIRST_INDEX],
                    SectionScores[THIRD_INDEX][SECOND_INDEX]
                  )}
                </Text>

                <Text
                  className="Final-Section2SubHeading"
                  margin="24px 0 12px 0"
                >
                  What to watch out for
                </Text>
                <Text className="Final-Section2SubText" maxWidth="360px">
                  {FocusTextCalc2(
                    SectionScores[THIRD_INDEX][FIRST_INDEX],
                    SectionScores[THIRD_INDEX][SECOND_INDEX]
                  )}
                </Text>
              </Flex>
            </Flex>

            <Flex direction="column" marginBottom="50px">
              <Flex alignItems="center" marginBottom="10px">
                <Text className="Final-Section2MainHeading">Action</Text>
                <div className="Final-ScreenDivider"></div>
              </Flex>
              <Text className="Final-Section2BottomText" maxWidth="748px">
                {FocusTextCalc3(
                  SectionScores[THIRD_INDEX][FIRST_INDEX],
                  SectionScores[THIRD_INDEX][SECOND_INDEX]
                )}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex className="Final-ScreenFooter">
        <Flex direction="column" flex="1" className="Final-FooterLeftContainer">
          <Text className="Final-FooterHeading">Value Behavior Alignment</Text>
          <Text className="Final-FooterSubHeading">
            Setting the stage for a deeper understanding of how our behaviors
            interact with our values to influence money decisions.
          </Text>
          <div className="Final-FooterDivider"></div>
          <Flex
            className={
              footerOption === DndAnswers[FIRST_INDEX]
                ? 'Final-OptionContainer-Selected'
                : 'Final-OptionContainer'
            }
            onClick={(): void => {
              setFooterOption(DndAnswers[FIRST_INDEX]);
            }}
          >
            <Flex alignItems="center" justifyContent="center">
              <Flex
                className={
                  footerOption === DndAnswers[FIRST_INDEX]
                    ? 'Final-FooterNumberCircle-Selected'
                    : 'Final-FooterNumberCircle'
                }
              >
                1
              </Flex>
              <Text
                className={
                  footerOption === DndAnswers[FIRST_INDEX]
                    ? 'Final-OptionText-Selected'
                    : 'Final-OptionText'
                }
              >
                {DndAnswers[FIRST_INDEX]}
              </Text>
            </Flex>
            <Image userSelect="none" src={rightArrowLight} />
          </Flex>

          <div className="Final-OptionDivider"></div>
          <Flex
            className={
              footerOption === DndAnswers[SECOND_INDEX]
                ? 'Final-OptionContainer-Selected'
                : 'Final-OptionContainer'
            }
            onClick={(): void => {
              setFooterOption(DndAnswers[SECOND_INDEX]);
            }}
          >
            <Flex alignItems="center" justifyContent="center">
              <Flex
                className={
                  footerOption === DndAnswers[SECOND_INDEX]
                    ? 'Final-FooterNumberCircle-Selected'
                    : 'Final-FooterNumberCircle'
                }
              >
                2
              </Flex>
              <Text
                className={
                  footerOption === DndAnswers[SECOND_INDEX]
                    ? 'Final-OptionText-Selected'
                    : 'Final-OptionText'
                }
              >
                {DndAnswers[SECOND_INDEX]}
              </Text>
            </Flex>
            <Image userSelect="none" src={rightArrowLight} />
          </Flex>

          <div className="Final-OptionDivider"></div>
          <Flex
            className={
              footerOption === DndAnswers[THIRD_INDEX]
                ? 'Final-OptionContainer-Selected'
                : 'Final-OptionContainer'
            }
            onClick={(): void => {
              setFooterOption(DndAnswers[THIRD_INDEX]);
            }}
          >
            <Flex alignItems="center" justifyContent="center">
              <Flex
                className={
                  footerOption === DndAnswers[THIRD_INDEX]
                    ? 'Final-FooterNumberCircle-Selected'
                    : 'Final-FooterNumberCircle'
                }
              >
                3
              </Flex>
              <Text
                className={
                  footerOption === DndAnswers[THIRD_INDEX]
                    ? 'Final-OptionText-Selected'
                    : 'Final-OptionText'
                }
              >
                {DndAnswers[THIRD_INDEX]}
              </Text>
            </Flex>
            <Image userSelect="none" src={rightArrowLight} />
          </Flex>

          <div className="Final-OptionDivider"></div>
        </Flex>
        <Flex className="Final-FooterRightContainer">
          <Text className="Final-ActionSteps">Action Steps</Text>
          <Text className="Final-FooterSelectedHeading">{footerOption}</Text>
          <Flex direction="column" marginTop="19px">
            {FooterTextCalc(
              SectionScores[THIRD_INDEX][FIRST_INDEX],
              SectionScores[THIRD_INDEX][SECOND_INDEX],
              SectionScores[FIRST_INDEX][FIRST_INDEX],
              SectionScores[SECOND_INDEX][FIRST_INDEX],
              SectionScores[FOURTH_INDEX][FIRST_INDEX],
              SectionScores[FOURTH_INDEX][SECOND_INDEX],
              footerOption
            ).map((footerText, index) => {
              return (
                <Flex className="Final-FooterTextContainer" key={index}>
                  <Flex className="Final-SmallDot"></Flex>
                  <Flex className="Final-FooterText">{footerText}</Flex>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
      <Flex className="Final-LinksFooter">
        <Link color="white" className="Final-Link" href="#">
          About this report
        </Link>
        <Link color="white" className="Final-Link" href="#">
          Disclaimer
        </Link>
        <Link color="white" className="Final-Link" href="#">
          Contacts
        </Link>
      </Flex>
    </Flex>
  );
};

export default FinalScreen;
