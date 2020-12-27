/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AnswerQuestionInput = {
    answer: string;
    id: string;
};
export type AnswerFormMutationVariables = {
    input: AnswerQuestionInput;
};
export type AnswerFormMutationResponse = {
    readonly answerQuestion: {
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"QuestionDetails_question" | "AnswerList_question">;
    };
};
export type AnswerFormMutation = {
    readonly response: AnswerFormMutationResponse;
    readonly variables: AnswerFormMutationVariables;
};



/*
mutation AnswerFormMutation(
  $input: AnswerQuestionInput!
) {
  answerQuestion(input: $input) {
    id
    ...QuestionDetails_question
    ...AnswerList_question
  }
}

fragment AnswerList_question on Question {
  answers {
    id
    body
    user {
      username
      id
    }
    createdAtRelative
  }
}

fragment QuestionDetails_question on Question {
  id
  answerCount
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
  voteCount
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
            "name": "AnswerFormMutation",
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
                            "name": "QuestionDetails_question"
                        },
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "AnswerList_question"
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
            "name": "AnswerFormMutation",
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
                            "name": "answerCount",
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
                            "name": "voteCount",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Answer",
                            "kind": "LinkedField",
                            "name": "answers",
                            "plural": true,
                            "selections": [
                                (v2 /*: any*/),
                                (v3 /*: any*/),
                                (v5 /*: any*/),
                                (v4 /*: any*/)
                            ],
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "d221658e357cc4f39e291e65810b650a",
            "id": null,
            "metadata": {},
            "name": "AnswerFormMutation",
            "operationKind": "mutation",
            "text": "mutation AnswerFormMutation(\n  $input: AnswerQuestionInput!\n) {\n  answerQuestion(input: $input) {\n    id\n    ...QuestionDetails_question\n    ...AnswerList_question\n  }\n}\n\nfragment AnswerList_question on Question {\n  answers {\n    id\n    body\n    user {\n      username\n      id\n    }\n    createdAtRelative\n  }\n}\n\nfragment QuestionDetails_question on Question {\n  id\n  answerCount\n  body\n  createdAtRelative\n  question\n  tags {\n    name\n    id\n  }\n  user {\n    username\n    id\n  }\n  views\n  voteCount\n}\n"
        }
    } as any;
})();
(node as any).hash = '6e22be0fd08e64162dee76107acbb7ee';
export default node;
