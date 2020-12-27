/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type TagGridQueryVariables = {};
export type TagGridQueryResponse = {
    readonly tags: ReadonlyArray<{
        readonly name: string;
        readonly questionCount: number;
    }>;
};
export type TagGridQuery = {
    readonly response: TagGridQueryResponse;
    readonly variables: TagGridQueryVariables;
};



/*
query TagGridQuery {
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
            "name": "TagGridQuery",
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
            "name": "TagGridQuery",
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
            "cacheID": "49bcec0e343aa99c300644358acea226",
            "id": null,
            "metadata": {},
            "name": "TagGridQuery",
            "operationKind": "query",
            "text": "query TagGridQuery {\n  tags {\n    name\n    questionCount\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'b1f2bd06f8c8a5efbb013262791ea8d2';
export default node;
