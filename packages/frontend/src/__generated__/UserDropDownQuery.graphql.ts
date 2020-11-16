/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserDropDownQueryVariables = {};
export type UserDropDownQueryResponse = {
    readonly profile: {
        readonly username: string;
    };
};
export type UserDropDownQuery = {
    readonly response: UserDropDownQueryResponse;
    readonly variables: UserDropDownQueryVariables;
};



/*
query UserDropDownQuery {
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
            "name": "UserDropDownQuery",
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
            "name": "UserDropDownQuery",
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
            "cacheID": "22bc0076702b9b953f4db857b56d6765",
            "id": null,
            "metadata": {},
            "name": "UserDropDownQuery",
            "operationKind": "query",
            "text": "query UserDropDownQuery {\n  profile {\n    username\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'a591c0eaaee1ae21e5048589431a522b';
export default node;
