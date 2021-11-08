const {ScoreConstants} = require('./scoreConstants.ts');
const First_Index = 0;
const Second_Index = 1;
const Third_Index = 2;
const Fourth_Index = 3;
const Total = 100;

const result1 = 57;
const result2 = 51;
const result3 = 25;
const result4 = 75;
const result5 = 43;
const result6 = 57;

const reportData = {
  data: {
    answers: [
      [['I Just See Water!'], ['35'], ['50'], ['65'], ['70'], ['65']],
      [
        ['15'],
        ['15'],
        ['Take the alternate one'],
        ['Ahh, I hate it! 😡'],
        ['1'],
      ],
      [
        ['Losses'],
        ['I have missed out on'],
        ['The risk'],
        ['What others expect of me'],
      ],
      [['50'], ['50'], ['50'], ['50']],
    ],
  },
};

function FinalAnswerGenerator() {
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
}

// Test1.js
test('gives sample answers to check for formulas. Refer to sample answers in the document sheet provided and their respective results', () => {
  expect(FinalAnswerGenerator()).toBe([
    [result1],
    [result2],
    [result3, result4],
    [result5, result6],
  ]);
});
