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

/** Body_update_avatar_api_files_avatars__chat_id__put */
export interface BodyUpdateAvatarApiFilesAvatarsChatIdPut {
  /**
   * File
   * @format binary
   */
  file: File;
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/** UserCreate */
export interface UserCreate {
  /** Chat Id */
  chat_id: number;
  /** First Name */
  first_name: string;
  /** Second Name */
  second_name: string;
  /** Stack */
  stack: any[];
  /** Roles */
  roles: any[];
  /** About */
  about: string;
  /** Exp Work */
  exp_work: string;
  /** Hackathons */
  hackathons: object[];
  /** Github */
  GitHub: string;
  /** Link Tg */
  link_tg: string;
  /** Exp */
  exp: number;
  /** Who Is */
  who_is: boolean;
}

/** UserUpdate */
export interface UserUpdate {
  /** First Name */
  first_name: string;
  /** Second Name */
  second_name: string;
  /** Stack */
  stack: any[];
  /** Roles */
  roles: any[];
  /** About */
  about: string;
  /** Exp Work */
  exp_work: string;
  /** Hackathons */
  hackathons: object;
  /** Github */
  GitHub: string;
  /** Link Tg */
  link_tg: string;
  /** Exp */
  exp: number;
  /** Who Is */
  who_is: boolean;
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: (string | number)[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}
