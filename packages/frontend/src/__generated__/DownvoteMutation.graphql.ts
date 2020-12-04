/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type DownvoteQuestionInput = {
    id: string;
};
export type DownvoteMutationVariables = {
    input: DownvoteQuestionInput;
};
export type DownvoteMutationResponse = {
    readonly downvoteQuestion: {
        readonly votes: number;
    };
};
export type DownvoteMutation = {
    readonly response: DownvoteMutationResponse;
    readonly variables: DownvoteMutationVariables;
};



/*
mutation DownvoteMutation(
  $input: DownvoteQuestionInput!
) {
  downvoteQuestion(input: $input) {
    votes
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
        "name": "votes",
        "storageKey": null
    } as any);
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "DownvoteMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "downvoteQuestion",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/)
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
            "name": "DownvoteMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "downvoteQuestion",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "id",
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "ede37b843f5b5155b6fc9c53cc3e0e6c",
            "id": null,
            "metadata": {},
            "name": "DownvoteMutation",
            "operationKind": "mutation",
            "text": "mutation DownvoteMutation(\n  $input: DownvoteQuestionInput!\n) {\n  downvoteQuestion(input: $input) {\n    votes\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '6b732780c050ca45a65c97e65b197daf';
export default node;
