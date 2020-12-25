/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AnswerQuestionInput = {
    answer: string;
    id: string;
};
export type answerFormMutationVariables = {
    input: AnswerQuestionInput;
};
export type answerFormMutationResponse = {
    readonly answerQuestion: {
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"questionDetails_question" | "answerList_question">;
    };
};
export type answerFormMutation = {
    readonly response: answerFormMutationResponse;
    readonly variables: answerFormMutationVariables;
};



/*
mutation answerFormMutation(
  $input: AnswerQuestionInput!
) {
  answerQuestion(input: $input) {
    id
    ...questionDetails_question
    ...answerList_question
  }
}

fragment answerList_question on Question {
  questionAnswers {
    body
    user {
      username
      id
    }
    createdAtRelative
    id
  }
}

fragment questionDetails_question on Question {
  id
  answers
  body
  createdAtRelative
  question
  tags {
    name
    id
  }
  user {
    username
    id
  }
  views
  votes
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "input"
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "input",
            "variableName": "input"
        } as any)
    ], v2 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any), v3 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "body",
        "storageKey": null
    } as any), v4 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAtRelative",
        "storageKey": null
    } as any), v5 = ({
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
            {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "username",
                "storageKey": null
            },
            (v2 /*: any*/)
        ],
        "storageKey": null
    } as any);
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "answerFormMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "answerQuestion",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "questionDetails_question"
                        },
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "answerList_question"
                        }
                    ],
                    "storageKey": null
                }
            ],
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "answerFormMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "answerQuestion",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "answers",
                            "storageKey": null
                        },
                        (v3 /*: any*/),
                        (v4 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "question",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Tag",
                            "kind": "LinkedField",
                            "name": "tags",
                            "plural": true,
                            "selections": [
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "name",
                                    "storageKey": null
                                },
                                (v2 /*: any*/)
                            ],
                            "storageKey": null
                        },
                        (v5 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "views",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "votes",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "QuestionAnswer",
                            "kind": "LinkedField",
                            "name": "questionAnswers",
                            "plural": true,
                            "selections": [
                                (v3 /*: any*/),
                                (v5 /*: any*/),
                                (v4 /*: any*/),
                                (v2 /*: any*/)
                            ],
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "0243c5906cdfa5b05a4d333102620ead",
            "id": null,
            "metadata": {},
            "name": "answerFormMutation",
            "operationKind": "mutation",
            "text": "mutation answerFormMutation(\n  $input: AnswerQuestionInput!\n) {\n  answerQuestion(input: $input) {\n    id\n    ...questionDetails_question\n    ...answerList_question\n  }\n}\n\nfragment answerList_question on Question {\n  questionAnswers {\n    body\n    user {\n      username\n      id\n    }\n    createdAtRelative\n    id\n  }\n}\n\nfragment questionDetails_question on Question {\n  id\n  answers\n  body\n  createdAtRelative\n  question\n  tags {\n    name\n    id\n  }\n  user {\n    username\n    id\n  }\n  views\n  votes\n}\n"
        }
    } as any;
})();
(node as any).hash = 'd750e9099ad698d61531eaf8acbf3d96';
export default node;