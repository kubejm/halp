/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuestionOrderBy = "ACTIVE" | "NEW" | "VOTES" | "%future added value";
export type GetQuestionsInput = {
    orderBy?: QuestionOrderBy | null;
    page?: number | null;
    pageSize?: number | null;
    tag?: string | null;
};
export type QuestionsScreenQueryVariables = {
    input: GetQuestionsInput;
};
export type QuestionsScreenQueryResponse = {
    readonly questionsPage: {
        readonly " $fragmentRefs": FragmentRefs<"QuestionSorter_questionsPage" | "QuestionList_questionsPage" | "QuestionPageNavigation_questionsPage">;
    };
};
export type QuestionsScreenQuery = {
    readonly response: QuestionsScreenQueryResponse;
    readonly variables: QuestionsScreenQueryVariables;
};



/*
query QuestionsScreenQuery(
  $input: GetQuestionsInput!
) {
  questionsPage(input: $input) {
    ...QuestionSorter_questionsPage
    ...QuestionList_questionsPage
    ...QuestionPageNavigation_questionsPage
  }
}

fragment QuestionList_questionsPage on QuestionsPage {
  questions {
    answerCount
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
    voteCount
  }
}

fragment QuestionPageNavigation_questionsPage on QuestionsPage {
  pageCount
}

fragment QuestionSorter_questionsPage on QuestionsPage {
  questionCount
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
    } as any);
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "QuestionsScreenQuery",
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
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "QuestionSorter_questionsPage"
                        },
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "QuestionList_questionsPage"
                        },
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "QuestionPageNavigation_questionsPage"
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
            "name": "QuestionsScreenQuery",
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
                            "kind": "ScalarField",
                            "name": "questionCount",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Question",
                            "kind": "LinkedField",
                            "name": "questions",
                            "plural": true,
                            "selections": [
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "answerCount",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "createdAtRelative",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "excerpt",
                                    "storageKey": null
                                },
                                (v2 /*: any*/),
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "question",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Tag",
                                    "kind": "LinkedField",
                                    "name": "tags",
                                    "plural": true,
                                    "selections": [
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "name",
                                            "storageKey": null
                                        },
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
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "username",
                                            "storageKey": null
                                        },
                                        (v2 /*: any*/)
                                    ],
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "views",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "voteCount",
                                    "storageKey": null
                                }
                            ],
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "pageCount",
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "5689098c325eb22d2007cb6e983f3ee2",
            "id": null,
            "metadata": {},
            "name": "QuestionsScreenQuery",
            "operationKind": "query",
            "text": "query QuestionsScreenQuery(\n  $input: GetQuestionsInput!\n) {\n  questionsPage(input: $input) {\n    ...QuestionSorter_questionsPage\n    ...QuestionList_questionsPage\n    ...QuestionPageNavigation_questionsPage\n  }\n}\n\nfragment QuestionList_questionsPage on QuestionsPage {\n  questions {\n    answerCount\n    createdAtRelative\n    excerpt\n    id\n    question\n    tags {\n      name\n      id\n    }\n    user {\n      username\n      id\n    }\n    views\n    voteCount\n  }\n}\n\nfragment QuestionPageNavigation_questionsPage on QuestionsPage {\n  pageCount\n}\n\nfragment QuestionSorter_questionsPage on QuestionsPage {\n  questionCount\n}\n"
        }
    } as any;
})();
(node as any).hash = '915d6ee82a78faaefbcc9a9acd046d5d';
export default node;
