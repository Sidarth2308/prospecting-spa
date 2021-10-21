/* eslint-disable complexity */
// Answer Constants
const PositiveGeneralAnswer = 10;
const NegativeGeneralAnswer = -10;
const NeutralAnswer = 0;

// Slider Constants
const SliderFactor = 10;
export const SliderMaxValue = 100;
const SliderHalfValue = 100;
const SliderNegativeValue = -1;

// Section 4 Constants
const MaxGeneralAnswer = 8;
const MinGeneralAnswer = 0;
const Section4DivisionConstant = 7;
const Section4SubtractionConstant = 8;

// List Constants
const ListNegativeValue = -1;
const ListHalfValue = 8;

// Answer Weight Constants
const GeneralWeight = 0.2;
export const IncreasedWeight = 0.25;

// Formula Constants
const PercentageConstant = 100;
const SubtractionConstant = -10;
const DivisionConstant = 20;

// Magic Number Constants
export const First_Index = 0;
const Second_Index = 1;
export const Third_Index = 2;
const No_Value = 0;
export const Divide_Half_Value = 2;

type Section = {
  id: number;
  type: string;
  weight: number;
  answer: {
    Option1: (string | number)[];
    Option2: (string | number)[];
    Option3: (string | number)[];
  };
}[];

const SectionScoreCalculator: (
  answers: Section,
  results: (string | string[])[]
) => number = (answers: Section, results: (string | string[])[]) => {
  /**
   * Returns the accumulated value of all the scores of the first and second Section.
   *
   * @param answers - A list of question types and their answer score and other info.(Type Section)
   * @param results - The list of answers submitted by the user.
   * @returns A single integer number denoting the total accumulated score.
   *
   */
  let accumulator = 0;
  answers.forEach((questionData, index) => {
    if (questionData.type === 'options') {
      const selectedAnswer = results[index][First_Index];
      if (selectedAnswer === questionData.answer.Option1[Second_Index]) {
        accumulator =
          accumulator +
          (questionData.answer.Option1[First_Index] as number) *
            questionData.weight;
      } else if (selectedAnswer === questionData.answer.Option2[Second_Index]) {
        accumulator =
          accumulator +
          (questionData.answer.Option2[First_Index] as number) *
            questionData.weight;
      } else if (selectedAnswer === questionData.answer.Option3[Second_Index]) {
        accumulator =
          accumulator +
          (questionData.answer.Option3[First_Index] as number) *
            questionData.weight;
      } else {
        accumulator = accumulator + No_Value;
      }
    } else if (questionData.type === 'slider') {
      let selectedAnswer =
        parseInt(results[index][First_Index], 10) * Divide_Half_Value;

      if (selectedAnswer > SliderHalfValue) {
        if ((questionData.answer.Option1[First_Index] as number) > No_Value) {
          selectedAnswer =
            (selectedAnswer - SliderHalfValue) * SliderNegativeValue;
        } else if (
          (questionData.answer.Option1[First_Index] as number) === No_Value
        ) {
          selectedAnswer = No_Value;
        } else {
          selectedAnswer = selectedAnswer - SliderHalfValue;
        }
      } else {
        if ((questionData.answer.Option2[First_Index] as number) < No_Value) {
          selectedAnswer =
            (selectedAnswer - SliderHalfValue) * SliderNegativeValue;
        } else if (
          (questionData.answer.Option2[First_Index] as number) === No_Value
        ) {
          selectedAnswer = No_Value;
        } else {
          selectedAnswer = selectedAnswer - SliderHalfValue;
        }
      }
      accumulator =
        accumulator + (selectedAnswer * questionData.weight) / SliderFactor;
    } else if (questionData.type === 'dateSelect') {
      const selectedWeeks = parseInt(results[index][First_Index], 10);
      const totalDistribution = PositiveGeneralAnswer / ListHalfValue;
      let totalAnswer = 0;
      if (selectedWeeks >= ListHalfValue) {
        totalAnswer =
          (selectedWeeks - ListHalfValue) *
          totalDistribution *
          ListNegativeValue;
      } else {
        totalAnswer = (ListHalfValue - selectedWeeks) * totalDistribution;
      }
      totalAnswer *= questionData.weight;
      accumulator = accumulator + totalAnswer;
    } else {
      accumulator = accumulator + No_Value;
    }
    // Console.log(accumulator, results[index]);
  });
  return accumulator;
};

const Section3ScoreCalculator: (
  answers: Section,
  results: (string | string[])[]
) => number[] = (answers: Section, results: (string | string[])[]) => {
  /**
   * Returns the accumulated Positive and Negative values of all the scores of the
   * third section.
   *
   * @param answers - A list of question types and their answer score and other info. (Type Section)
   * @param results - The list of answers submitted by the user.
   * @returns A number Array with 2 integers, the first one being all the positive accumulation and the second one being all the negative accumulation.
   *
   */

  let PositiveAccumulator = 0;
  let NegativeAccumulator = 0;
  answers.forEach((questionData, index) => {
    if (questionData.type === 'options') {
      const selectedAnswer = results[index][First_Index];
      let totalAnswer = 0;
      if (selectedAnswer === questionData.answer.Option1[Second_Index]) {
        totalAnswer =
          (questionData.answer.Option1[First_Index] as number) *
          questionData.weight;
      } else if (selectedAnswer === questionData.answer.Option2[Second_Index]) {
        totalAnswer =
          (questionData.answer.Option2[First_Index] as number) *
          questionData.weight;
      } else if (selectedAnswer === questionData.answer.Option3[Second_Index]) {
        totalAnswer =
          (questionData.answer.Option3[First_Index] as number) *
          questionData.weight;
      } else {
        totalAnswer = No_Value;
      }
      if (totalAnswer > NeutralAnswer) {
        PositiveAccumulator += totalAnswer;
      } else {
        NegativeAccumulator += totalAnswer;
      }
    } else {
      PositiveAccumulator += No_Value;
    }
    // Console.log(PositiveAccumulator, NegativeAccumulator, results[index]);
  });
  return [PositiveAccumulator, NegativeAccumulator];
};

const Section4ScoreCalculator: (
  answers: Section,
  results: (string | string[])[]
) => number = (answers: Section, results: (string | string[])[]) => {
  /**
   * Returns the accumulated values of all the scores of the
   * fourth section.
   *
   * @param answers - A list of question types and their answer score and other info. (Type Section)
   * @param results - The list of answers submitted by the user.
   * @returns A single integer number denoting the total accumulated score.
   *
   */
  let accumulator = 0;
  answers.forEach((questionData, index) => {
    if (questionData.type === 'slider') {
      const selectedAnswer =
        parseInt(results[index][First_Index], 10) / SliderFactor;

      accumulator = accumulator + selectedAnswer * questionData.weight;
    } else {
      accumulator = accumulator + No_Value;
    }

    // Console.log(accumulator, results[index][First_Index], answers[index]);
  });
  return accumulator;
};

const Section1Formula: (
  answers: Section,
  results: (string | string[])[]
) => number = (answers: Section, results: (string | string[])[]) => {
  /**
   * Returns the total Optimism score after applying the given formula
   *
   * @param answers - A list of question types and their answer score and other info. (Type Section)
   * @param results - The list of answers submitted by the user.
   * @returns A single integer number denoting the total Optimism score.
   *
   * Here accumulator is the accumulated value of the section.
   *
   */
  const accumulator = SectionScoreCalculator(answers, results);
  const defaultCalculation = accumulator - SubtractionConstant;
  const SectionScore = Math.round(
    (defaultCalculation / DivisionConstant) * PercentageConstant
  );
  return SectionScore;
};

const Section2Formula: (
  answers: Section,
  results: (string | string[])[]
) => number = (answers: Section, results: (string | string[])[]) => {
  /**
   * Returns the total Regret Aversion score after applying the given formula
   *
   * @param answers - A list of question types and their answer score and other info. (Type Section)
   * @param results - The list of answers submitted by the user.
   * @returns A single integer number denoting the total Regret Aversion score.
   *
   * Here accumulator is the accumulated value of the section.
   *
   */

  const accumulator = SectionScoreCalculator(answers, results);
  const defaultCalculation =
    (SubtractionConstant / DivisionConstant) * PercentageConstant;
  const SectionScore = Math.round(accumulator - defaultCalculation);
  return SectionScore;
};

const Section3Formula: (
  answers: Section,
  results: (string | string[])[]
) => number[] = (answers: Section, results: (string | string[])[]) => {
  /**
   * Returns An array containing Promotion and Prevention score after applying the given formula
   *
   * @param answers - A list of question types and their answer score and other info. (Type Section)
   * @param results - The list of answers submitted by the user.
   * @returns An integer array where the first element is Promotion Score and the second element is Prevention Score.
   *
   * Here accumulator is the accumulated Positive and Negative values of the section.
   *
   */
  const accumulatorArray = Section3ScoreCalculator(answers, results);
  const PromotionScore = Math.round(
    (accumulatorArray[First_Index] /
      Math.abs(
        accumulatorArray[Second_Index] - accumulatorArray[First_Index]
      )) *
      PercentageConstant
  );

  const PreventionScore = Math.round(
    ((accumulatorArray[Second_Index] * ListNegativeValue) /
      Math.abs(
        accumulatorArray[Second_Index] - accumulatorArray[First_Index]
      )) *
      PercentageConstant
  );
  return [PromotionScore, PreventionScore];
};

export const Section4Formula: (
  answers: Section,
  results: (string | string[])[]
) => number[] = (answers: Section, results: (string | string[])[]) => {
  /**
   * Returns An array containing Satisfice and Maximize score after applying the given formula
   *
   * @param answers - A list of question types and their answer score and other info. (Type Section)
   * @param results - The list of answers submitted by the user.
   * @returns An integer array where the first element is  Satisfice Score and the second element is Maximize Score.
   *
   * Here accumulator is the accumulated value of the section.
   *
   */

  // ROUND((8-J65)/7*100,0)
  const accumulator = Section4ScoreCalculator(answers, results);
  const Satisfice = Math.round(
    ((Section4SubtractionConstant - accumulator) / Section4DivisionConstant) *
      PercentageConstant
  );

  const Maximize = PercentageConstant - Satisfice;
  return [Satisfice, Maximize];
};

export const ScoreConstants = {
  section1: {
    formula: Section1Formula,
    scores: [
      {
        id: 0,
        type: 'options',
        weight: GeneralWeight,
        answer: {
          Option1: [PositiveGeneralAnswer, 'Half Full'],
          Option2: [NegativeGeneralAnswer, 'Half Empty'],
          Option3: [NeutralAnswer, 'I Just See Water!'],
        },
      },
      {
        id: 1,
        type: 'slider',
        weight: GeneralWeight,
        answer: {
          Option1: [PositiveGeneralAnswer, ''],
          Option2: [NegativeGeneralAnswer, ''],
          Option3: [NeutralAnswer, ''],
        },
      },
      {
        id: 2,
        type: 'slider',
        weight: GeneralWeight,
        answer: {
          Option1: [NeutralAnswer, ''],
          Option2: [NeutralAnswer, ''],
          Option3: [NeutralAnswer, ''],
        },
      },
      {
        id: 3,
        type: 'slider',
        weight: GeneralWeight,
        answer: {
          Option1: [PositiveGeneralAnswer, ''],
          Option2: [NegativeGeneralAnswer, ''],
          Option3: [NeutralAnswer, ''],
        },
      },
      {
        id: 4,
        type: 'slider',
        weight: GeneralWeight,
        answer: {
          Option1: [NegativeGeneralAnswer, ''],
          Option2: [PositiveGeneralAnswer, ''],
          Option3: [NeutralAnswer, ''],
        },
      },
      {
        id: 5,
        type: 'slider',
        weight: GeneralWeight,
        answer: {
          Option1: [NegativeGeneralAnswer, ''],
          Option2: [PositiveGeneralAnswer, ''],
          Option3: [NeutralAnswer, ''],
        },
      },
    ],
  },
  section2: {
    formula: Section2Formula,
    scores: [
      {
        id: 0,
        type: 'slider',
        weight: GeneralWeight,
        answer: {
          Option1: [NegativeGeneralAnswer, 'Well, thats Life!'],
          Option2: [PositiveGeneralAnswer, 'Ahh I hate It!'],
          Option3: [NeutralAnswer, ''],
        },
      },
      {
        id: 1,
        type: 'slider',
        weight: GeneralWeight,
        answer: {
          Option1: [NegativeGeneralAnswer, 'Well, thats Life!'],
          Option2: [PositiveGeneralAnswer, 'Ahh I hate It!'],
          Option3: [NeutralAnswer, ''],
        },
      },
      {
        id: 2,
        type: 'options',
        weight: GeneralWeight,
        answer: {
          Option1: [PositiveGeneralAnswer, 'Stick to the current route'],
          Option2: [NegativeGeneralAnswer, 'Take the alternate one'],
          Option3: [NeutralAnswer, ''],
        },
      },
      {
        id: 3,
        type: 'options',
        weight: GeneralWeight,
        answer: {
          Option1: [NegativeGeneralAnswer, 'Well, Thats Life! :smiling_face:'],
          Option2: [PositiveGeneralAnswer, 'Ahh I hate it! :rage:'],
          Option3: [NeutralAnswer, ''],
        },
      },
      {
        id: 4,
        type: 'dateSelect',
        weight: GeneralWeight,
        answer: {
          Option1: [NegativeGeneralAnswer, '16'],
          Option2: [PositiveGeneralAnswer, '1'],
          Option3: [NeutralAnswer, ''],
        },
      },
    ],
  },
  section3: {
    formula: Section3Formula,
    scores: [
      {
        id: 0,
        type: 'options',
        weight: IncreasedWeight,
        answer: {
          Option1: [NegativeGeneralAnswer, 'Losses'],
          Option2: [PositiveGeneralAnswer, 'Gain'],
          Option3: [NeutralAnswer, ''],
        },
      },
      {
        id: 1,
        type: 'options',
        weight: IncreasedWeight,
        answer: {
          Option1: [NegativeGeneralAnswer, 'I ended up doing'],
          Option2: [PositiveGeneralAnswer, 'I have missed out on'],
          Option3: [NeutralAnswer, ''],
        },
      },
      {
        id: 2,
        type: 'options',
        weight: IncreasedWeight,
        answer: {
          Option1: [PositiveGeneralAnswer, 'The benefit'],
          Option2: [NegativeGeneralAnswer, 'The risk'],
          Option3: [NeutralAnswer, ''],
        },
      },
      {
        id: 3,
        type: 'options',
        weight: IncreasedWeight,
        answer: {
          Option1: [NegativeGeneralAnswer, 'What others expect of me'],
          Option2: [PositiveGeneralAnswer, 'What I aspire to be'],
          Option3: [NeutralAnswer, ''],
        },
      },
    ],
  },
  section4: {
    formula: Section4Formula,
    scores: [
      {
        id: 0,
        type: 'slider',
        weight: IncreasedWeight,
        answer: {
          Option1: [MinGeneralAnswer, '0'],
          Option2: [MaxGeneralAnswer, '8'],
          Option3: [NeutralAnswer, ''],
        },
      },
      {
        id: 1,
        type: 'slider',
        weight: IncreasedWeight,
        answer: {
          Option1: [MinGeneralAnswer, '0'],
          Option2: [MaxGeneralAnswer, '8'],
          Option3: [NeutralAnswer, ''],
        },
      },
      {
        id: 2,
        type: 'slider',
        weight: IncreasedWeight,
        answer: {
          Option1: [MinGeneralAnswer, '0'],
          Option2: [MaxGeneralAnswer, '8'],
          Option3: [NeutralAnswer, ''],
        },
      },
      {
        id: 3,
        type: 'slider',
        weight: IncreasedWeight,
        answer: {
          Option1: [MinGeneralAnswer, '0'],
          Option2: [MaxGeneralAnswer, '8'],
          Option3: [NeutralAnswer, ''],
        },
      },
    ],
  },
};
