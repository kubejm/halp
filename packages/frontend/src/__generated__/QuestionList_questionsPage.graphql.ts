/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuestionList_questionsPage = {
    readonly questions: ReadonlyArray<{
        readonly answerCount: number;
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
        readonly voteCount: number;
    }>;
    readonly " $refType": "QuestionList_questionsPage";
};
export type QuestionList_questionsPage$data = QuestionList_questionsPage;
export type QuestionList_questionsPage$key = {
    readonly " $data"?: QuestionList_questionsPage$data;
    readonly " $fragmentRefs": FragmentRefs<"QuestionList_questionsPage">;
};



const node: ReaderFragment = ({
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QuestionList_questionsPage",
    "selections": [
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
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                },
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
                        }
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
                        }
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
        }
    ],
    "type": "QuestionsPage",
    "abstractKey": null
} as any);
(node as any).hash = 'f4505277f88b59fedb751bd9f3cd6fbe';
export default node;
