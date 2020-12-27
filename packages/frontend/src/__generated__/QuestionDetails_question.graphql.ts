/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuestionDetails_question = {
    readonly id: string;
    readonly answerCount: number;
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
    readonly voteCount: number;
    readonly " $refType": "QuestionDetails_question";
};
export type QuestionDetails_question$data = QuestionDetails_question;
export type QuestionDetails_question$key = {
    readonly " $data"?: QuestionDetails_question$data;
    readonly " $fragmentRefs": FragmentRefs<"QuestionDetails_question">;
};



const node: ReaderFragment = ({
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QuestionDetails_question",
    "selections": [
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
            "name": "answerCount",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "body",
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
    "type": "Question",
    "abstractKey": null
} as any);
(node as any).hash = 'e11acf7da84dfde30748d018f07760e2';
export default node;
