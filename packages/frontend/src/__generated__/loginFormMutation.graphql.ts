/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SignInInput = {
    password: string;
    username: string;
};
export type loginFormMutationVariables = {
    input: SignInInput;
};
export type loginFormMutationResponse = {
    readonly signIn: {
        readonly ok: boolean;
    };
};
export type loginFormMutation = {
    readonly response: loginFormMutationResponse;
    readonly variables: loginFormMutationVariables;
};



/*
mutation loginFormMutation(
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
            "name": "loginFormMutation",
            "selections": (v1 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "loginFormMutation",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "335aa4fbf648ab1bbcd44cf0099ae6fd",
            "id": null,
            "metadata": {},
            "name": "loginFormMutation",
            "operationKind": "mutation",
            "text": "mutation loginFormMutation(\n  $input: SignInInput!\n) {\n  signIn(input: $input) {\n    ok\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '6601f1adee7e28369cad0e3ff57bbcc3';
export default node;
