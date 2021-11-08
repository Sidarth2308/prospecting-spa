/* eslint-disable node/no-extraneous-import */
/* eslint-disable no-use-before-define */
import {Box, Flex} from '@chakra-ui/layout';
import {Spinner} from '@chakra-ui/spinner';
import axios from 'axios';
import {isUndefined} from 'lodash';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import FinalScreen from '../../Containers/FinalScreen';
import {REPORT_API_URL, ScoreConstants} from '../../Data';
import NotFound from '../not-found';

// Type Props = {};
const First_Index = 0;
const Second_Index = 1;
const Third_Index = 2;
const Fourth_Index = 3;
const DndFirstParam = 3;
const DndSecondParam = 4;
const Success = 1;

type ResponseData = {
  status: number;
  message: string;
  answers: (string | string[])[][];
  client: {
    name: string;
    email: string;
  };
};

type ReportState = {
  fetched: boolean;
  data: ResponseData;
};

const Report: React.FC = () => {
  const [reportData, setReportData] = useState<ReportState>({
    fetched: false,
    data: {
      status: -1,
      message: 'None',
      answers: [[''], [''], [''], ['']],
      client: {
        name: '',
        email: '',
      },
    },
  });
  const {reportID} = useParams<{reportID?: string}>();
  useEffect(() => {
    if (!isUndefined(reportID)) {
      axios
        .get<ResponseData>(REPORT_API_URL + `/${reportID}`)
        .then((response) => {
          setReportData({
            fetched: true,
            data: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [reportID]);
  const Total = 100;

  const FinalAnswerGenerator: () => number[][] = () => {
    const FirstSectionScore = ScoreConstants.section1.formula(
      ScoreConstants.section1.scores,
      reportData.data.answers[First_Index]
    );

    const SecondSectionScore = ScoreConstants.section2.formula(
      ScoreConstants.section2.scores,
      reportData.data.answers[Second_Index]
    );

    const ReportFirstSection =
      (FirstSectionScore / (FirstSectionScore + SecondSectionScore)) * Total;

    const SectionScores = [
      [Math.round(ReportFirstSection)],
      [Math.round(Total - ReportFirstSection)],
      ScoreConstants.section3.formula(
        ScoreConstants.section3.scores,
        reportData.data.answers[Third_Index]
      ),
      ScoreConstants.section4.formula(
        ScoreConstants.section4.scores,
        reportData.data.answers[Fourth_Index]
      ),
    ];
    // Const SectionScores = [[57], [49], [25, 75], [43, 57]];
    return SectionScores;
  };
  return (
    <Box className="ResultContainer">
      {reportData.fetched ? (
        reportData.data.status === Success ? (
          <FinalScreen
            name={reportData.data.client.name}
            email={reportData.data.client.email}
            SectionScores={FinalAnswerGenerator()}
            DndAnswers={reportData.data.answers[DndFirstParam][DndSecondParam]}
          />
        ) : (
          <NotFound />
        )
      ) : (
        <Flex
          alignItem="center"
          justifyContent="center"
          width="100%"
          minHeight="100vh"
        >
          <Spinner />
        </Flex>
      )}
    </Box>
  );
};

export default Report;
