/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type questionPager_questionsPage = {
    readonly pageCount: number;
    readonly " $refType": "questionPager_questionsPage";
};
export type questionPager_questionsPage$data = questionPager_questionsPage;
export type questionPager_questionsPage$key = {
    readonly " $data"?: questionPager_questionsPage$data;
    readonly " $fragmentRefs": FragmentRefs<"questionPager_questionsPage">;
};



const node: ReaderFragment = ({
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "questionPager_questionsPage",
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
(node as any).hash = '6064e6925e5290fd74eaf4c65049cfa2';
export default node;
