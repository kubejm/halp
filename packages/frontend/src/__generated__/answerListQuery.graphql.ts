/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ViewQuestionInput = {
    id: string;
};
export type answerListQueryVariables = {
    input: ViewQuestionInput;
};
export type answerListQueryResponse = {
    readonly viewQuestion: {
        readonly questionAnswers: ReadonlyArray<{
            readonly body: string;
            readonly user: {
                readonly username: string;
            };
            readonly createdAtRelative: string;
        }>;
    };
};
export type answerListQuery = {
    readonly response: answerListQueryResponse;
    readonly variables: answerListQueryVariables;
};



/*
mutation answerListQuery(
  $input: ViewQuestionInput!
) {
  viewQuestion(input: $input) {
    questionAnswers {
      body
      user {
        username
        id
      }
      createdAtRelative
      id
    }
    id
  }
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
        "name": "body",
        "storageKey": null
    } as any), v3 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "username",
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
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any);
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "answerListQuery",
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
                            "alias": null,
                            "args": null,
                            "concreteType": "QuestionAnswer",
                            "kind": "LinkedField",
                            "name": "questionAnswers",
                            "plural": true,
                            "selections": [
                                (v2 /*: any*/),
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "User",
                                    "kind": "LinkedField",
                                    "name": "user",
                                    "plural": false,
                                    "selections": [
                                        (v3 /*: any*/)
                                    ],
                                    "storageKey": null
                                },
                                (v4 /*: any*/)
                            ],
                            "storageKey": null
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
            "name": "answerListQuery",
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
                            "alias": null,
                            "args": null,
                            "concreteType": "QuestionAnswer",
                            "kind": "LinkedField",
                            "name": "questionAnswers",
                            "plural": true,
                            "selections": [
                                (v2 /*: any*/),
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "User",
                                    "kind": "LinkedField",
                                    "name": "user",
                                    "plural": false,
                                    "selections": [
                                        (v3 /*: any*/),
                                        (v5 /*: any*/)
                                    ],
                                    "storageKey": null
                                },
                                (v4 /*: any*/),
                                (v5 /*: any*/)
                            ],
                            "storageKey": null
                        },
                        (v5 /*: any*/)
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "43f3be3aac0f11f507f8438c5c0dca4a",
            "id": null,
            "metadata": {},
            "name": "answerListQuery",
            "operationKind": "mutation",
            "text": "mutation answerListQuery(\n  $input: ViewQuestionInput!\n) {\n  viewQuestion(input: $input) {\n    questionAnswers {\n      body\n      user {\n        username\n        id\n      }\n      createdAtRelative\n      id\n    }\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'd03fca7acac909254e4c4b523c4c3081';
export default node;
