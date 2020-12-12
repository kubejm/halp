/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type tagGridQueryVariables = {};
export type tagGridQueryResponse = {
    readonly tags: ReadonlyArray<{
        readonly name: string;
        readonly questionCount: number;
    }>;
};
export type tagGridQuery = {
    readonly response: tagGridQueryResponse;
    readonly variables: tagGridQueryVariables;
};



/*
query tagGridQuery {
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
            "name": "tagGridQuery",
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
            "name": "tagGridQuery",
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
            "cacheID": "4640e6280906c31183af554721705046",
            "id": null,
            "metadata": {},
            "name": "tagGridQuery",
            "operationKind": "query",
            "text": "query tagGridQuery {\n  tags {\n    name\n    questionCount\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '9fc5b64ed04980cabf6d2d0b3e3800fc';
export default node;
