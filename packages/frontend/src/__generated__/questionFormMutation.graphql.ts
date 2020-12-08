/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AddQuestionInput = {
    body: string;
    question: string;
    tags?: Array<string> | null;
};
export type questionFormMutationVariables = {
    input: AddQuestionInput;
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
  $input: AddQuestionInput!
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
            "cacheID": "513f1f39249cfb1f6d9546bbf2d5c9aa",
            "id": null,
            "metadata": {},
            "name": "questionFormMutation",
            "operationKind": "mutation",
            "text": "mutation questionFormMutation(\n  $input: AddQuestionInput!\n) {\n  addQuestion(input: $input) {\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '64e4f151306a4dd57794a48ac081b2da';
export default node;
