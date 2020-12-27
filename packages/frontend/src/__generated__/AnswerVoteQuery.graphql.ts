/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AnswerByIdInput = {
    id: string;
};
export type AnswerVoteQueryVariables = {
    input: AnswerByIdInput;
};
export type AnswerVoteQueryResponse = {
    readonly answer: {
        readonly id: string;
        readonly voteCount: number;
        readonly hasUserUpvoted: boolean;
        readonly hasUserDownvoted: boolean;
        readonly isUserAuthor: boolean;
    };
};
export type AnswerVoteQuery = {
    readonly response: AnswerVoteQueryResponse;
    readonly variables: AnswerVoteQueryVariables;
};



/*
query AnswerVoteQuery(
  $input: AnswerByIdInput!
) {
  answer(input: $input) {
    id
    voteCount
    hasUserUpvoted
    hasUserDownvoted
    isUserAuthor
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
            "concreteType": "Answer",
            "kind": "LinkedField",
            "name": "answer",
            "plural": false,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "voteCount",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasUserUpvoted",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasUserDownvoted",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isUserAuthor",
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
            "name": "AnswerVoteQuery",
            "selections": (v1 /*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "AnswerVoteQuery",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "112c2c9ca9a553c1dca9f9f96039a87f",
            "id": null,
            "metadata": {},
            "name": "AnswerVoteQuery",
            "operationKind": "query",
            "text": "query AnswerVoteQuery(\n  $input: AnswerByIdInput!\n) {\n  answer(input: $input) {\n    id\n    voteCount\n    hasUserUpvoted\n    hasUserDownvoted\n    isUserAuthor\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'd781e430857db25f185681375a402ae2';
export default node;
