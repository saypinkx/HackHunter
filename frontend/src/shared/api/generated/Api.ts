/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  BodyUpdateAvatarApiFilesAvatarsChatIdPut,
  HTTPValidationError,
  UserCreate,
  UserUpdate,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name GetUserApiUsersChatIdGet
   * @summary Get User
   * @request GET:/api/users/{chat_id}
   */
  getUserApiUsersChatIdGet = (chatId: number, params: RequestParams = {}) =>
    this.request<any, HTTPValidationError>({
      path: `/api/users/${chatId}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name UpdateUserApiUsersChatIdPut
   * @summary Update User
   * @request PUT:/api/users/{chat_id}
   */
  updateUserApiUsersChatIdPut = (chatId: number, data: UserUpdate, params: RequestParams = {}) =>
    this.request<any, HTTPValidationError>({
      path: `/api/users/${chatId}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name DeleteUserApiUsersChatIdDelete
   * @summary Delete User
   * @request DELETE:/api/users/{chat_id}
   */
  deleteUserApiUsersChatIdDelete = (chatId: number, params: RequestParams = {}) =>
    this.request<any, HTTPValidationError>({
      path: `/api/users/${chatId}`,
      method: 'DELETE',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name CreateUserApiUsersPost
   * @summary Create User
   * @request POST:/api/users
   */
  createUserApiUsersPost = (data: UserCreate, params: RequestParams = {}) =>
    this.request<any, HTTPValidationError>({
      path: `/api/users`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name GetAllUsersApiUsersGet
   * @summary Get All Users
   * @request GET:/api/users
   */
  getAllUsersApiUsersGet = (
    query?: {
      /** Who Is */
      who_is?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<any, HTTPValidationError>({
      path: `/api/users`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name GetAvatarApiFilesAvatarsChatIdGet
   * @summary Get Avatar
   * @request GET:/api/files/avatars/{chat_id}
   */
  getAvatarApiFilesAvatarsChatIdGet = (chatId: number, params: RequestParams = {}) =>
    this.request<any, HTTPValidationError>({
      path: `/api/files/avatars/${chatId}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name UpdateAvatarApiFilesAvatarsChatIdPut
   * @summary Update Avatar
   * @request PUT:/api/files/avatars/{chat_id}
   */
  updateAvatarApiFilesAvatarsChatIdPut = (
    chatId: number,
    data: BodyUpdateAvatarApiFilesAvatarsChatIdPut,
    params: RequestParams = {},
  ) =>
    this.request<any, HTTPValidationError>({
      path: `/api/files/avatars/${chatId}`,
      method: 'PUT',
      body: data,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name DeleteAvatarApiFilesAvatarsChatIdDelete
   * @summary Delete Avatar
   * @request DELETE:/api/files/avatars/{chat_id}
   */
  deleteAvatarApiFilesAvatarsChatIdDelete = (chatId: number, params: RequestParams = {}) =>
    this.request<any, HTTPValidationError>({
      path: `/api/files/avatars/${chatId}`,
      method: 'DELETE',
      format: 'json',
      ...params,
    });
}
