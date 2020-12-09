/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type tagListQueryVariables = {};
export type tagListQueryResponse = {
    readonly tags: ReadonlyArray<{
        readonly name: string;
        readonly questionCount: number;
    }>;
};
export type tagListQuery = {
    readonly response: tagListQueryResponse;
    readonly variables: tagListQueryVariables;
};



/*
query tagListQuery {
  tags {
    name
    questionCount
    id
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
    } as any), v1 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "questionCount",
        "storageKey": null
    } as any);
    return {
        "fragment": {
            "argumentDefinitions": [],
            "kind": "Fragment",
            "metadata": null,
            "name": "tagListQuery",
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "Tag",
                    "kind": "LinkedField",
                    "name": "tags",
                    "plural": true,
                    "selections": [
                        (v0 /*: any*/),
                        (v1 /*: any*/)
                    ],
                    "storageKey": null
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [],
            "kind": "Operation",
            "name": "tagListQuery",
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "Tag",
                    "kind": "LinkedField",
                    "name": "tags",
                    "plural": true,
                    "selections": [
                        (v0 /*: any*/),
                        (v1 /*: any*/),
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
            "cacheID": "3323e0a4434e991c4c5208046f3b2178",
            "id": null,
            "metadata": {},
            "name": "tagListQuery",
            "operationKind": "query",
            "text": "query tagListQuery {\n  tags {\n    name\n    questionCount\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '15fce6a75281f22b924add2358e6294a';
export default node;
