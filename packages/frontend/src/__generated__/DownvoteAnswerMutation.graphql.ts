/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AnswerByIdInput = {
    id: string;
};
export type DownvoteAnswerMutationVariables = {
    input: AnswerByIdInput;
};
export type DownvoteAnswerMutationResponse = {
    readonly downvoteAnswer: {
        readonly voteCount: number;
        readonly hasUserUpvoted: boolean;
        readonly hasUserDownvoted: boolean;
    };
};
export type DownvoteAnswerMutation = {
    readonly response: DownvoteAnswerMutationResponse;
    readonly variables: DownvoteAnswerMutationVariables;
};



/*
mutation DownvoteAnswerMutation(
  $input: AnswerByIdInput!
) {
  downvoteAnswer(input: $input) {
    voteCount
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
        "name": "voteCount",
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
            "name": "DownvoteAnswerMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Answer",
                    "kind": "LinkedField",
                    "name": "downvoteAnswer",
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
            "name": "DownvoteAnswerMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Answer",
                    "kind": "LinkedField",
                    "name": "downvoteAnswer",
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
            "cacheID": "efc87610f54645743f1a8486b6e8387f",
            "id": null,
            "metadata": {},
            "name": "DownvoteAnswerMutation",
            "operationKind": "mutation",
            "text": "mutation DownvoteAnswerMutation(\n  $input: AnswerByIdInput!\n) {\n  downvoteAnswer(input: $input) {\n    voteCount\n    hasUserUpvoted\n    hasUserDownvoted\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'd0e0dc20b44370b24e7ad8336db3d05b';
export default node;
