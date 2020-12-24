/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
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
            "name": "answerQuestion",
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
            "name": "answerFormMutation",
            "selections": (v1 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "answerFormMutation",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "42eb37cc212cd1b3ed077729bf3c7982",
            "id": null,
            "metadata": {},
            "name": "answerFormMutation",
            "operationKind": "mutation",
            "text": "mutation answerFormMutation(\n  $input: AnswerQuestionInput!\n) {\n  answerQuestion(input: $input) {\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'ef0a5173decf868e83e188531f33affb';
export default node;
