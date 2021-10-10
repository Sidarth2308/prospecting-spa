const LIMIT = 60;
const FirstIndex = 0;

export const ThinkingStyleTextCalc1: (OO: number, RA: number) => string = (
  OO: number,
  RA: number
) => {
  if (OO > LIMIT) {
    return 'Higher OO can motivate you to work harder, leading to better outcomes and a more fulfilling life. And because you have lower Regret Aversion, you do this more enthusiastically than others.';
  } else if (OO < LIMIT && RA < LIMIT) {
    return 'A well balanced OO and RA enables you to be both realistic and enthusiastic when it comes to money. Your slow and steady approach is conducive to long term wealth creation and preservation.';
  }
  return 'Higher RA enables you to approach things carefully, and helps you think through the consequences of your actions. And because you have lower OO, you do this more pragmatically than others.';
};

export const ThinkingStyleTextCalc2: (OO: number, RA: number) => string = (
  OO: number,
  RA: number
) => {
  if (OO > LIMIT) {
    return 'Some people with high OO end up ‘unrealistically’ overestimating their chances of success. This might lead to more risk taking than is appropriate for one’s situation. ';
  } else if (RA < LIMIT && OO < LIMIT) {
    return 'Because your OO and RA are closely balanced, you may tend to flip-flop a bit; alternating between feeling good and second-guessing actions taken. ';
  }
  return 'Some people with high RA can end up with analysis-paralysis. Because you are so concerned about what could go wrong, you may miss out great opportunities that is appropriate for your situation.';
};

export const ThinkingStyleTextCalc3: (OO: number, RA: number) => string = (
  OO: number,
  RA: number
) => {
  if (OO > LIMIT) {
    return 'Put OO into good use by taking time to find information that goes against key assumptions you are making.';
  } else if (RA < LIMIT && OO < LIMIT) {
    return 'A balanced OO and RA is a great combination; you can make it even better by ensuring you are not getting caught with confirmation bias issues.';
  }
  return 'Use your higher RA to consider what you will be missing out on by not taking this particular action that you are struggling with.';
};

export const DecisionStyleTextCalc1: (
  Satisficing: number,
  Maximizing: number
) => string = (Satisficing: number, Maximizing: number) => {
  if (Maximizing > LIMIT) {
    return 'High Maximizing can motivate you to keep looking till you find the best possible solution. And because you have lower Satisficing, you do this uncompromisingly than most others.';
  } else if (Maximizing < LIMIT && Satisficing < LIMIT) {
    return 'A balanced Maximizing and Satisficing outlook enable you to be both optimal and realistic when it comes to financial life. This balanced approach is conducive to long term wealth creation and preservation.';
  }
  return 'Higher Satisficing quotient enables you to decide things quickly and smartly. And because you have lower Maximizing, you do this more pragmatically than others without worrying too much about finding the best possible solution.';
};

export const DecisionStyleTextCalc2: (
  Satisficing: number,
  Maximizing: number
) => string = (Satisficing: number, Maximizing: number) => {
  if (Maximizing > LIMIT) {
    return 'Some people with high Maximizing end up looking all the time without landing a solution. This might lead to not acting timely and hence, missing out on opportunities.';
  } else if (Satisficing < LIMIT && Maximizing < LIMIT) {
    return 'Because your Maximizing and Satisficing tendencies are so finely balanced, you may tend to struggle before deciding; at times you will feel like still searching and other times you will feel like acting quickly.';
  }
  return 'Some people with high Satisficing can make somewhat rash decisions because they don’t spend much time looking for solutions. Because you are so concerned about getting quick results, you may miss out great opportunities for lack of consideration.';
};

export const DecisionStyleTextCalc3: (
  Satisficing: number,
  Maximizing: number
) => string = (Satisficing: number, Maximizing: number) => {
  if (Maximizing > LIMIT) {
    return 'Leverage your high Maximizing by considering all possible ideas on how you can stop maximizing.';
  } else if (Satisficing < LIMIT && Maximizing < LIMIT) {
    return 'Your balanced approach to making decisions is great; Ensure you keep doing this again and again.';
  }
  return 'Since you have such high Satisficing, you will not listen to what we have to say. So, no point in an action point for you.';
};

export const FocusTextCalc1: (Promotion: number, Prevention: number) => string =
  (Promotion: number, Prevention: number) => {
    if (Promotion > LIMIT) {
      return 'Higher Promotion quotient enables you to promote yourself, your ideas and your life more than others. And because you have lower Prevention, you do this without any constraint. More power to you!';
    } else if (Promotion < LIMIT && Prevention < LIMIT) {
      return 'A balanced Prevention and Promotion outlook enables you to be both reward and risk focused when it comes to making financial decisions. This balanced approach is conducive to long term wealth creation and preservation.';
    }
    return 'High Prevention focus is great because that means you will never need to spend your energy to actually do anything because you are so negative you use it all up just trying to deal with it.';
  };

export const FocusTextCalc2: (Promotion: number, Prevention: number) => string =
  (Promotion: number, Prevention: number) => {
    if (Promotion > LIMIT) {
      return 'Some people with high Promotion can become megalomaniacs because they cannot see beyond themselves. Because you are so concerned about the rewards, you may take more risks than a sane person would take.';
    } else if (Prevention < LIMIT && Promotion < LIMIT) {
      return 'Because these tendencies are so closely aligned, you may tend to struggle before deciding; at times you will feel like focusing on the rewards and at other times on the risks.';
    }
    return 'Some people with high Prevention focus end up actually taking an action by mistake. Remember, not acting is also a decision just as much as acting is. ';
  };

export const FocusTextCalc3: (Promotion: number, Prevention: number) => string =
  (Promotion: number, Prevention: number) => {
    if (Promotion > LIMIT) {
      return 'Because you are so Promotion focused, there is no real point in telling you what to do. Good luck with your life!';
    } else if (Prevention < LIMIT && Promotion < LIMIT) {
      return 'This is a great approach to life, keep it up!';
    }
    return 'Because your Prevention focus is so high you will only focus on the negatives of this action point.';
  };

export const PossibleTextValues = [
  {
    name: 'Family',
    value: {
      OO: {
        High: 'High OO may make you feel like everything will be alright, and it’s important to plan things out.',
        Mid: 'A balanced approach is great to take care of the family.',
        Low: 'High RA may make you feel like everything is doom and gloom. But that need not be the case necessarily.',
      },
      Maximizing: {
        High: 'High Max may prevent you from doing anything on time because you spend time looking for the best solution.',
        Mid: 'A balanced approach is great to take care of the family as you are pragmatic yet smart.',
        Low: 'High Satisficing may make you pick any solution without careful thought. It’s your Family, so for heaven’s sake think through it!',
      },
      Prevention: {
        High: 'High Prevention may prevent you from doing anything on time because you spend time looking for the best solution.',
        Mid: 'A balanced regulatory focus is great to take care of the family as you are pragmatic yet smart.',
        Low: 'High Promotion may make you pick any solution without careful thought. It’s your Family, so for heaven’s sake think through it!',
      },
    },
  },
  {
    name: 'Freedom',
    value: {
      OO: {
        High: 'High OO may lead you to over-estimate where you stand with respect to financial freedom.',
        Mid: 'Your sense of financial freedom is probably well thought-out as you have a balanced thinking style.',
        Low: 'High RA may make you feel like you are in no way ready for freedom; and it may actually bound you more than you think.',
      },
      Maximizing: {
        High: 'High Max may make you feel that you have the freedom to do what you want. But do you really?',
        Mid: 'Your sense of financial freedom is probably well thought-out as you have a balanced decision style.',
        Low: 'High Satisficing may make you feel like you are very free; and it may actually bound you more than you think.',
      },
      Prevention: {
        High: 'High Prevention may make you feel that you have the freedom to do what you want. But do you really?',
        Mid: 'Your sense of financial freedom is probably well thought-out as you have a balanced locus of focus.',
        Low: 'High Promotion may make you feel like you are very free; and it may actually bound you more than you think.',
      },
    },
  },
  {
    name: 'Security',
    value: {
      OO: {
        High: 'While High OO is great, are you sure you are not neglecting legitimate risks and hence, are adequately covered for them?',
        Mid: 'Based on your balanced profile, it is highly likely that you have taken a balanced approach to securing your financial future too.',
        Low: 'High RA may prevent you from taking the right approach as you make regret taking an action. And sometimes, not taking an action can lead to even more regret especially when it comes to Security.',
      },
      Maximizing: {
        High: 'While High Maximizing is great, are you sure you are not neglecting legitimate risks and hence, are adequately covered for them?',
        Mid: 'Based on your balanced Decision Style, it is highly likely that you have taken a balanced approach to securing your financial future too.',
        Low: 'High Satisficing may prevent you from taking the right approach as you take speedy calls.',
      },
      Prevention: {
        High: 'While High Prevention is great, are you sure you are not neglecting legitimate risks and hence, are adequately covered for them?',
        Mid: 'Based on your balanced Focus, it is highly likely that you have taken a balanced approach to securing your financial future too.',
        Low: 'High Promotion may prevent you from taking the right approach as you take speedy calls.',
      },
    },
  },
  {
    name: 'Community',
    value: {
      OO: {
        High: 'High OO gives you the energy to deal with any community issues in a passionate and persevering way. Ensure you do not get drained though.',
        Mid: 'You approach and tackle community issues with a very sensible and methodical approach. We need more people like you!',
        Low: 'While high RA may seem that nothing can ever get done, it is important to take a more positive view of life and get going.',
      },
      Maximizing: {
        High: 'High Max may overwhelm you when tackling community issues. Ensure you do not get drained though.',
        Mid: 'You approach and tackle community issues with a very sensible and methodical decision style approach. That’s great!',
        Low: 'While high Satisficing may seem everything can get done, it is important to take a more realistic view of life, stop, and reflect.',
      },
      Prevention: {
        High: 'High Prevention may overwhelm you when tackling community issues. Ensure you do not get drained though.',
        Mid: 'You approach and tackle community issues with a very sensible and methodical focus. That’s great!',
        Low: 'While high Promotion may seem everything can get done, it is important to take a more realistic view of life, stop, and reflect.',
      },
    },
  },
  {
    name: 'Health',
    value: {
      OO: {
        High: 'High OO may make you feel like you are on the right path. While this is great for mental well-being, when it comes to physical health this may be a problem area. Please check with a proper professional on a regular basis.',
        Mid: 'You approach and tackle health and wellness with a very sensible and methodical approach. We need more people like you!',
        Low: 'High RA may make you feel like you are in no way ready for health and wellness; this thinking may prevent you from taking the right action.',
      },
      Maximizing: {
        High: 'High Maximizing may make you feel like you can never get on the right path. Not so great for mental well-being!',
        Mid: 'You approach and tackle health and wellness by taking very sensible and methodical decisions. We need more people like you!',
        Low: 'High Satisficing may make you feel like you are in no way ready for health and wellness; this thinking may prevent you from taking the right action.',
      },
      Prevention: {
        High: 'High Prevention may make you feel like you can never get on the right path. Not so great for mental well-being!',
        Mid: 'You approach and tackle health and wellness by taking very sensible and methodical focus. We need more people like you!',
        Low: 'High Promotion may make you feel like you are in no way ready for health and wellness; this thinking may prevent you from taking the right action.',
      },
    },
  },
  {
    name: 'Helping Others',
    value: {
      OO: {
        High: 'High OO gives you the energy to help others in a passionate and loving manner. Ensure you do not get drained though.',
        Mid: 'You approach helping others with a very sensible and methodical approach. Thank you for your service!',
        Low: 'High RA may make you feel like everything is doom and gloom and that there is very little point in helping others. As a start, help yourself first!',
      },
      Maximizing: {
        High: 'High Maximizing gives you the energy to help others in a passionate and loving manner. Ensure you do not get drained though.',
        Mid: 'You approach helping others with a very sensible and methodical Decision Style. Thank you for your service!',
        Low: 'High Satisficing may make you feel like everything is doom and gloom and that there is very little point in helping others. As a start, satisfy yourself first!',
      },
      Prevention: {
        High: 'High Prevention gives you the energy to help others in a passionate and loving manner. Ensure you do not get drained though.',
        Mid: 'You approach helping others with a very sensible and methodical Focus Style. Thank you for your service!',
        Low: 'High Promotion may make you feel like everything is doom and gloom and that there is very little point in helping others. As a start, promote yourself first!',
      },
    },
  },
  {
    name: 'Travel',
    value: {
      OO: {
        High: 'High OO makes you feel that you can do what you like and go wherever and whenever you feel like doing it. But before you do that, please consult your bank account.',
        Mid: 'You approach travelling with a very sensible and methodical approach. Hoteliers need more people like you!',
        Low: 'While high RA may seem that you can never, ever travel, it is important to take a more positive view of life and get backpacking.',
      },
      Maximizing: {
        High: 'High Maximizing makes you feel that you can never do what you like and go wherever and whenever you feel like doing it. Because you are looking for the best possible solution.',
        Mid: 'You approach travelling with a very sensible and methodical decision with precision approach. Hoteliers need more people like you!',
        Low: 'While high Satisficing may seem that you can keep travelling all your life, it is important to take a more negative view of life and stop backpacking.',
      },
      Prevention: {
        High: 'High Maximizing makes you feel that you can never do what you like and go wherever and whenever you feel like doing it. Because you are looking for the best possible solution.',
        Mid: 'You approach travelling with a very sensible and focused approach. Hoteliers need more people like you!',
        Low: 'While high Promotion may seem that you can keep travelling all your life, it is important to take a more negative view of life and stop backpacking.',
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
