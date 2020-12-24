/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type questionSorter_questionsPage = {
    readonly count: number;
    readonly " $refType": "questionSorter_questionsPage";
};
export type questionSorter_questionsPage$data = questionSorter_questionsPage;
export type questionSorter_questionsPage$key = {
    readonly " $data"?: questionSorter_questionsPage$data;
    readonly " $fragmentRefs": FragmentRefs<"questionSorter_questionsPage">;
};



const node: ReaderFragment = ({
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "questionSorter_questionsPage",
    "selections": [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "count",
            "storageKey": null
        }
    ],
    "type": "QuestionsPage",
    "abstractKey": null
} as any);
(node as any).hash = 'c8cfe84075e2712c4faba79b4c346073';
export default node;
