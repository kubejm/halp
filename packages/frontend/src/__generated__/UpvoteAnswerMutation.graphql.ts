/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AnswerByIdInput = {
    id: string;
};
export type UpvoteAnswerMutationVariables = {
    input: AnswerByIdInput;
};
export type UpvoteAnswerMutationResponse = {
    readonly upvoteAnswer: {
        readonly voteCount: number;
        readonly hasUserUpvoted: boolean;
        readonly hasUserDownvoted: boolean;
    };
};
export type UpvoteAnswerMutation = {
    readonly response: UpvoteAnswerMutationResponse;
    readonly variables: UpvoteAnswerMutationVariables;
};



/*
mutation UpvoteAnswerMutation(
  $input: AnswerByIdInput!
) {
  upvoteAnswer(input: $input) {
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
            "name": "UpvoteAnswerMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Answer",
                    "kind": "LinkedField",
                    "name": "upvoteAnswer",
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
            "name": "UpvoteAnswerMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Answer",
                    "kind": "LinkedField",
                    "name": "upvoteAnswer",
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
            "cacheID": "3c35ab9544358d88b3b101af92dabdbf",
            "id": null,
            "metadata": {},
            "name": "UpvoteAnswerMutation",
            "operationKind": "mutation",
            "text": "mutation UpvoteAnswerMutation(\n  $input: AnswerByIdInput!\n) {\n  upvoteAnswer(input: $input) {\n    voteCount\n    hasUserUpvoted\n    hasUserDownvoted\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '5889c9933bf1968833fe7f1fdfea2fb4';
export default node;
