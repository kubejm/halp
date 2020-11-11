/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type LogOutButtonMutationVariables = {};
export type LogOutButtonMutationResponse = {
    readonly logOut: {
        readonly ok: boolean;
    };
};
export type LogOutButtonMutation = {
    readonly response: LogOutButtonMutationResponse;
    readonly variables: LogOutButtonMutationVariables;
};



/*
mutation LogOutButtonMutation {
  logOut {
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
            "name": "logOut",
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
            "name": "LogOutButtonMutation",
            "selections": (v0 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [],
            "kind": "Operation",
            "name": "LogOutButtonMutation",
            "selections": (v0 /*: any*/)
        },
        "params": {
            "cacheID": "17ced9f70761257df856e57f66b53cec",
            "id": null,
            "metadata": {},
            "name": "LogOutButtonMutation",
            "operationKind": "mutation",
            "text": "mutation LogOutButtonMutation {\n  logOut {\n    ok\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '1363c33cd3142dd6f561a249c2673dae';
export default node;
