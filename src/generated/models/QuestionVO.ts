/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JudgeConfig } from './JudgeConfig';
import type { UserVO } from './UserVO';
export type QuestionVO = {
    id?: number;
    title?: string;
    content?: string;
    tags?: Array<string>;
    judgeConfig: JudgeConfig;
    submitNum: number;
    thumbNum?: number;
    favourNum?: number;
    userid?: number;
    userVO?: UserVO;
};

