/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type questionSorterQueryVariables = {};
export type questionSorterQueryResponse = {
    readonly questionCount: number;
};
export type questionSorterQuery = {
    readonly response: questionSorterQueryResponse;
    readonly variables: questionSorterQueryVariables;
};



/*
query questionSorterQuery {
  questionCount
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "questionCount",
            "storageKey": null
        } as any)
    ];
    return {
        "fragment": {
            "argumentDefinitions": [],
            "kind": "Fragment",
            "metadata": null,
            "name": "questionSorterQuery",
            "selections": (v0 /*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [],
            "kind": "Operation",
            "name": "questionSorterQuery",
            "selections": (v0 /*: any*/)
        },
        "params": {
            "cacheID": "b26f262eeb0b3197424229c381ca9e9b",
            "id": null,
            "metadata": {},
            "name": "questionSorterQuery",
            "operationKind": "query",
            "text": "query questionSorterQuery {\n  questionCount\n}\n"
        }
    } as any;
})();
(node as any).hash = 'ace550634bb121a6dff9eb5f8e3bf7ea';
export default node;
