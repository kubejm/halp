/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SignOutButtonMutationVariables = {};
export type SignOutButtonMutationResponse = {
    readonly signOut: {
        readonly ok: boolean;
    };
};
export type SignOutButtonMutation = {
    readonly response: SignOutButtonMutationResponse;
    readonly variables: SignOutButtonMutationVariables;
};



/*
mutation SignOutButtonMutation {
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
            "name": "SignOutButtonMutation",
            "selections": (v0 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [],
            "kind": "Operation",
            "name": "SignOutButtonMutation",
            "selections": (v0 /*: any*/)
        },
        "params": {
            "cacheID": "aaad5d0767a341362ee4a8ee42565a7e",
            "id": null,
            "metadata": {},
            "name": "SignOutButtonMutation",
            "operationKind": "mutation",
            "text": "mutation SignOutButtonMutation {\n  signOut {\n    ok\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '092f8941b4769c2fd7d6b7cd5ed32d62';
export default node;
