/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type questionListQueryVariables = {};
export type questionListQueryResponse = {
    readonly questions: ReadonlyArray<{
        readonly answers: number;
        readonly author: string;
        readonly createdAtRelative: string;
        readonly excerpt: string;
        readonly id: string;
        readonly question: string;
        readonly tags: ReadonlyArray<{
            readonly name: string;
        }>;
        readonly views: number;
        readonly votes: number;
    }>;
};
export type questionListQuery = {
    readonly response: questionListQueryResponse;
    readonly variables: questionListQueryVariables;
};



/*
query questionListQuery {
  questions {
    answers
    author
    createdAtRelative
    excerpt
    id
    question
    tags {
      name
      id
    }
    views
    votes
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "answers",
        "storageKey": null
    } as any), v1 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "author",
        "storageKey": null
    } as any), v2 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAtRelative",
        "storageKey": null
    } as any), v3 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "excerpt",
        "storageKey": null
    } as any), v4 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any), v5 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "question",
        "storageKey": null
    } as any), v6 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
    } as any), v7 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "views",
        "storageKey": null
    } as any), v8 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "votes",
        "storageKey": null
    } as any);
    return {
        "fragment": {
            "argumentDefinitions": [],
            "kind": "Fragment",
            "metadata": null,
            "name": "questionListQuery",
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "questions",
                    "plural": true,
                    "selections": [
                        (v0 /*: any*/),
                        (v1 /*: any*/),
                        (v2 /*: any*/),
                        (v3 /*: any*/),
                        (v4 /*: any*/),
                        (v5 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Tag",
                            "kind": "LinkedField",
                            "name": "tags",
                            "plural": true,
                            "selections": [
                                (v6 /*: any*/)
                            ],
                            "storageKey": null
                        },
                        (v7 /*: any*/),
                        (v8 /*: any*/)
                    ],
                    "storageKey": null
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [],
            "kind": "Operation",
            "name": "questionListQuery",
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "questions",
                    "plural": true,
                    "selections": [
                        (v0 /*: any*/),
                        (v1 /*: any*/),
                        (v2 /*: any*/),
                        (v3 /*: any*/),
                        (v4 /*: any*/),
                        (v5 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Tag",
                            "kind": "LinkedField",
                            "name": "tags",
                            "plural": true,
                            "selections": [
                                (v6 /*: any*/),
                                (v4 /*: any*/)
                            ],
                            "storageKey": null
                        },
                        (v7 /*: any*/),
                        (v8 /*: any*/)
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "2cdf2a4d410ac76ba25fc1a27420c146",
            "id": null,
            "metadata": {},
            "name": "questionListQuery",
            "operationKind": "query",
            "text": "query questionListQuery {\n  questions {\n    answers\n    author\n    createdAtRelative\n    excerpt\n    id\n    question\n    tags {\n      name\n      id\n    }\n    views\n    votes\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'ea337f8d113ab7ef58207087fa68d279';
export default node;
