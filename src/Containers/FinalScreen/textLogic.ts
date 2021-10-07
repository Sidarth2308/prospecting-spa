const LIMIT = 60;
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
