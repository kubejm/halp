/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SignUpInput = {
    email: string;
    password: string;
    username: string;
};
export type SignUpFormMutationVariables = {
    input: SignUpInput;
};
export type SignUpFormMutationResponse = {
    readonly signUp: {
        readonly ok: boolean;
    };
};
export type SignUpFormMutation = {
    readonly response: SignUpFormMutationResponse;
    readonly variables: SignUpFormMutationVariables;
};



/*
mutation SignUpFormMutation(
  $input: SignUpInput!
) {
  signUp(input: $input) {
    ok
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "input"
        } as any)
    ], v1 = [
        ({
            "alias": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input"
                }
            ],
            "concreteType": "Result",
            "kind": "LinkedField",
            "name": "signUp",
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
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "SignUpFormMutation",
            "selections": (v1 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "SignUpFormMutation",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "1a9dca23f27734f115601f21563067d8",
            "id": null,
            "metadata": {},
            "name": "SignUpFormMutation",
            "operationKind": "mutation",
            "text": "mutation SignUpFormMutation(\n  $input: SignUpInput!\n) {\n  signUp(input: $input) {\n    ok\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '8db58c5e2355f2c7a4d899b52c7b8316';
export default node;
