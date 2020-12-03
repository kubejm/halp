/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ViewQuestionInput = {
    id: string;
};
export type questionDetailsQueryVariables = {
    input: ViewQuestionInput;
};
export type questionDetailsQueryResponse = {
    readonly viewQuestion: {
        readonly id: string;
        readonly answers: number;
        readonly body: string;
        readonly createdAtRelative: string;
        readonly question: string;
        readonly tags: ReadonlyArray<{
            readonly name: string;
        }>;
        readonly user: {
            readonly username: string;
        };
        readonly views: number;
        readonly votes: number;
    };
};
export type questionDetailsQuery = {
    readonly response: questionDetailsQueryResponse;
    readonly variables: questionDetailsQueryVariables;
};



/*
mutation questionDetailsQuery(
  $input: ViewQuestionInput!
) {
  viewQuestion(input: $input) {
    id
    answers
    body
    createdAtRelative
    question
    tags {
      name
      id
    }
    user {
      username
      id
    }
    views
    votes
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
        "name": "id",
        "storageKey": null
    } as any), v3 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "answers",
        "storageKey": null
    } as any), v4 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "body",
        "storageKey": null
    } as any), v5 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAtRelative",
        "storageKey": null
    } as any), v6 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "question",
        "storageKey": null
    } as any), v7 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
    } as any), v8 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "username",
        "storageKey": null
    } as any), v9 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "views",
        "storageKey": null
    } as any), v10 = ({
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
            "name": "questionDetailsQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "viewQuestion",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        (v3 /*: any*/),
                        (v4 /*: any*/),
                        (v5 /*: any*/),
                        (v6 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Tag",
                            "kind": "LinkedField",
                            "name": "tags",
                            "plural": true,
                            "selections": [
                                (v7 /*: any*/)
                            ],
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "User",
                            "kind": "LinkedField",
                            "name": "user",
                            "plural": false,
                            "selections": [
                                (v8 /*: any*/)
                            ],
                            "storageKey": null
                        },
                        (v9 /*: any*/),
                        (v10 /*: any*/)
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
            "name": "questionDetailsQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "viewQuestion",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        (v3 /*: any*/),
                        (v4 /*: any*/),
                        (v5 /*: any*/),
                        (v6 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Tag",
                            "kind": "LinkedField",
                            "name": "tags",
                            "plural": true,
                            "selections": [
                                (v7 /*: any*/),
                                (v2 /*: any*/)
                            ],
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "User",
                            "kind": "LinkedField",
                            "name": "user",
                            "plural": false,
                            "selections": [
                                (v8 /*: any*/),
                                (v2 /*: any*/)
                            ],
                            "storageKey": null
                        },
                        (v9 /*: any*/),
                        (v10 /*: any*/)
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "eeb1cd8df520a49eccee56df78506749",
            "id": null,
            "metadata": {},
            "name": "questionDetailsQuery",
            "operationKind": "mutation",
            "text": "mutation questionDetailsQuery(\n  $input: ViewQuestionInput!\n) {\n  viewQuestion(input: $input) {\n    id\n    answers\n    body\n    createdAtRelative\n    question\n    tags {\n      name\n      id\n    }\n    user {\n      username\n      id\n    }\n    views\n    votes\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '31f3e79da1b7f476ae9d35c1725a6a59';
export default node;
