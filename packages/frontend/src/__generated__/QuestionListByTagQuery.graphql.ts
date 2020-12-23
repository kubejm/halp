/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type QuestionOrderBy = "ACTIVE" | "NEW" | "VOTES" | "%future added value";
export type GetQuestionsInput = {
    orderBy?: QuestionOrderBy | null;
    page?: number | null;
    pageSize?: number | null;
    tag?: string | null;
};
export type QuestionListByTagQueryVariables = {
    input: GetQuestionsInput;
};
export type QuestionListByTagQueryResponse = {
    readonly questionsPage: {
        readonly questions: ReadonlyArray<{
            readonly answers: number;
            readonly createdAtRelative: string;
            readonly excerpt: string;
            readonly id: string;
            readonly question: string;
            readonly tags: ReadonlyArray<{
                readonly name: string;
            }>;
            readonly user: {
                readonly username: string;
            };
            readonly views: number;
            readonly votes: number;
        }>;
    };
};
export type QuestionListByTagQuery = {
    readonly response: QuestionListByTagQueryResponse;
    readonly variables: QuestionListByTagQueryVariables;
};



/*
query QuestionListByTagQuery(
  $input: GetQuestionsInput!
) {
  questionsPage(input: $input) {
    questions {
      answers
      createdAtRelative
      excerpt
      id
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
        "name": "answers",
        "storageKey": null
    } as any), v3 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAtRelative",
        "storageKey": null
    } as any), v4 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "excerpt",
        "storageKey": null
    } as any), v5 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
            "name": "QuestionListByTagQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "QuestionsPage",
                    "kind": "LinkedField",
                    "name": "questionsPage",
                    "plural": false,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Question",
                            "kind": "LinkedField",
                            "name": "questions",
                            "plural": true,
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
                    "storageKey": null
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "QuestionListByTagQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "QuestionsPage",
                    "kind": "LinkedField",
                    "name": "questionsPage",
                    "plural": false,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Question",
                            "kind": "LinkedField",
                            "name": "questions",
                            "plural": true,
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
                                        (v5 /*: any*/)
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
                                        (v5 /*: any*/)
                                    ],
                                    "storageKey": null
                                },
                                (v9 /*: any*/),
                                (v10 /*: any*/)
                            ],
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "269590ba8c286b48a6de49d94f86ac0c",
            "id": null,
            "metadata": {},
            "name": "QuestionListByTagQuery",
            "operationKind": "query",
            "text": "query QuestionListByTagQuery(\n  $input: GetQuestionsInput!\n) {\n  questionsPage(input: $input) {\n    questions {\n      answers\n      createdAtRelative\n      excerpt\n      id\n      question\n      tags {\n        name\n        id\n      }\n      user {\n        username\n        id\n      }\n      views\n      votes\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '16852a5d312084f985f29adefbd7569d';
export default node;
