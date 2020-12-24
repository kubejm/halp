/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type questionSorter_questionsPage = {
    readonly questionCount: number;
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
            "name": "questionCount",
            "storageKey": null
        }
    ],
    "type": "QuestionsPage",
    "abstractKey": null
} as any);
(node as any).hash = '69601d98b2567214d117ee32551589a8';
export default node;
