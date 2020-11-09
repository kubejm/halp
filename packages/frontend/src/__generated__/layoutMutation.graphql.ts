/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type layoutMutationVariables = {};
export type layoutMutationResponse = {
    readonly signOut: {
        readonly ok: boolean;
    };
};
export type layoutMutation = {
    readonly response: layoutMutationResponse;
    readonly variables: layoutMutationVariables;
};



/*
mutation layoutMutation {
  signOut {
    ok
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "alias": null,
            "args": null,
            "concreteType": "Result",
            "kind": "LinkedField",
            "name": "signOut",
            "plural": false,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "ok",
                    "storageKey": null
                }
            ],
            "storageKey": null
        } as any)
    ];
    return {
        "fragment": {
            "argumentDefinitions": [],
            "kind": "Fragment",
            "metadata": null,
            "name": "layoutMutation",
            "selections": (v0 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [],
            "kind": "Operation",
            "name": "layoutMutation",
            "selections": (v0 /*: any*/)
        },
        "params": {
            "cacheID": "a3aaa45119dd71f0c8f3094613be5824",
            "id": null,
            "metadata": {},
            "name": "layoutMutation",
            "operationKind": "mutation",
            "text": "mutation layoutMutation {\n  signOut {\n    ok\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '25e95952dded7388137380c192955901';
export default node;
