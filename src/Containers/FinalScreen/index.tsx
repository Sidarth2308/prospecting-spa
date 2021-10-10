/* eslint-disable complexity */
/* eslint-disable no-use-before-define */
/* eslint-disable node/no-extraneous-import */
import {Image} from '@chakra-ui/image';
import {Flex, Text} from '@chakra-ui/layout';
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
import Section1Image from '../../assets/finalScreenSection1.svg';
import scrollIcon from '../../assets/scroll.svg';
import rightArrowLight from './rightChevronLight.svg';

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
          <Image src={LogoImage} userSelect="none" />
          <Flex direction="column">
            <Text className="Final-TopHeadingText-bold">{name}</Text>
            <Text className="Final-TopHeadingText">{email}</Text>
          </Flex>
        </Flex>
        <Flex direction="column" marginBottom="40px">
          <Text className="Final-SectionHeading">How to read this report</Text>
          <Text className="Final-SectionSubheading">
            Protectors display a lower degree of overconfidence and are more
            risk-averse
            <br /> than others, probably because the financial field may not be
            their forte.
          </Text>
        </Flex>
        <Flex className="Final-Section1MiddleContainer">
          <Flex direction="column" className="Final-Section1ImageContainer">
            <Image
              src={Section1Image}
              height={['262.5px', '350px']}
              width={['352.5px', '470px']}
              userSelect="none"
              className=""
            />
            <Flex
              alignItems="center"
              justifyContent="space-between"
              width={['352.5px', '470px']}
              userSelect="none"
            >
              <Flex className="Final-CrownIcons">
                <Flex className="Final-CrownIconsNumber">1</Flex>
                <Flex className="Final-CrownIconsText">
                  {DndAnswers[FIRST_INDEX]}
                </Flex>
              </Flex>
              <Flex className="Final-CrownIcons">
                <Flex className="Final-CrownIconsNumber">2</Flex>
                <Flex className="Final-CrownIconsText">
                  {DndAnswers[SECOND_INDEX]}
                </Flex>
              </Flex>
              <Flex className="Final-CrownIcons">
                <Flex className="Final-CrownIconsNumber">3</Flex>
                <Flex className="Final-CrownIconsText">
                  {DndAnswers[THIRD_INDEX]}
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Flex direction="column" flex="1" marginTop="24px">
            <Flex direction="column">
              <Text className="Final-SectionSideMainHeading">
                Hey Jasmin! This is where...
              </Text>
              <Text className="Final-SectionSideMainText">
                Protectors display a lower degree of overconfidence and are more
                risk-averse than others, probably because the financial field
                may not be their forte. Protectors display a lower degree of
                overconfidence and are more risk-averse
              </Text>
            </Flex>
            <Flex direction="column">
              <Text className="Final-SectionSideSubHeading">
                Hey Jasmin! This is where...
              </Text>
              <Text className="Final-SectionSideSubText">
                Protectors display a lower degree of overconfidence and are more
                risk-averse than others, probably because the financial field
                may not be their forte. Protectors display a lower degree of
                overconfidence and are more risk-averse
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <Image src={scrollIcon} userSelect="none" />
        </Flex>
      </Flex>
      <Flex id="Section-2">
        <Flex alignItems="center" className="Final-Section1MiddleContainer">
          <Flex className="Final-DonutChart" direction="column">
            <PieChart
              id="pie"
              type="doughnut"
              palette={['#fff', '#BE6CFD']}
              dataSource={[
                {
                  name: 'Regret Aversion',
                  value: SectionScores[SECOND_INDEX][FIRST_INDEX],
                },
                {
                  name: 'Over-Optimism',
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
              <Flex direction="column" width={['250px', '426px']}>
                <Text className="Final-Section2MainHeading">Awareness</Text>

                <Text
                  className="Final-Section2SubHeading"
                  margin="18px 0 12px 0"
                >
                  What Thinking Style means
                </Text>
                <Text className="Final-Section2SubText" maxWidth="360px">
                  Thinking Style refers to how you think unconsciously. Until
                  and unless you become aware of the subconscious factors
                  impacting your decision-making, it is impossible to make good
                  decisions.
                </Text>

                <Text
                  className="Final-Section2SubHeading"
                  margin="24px 0 12px 0"
                >
                  Over-Optimism & Regret Aversion
                </Text>
                <Text className="Final-Section2SubText" maxWidth="360px">
                  OO refers to our tendency to be more optimistic than is
                  realistic. Regret Aversion refers to the tendency to not act
                  because of regret.
                </Text>
              </Flex>
              <Flex
                direction="column"
                width={['250px', '426px']}
                className="Final-SectionRight"
              >
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
              palette={['#fff', '#BE6CFD']}
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
              <Flex direction="column" width={['250px', '426px']}>
                <Text className="Final-Section2MainHeading">Awareness</Text>

                <Text
                  className="Final-Section2SubHeading"
                  margin="18px 0 12px 0"
                >
                  What Decision Style means
                </Text>
                <Text className="Final-Section2SubText" maxWidth="360px">
                  Decision Style refers to how you make decisions. By
                  understanding the psychological factors that underlie your
                  decision-making process, you can start making better
                  decisions.
                </Text>

                <Text
                  className="Final-Section2SubHeading"
                  margin="24px 0 12px 0"
                >
                  Maximizing & Satisficing
                </Text>
                <Text className="Final-Section2SubText" maxWidth="360px">
                  Maximizing refers to our tendency to try and find the most
                  optimal solution possible. Satisficing refers to the tendency
                  to arrive at decisions that provide a satisfactory solution.
                </Text>
              </Flex>
              <Flex direction="column" width={['250px', '426px']}>
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
              palette={['#fff', '#BE6CFD']}
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
              <Flex direction="column" width={['250px', '426px']}>
                <Text className="Final-Section2MainHeading">Awareness</Text>

                <Text
                  className="Final-Section2SubHeading"
                  margin="18px 0 12px 0"
                >
                  What Focus means
                </Text>
                <Text className="Final-Section2SubText" maxWidth="360px">
                  Focus refers to how internally communicate with yourself and
                  what factors you consider before acting. By understanding the
                  behavioral factors that underlie your process of cognition,
                  you can start making better decisions.
                </Text>

                <Text
                  className="Final-Section2SubHeading"
                  margin="24px 0 12px 0"
                >
                  Prevention & Promotion
                </Text>
                <Text className="Final-Section2SubText" maxWidth="360px">
                  Promotion focus refers to our tendency to focus on the rewards
                  of a particular action. Prevention on the other hand means
                  that we tend to pay more attention to the downside than the
                  upside.
                </Text>
              </Flex>
              <Flex direction="column" width={['250px', '426px']}>
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
          <Text className="Final-FooterHeading">Taking Action</Text>
          <Text className="Final-FooterSubHeading">
            Here is where we provide an explanation of how the Taking Action
            block works
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
            <Image src={rightArrowLight} />
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
            <Image src={rightArrowLight} />
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
            <Image src={rightArrowLight} />
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
    </Flex>
  );
};

export default FinalScreen;
