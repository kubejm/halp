/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AddQuestionInput = {
    body: string;
    question: string;
    tags: Array<string>;
};
export type QuestionFormMutationVariables = {
    input: AddQuestionInput;
};
export type QuestionFormMutationResponse = {
    readonly addQuestion: {
        readonly id: string;
    };
};
export type QuestionFormMutation = {
    readonly response: QuestionFormMutationResponse;
    readonly variables: QuestionFormMutationVariables;
};



/*
mutation QuestionFormMutation(
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
            "name": "QuestionFormMutation",
            "selections": (v1 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "QuestionFormMutation",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "fe5979d6cc45706f44eb47d68dd642d5",
            "id": null,
            "metadata": {},
            "name": "QuestionFormMutation",
            "operationKind": "mutation",
            "text": "mutation QuestionFormMutation(\n  $input: AddQuestionInput!\n) {\n  addQuestion(input: $input) {\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'b45247e03e9e156f815a769ff5d7fd79';
export default node;
