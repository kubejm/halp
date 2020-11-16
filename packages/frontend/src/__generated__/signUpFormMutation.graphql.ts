/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SignUpInput = {
    email: string;
    password: string;
    username: string;
};
export type signUpFormMutationVariables = {
    input: SignUpInput;
};
export type signUpFormMutationResponse = {
    readonly signUp: {
        readonly ok: boolean;
    };
};
export type signUpFormMutation = {
    readonly response: signUpFormMutationResponse;
    readonly variables: signUpFormMutationVariables;
};



/*
mutation signUpFormMutation(
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
            "name": "signUpFormMutation",
            "selections": (v1 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "signUpFormMutation",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "d00e250bf65b2b80c0ee0a53f74c4fa2",
            "id": null,
            "metadata": {},
            "name": "signUpFormMutation",
            "operationKind": "mutation",
            "text": "mutation signUpFormMutation(\n  $input: SignUpInput!\n) {\n  signUp(input: $input) {\n    ok\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '59d1b434ae430aa7602af15ebe3343ea';
export default node;
