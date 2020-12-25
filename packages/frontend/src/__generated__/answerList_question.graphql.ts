/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type answerList_question = {
    readonly questionAnswers: ReadonlyArray<{
        readonly body: string;
        readonly user: {
            readonly username: string;
        };
        readonly createdAtRelative: string;
    }>;
    readonly " $refType": "answerList_question";
};
export type answerList_question$data = answerList_question;
export type answerList_question$key = {
    readonly " $data"?: answerList_question$data;
    readonly " $fragmentRefs": FragmentRefs<"answerList_question">;
};



const node: ReaderFragment = ({
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "answerList_question",
    "selections": [
        {
            "alias": null,
            "args": null,
            "concreteType": "QuestionAnswer",
            "kind": "LinkedField",
            "name": "questionAnswers",
            "plural": true,
            "selections": [
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
                    "name": "createdAtRelative",
                    "storageKey": null
                }
            ],
            "storageKey": null
        }
    ],
    "type": "Question",
    "abstractKey": null
} as any);
(node as any).hash = '829aa2921383122d6b33c605759bdc1c';
export default node;
