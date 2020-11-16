/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SignInInput = {
    password: string;
    username: string;
};
export type signInFormMutationVariables = {
    input: SignInInput;
};
export type signInFormMutationResponse = {
    readonly signIn: {
        readonly ok: boolean;
    };
};
export type signInFormMutation = {
    readonly response: signInFormMutationResponse;
    readonly variables: signInFormMutationVariables;
};



/*
mutation signInFormMutation(
  $input: SignInInput!
) {
  signIn(input: $input) {
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
            "name": "signIn",
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
            "name": "signInFormMutation",
            "selections": (v1 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "signInFormMutation",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "29c390e1d1aebfb0b22b4f3e813b467b",
            "id": null,
            "metadata": {},
            "name": "signInFormMutation",
            "operationKind": "mutation",
            "text": "mutation signInFormMutation(\n  $input: SignInInput!\n) {\n  signIn(input: $input) {\n    ok\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '3254fd620f7ba2c799425e0eb979294c';
export default node;
