/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ViewQuestionInput = {
    id: string;
};
export type QuestionMutationVariables = {
    input: ViewQuestionInput;
};
export type QuestionMutationResponse = {
    readonly viewQuestion: {
        readonly " $fragmentRefs": FragmentRefs<"questionDetails_question" | "answerList_question">;
    };
};
export type QuestionMutation = {
    readonly response: QuestionMutationResponse;
    readonly variables: QuestionMutationVariables;
};



/*
mutation QuestionMutation(
  $input: ViewQuestionInput!
) {
  viewQuestion(input: $input) {
    ...questionDetails_question
    ...answerList_question
    id
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
            "name": "QuestionMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "viewQuestion",
                    "plural": false,
                    "selections": [
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
            "name": "QuestionMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "viewQuestion",
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
            "cacheID": "8566e3eb55681796224e600a4e67a880",
            "id": null,
            "metadata": {},
            "name": "QuestionMutation",
            "operationKind": "mutation",
            "text": "mutation QuestionMutation(\n  $input: ViewQuestionInput!\n) {\n  viewQuestion(input: $input) {\n    ...questionDetails_question\n    ...answerList_question\n    id\n  }\n}\n\nfragment answerList_question on Question {\n  questionAnswers {\n    body\n    user {\n      username\n      id\n    }\n    createdAtRelative\n    id\n  }\n}\n\nfragment questionDetails_question on Question {\n  id\n  answers\n  body\n  createdAtRelative\n  question\n  tags {\n    name\n    id\n  }\n  user {\n    username\n    id\n  }\n  views\n  votes\n}\n"
        }
    } as any;
})();
(node as any).hash = 'be1f2f2f69ba0c8e9146995301516f99';
export default node;