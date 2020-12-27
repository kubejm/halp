/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SignInInput = {
    password: string;
    username: string;
};
export type SignInFormMutationVariables = {
    input: SignInInput;
};
export type SignInFormMutationResponse = {
    readonly signIn: {
        readonly ok: boolean;
    };
};
export type SignInFormMutation = {
    readonly response: SignInFormMutationResponse;
    readonly variables: SignInFormMutationVariables;
};



/*
mutation SignInFormMutation(
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
            "name": "SignInFormMutation",
            "selections": (v1 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "SignInFormMutation",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "eb57fe3b150effe9e446b04248d5d088",
            "id": null,
            "metadata": {},
            "name": "SignInFormMutation",
            "operationKind": "mutation",
            "text": "mutation SignInFormMutation(\n  $input: SignInInput!\n) {\n  signIn(input: $input) {\n    ok\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'f3e33c17468dbba483ac36db92ca398b';
export default node;
