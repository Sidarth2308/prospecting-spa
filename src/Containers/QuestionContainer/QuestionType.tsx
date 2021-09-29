/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable no-magic-numbers */
import {FC} from 'react';
import DatePicker from '../../Components/DatePicker';
import DragAndDrop from '../../Components/DragAndDrop';
import RadioButton, {
  RadioButtonWithTwoOptions,
} from '../../Components/RadioButton';
import {
  SliderComponent,
  SliderComponentWithNotation,
  SliderComponentWithTransition,
} from '../../Components/Slider';
type Props = {
  questionDetails: any;
  graphic?: string;

  graphic1?: string;
  graphic2?: string;
  dimension: string[];
};

const QuestionType: FC<Props> = ({
  questionDetails,
  graphic,
  dimension,
  graphic2,
  graphic1,
}) => {
  if (questionDetails[0]?.question_type === 'small-multicard') {
    return (
      <RadioButton
        graphic={graphic ? graphic : ''}
        options={questionDetails[0]?.context.multicard}
        dimension={dimension}
      />
    );
  } else if (questionDetails[0]?.question_type === 'slider') {
    return (
      <SliderComponent
        graphic={graphic ? graphic : ''}
        slider={questionDetails[0]?.context.slider}
        dimension={dimension}
      />
    );
  } else if (questionDetails[0]?.question_type === 'slider-with-transition') {
    return (
      <SliderComponentWithTransition
        graphic1={graphic1 ? graphic1 : ''}
        graphic2={graphic2 ? graphic2 : ''}
        options={[
          questionDetails[0]?.context.left.text.below,
          questionDetails[0]?.context.right.text.below,
        ]}
        dimension={dimension}
        slider={questionDetails[0]?.context.slider}
      />
    );
  } else if (questionDetails[0]?.question_type === 'card') {
    return (
      <RadioButtonWithTwoOptions
        options={[
          questionDetails[0]?.context.left.text.center,
          questionDetails[0]?.context.right.text.center,
        ]}
        dimension={dimension}
        graphic={graphic ? graphic : ''}
      />
    );
  } else if (questionDetails[0]?.question_type === 'slider-with-notation') {
    return (
      <SliderComponentWithNotation
        graphic={graphic ? graphic : ''}
        options={[
          questionDetails[0]?.context.left.text.below,
          questionDetails[0]?.context.right.text.below,
        ]}
        dimension={dimension}
        slider={questionDetails[0]?.context.slider}
      />
    );
  } else if (questionDetails[0]?.question_type === 'dragdrop') {
    return <DragAndDrop data={questionDetails[0]?.context.dragdrop} />;
  } else if (questionDetails[0]?.question_type === 'date-picker') {
    return <DatePicker />;
  }
  return <div>I am QuestionType</div>;
};

export default QuestionType;
