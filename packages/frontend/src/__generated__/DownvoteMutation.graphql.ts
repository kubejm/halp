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
        readonly hasUserUpvoted: boolean;
        readonly hasUserDownvoted: boolean;
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
    hasUserUpvoted
    hasUserDownvoted
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
    } as any), v3 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasUserUpvoted",
        "storageKey": null
    } as any), v4 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasUserDownvoted",
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
                        (v2 /*: any*/),
                        (v3 /*: any*/),
                        (v4 /*: any*/)
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
                        (v3 /*: any*/),
                        (v4 /*: any*/),
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
            "cacheID": "9e7fa3a9cf68d2fb40a86f2724dc42dc",
            "id": null,
            "metadata": {},
            "name": "DownvoteMutation",
            "operationKind": "mutation",
            "text": "mutation DownvoteMutation(\n  $input: DownvoteQuestionInput!\n) {\n  downvoteQuestion(input: $input) {\n    votes\n    hasUserUpvoted\n    hasUserDownvoted\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '687d443a5d1343c3e5109e37488ab41d';
export default node;
