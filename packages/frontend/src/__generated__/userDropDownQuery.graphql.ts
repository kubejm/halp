/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type userDropDownQueryVariables = {};
export type userDropDownQueryResponse = {
    readonly profile: {
        readonly username: string;
    };
};
export type userDropDownQuery = {
    readonly response: userDropDownQueryResponse;
    readonly variables: userDropDownQueryVariables;
};



/*
query userDropDownQuery {
  profile {
    username
    id
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "username",
        "storageKey": null
    } as any);
    return {
        "fragment": {
            "argumentDefinitions": [],
            "kind": "Fragment",
            "metadata": null,
            "name": "userDropDownQuery",
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "profile",
                    "plural": false,
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
            "name": "userDropDownQuery",
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "profile",
                    "plural": false,
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
            "cacheID": "a7dbb40800dc0b6629f8d813d902d107",
            "id": null,
            "metadata": {},
            "name": "userDropDownQuery",
            "operationKind": "query",
            "text": "query userDropDownQuery {\n  profile {\n    username\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '42c8e21a8f8797c7ec38c48aa1cd765a';
export default node;
