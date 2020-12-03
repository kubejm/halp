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
            "cacheID": "36241a7f540989668504aa72f8aefe12",
            "id": null,
            "metadata": {},
            "name": "voteQuery",
            "operationKind": "query",
            "text": "query voteQuery(\n  $input: GetQuestionInput!\n) {\n  question(input: $input) {\n    id\n    votes\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '4c2b6f3c366d45b1fbb8893a1397546d';
export default node;
