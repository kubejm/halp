/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuestionSorter_questionsPage = {
    readonly questionCount: number;
    readonly " $refType": "QuestionSorter_questionsPage";
};
export type QuestionSorter_questionsPage$data = QuestionSorter_questionsPage;
export type QuestionSorter_questionsPage$key = {
    readonly " $data"?: QuestionSorter_questionsPage$data;
    readonly " $fragmentRefs": FragmentRefs<"QuestionSorter_questionsPage">;
};



const node: ReaderFragment = ({
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QuestionSorter_questionsPage",
    "selections": [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "questionCount",
            "storageKey": null
        }
    ],
    "type": "QuestionsPage",
    "abstractKey": null
} as any);
(node as any).hash = '264ce233a29b0dd38da2c4fb1637843f';
export default node;
