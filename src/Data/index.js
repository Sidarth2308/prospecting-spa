/* eslint-disable node/no-unsupported-features/es-syntax */
import question1Graphic from '../assets/questionGraphics/glassQuestion1.svg';
import question2Graphic from '../assets/questionGraphics/personQuestion2.svg';
import question3Graphic from '../assets/questionGraphics/carQuestion3.svg';
import question4Graphic from '../assets/questionGraphics/chairQuestion4.svg';
import question5Graphic from '../assets/questionGraphics/temperatureQuestion5.svg';
import question6Graphic from '../assets/questionGraphics/moneyQuestion6.svg';
import question7Graphic from '../assets/questionGraphics/smileyQuestion7.svg';
import question8Graphic from '../assets/questionGraphics/angryQuestion8.svg';
import question9Graphic from '../assets/questionGraphics/carsQuestion9.svg';
import question10Graphic from '../assets/questionGraphics/shoppingQuestion10.svg';
import question11Graphic from '../assets/questionGraphics/calendarQuestion11.svg';
import question12Graphic from '../assets/questionGraphics/trophyQuestion12.svg';
import question13Graphic from '../assets/questionGraphics/sadQuestion13.svg';
import question14Graphic from '../assets/questionGraphics/trophyQuestion14.svg';
import question15Graphic from '../assets/questionGraphics/signQuestion15.svg';
import question16Graphic from '../assets/questionGraphics/luxuryQuestion16.svg';
import question17Graphic from '../assets/questionGraphics/watchingQuestion17.svg';
import question18Graphic from '../assets/questionGraphics/personQuestion18.svg';
import question19Graphic from '../assets/questionGraphics/menuQuestion19.svg';

export const QuestionData = [
  {
    id: 0,
    questionDescription:
      'Alrighty then, let’s get started…what do you see here?',
    questionText: 'Is the glass half empty or half full?',
    type: {
      id: 0,
      type: 'RadioButton',

      options: ['Half Empty', 'Half Full', 'I just see water'],
    },
    graphic: question1Graphic,
    dotsOnPage: 0,
  },
  {
    id: 1,
    questionDescription:
      'Think of individuals like you, people you instinctively compare yourself to.\n What is the likelihood that each of the following events will happen to you personally as compared to them?',

    questionText:
      'Being publicly recognized for a professional or personal achievement',
    type: {
      id: 1,
      type: 'SliderWithTwoGraphics',
    },
    graphic: question2Graphic,
    dotsOnPage: 1,
  },
  {
    id: 2,
    questionDescription:
      'Think of individuals like you, people you instinctively compare yourself to.\n What is the likelihood that each of the following events will happen to you personally as compared to them?',

    questionText:
      'Win a free vacation for you and four of your close friends or family',
    type: {
      id: 1,
      type: 'SliderWithTwoGraphics',
    },
    graphic: question3Graphic,
    dotsOnPage: 2,
  },
  {
    id: 3,
    questionDescription:
      'Think of individuals like you, people you instinctively compare yourself to.\n What is the likelihood that each of the following events will happen to you personally as compared to them?',

    questionText: 'Achieve a comfortable lifestyle in retirement.',
    type: {
      id: 1,
      type: 'SliderWithTwoGraphics',
    },
    graphic: question4Graphic,
    dotsOnPage: 2,
  },
  {
    id: 4,
    questionDescription:
      'Think of individuals like you, people you instinctively compare yourself to.\n What is the likelihood that each of the following events will happen to you personally as compared to them?',

    questionText: 'Getting the Flu or bad cold within the next 12 months',
    type: {
      id: 1,
      type: 'SliderWithTwoGraphics',
    },
    graphic: question5Graphic,
    dotsOnPage: 2,
  },
  {
    id: 5,
    questionDescription:
      'Think of individuals like you, people you instinctively compare yourself to.\n What is the likelihood that each of the following events will happen to you personally as compared to them?',

    questionText:
      'Losing more money than your peers in the market in the next 3 years',
    type: {
      id: 1,
      type: 'SliderWithTwoGraphics',
    },
    graphic: question6Graphic,
    dotsOnPage: 2,
  },
  {
    id: 6,
    questionDescription:
      'Imagine you are taking a train to work that runs once every 30 mins. Unfortunately, you miss the train today by 5 minutes…',

    questionText: 'How much would you regret leaving your home late by 5 mins?',
    type: {
      id: 2,
      type: 'SliderWithOneGraphic',
      options: ['Well, thats Life!', 'Ahh I hate it!'],
    },
    graphic: question7Graphic,
    dotsOnPage: 1,
  },
  {
    id: 7,
    questionDescription:
      'Don’t hate us…you missed it, but it’s just by a whisker. You can still see it leaving the station.',

    questionText: 'How much would you regret missing it by just a few seconds?',
    type: {
      id: 2,
      type: 'SliderWithOneGraphic',
      options: ['Well, thats Life!', 'Ahh I hate it!'],
    },
    graphic: question8Graphic,
    dotsOnPage: 2,
  },
  {
    id: 8,
    questionDescription:
      'Imagine you are driving to an important meeting and the traffic seems a little worse today. Worse still, you accidentally forgot your phone and you feel you may be late by at least 15 mins if you run back home to get it. You remember an alternative route you have taken a few times before that seemed like it was faster.  ',

    questionText: 'What would you do?',
    type: {
      id: 0,
      type: 'RadioButton',

      options: ['Stick to the current router', 'Take the alternate route'],
    },
    graphic: question9Graphic,
    dotsOnPage: 3,
  },
  {
    id: 9,
    questionDescription:
      'You just made a large purchase that you have always wanted to buy. A week after buying it, the price of it is now slashed by third.',

    questionText: 'How would you feel about it?',
    type: {
      id: 0,
      type: 'RadioButton',
      options: ['Ahh I hate it!', 'Well, thats Life!'],
    },
    graphic: question10Graphic,
    dotsOnPage: 4,
  },
  {
    id: 10,
    questionDescription:
      'I wouldn’t have cared much had the price been slashed after…',

    questionText: 'Pick when in the future it wouldn’t have bothered you',
    type: {
      id: 0,
      type: 'RadioButton',
      options: ['Ahh I hate it!', 'Well, thats Life!'],
    },
    graphic: question11Graphic,
    dotsOnPage: 4,
  },
  {
    id: 11,
    questionDescription: '',

    questionText: 'In life, I often find myself focusing on',
    type: {
      id: 0,
      type: 'RadioButton',
      options: ['Losses', 'Gain'],
    },
    graphic: question12Graphic,
    dotsOnPage: 1,
  },
  {
    id: 12,
    questionDescription: '',

    questionText:
      'When it comes to regret, I tend to find myself regretting things that:',
    type: {
      id: 0,
      type: 'RadioButton',
      options: ['I have missed out on', 'I ended up doing'],
    },
    graphic: question13Graphic,
    dotsOnPage: 1,
  },
  {
    id: 13,
    questionDescription: '',

    questionText:
      'When it comes to trying new products or services, I find myself focusing on',
    type: {
      id: 0,
      type: 'RadioButton',
      options: ['The Risk', 'The Benefit'],
    },
    graphic: question14Graphic,
    dotsOnPage: 1,
  },
  {
    id: 14,
    questionDescription: '',

    questionText:
      'When it comes to big decisions in my life, I often focus on:',
    type: {
      id: 0,
      type: 'RadioButton',
      options: ['What others expect of me', 'What I aspire to be'],
    },
    graphic: question15Graphic,
    dotsOnPage: 1,
  },
  {
    id: 15,
    questionDescription: '',

    questionText:
      'I tend to do way too much research before making a large purchase.',
    type: {
      id: 3,
      type: 'SliderWithOneGraphicAndNotation',
      options: ['Strongly Disagree', 'Strongly Agree'],
    },
    graphic: question16Graphic,
    dotsOnPage: 1,
  },
  {
    id: 16,
    questionDescription: '',

    questionText:
      'I tend to spend too much time looking for what to watch instead of watching.',
    type: {
      id: 3,
      type: 'SliderWithOneGraphicAndNotation',
      options: ['Strongly Disagree', 'Strongly Agree'],
    },
    graphic: question17Graphic,
    dotsOnPage: 1,
  },
  {
    id: 17,
    questionDescription: '',

    questionText:
      'I think of myself as a perfectionist, never comfortable settling for “good enough”.',
    type: {
      id: 3,
      type: 'SliderWithOneGraphicAndNotation',
      options: ['Strongly Disagree', 'Strongly Agree'],
    },
    graphic: question18Graphic,
    dotsOnPage: 1,
  },
  {
    id: 5,
    questionDescription: '',

    questionText:
      'In a restaurant, I like to look over a menu carefully to make sure I choose the best option',
    type: {
      id: 3,
      type: 'SliderWithOneGraphicAndNotation',
      options: ['Strongly Disagree', 'Strongly Agree'],
    },
    graphic: question19Graphic,
    dotsOnPage: 1,
  },
  {
    id: 19,
    questionDescription:
      'Below are some key values, and if you do not see ones that are important to you, please add in the Green box.',

    questionText:
      'Please rank in order of importance at least 3 to 5 of your core values by dragging and dropping them in the blue box.',
    type: {
      id: 4,
      type: 'DragAndDrop',
      options: [
        'Security',
        'Freedom',
        'Travel',
        'Family',
        'Helping Others',
        'Health',
        'Community',
      ],
    },
    dotsOnPage: 1,
  },
];
