import mongoose, {Schema, Document} from 'mongoose';
import MUUID from 'uuid-mongodb';

/**
 * This is up to date as of 9/21/2021
 */

type TAssessmentResponseSection = NestedResponseItem[];

type NestedResponseItem = string[] | SubNestedResponseItem[];

type SubNestedResponseItem = string[];

//Ex: Drap and Drop Array

// let test: TAssessmentResponseSection[] = [
//   [
//     // I Lean
//     ["6", "6"],
//     ["8", "8"],
//     ["2", "2"],
//     ["3", "3"],
//     [
//       // Drag and Drop Question
//       ["Security", "0.1"],
//       ["Helping Others", "0.1"],
//       ["Freedom", "0.2"],
//       ["Family", "0.4"],
//       ["Travel", "0.3"],
//       ["Community", "0.1"],
//       ["Health", "0.2"],
//       ["User Input A", "0.0"],
//       ["User Input B", "0.0"],
//       ["User Input C", "0.0"]
//     ]
//   ],
//   [
//     // I Lean
//     ["6", "6"],
//     ["8", "8"],
//     ["2", "2"],
//     ["3", "3"],
//     [
//       // Drag and Drop Question
//       ["Security", "0.1"],
//       ["Helping Others", "0.1"],
//       ["Freedom", "0.2"],
//       ["Family", "0.4"],
//       ["Travel", "0.3"],
//       ["Community", "0.1"],
//       ["Health", "0.2"],
//       ["User Input A", "0.0"],
//       ["User Input B", "0.0"],
//       ["User Input C", "0.0"]
//     ]
//   ],
// ];

export interface IAssessment extends Document {
  uuid: object;
  region: string;
  name: string;
  template_id: object;
  theme: string;
  relations: {
    organization_id: object;
    suborganization_id: object;
    advisor_id: object;
    client_id: object;
  };
  client: {
    first_name: string;
    age_range: string;
    gender: string;
    age: number;
    education: string;
    income_range: {
      low: number;
      high: number;
    };
  };
  sections: string[];
  questions_id: object;
  responses: TAssessmentResponseSection[];
  results: object;
  reports: {
    client: {
      template_id: object;
      link: string;
      last_accessed: Date;
    };
    advisor: {
      template_id: object;
      link: string;
    };
  };
  status: string;
  percent_complete: number;
  last_question_completed: number;
  created_at: Date;
  updated_at: Date;
  completed_at: Date;
  meta_data: Map<string, string>;
}
// Create a Schema corresponding to the document interface.

const schema: Schema = new Schema(
  {
    uuid: {
      type: 'object',
      value: {type: 'Buffer'},
      index: true,
      background: true,
      unique: true,
      default: () => MUUID.v4(),
    },
    region: {
      type: Schema.Types.String,
      trim: true,
      enum: {
        values: ['US', 'EU', 'AP'],
        message: '{VALUE} is not supported',
      },
      default: 'US',
    },
    name: {
      type: Schema.Types.String,
      trim: true,
      default: '',
    },
    template_id: {
      type: 'object',
      value: {type: 'Buffer'},
      index: true,
      background: true,
    },
    theme: {
      type: Schema.Types.String,
      trim: true,
      default: '',
    },
    relations: {
      organization_id: {
        type: 'object',
        value: {type: 'Buffer'},
        index: true,
        background: true,
      },
      suborganization_id: {
        type: 'object',
        value: {type: 'Buffer'},
        index: true,
        background: true,
      },
      advisor_id: {
        type: 'object',
        value: {type: 'Buffer'},
        index: true,
        background: true,
      },
      client_id: {
        type: 'object',
        value: {type: 'Buffer'},
        index: true,
        background: true,
      },
    },
    client: {
      first_name: {
        type: Schema.Types.String,
        trim: true,
        default: '',
      },
      age_range: {
        type: Schema.Types.String,
        trim: true,
        default: '',
      },
      gender: {
        type: Schema.Types.String,
        trim: true,
        default: '',
      },
      age: {
        type: Schema.Types.Number,
        min: [0, 'Cannot have a number less than zero'],
        default: 0,
      },
      education: {
        type: Schema.Types.String,
        trim: true,
        default: '',
      },
      income_range: {
        low: {
          type: Schema.Types.Number,
          min: [0, 'Cannot have a number less than zero'],
          default: 0,
        },
        high: {
          type: Schema.Types.Number,
          min: [0, 'Cannot have a number less than zero'],
          default: 0,
        },
      },
    },
    sections: {
      type: [Schema.Types.String],
      default: [],
    },
    questions_id: {
      type: 'object',
      value: {type: 'Buffer'},
      index: true,
      background: true,
    },
    responses: {
      type: [[Schema.Types.String || [Schema.Types.String]]],
      default: [],
    },
    results: {
      type: Schema.Types.Mixed,
      default: {},
    },
    reports: {
      client: {
        template_id: Schema.Types.Buffer,
        link: {
          type: Schema.Types.String,
          default: '',
        },
        last_accessed: Schema.Types.Date,
      },
      advisor: {
        template_id: Schema.Types.Buffer,
        link: {
          type: Schema.Types.String,
          default: '',
        },
      },
    },
    status: Schema.Types.String,
    percent_complete: {
      type: Schema.Types.Number,
      min: [0, 'Cannot have a number less than zero'],
      default: 0,
    },
    last_question_completed: {
      type: Schema.Types.Number,
      min: [0, 'Cannot have a number less than zero'],
      default: 0,
    },
    completed_at: Schema.Types.Date,
    meta_data: {
      type: Schema.Types.Map,
      of: Schema.Types.String,
      default: () => new Map(),
    },
  },
  {
    collection: 'assessments',
    minimize: false,
    strict: true,
    optimisticConcurrency: true,
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      currentTime: () => Date.now(),
    },
  }
);

// Set Getters and Setters for toJSON and toObject
schema.set('toJSON', {getters: true, virtuals: false});
schema.set('toObject', {getters: true});

//  Create a Model.
export default mongoose.model<IAssessment>('Assessment', schema);

// A DB example looks like:

/*

{
  "client": {
      "first_name": "Amma",
      "age": 31,
      "age_range": "undefined",
      "gender": "female",
      "education": "masters",
      "income_range": {
          "low": 10,
          "high": 20
      }
  },
  "reports": {
      "client": {
          "template_id": {
              "$binary": "c3LCKH7hRSistfOGl7Ygtw==",
              "$type": "4"
          },
          "link": "http://robbie.org",
          "last_accessed": {
              "$date": "1992-05-21T12:29:59.658Z"
          }
      },
      "advisor": {
          "template_id": {
              "$binary": "J+VjyXEQRnO8gSwnf1L9Mg==",
              "$type": "4"
          },
          "link": "https://harmony.info"
      }
  },
  "region": "US",
  "name": "Darlene Hagenes",
  "theme": "Some-Theme-Name",
  "sections": ["Behaviors", "Biases", "Blindspots", "Risk"],
  "responses": [
    [
      ["Half Full", "1.0"],
      ["78", "78"],
      ["50", "50"],
      ["25", "25"],
      ["100", "100"],
      ["72", "72"]
    ],
    [
      ["15", "15"],
      ["27", "27"],
      ["Stick to the current route", "0.1"],
      ["Ahh I hate it! :rage:", "0.1"],
      ["Well, Thats Life! :smiling_face:", "0.2"]
    ],
    [
      ["Losses", "0.1"],
      ["I ended up doing", "0.2"],
      ["The risk", "0.1"],
      ["What others expect of me", "0.1"]
    ],
    [
      ["6", "6"],
      ["8", "8"],
      ["2", "2"],
      ["3", "3"],
      [
        ["Security", "0.1"],
        ["Helping Others", "0.1"],
        ["Freedom", "0.2"],
        ["Family", "0.4"],
        ["Travel", "0.3"],
        ["Community", "0.1"],
        ["Health", "0.2"],
        ["User Input A", "0.0"],
        ["User Input B", "0.0"],
        ["User Input C", "0.0"]
      ]
    ]
  ],
  "percent_complete": 44379,
  "last_question_completed": 58469,
  "uuid": {
      "$binary": "a9KSV8KbQJis9GlfYc6Luw==",
      "$type": "4"
  },
  "template_id": {
      "$binary": "2WLLdrQHRY+OO5lmwdo9tw==",
      "$type": "4"
  },
  "relations": {
      "organization_id": {
          "$binary": "0nWtx8VeRv68ygHANbiVuA==",
          "$type": "4"
      },
      "suborganization_id": {
          "$binary": "3r+pU6nfQUyCT1Z4LhksHA==",
          "$type": "4"
      },
      "advisor_id": {
          "$binary": "ISkK+Ph9Qq20Q6Bk8fJfzg==",
          "$type": "4"
      },
      "client_id": {
          "$binary": "JjcxNFc7QXWf2cV+upHSQw==",
          "$type": "4"
      }
  },
  "questions_id": {
      "$binary": "bHw/O+99TOuJRrGjUCFvcg==",
      "$type": "4"
  },
  "results": {
      "tbd": "TBD"
  },
  "status": "in_progress",
  "completed_at": {
      "$date": "2027-04-06T11:45:54.427Z"
  },
  "meta_data": {
      "foo": "1RuA8O+0f*"
  },
  "created_at": {
      "$date": "2021-08-30T05:33:36.113Z"
  },
  "updated_at": {
      "$date": "2021-09-09T02:37:06.764Z"
  },
  "__v": 0
}
*/
