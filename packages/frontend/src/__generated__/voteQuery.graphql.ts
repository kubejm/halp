/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type GetQuestionInput = {
    id: string;
};
export type voteQueryVariables = {
    input: GetQuestionInput;
};
export type voteQueryResponse = {
    readonly question: {
        readonly id: string;
        readonly votes: number;
        readonly hasUserUpvoted: boolean;
        readonly hasUserDownvoted: boolean;
    };
};
export type voteQuery = {
    readonly response: voteQueryResponse;
    readonly variables: voteQueryVariables;
};



/*
query voteQuery(
  $input: GetQuestionInput!
) {
  question(input: $input) {
    id
    votes
    hasUserUpvoted
    hasUserDownvoted
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
                    "name": "votes",
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
            "name": "voteQuery",
            "selections": (v1 /*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "voteQuery",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "c3b820446c2c1a2ea05b5e822158ac4f",
            "id": null,
            "metadata": {},
            "name": "voteQuery",
            "operationKind": "query",
            "text": "query voteQuery(\n  $input: GetQuestionInput!\n) {\n  question(input: $input) {\n    id\n    votes\n    hasUserUpvoted\n    hasUserDownvoted\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'd9206fca04e3c280098be1a94f5ca61a';
export default node;
