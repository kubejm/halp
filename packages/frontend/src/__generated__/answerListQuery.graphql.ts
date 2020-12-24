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
                                (v2 /*: any*/)
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
                                (v3 /*: any*/)
                            ],
                            "storageKey": null
                        },
                        (v3 /*: any*/)
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "407ab0895df3ba4af312d402bfe49acb",
            "id": null,
            "metadata": {},
            "name": "answerListQuery",
            "operationKind": "mutation",
            "text": "mutation answerListQuery(\n  $input: ViewQuestionInput!\n) {\n  viewQuestion(input: $input) {\n    questionAnswers {\n      body\n      id\n    }\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'cf03c2ca7dd66e064d0b07ba781c8fd4';
export default node;
