/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuestionPager_questionsPage = {
    readonly pageCount: number;
    readonly " $refType": "QuestionPager_questionsPage";
};
export type QuestionPager_questionsPage$data = QuestionPager_questionsPage;
export type QuestionPager_questionsPage$key = {
    readonly " $data"?: QuestionPager_questionsPage$data;
    readonly " $fragmentRefs": FragmentRefs<"QuestionPager_questionsPage">;
};



const node: ReaderFragment = ({
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QuestionPager_questionsPage",
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
(node as any).hash = '1cad21ea2a58c7d62ac04ebef5b63a2b';
export default node;
