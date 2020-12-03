/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpvoteQuestionInput = {
    id: string;
};
export type UpvoteMutationVariables = {
    input: UpvoteQuestionInput;
};
export type UpvoteMutationResponse = {
    readonly upvoteQuestion: {
        readonly votes: number;
    };
};
export type UpvoteMutation = {
    readonly response: UpvoteMutationResponse;
    readonly variables: UpvoteMutationVariables;
};



/*
mutation UpvoteMutation(
  $input: UpvoteQuestionInput!
) {
  upvoteQuestion(input: $input) {
    votes
    id
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
            "kind": "Variable",
            "name": "input",
            "variableName": "input"
        } as any)
    ], v2 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "votes",
        "storageKey": null
    } as any);
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "UpvoteMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "upvoteQuestion",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/)
                    ],
                    "storageKey": null
                }
            ],
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "UpvoteMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "upvoteQuestion",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
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
            "cacheID": "43c42a2f5fcce26ac418df220c7f5731",
            "id": null,
            "metadata": {},
            "name": "UpvoteMutation",
            "operationKind": "mutation",
            "text": "mutation UpvoteMutation(\n  $input: UpvoteQuestionInput!\n) {\n  upvoteQuestion(input: $input) {\n    votes\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '9fc6093ff2b718ca5bf66225b6c28800';
export default node;
