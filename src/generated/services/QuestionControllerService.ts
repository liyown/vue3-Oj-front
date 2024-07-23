/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse } from '../models/BaseResponse';
import type { BaseResponseLong } from '../models/BaseResponseLong';
import type { BaseResponsePageQuestion } from '../models/BaseResponsePageQuestion';
import type { BaseResponsePageQuestionVO } from '../models/BaseResponsePageQuestionVO';
import type { BaseResponseQuestionVO } from '../models/BaseResponseQuestionVO';
import type { BaseResponseString } from '../models/BaseResponseString';
import type { BaseResponseVoid } from '../models/BaseResponseVoid';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { QuestionAddRequest } from '../models/QuestionAddRequest';
import type { QuestionGetRequestPage } from '../models/QuestionGetRequestPage';
import type { QuestionUpdateRequest } from '../models/QuestionUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuestionControllerService {
    /**
     * @param requestBody
     * @returns BaseResponseString OK
     * @throws ApiError
     */
    public static updateQuestion(
        requestBody: QuestionUpdateRequest,
    ): CancelablePromise<BaseResponseString> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/question/update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponsePageQuestion OK
     * @throws ApiError
     */
    public static listQuestionByPage(
        requestBody: QuestionGetRequestPage,
    ): CancelablePromise<BaseResponsePageQuestion> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/question/list/page',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponsePageQuestionVO OK
     * @throws ApiError
     */
    public static listQuestionVoByPageVo(
        requestBody: QuestionGetRequestPage,
    ): CancelablePromise<BaseResponsePageQuestionVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/question/list/page/vo',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponseQuestionVO OK
     * @throws ApiError
     */
    public static getQuestion(
        requestBody: QuestionGetRequestPage,
    ): CancelablePromise<BaseResponseQuestionVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/question/get',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponse OK
     * @throws ApiError
     */
    public static getRawQuestion(
        requestBody: QuestionGetRequestPage,
    ): CancelablePromise<BaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/question/get/raw',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponseVoid OK
     * @throws ApiError
     */
    public static deleteQuestion(
        requestBody: DeleteRequest,
    ): CancelablePromise<BaseResponseVoid> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/question/delete',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponseLong OK
     * @throws ApiError
     */
    public static addQuestion(
        requestBody: QuestionAddRequest,
    ): CancelablePromise<BaseResponseLong> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/question/add',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
