/**
 * Generated by orval v7.4.1 🍺
 * Do not edit manually.
 * FARMFARM EDGE SERVER API
 * MEMOCODE PLATFORM


에러 코드 목록:
- VALIDATION_ERROR: 유효성 검사 실패.
- INTERNAL_SERVER_ERROR: 알 수 없는 에러 발생. 관리자에게 문의하세요.
- FORBIDDEN: 해당 요청에 접근할 수 있는 권한이 없습니다.
- UNAUTHORIZED: 인증에 실패하였습니다.
- ERROR_1000: 동일한 loginId가 존재합니다.
- ERROR_1001: 이미 회원은 계정과 연결되었습니다.
- ERROR_1002: 계정에 한 개 이상의 회원을 연결할 수 없습니다.
- ERROR_1003: 하우스를 찾을 수 없습니다.
- ERROR_1004: 이미 동은 하우스와 연결되었습니다.
- ERROR_1005: 동을 찾을 수 없습니다.
- ERROR_1006: loginId, password가 null입니다.
- ERROR_1007: refresh token이 null입니다.
- ERROR_1008: 장치를 찾을 수 없습니다.
- ERROR_1009: 이미 동에 포함된 장치입니다.
- ERROR_1010: 동 장치를 찾을 수 없습니다.
- ERROR_1011: 이미 하우스에 포함된 장치입니다.
- ERROR_1012: 하우스 장치를 찾을 수 없습니다.

 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation
} from '@tanstack/react-query'
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult
} from '@tanstack/react-query'
import type {
  CreateTokenRequest,
  CreateTokenResponse
} from '../../model'
import { farmfarmAxiosInstance } from '../../../axios/axios_instance';
import type { ErrorType, BodyType } from '../../../axios/axios_instance';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * @summary 토큰 생성
 */
export const authApiCreateToken = (
    createTokenRequest: BodyType<CreateTokenRequest>,
 options?: SecondParameter<typeof farmfarmAxiosInstance>,signal?: AbortSignal
) => {
      
      
      return farmfarmAxiosInstance<CreateTokenResponse>(
      {url: `/v1/auth/token`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createTokenRequest, signal
    },
      options);
    }
  


export const getAuthApiCreateTokenMutationOptions = <TData = Awaited<ReturnType<typeof authApiCreateToken>>, TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{data: BodyType<CreateTokenRequest>}, TContext>, request?: SecondParameter<typeof farmfarmAxiosInstance>}
) => {
const mutationKey = ['authApiCreateToken'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authApiCreateToken>>, {data: BodyType<CreateTokenRequest>}> = (props) => {
          const {data} = props ?? {};

          return  authApiCreateToken(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions } as UseMutationOptions<TData, TError,{data: BodyType<CreateTokenRequest>}, TContext>}

    export type AuthApiCreateTokenMutationResult = NonNullable<Awaited<ReturnType<typeof authApiCreateToken>>>
    export type AuthApiCreateTokenMutationBody = BodyType<CreateTokenRequest>
    export type AuthApiCreateTokenMutationError = ErrorType<unknown>

    /**
 * @summary 토큰 생성
 */
export const useAuthApiCreateToken = <TData = Awaited<ReturnType<typeof authApiCreateToken>>, TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{data: BodyType<CreateTokenRequest>}, TContext>, request?: SecondParameter<typeof farmfarmAxiosInstance>}
): UseMutationResult<
        TData,
        TError,
        {data: BodyType<CreateTokenRequest>},
        TContext
      > => {

      const mutationOptions = getAuthApiCreateTokenMutationOptions(options);

      return useMutation(mutationOptions);
    }
    