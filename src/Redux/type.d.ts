/* eslint-disable no-shadow */
// Export type QuestionsData = {
//   Sections: string[];
//   Questions: {
//     Preface: string;
//     Body: string;
//     Context: {
//       Above: string;
//       Center: string;
//       Below: {
//         Body: string;
//         Icon: string;
//       };
//     };
//     Elements: {
//       Question_type: string;
//       Question_override: {
//         Preface: string;
//         Body: string;
//       };
//       Context: {
//         Help_text: string;
//         Left: {
//           Icon: {
//             Above: string;
//             Center: string;
//             Below: string;
//           };
//           Text: {
//             Above: string;
//             Center: string;
//             Below: string;
//           };
//           Subtext: {
//             Above: string;
//             Center: string;
//             Below: string;
//           };
//           Value: string;
//         };
//         Right: {
//           Icon: {
//             Above: string;
//             Center: string;
//             Below: string;
//           };
//           Text: {
//             Above: string;
//             Center: string;
//             Below: string;
//           };
//           Subtext: {
//             Above: string;
//             Center: string;
//             Below: string;
//           };
//           Value: string;
//         };
//         Slider?: {
//           Default: string;
//           Min: string;
//           Max: string;
//           Step: string;
//           Ticks: boolean;
//         };
//         Input: {
//           Body: string;
//           Placeholder: string;
//           Values: string[];
//         };
//         Radio: string[];
//         Multicard: string[][];
//         Dragdrop: string[][];
//       };
//     }[][];

//     Icon?: string;
//     Icon1?: string;
//     Icon2?: string;
//     Dimensions?: string[];
//   }[][];
// };

export type Input = {
  body: string;
  placeholder: string;
  values: string[];
};

export type Icon = {
  above: string;
  center: string;
  below: string;
};

export type Left = {
  icon: Icon;
  text: Icon;
  subtext: Icon;
  value: string;
};

export type Slider = {
  default: string;
  min: string;
  max: string;
  step: string;
  ticks: boolean;
};

export type ElementContext = {
  help_text: string;
  left: Left;
  right: Left;
  slider?: Slider;
  input: Input;
  radio: string[];
  multicard: string[][];
  dragdrop: string[][];
};

export type QuestionOverride = {
  preface: string;
  body: string;
};

export type Element = {
  question_type: string;
  question_override: QuestionOverride;
  context: ElementContext;
};

export type BelowClass = {
  body: string;
  icon: string;
};

export type QuestionContext = {
  above: string;
  center: string;
  below: BelowClass;
};

export type Question = {
  preface: string;
  body: string;
  context: QuestionContext;
  elements: Element[];
  icon?: string;
  dimensions?: string[];
  icon1?: string;
  icon2?: string;
  icon3?: string;
  prefaceDimension: string;
  bodyDimension: string;
};

export type QuestionsData = {
  sections: string[];
  questions: Question[][];
};

type DataAction = {
  type: string;
  questionData: QuestionsData;
};
type DataState = {
  fetchData: questionData;
};

type DispatchType = (args: DataAction) => DataAction;
