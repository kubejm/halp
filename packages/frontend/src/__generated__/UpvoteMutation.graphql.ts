/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpvoteQuestionInput = {
    id: string;
};
export type UpvoteMutationVariables = {
    input: UpvoteQuestionInput;
};
export type UpvoteMutationResponse = {
    readonly upvoteQuestion: {
        readonly votes: number;
        readonly hasUserUpvoted: boolean;
        readonly hasUserDownvoted: boolean;
    };
};
export type UpvoteMutation = {
    readonly response: UpvoteMutationResponse;
    readonly variables: UpvoteMutationVariables;
};



/*
mutation UpvoteMutation(
  $input: UpvoteQuestionInput!
) {
  upvoteQuestion(input: $input) {
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
            "name": "UpvoteMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "upvoteQuestion",
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
            "name": "UpvoteMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "upvoteQuestion",
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
            "cacheID": "d19c7a21d8af5eca69919ad2051e580e",
            "id": null,
            "metadata": {},
            "name": "UpvoteMutation",
            "operationKind": "mutation",
            "text": "mutation UpvoteMutation(\n  $input: UpvoteQuestionInput!\n) {\n  upvoteQuestion(input: $input) {\n    votes\n    hasUserUpvoted\n    hasUserDownvoted\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '2e3b4981fb590b1ca0bd61933680588c';
export default node;
