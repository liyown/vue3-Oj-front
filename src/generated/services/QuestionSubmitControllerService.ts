/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseBoolean } from '../models/BaseResponseBoolean';
import type { BaseResponseLong } from '../models/BaseResponseLong';
import type { BaseResponsePageQuestionSubmit } from '../models/BaseResponsePageQuestionSubmit';
import type { BaseResponsePageQuestionSubmitVO } from '../models/BaseResponsePageQuestionSubmitVO';
import type { BaseResponseQuestionSubmitVO } from '../models/BaseResponseQuestionSubmitVO';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { QuestionSubmitAddRequest } from '../models/QuestionSubmitAddRequest';
import type { QuestionSubmitGetRequestPage } from '../models/QuestionSubmitGetRequestPage';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuestionSubmitControllerService {
    /**
     * @param requestBody
     * @returns BaseResponsePageQuestionSubmit OK
     * @throws ApiError
     */
    public static list(
        requestBody: QuestionSubmitGetRequestPage,
    ): CancelablePromise<BaseResponsePageQuestionSubmit> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/submit/list/page',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponsePageQuestionSubmitVO OK
     * @throws ApiError
     */
    public static listSubmitVo(
        requestBody: QuestionSubmitGetRequestPage,
    ): CancelablePromise<BaseResponsePageQuestionSubmitVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/submit/list/page/submitVO',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponseQuestionSubmitVO OK
     * @throws ApiError
     */
    public static get(
        requestBody: QuestionSubmitGetRequestPage,
    ): CancelablePromise<BaseResponseQuestionSubmitVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/submit/getVo',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponseBoolean OK
     * @throws ApiError
     */
    public static delete(
        requestBody: DeleteRequest,
    ): CancelablePromise<BaseResponseBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/submit/delete',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponseLong OK
     * @throws ApiError
     */
    public static add(
        requestBody: QuestionSubmitAddRequest,
    ): CancelablePromise<BaseResponseLong> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/submit/add',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
