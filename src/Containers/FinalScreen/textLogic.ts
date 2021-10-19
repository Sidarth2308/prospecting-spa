const LIMIT = 60;
const FirstIndex = 0;

export const ThinkingStyleTextCalc1: (OO: number, RA: number) => string = (
  OO: number,
  RA: number
) => {
  if (OO > LIMIT) {
    return 'Higher Optimism can motivate you to work harder, leading to better outcomes and more fulfilling life. And because you have lower Regret Aversion, you do this more enthusiastically than others.';
  } else if (OO < LIMIT && RA < LIMIT) {
    return 'A well-balanced Optimism and Regret Aversion thinking style enable you to be both realistic and enthusiastic when it comes to money. Your slow and steady approach is conducive to long-term wealth creation and preservation.';
  }
  return 'Higher Regret Aversion enables you to approach things carefully, and helps you think through the consequences of your actions. And because you have lower Optimism, you do this more pragmatically than others.';
};

export const ThinkingStyleTextCalc2: (OO: number, RA: number) => string = (
  OO: number,
  RA: number
) => {
  if (OO > LIMIT) {
    return 'Some individuals with high Optimism end up ‘unrealistically’ overestimating their chances of success. This might lead to more risk-taking than is appropriate for their situation.';
  } else if (RA < LIMIT && OO < LIMIT) {
    return 'Because your Optimism and Regret Aversion are closely balanced, you may tend to flip-flop a bit; alternating between feeling good and second-guessing actions taken.';
  }
  return 'Some individuals with high Regret Aversion can end up with analysis-paralysis. Because they are so concerned about what could go wrong, they may miss out on great opportunities that are appropriate for their situation.';
};

export const ThinkingStyleTextCalc3: (OO: number, RA: number) => string = (
  OO: number,
  RA: number
) => {
  if (OO > LIMIT) {
    return 'Balance your Optimism by taking the effort to find information that goes against key assumptions you are making.';
  } else if (RA < LIMIT && OO < LIMIT) {
    return 'A balanced Optimism and Regret Aversion is a great combination; use it more effectively by committing to time-bound action plans.';
  }
  return 'Use your higher Regret Aversion to consider what you will be missing out on by not taking this particular action that you are struggling with.';
};

export const DecisionStyleTextCalc1: (
  Satisficing: number,
  Maximizing: number
) => string = (Satisficing: number, Maximizing: number) => {
  if (Maximizing > LIMIT) {
    return 'Higher Maximizing decision style can motivate you to keep looking until you find the best possible solution. And because you have lower Satisficing, you do this uncompromisingly than most others.';
  } else if (Maximizing < LIMIT && Satisficing < LIMIT) {
    return 'A balanced Maximizing and Satisficing outlook enables you to find the middle ground between thoroughly researched and quickly thought out decisions.';
  }
  return 'A Higher Satisficing quotient enables you to decide things quickly without a lot of fuss. And because you have lower Maximizing, you do this more pragmatically than others without worrying too much about finding the best possible solution.';
};

export const DecisionStyleTextCalc2: (
  Satisficing: number,
  Maximizing: number
) => string = (Satisficing: number, Maximizing: number) => {
  if (Maximizing > LIMIT) {
    return 'Individuals with high maximizing scores may experience higher FOMO (Fear of missing out) and result in lower satisfaction because they are more prone to ‘buyer’s remorse’.';
  } else if (Satisficing < LIMIT && Maximizing < LIMIT) {
    return 'Because your Maximizing and Satisficing tendencies are so finely balanced, you may tend to struggle before deciding; at times you will appreciate what you have, and at other times, regret what you could have had.';
  }
  return 'Individuals with high Satisficing can make decisions somewhat rashly because they don’t spend much time looking for solutions. Because they are so concerned about getting quick results, they may miss out on great opportunities for lack of careful consideration.';
};

export const DecisionStyleTextCalc3: (
  Satisficing: number,
  Maximizing: number
) => string = (Satisficing: number, Maximizing: number) => {
  if (Maximizing > LIMIT) {
    return 'Balance your Maximizing by writing down all your options and picking the top 3-5. Research has shown that reducing options can help make better choices.';
  } else if (Satisficing < LIMIT && Maximizing < LIMIT) {
    return 'Ensure you systematize the decision-making process by writing down your options and then eliminating them based on simple rules such as writing down all your options and picking the top 3-5.';
  }
  return 'Balance your Satisficing by writing down all possible options and its pros and cons so you don’t miss out on considering them carefully.';
};

export const FocusTextCalc1: (Promotion: number, Prevention: number) => string =
  (Promotion: number, Prevention: number) => {
    if (Promotion > LIMIT) {
      return 'A Promotion focus means you’re high on enthusiasm and may be ready to take on more risk. You also have a more positive outlook on life.';
    } else if (Promotion < LIMIT && Prevention < LIMIT) {
      return 'You have a level-headed outlook on life where you can balance pursuing positive returns and ensuring that your bases are covered. It helps to pay attention to both risk and reward.';
    }
    return 'A Prevention focus leads to a thorough analysis of potential downsides and helps you be cautious and prudent. You are more attuned to preventing losses.';
  };

export const FocusTextCalc2: (Promotion: number, Prevention: number) => string =
  (Promotion: number, Prevention: number) => {
    if (Promotion > LIMIT) {
      return 'Individuals with a high Promotion focus tend to take inappropriate risks and may pay more attention to positive news while neglecting negative news. This may lead to doing things that make one feel positive like shopping while neglecting responsibilities such as paying off debt.';
    } else if (Prevention < LIMIT && Promotion < LIMIT) {
      return 'Given your Promotion-Prevention scores, you may at times have a challenge with balancing your desire to take risks and pursue positive outcomes and at the same ensuring you are being protected. You may take more time and end up with analysis-paralysis and second-guessing.';
    }
    return 'Individuals with a high Prevention focus tend to feel constrained and have a more negative outlook on life. They may also shy away from appropriate risk. They also usually pay more attention to negative news (such as market volatility) than positive negative news.';
  };

export const FocusTextCalc3: (Promotion: number, Prevention: number) => string =
  (Promotion: number, Prevention: number) => {
    if (Promotion > LIMIT) {
      return 'Balance your Promotion focus by spending more time thinking about the risks and what could go wrong.';
    } else if (Prevention < LIMIT && Promotion < LIMIT) {
      return 'This is a great approach to life, keep it up! Double-check if there are areas where you are more promotion vs. prevention-focused.';
    }
    return 'Balance your high Prevention focus by actively thinking about the rewards and on what could go right.';
  };

export const PossibleTextValues = [
  {
    name: 'Family',
    value: {
      OO: {
        High: 'High Optimism may make you feel like everything will be alright, and it’s important to plan things out to protect your family.',
        Mid: 'A balanced approach is great to take care of the family.',
        Low: 'High Regret Aversion may make you feel like everything is doom and gloom. But that need not be the case necessarily.',
      },
      Maximizing: {
        High: 'High Maximizing may prevent you from taking timely actions because you may spend your time looking for the best possible solution.',
        Mid: 'A balanced approach is great to take care of the family as you are pragmatic and smart.',
        Low: 'High Satisficing may cause you to skip critical areas without careful thought. When it comes to family, it’s important to slow down and really evaluate your decisions.',
      },
      Prevention: {
        High: 'A high Prevention focus may prevent you from enjoying what you do because you may be spending way too much time thinking about negative outcomes.',
        Mid: 'A balanced focus is great to take care of the family as you are pragmatic, yet have a positive outlook on life.',
        Low: 'A high Promotion focus may make you pick any solution without careful thought, especially when there’s a positive outcome. It’s important to be aware of potential downsides, especially when it comes to your family.',
      },
    },
  },
  {
    name: 'Freedom',
    value: {
      OO: {
        High: 'High Optimism may lead you to overestimate where you stand with respect to financial freedom.',
        Mid: 'Your sense of financial freedom is probably well-thought-out as you have a balanced thinking style.',
        Low: 'High Regret Aversion may make you feel like you are in no way ready for freedom; and it may actually bound you more than you think.',
      },
      Maximizing: {
        High: 'High Maximizing may make you feel that you have the time to do what you want. While this could be true, it is nevertheless a good idea to check in with a financial advisor.',
        Mid: 'Your sense of financial freedom is probably well-thought-out as you have a balanced decision style.',
        Low: 'High Satisficing may make you feel that you have the freedom to do what you want. While this could be true, it is nevertheless a good idea to check in with a financial advisor.',
      },
      Prevention: {
        High: 'A high Prevention focus may prevent you from doing what you want as you’re very attuned to potential downsides and losses.',
        Mid: 'Your sense of financial freedom is probably well-thought-out as you have a balanced style of focus.',
        Low: 'A high Promotion focus may make you feel like you are very free to chase gains, and it may lead to excess risk taking when it comes to your finances.',
      },
    },
  },
  {
    name: 'Security',
    value: {
      OO: {
        High: 'While High Optimism is great, it’s helpful to make sure you are not neglecting legitimate risks as long as you are adequately covered for them.',
        Mid: 'Based on your balanced thinking style profile, it is highly likely that you have taken a balanced approach to securing your financial future too.',
        Low: 'High Regret Aversion may prevent you from taking the right approach as you may regret taking an action. And sometimes, not taking action can lead to even more regret, especially when it comes to Security.',
      },
      Maximizing: {
        High: 'While High Maximizing is great, you need to ensure that are you are not taking risks  by taking time to find the right solutions.',
        Mid: 'Based on your balanced Decision Style, it is highly likely that you have taken a balanced approach to securing your financial future too.',
        Low: 'High Satisficing may prevent you from taking the right approach as you may go for solutions without checking them out thoroughly.',
      },
      Prevention: {
        High: 'While a high Prevention focus  is great, are you sure you are not neglecting appropriate opportunities because you end up focusing too much on safety and security?',
        Mid: 'Based on your balanced Focus, it is highly likely that you are taking a balanced approach to securing your financial future too.',
        Low: 'A high Promotion focus may prevent you from taking the right approach and neglecting financial security as you prioritize pursuing gains and positive outcomes.',
      },
    },
  },
  {
    name: 'Community',
    value: {
      OO: {
        High: 'High Optimism gives you the energy to deal with any community issues in a passionate and persevering way. It’s important to ensure you do not get drained though.',
        Mid: 'You approach and tackle community issues with a very sensible and methodical approach. We need more people like you!',
        Low: 'While high Regret Aversion may seem that nothing can ever get done, it is important to take a more positive view of life and get going.',
      },
      Maximizing: {
        High: 'High Maximizing may overwhelm you when tackling community issues. It’s important to ensure you do not get drained though.',
        Mid: 'You approach and tackle community issues with a very sensible and methodical decision style approach. Keep it up!',
        Low: 'While high Satisficing may seem like everything can get done, it is important to take a more realistic view of life and to stop and reflect on what is achievable.',
      },
      Prevention: {
        High: 'A high Prevention focus may overwhelm you when tackling community issues. It’s important to ensure you do not get drained thinking mainly about negative outcomes.',
        Mid: 'You approach and tackle community issues with a very sensible and methodical focus. That’s great!',
        Low: 'While a high Promotion focus may seem everything can get done and most things are possible, it is important to take a more realistic view of life and to stop and reflect on possible downsides.',
      },
    },
  },
  {
    name: 'Health',
    value: {
      OO: {
        High: 'High Optimism may make you feel like you are on the right path. While this is great for mental well-being, when it comes to physical health, this may be a problem area. It’s important to check in with a proper professional on a regular basis.',
        Mid: 'You approach and tackle health and wellness with a very sensible and methodical approach. We need more people like you!',
        Low: 'High Regret Aversion may make you feel like you are in no way ready for health and wellness; this thinking may prevent you from taking appropriate actions.',
      },
      Maximizing: {
        High: 'High Maximizing may make you feel like you can never get on the right path. This may not be true; motivate yourself to start wih small steps.',
        Mid: 'You approach and tackle health and wellness by taking very sensible and methodical decisions. We need more people like you!',
        Low: 'High Satisficing may make you feel like you are well on your way to health and wellness; while this could be true it could also prevent you from considering other good ideas.',
      },
      Prevention: {
        High: 'A high Prevention focus may make you feel like you can never get on the right path as you’re very focused on what could go wrong. This could add a lot of additional stress!!',
        Mid: 'You approach and tackle health and wellness by taking a very sensible and methodical focus. Keep it up!',
        Low: 'When it comes to your health and wellness, you’re likely to try a lot of new things because of your Promotion focus, but it might be hard to stick to a plan. It’s important to take a breath and reflect on any potential negatives from time to time.',
      },
    },
  },
  {
    name: 'Helping Others',
    value: {
      OO: {
        High: 'High Optimism gives you the energy to help others in a passionate and loving manner. It’s important to ensure you do not get drained though.',
        Mid: 'You approach helping others with a very sensible and methodical approach. Those around you should be very appreciative.',
        Low: 'High Regret Aversion may make you feel like everything is doom and gloom and that there is very little point in helping others. As a start, help yourself first!',
      },
      Maximizing: {
        High: 'High Maximizing gives you the energy to help others in a passionate and loving manner. It’s important to ensure you do not get drained though.',
        Mid: 'You approach helping others with a very sensible and methodical Decision Style. Those around you should be very appreciative!',
        Low: 'High Satisficing may make you feel like everything can be easily achieved. This is a great attitude and it can be made even better if you spend time looking at all options at your disposal.',
      },
      Prevention: {
        High: 'A high Prevention focus  gives you the critical lens when it comes to helping others as you’re focused on what could go wrong. It’s important to ensure you do not get drained though.',
        Mid: 'You approach helping others with a very sensible and methodical Focus Style. People around you should be very appreciative!',
        Low: 'People with a high Promotion focus are eager to see the best in others and help out but they also need to balance between helping others and taking care of themselves.',
      },
    },
  },
  {
    name: 'Travel',
    value: {
      OO: {
        High: 'High Optimism makes you feel that you can do what you like and go wherever and whenever you feel like doing it. But before you do that, please consult your bank account.',
        Mid: 'You approach travelling with a very sensible and methodical approach. Hoteliers need more people like you!',
        Low: 'While high Regret Aversion may seem that you can never, ever travel, it is important to take a more positive view of life and get backpacking.',
      },
      Maximizing: {
        High: 'HHigh Maximizing makes you feel stressed about traveling. This may be because you are looking for the best possible solution trying to cover all eventualities. You can get over this by trying to set aside some time to travel serendipitously!',
        Mid: 'You approach travelling with a very sensible and methodical decision style; you blend careful planning with freestyle thinking which enhances your quality of travel.',
        Low: 'While high Satisficing may seem that you can travel when and as you like, it is important to take a more realistic view of life and prioritize your wants and needs.',
      },
      Prevention: {
        High: 'A high Prevention focus can make you feel stressed when planning to travel or traveling. You may feel constrained and nervous overpreparing for potential issues which may never happen.',
        Mid: 'Your approach travelling with a very sensible and focused approach. This could work great for you!',
        Low: 'While a high Promotion focus may seem that you can keep travelling all your life, it is important to take a more realistic view of life and add a little more structure.',
      },
    },
  },
];

export const FooterTextCalc: (
  Promotion: number,
  Prevention: number,
  OO: number,
  RA: number,
  Satisficing: number,
  Maximizing: number,
  SelectedText: string
) => string[] = (
  Promotion: number,
  Prevention: number,
  OO: number,
  RA: number,
  Satisficing: number,
  Maximizing: number,
  SelectedText: string
) => {
  const resultArray: string[] = [];
  const textOption = PossibleTextValues.filter((possibleValue) => {
    return possibleValue.name === SelectedText;
  });
  if (textOption.length > FirstIndex) {
    if (OO > LIMIT) {
      resultArray.push(textOption[FirstIndex]?.value.OO.High);
    } else if (OO < LIMIT && RA < LIMIT) {
      resultArray.push(textOption[FirstIndex]?.value.OO.Mid);
    } else {
      resultArray.push(textOption[FirstIndex]?.value.OO.Low);
    }
    if (Maximizing > LIMIT) {
      resultArray.push(textOption[FirstIndex]?.value.Maximizing.High);
    } else if (Maximizing < LIMIT && Satisficing < LIMIT) {
      resultArray.push(textOption[FirstIndex]?.value.Maximizing.Mid);
    } else {
      resultArray.push(textOption[FirstIndex]?.value.Maximizing.Low);
    }

    if (Prevention > LIMIT) {
      resultArray.push(textOption[FirstIndex]?.value.Prevention.High);
    } else if (Prevention < LIMIT && Promotion < LIMIT) {
      resultArray.push(textOption[FirstIndex]?.value.Prevention.Mid);
    } else {
      resultArray.push(textOption[FirstIndex]?.value.Prevention.Low);
    }
  }

  return resultArray;
};
