/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type QuestionByIdInput = {
    id: string;
};
export type voteQueryVariables = {
    input: QuestionByIdInput;
};
export type voteQueryResponse = {
    readonly question: {
        readonly id: string;
        readonly voteCount: number;
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
            "cacheID": "9db24a55016b7ea9b4737c3a8420d6f7",
            "id": null,
            "metadata": {},
            "name": "voteQuery",
            "operationKind": "query",
            "text": "query voteQuery(\n  $input: QuestionByIdInput!\n) {\n  question(input: $input) {\n    id\n    voteCount\n    hasUserUpvoted\n    hasUserDownvoted\n    isUserAuthor\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'fdc8c4b3447ec793cb8b3cbb0779eabd';
export default node;
