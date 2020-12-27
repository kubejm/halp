/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AnswerList_question = {
    readonly answers: ReadonlyArray<{
        readonly id: string;
        readonly body: string;
        readonly user: {
            readonly username: string;
        };
        readonly createdAtRelative: string;
    }>;
    readonly " $refType": "AnswerList_question";
};
export type AnswerList_question$data = AnswerList_question;
export type AnswerList_question$key = {
    readonly " $data"?: AnswerList_question$data;
    readonly " $fragmentRefs": FragmentRefs<"AnswerList_question">;
};



const node: ReaderFragment = ({
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AnswerList_question",
    "selections": [
        {
            "alias": null,
            "args": null,
            "concreteType": "Answer",
            "kind": "LinkedField",
            "name": "answers",
            "plural": true,
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
(node as any).hash = '79eaacb51102e7a9afcf0c791bc044fc';
export default node;
