/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type tagListQueryVariables = {};
export type tagListQueryResponse = {
    readonly tags: ReadonlyArray<{
        readonly name: string;
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
                        (v0 /*: any*/)
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
            "cacheID": "d382211efb8b4f5359c8280edd4f887d",
            "id": null,
            "metadata": {},
            "name": "tagListQuery",
            "operationKind": "query",
            "text": "query tagListQuery {\n  tags {\n    name\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'b71cac6cf27aad9678ddc087df3421ae';
export default node;
