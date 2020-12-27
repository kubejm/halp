/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type QuestionByIdInput = {
    id: string;
};
export type QuestionVoteQueryVariables = {
    input: QuestionByIdInput;
};
export type QuestionVoteQueryResponse = {
    readonly question: {
        readonly id: string;
        readonly voteCount: number;
        readonly hasUserUpvoted: boolean;
        readonly hasUserDownvoted: boolean;
        readonly isUserAuthor: boolean;
    };
};
export type QuestionVoteQuery = {
    readonly response: QuestionVoteQueryResponse;
    readonly variables: QuestionVoteQueryVariables;
};



/*
query QuestionVoteQuery(
  $input: QuestionByIdInput!
) {
  question(input: $input) {
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
            "concreteType": "Question",
            "kind": "LinkedField",
            "name": "question",
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
            "name": "QuestionVoteQuery",
            "selections": (v1 /*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "QuestionVoteQuery",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "f24d5c165bd81dc52356f8b5f6f9a38e",
            "id": null,
            "metadata": {},
            "name": "QuestionVoteQuery",
            "operationKind": "query",
            "text": "query QuestionVoteQuery(\n  $input: QuestionByIdInput!\n) {\n  question(input: $input) {\n    id\n    voteCount\n    hasUserUpvoted\n    hasUserDownvoted\n    isUserAuthor\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '8ca5426ba0ba6c1c7e3a26e256aab498';
export default node;
