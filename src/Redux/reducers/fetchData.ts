/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import {DataAction, QuestionsData} from '../type';

export function fetchData(
  action: DataAction,
  state: QuestionsData = {
    sections: ['I Think', 'I Feel', 'I Focus', 'I Lean'],
    questions: [
      [
        {
          preface: 'Alrighty then, let’s get started…what do you see here?',
          body: 'Is the glass half empty or half full?',
          context: {
            above: '',
            center: '',
            below: {
              body: '',
              icon: '',
            },
          },
          elements: [
            {
              question_type: '',
              question_override: {
                preface: '',
                body: '',
              },
              context: {
                help_text: '',
                left: {
                  icon: {
                    above: '',
                    center: '',
                    below: '',
                  },
                  text: {
                    above: '',
                    center: '',
                    below: '',
                  },
                  subtext: {
                    above: '',
                    center: '',
                    below: '',
                  },
                  value: '',
                },
                right: {
                  icon: {
                    above: '',
                    center: '',
                    below: '',
                  },
                  text: {
                    above: '',
                    center: '',
                    below: '',
                  },
                  subtext: {
                    above: '',
                    center: '',
                    below: '',
                  },
                  value: '',
                },
                slider: {
                  default: '',
                  min: '',
                  max: '',
                  step: '',
                  ticks: false,
                },
                input: {
                  body: '',
                  placeholder: '',
                  values: [],
                },
                radio: [],
                multicard: [
                  ['Half Empty', '0.4'],
                  ['Half Full', '0.4'],
                  ['I Just See Water!', '0.2'],
                ],
                dragdrop: [],
              },
            },
          ],
          icon: '',
          dimensions: ['163px', '272px'],
        },
      ],
    ],
  }
) {
  if (action && action.type === 'FETCH_DATA_SUCCESS') {
    return action.questionData;
  }
  return state;
}
