/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuestionPageNavigation_questionsPage = {
    readonly pageCount: number;
    readonly " $refType": "QuestionPageNavigation_questionsPage";
};
export type QuestionPageNavigation_questionsPage$data = QuestionPageNavigation_questionsPage;
export type QuestionPageNavigation_questionsPage$key = {
    readonly " $data"?: QuestionPageNavigation_questionsPage$data;
    readonly " $fragmentRefs": FragmentRefs<"QuestionPageNavigation_questionsPage">;
};



const node: ReaderFragment = ({
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QuestionPageNavigation_questionsPage",
    "selections": [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "pageCount",
            "storageKey": null
        }
    ],
    "type": "QuestionsPage",
    "abstractKey": null
} as any);
(node as any).hash = '74821c46202b57586a2ac6ab1683e10c';
export default node;
