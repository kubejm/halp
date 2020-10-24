/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type QuestionValidator = {
    author: string;
    body: string;
    question: string;
};
export type questionFormMutationVariables = {
    input: QuestionValidator;
};
export type questionFormMutationResponse = {
    readonly addQuestion: {
        readonly id: string;
    };
};
export type questionFormMutation = {
    readonly response: questionFormMutationResponse;
    readonly variables: questionFormMutationVariables;
};



/*
mutation questionFormMutation(
  $input: QuestionValidator!
) {
  addQuestion(input: $input) {
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
            "alias": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input"
                }
            ],
            "concreteType": "Question",
            "kind": "LinkedField",
            "name": "addQuestion",
            "plural": false,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                }
            ],
            "storageKey": null
        } as any)
    ];
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "questionFormMutation",
            "selections": (v1 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "questionFormMutation",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "843eab46be7eb1e360d1475ea4921042",
            "id": null,
            "metadata": {},
            "name": "questionFormMutation",
            "operationKind": "mutation",
            "text": "mutation questionFormMutation(\n  $input: QuestionValidator!\n) {\n  addQuestion(input: $input) {\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '053628d9edce48d48179ed0439fa93eb';
export default node;
