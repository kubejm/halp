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
        readonly isUserAuthor: boolean;
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
            "cacheID": "8de4873f083b62b4055f9ba710d86b56",
            "id": null,
            "metadata": {},
            "name": "voteQuery",
            "operationKind": "query",
            "text": "query voteQuery(\n  $input: GetQuestionInput!\n) {\n  question(input: $input) {\n    id\n    votes\n    hasUserUpvoted\n    hasUserDownvoted\n    isUserAuthor\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'cefb5f6dafda60c01cb08deb63ca468e';
export default node;
