/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type LogInInput = {
    password: string;
    username: string;
};
export type loginFormMutationVariables = {
    input: LogInInput;
};
export type loginFormMutationResponse = {
    readonly logIn: {
        readonly ok: boolean;
    };
};
export type loginFormMutation = {
    readonly response: loginFormMutationResponse;
    readonly variables: loginFormMutationVariables;
};



/*
mutation loginFormMutation(
  $input: LogInInput!
) {
  logIn(input: $input) {
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
            "name": "logIn",
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
            "cacheID": "d60220ddc46f814ca74aace358241412",
            "id": null,
            "metadata": {},
            "name": "loginFormMutation",
            "operationKind": "mutation",
            "text": "mutation loginFormMutation(\n  $input: LogInInput!\n) {\n  logIn(input: $input) {\n    ok\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'd3a5b0d2bad5856f32853343567fd2e7';
export default node;
