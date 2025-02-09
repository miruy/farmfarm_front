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
  useInfiniteQuery,
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseInfiniteQueryResult,
  DefinedUseQueryResult,
  InfiniteData,
  MutationFunction,
  QueryClient,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type {
  CreateHouseDeviceRequest,
  CreateHouseRequest,
  GetAllHouseDevicesResponse,
  GetHouseByIdResponse,
  HouseApiSearchHousesParams,
  PageRsSearchHousesResponse,
  UpdateHouseRequest
} from '../../model'
import { farmfarmAxiosInstance } from '../../../axios/axios_instance';
import type { ErrorType, BodyType } from '../../../axios/axios_instance';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * @summary 하우스 검색
 */
export const houseApiSearchHouses = (
    params?: HouseApiSearchHousesParams,
 options?: SecondParameter<typeof farmfarmAxiosInstance>,signal?: AbortSignal
) => {
      
      
      return farmfarmAxiosInstance<PageRsSearchHousesResponse>(
      {url: `/v1/houses`, method: 'GET',
        params, signal
    },
      options);
    }
  

export const getHouseApiSearchHousesQueryKey = (params?: HouseApiSearchHousesParams,) => {
    return [`/v1/houses`, ...(params ? [params]: [])] as const;
    }

    
export const getHouseApiSearchHousesInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof houseApiSearchHouses>>>, TError = ErrorType<unknown>>(params?: HouseApiSearchHousesParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof houseApiSearchHouses>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getHouseApiSearchHousesQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof houseApiSearchHouses>>> = ({ signal }) => houseApiSearchHouses(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn,   staleTime: 10000,  ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof houseApiSearchHouses>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type HouseApiSearchHousesInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof houseApiSearchHouses>>>
export type HouseApiSearchHousesInfiniteQueryError = ErrorType<unknown>


export function useHouseApiSearchHousesInfinite<TData = InfiniteData<Awaited<ReturnType<typeof houseApiSearchHouses>>>, TError = ErrorType<unknown>>(
 params: undefined |  HouseApiSearchHousesParams, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof houseApiSearchHouses>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof houseApiSearchHouses>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useHouseApiSearchHousesInfinite<TData = InfiniteData<Awaited<ReturnType<typeof houseApiSearchHouses>>>, TError = ErrorType<unknown>>(
 params?: HouseApiSearchHousesParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof houseApiSearchHouses>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof houseApiSearchHouses>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useHouseApiSearchHousesInfinite<TData = InfiniteData<Awaited<ReturnType<typeof houseApiSearchHouses>>>, TError = ErrorType<unknown>>(
 params?: HouseApiSearchHousesParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof houseApiSearchHouses>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 하우스 검색
 */

export function useHouseApiSearchHousesInfinite<TData = InfiniteData<Awaited<ReturnType<typeof houseApiSearchHouses>>>, TError = ErrorType<unknown>>(
 params?: HouseApiSearchHousesParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof houseApiSearchHouses>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getHouseApiSearchHousesInfiniteQueryOptions(params,options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * @summary 하우스 검색
 */
export const prefetchHouseApiSearchHousesInfinite = async <TData = Awaited<ReturnType<typeof houseApiSearchHouses>>, TError = ErrorType<unknown>>(
 queryClient: QueryClient, params?: HouseApiSearchHousesParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof houseApiSearchHouses>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ): Promise<QueryClient> => {

  const queryOptions = getHouseApiSearchHousesInfiniteQueryOptions(params,options)

  await queryClient.prefetchInfiniteQuery(queryOptions);

  return queryClient;
}


export const getHouseApiSearchHousesQueryOptions = <TData = Awaited<ReturnType<typeof houseApiSearchHouses>>, TError = ErrorType<unknown>>(params?: HouseApiSearchHousesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof houseApiSearchHouses>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getHouseApiSearchHousesQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof houseApiSearchHouses>>> = ({ signal }) => houseApiSearchHouses(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn,   staleTime: 10000,  ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof houseApiSearchHouses>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type HouseApiSearchHousesQueryResult = NonNullable<Awaited<ReturnType<typeof houseApiSearchHouses>>>
export type HouseApiSearchHousesQueryError = ErrorType<unknown>


export function useHouseApiSearchHouses<TData = Awaited<ReturnType<typeof houseApiSearchHouses>>, TError = ErrorType<unknown>>(
 params: undefined |  HouseApiSearchHousesParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof houseApiSearchHouses>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof houseApiSearchHouses>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useHouseApiSearchHouses<TData = Awaited<ReturnType<typeof houseApiSearchHouses>>, TError = ErrorType<unknown>>(
 params?: HouseApiSearchHousesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof houseApiSearchHouses>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof houseApiSearchHouses>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useHouseApiSearchHouses<TData = Awaited<ReturnType<typeof houseApiSearchHouses>>, TError = ErrorType<unknown>>(
 params?: HouseApiSearchHousesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof houseApiSearchHouses>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 하우스 검색
 */

export function useHouseApiSearchHouses<TData = Awaited<ReturnType<typeof houseApiSearchHouses>>, TError = ErrorType<unknown>>(
 params?: HouseApiSearchHousesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof houseApiSearchHouses>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getHouseApiSearchHousesQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * @summary 하우스 검색
 */
export const prefetchHouseApiSearchHouses = async <TData = Awaited<ReturnType<typeof houseApiSearchHouses>>, TError = ErrorType<unknown>>(
 queryClient: QueryClient, params?: HouseApiSearchHousesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof houseApiSearchHouses>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ): Promise<QueryClient> => {

  const queryOptions = getHouseApiSearchHousesQueryOptions(params,options)

  await queryClient.prefetchQuery(queryOptions);

  return queryClient;
}


/**
 * @summary 하우스 생성
 */
export const houseApiCreateHouse = (
    createHouseRequest: BodyType<CreateHouseRequest>,
 options?: SecondParameter<typeof farmfarmAxiosInstance>,signal?: AbortSignal
) => {
      
      
      return farmfarmAxiosInstance<string>(
      {url: `/v1/houses`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createHouseRequest, signal
    },
      options);
    }
  


export const getHouseApiCreateHouseMutationOptions = <TData = Awaited<ReturnType<typeof houseApiCreateHouse>>, TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{data: BodyType<CreateHouseRequest>}, TContext>, request?: SecondParameter<typeof farmfarmAxiosInstance>}
) => {
const mutationKey = ['houseApiCreateHouse'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof houseApiCreateHouse>>, {data: BodyType<CreateHouseRequest>}> = (props) => {
          const {data} = props ?? {};

          return  houseApiCreateHouse(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions } as UseMutationOptions<TData, TError,{data: BodyType<CreateHouseRequest>}, TContext>}

    export type HouseApiCreateHouseMutationResult = NonNullable<Awaited<ReturnType<typeof houseApiCreateHouse>>>
    export type HouseApiCreateHouseMutationBody = BodyType<CreateHouseRequest>
    export type HouseApiCreateHouseMutationError = ErrorType<unknown>

    /**
 * @summary 하우스 생성
 */
export const useHouseApiCreateHouse = <TData = Awaited<ReturnType<typeof houseApiCreateHouse>>, TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{data: BodyType<CreateHouseRequest>}, TContext>, request?: SecondParameter<typeof farmfarmAxiosInstance>}
): UseMutationResult<
        TData,
        TError,
        {data: BodyType<CreateHouseRequest>},
        TContext
      > => {

      const mutationOptions = getHouseApiCreateHouseMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary 하우스 장치 전체 조회
 */
export const houseApiGetAllHouseDevices = (
    houseId: string,
 options?: SecondParameter<typeof farmfarmAxiosInstance>,signal?: AbortSignal
) => {
      
      
      return farmfarmAxiosInstance<GetAllHouseDevicesResponse[]>(
      {url: `/v1/houses/${houseId}/devices`, method: 'GET', signal
    },
      options);
    }
  

export const getHouseApiGetAllHouseDevicesQueryKey = (houseId: string,) => {
    return [`/v1/houses/${houseId}/devices`] as const;
    }

    
export const getHouseApiGetAllHouseDevicesInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>>, TError = ErrorType<unknown>>(houseId: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getHouseApiGetAllHouseDevicesQueryKey(houseId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>> = ({ signal }) => houseApiGetAllHouseDevices(houseId, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(houseId),  staleTime: 10000,  ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type HouseApiGetAllHouseDevicesInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>>
export type HouseApiGetAllHouseDevicesInfiniteQueryError = ErrorType<unknown>


export function useHouseApiGetAllHouseDevicesInfinite<TData = InfiniteData<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>>, TError = ErrorType<unknown>>(
 houseId: string, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useHouseApiGetAllHouseDevicesInfinite<TData = InfiniteData<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>>, TError = ErrorType<unknown>>(
 houseId: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useHouseApiGetAllHouseDevicesInfinite<TData = InfiniteData<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>>, TError = ErrorType<unknown>>(
 houseId: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 하우스 장치 전체 조회
 */

export function useHouseApiGetAllHouseDevicesInfinite<TData = InfiniteData<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>>, TError = ErrorType<unknown>>(
 houseId: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getHouseApiGetAllHouseDevicesInfiniteQueryOptions(houseId,options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * @summary 하우스 장치 전체 조회
 */
export const prefetchHouseApiGetAllHouseDevicesInfinite = async <TData = Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>, TError = ErrorType<unknown>>(
 queryClient: QueryClient, houseId: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ): Promise<QueryClient> => {

  const queryOptions = getHouseApiGetAllHouseDevicesInfiniteQueryOptions(houseId,options)

  await queryClient.prefetchInfiniteQuery(queryOptions);

  return queryClient;
}


export const getHouseApiGetAllHouseDevicesQueryOptions = <TData = Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>, TError = ErrorType<unknown>>(houseId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getHouseApiGetAllHouseDevicesQueryKey(houseId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>> = ({ signal }) => houseApiGetAllHouseDevices(houseId, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(houseId),  staleTime: 10000,  ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type HouseApiGetAllHouseDevicesQueryResult = NonNullable<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>>
export type HouseApiGetAllHouseDevicesQueryError = ErrorType<unknown>


export function useHouseApiGetAllHouseDevices<TData = Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>, TError = ErrorType<unknown>>(
 houseId: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useHouseApiGetAllHouseDevices<TData = Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>, TError = ErrorType<unknown>>(
 houseId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useHouseApiGetAllHouseDevices<TData = Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>, TError = ErrorType<unknown>>(
 houseId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 하우스 장치 전체 조회
 */

export function useHouseApiGetAllHouseDevices<TData = Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>, TError = ErrorType<unknown>>(
 houseId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getHouseApiGetAllHouseDevicesQueryOptions(houseId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * @summary 하우스 장치 전체 조회
 */
export const prefetchHouseApiGetAllHouseDevices = async <TData = Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>, TError = ErrorType<unknown>>(
 queryClient: QueryClient, houseId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof houseApiGetAllHouseDevices>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ): Promise<QueryClient> => {

  const queryOptions = getHouseApiGetAllHouseDevicesQueryOptions(houseId,options)

  await queryClient.prefetchQuery(queryOptions);

  return queryClient;
}


/**
 * @summary 하우스 장치 생성
 */
export const houseApiCreateHouseDevice = (
    houseId: string,
    createHouseDeviceRequest: BodyType<CreateHouseDeviceRequest>,
 options?: SecondParameter<typeof farmfarmAxiosInstance>,signal?: AbortSignal
) => {
      
      
      return farmfarmAxiosInstance<string>(
      {url: `/v1/houses/${houseId}/devices`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createHouseDeviceRequest, signal
    },
      options);
    }
  


export const getHouseApiCreateHouseDeviceMutationOptions = <TData = Awaited<ReturnType<typeof houseApiCreateHouseDevice>>, TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{houseId: string;data: BodyType<CreateHouseDeviceRequest>}, TContext>, request?: SecondParameter<typeof farmfarmAxiosInstance>}
) => {
const mutationKey = ['houseApiCreateHouseDevice'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof houseApiCreateHouseDevice>>, {houseId: string;data: BodyType<CreateHouseDeviceRequest>}> = (props) => {
          const {houseId,data} = props ?? {};

          return  houseApiCreateHouseDevice(houseId,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions } as UseMutationOptions<TData, TError,{houseId: string;data: BodyType<CreateHouseDeviceRequest>}, TContext>}

    export type HouseApiCreateHouseDeviceMutationResult = NonNullable<Awaited<ReturnType<typeof houseApiCreateHouseDevice>>>
    export type HouseApiCreateHouseDeviceMutationBody = BodyType<CreateHouseDeviceRequest>
    export type HouseApiCreateHouseDeviceMutationError = ErrorType<unknown>

    /**
 * @summary 하우스 장치 생성
 */
export const useHouseApiCreateHouseDevice = <TData = Awaited<ReturnType<typeof houseApiCreateHouseDevice>>, TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{houseId: string;data: BodyType<CreateHouseDeviceRequest>}, TContext>, request?: SecondParameter<typeof farmfarmAxiosInstance>}
): UseMutationResult<
        TData,
        TError,
        {houseId: string;data: BodyType<CreateHouseDeviceRequest>},
        TContext
      > => {

      const mutationOptions = getHouseApiCreateHouseDeviceMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary 하우스 단건 조회
 */
export const houseApiGetHouseById = (
    houseId: string,
 options?: SecondParameter<typeof farmfarmAxiosInstance>,signal?: AbortSignal
) => {
      
      
      return farmfarmAxiosInstance<GetHouseByIdResponse>(
      {url: `/v1/houses/${houseId}`, method: 'GET', signal
    },
      options);
    }
  

export const getHouseApiGetHouseByIdQueryKey = (houseId: string,) => {
    return [`/v1/houses/${houseId}`] as const;
    }

    
export const getHouseApiGetHouseByIdInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof houseApiGetHouseById>>>, TError = ErrorType<unknown>>(houseId: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof houseApiGetHouseById>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getHouseApiGetHouseByIdQueryKey(houseId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof houseApiGetHouseById>>> = ({ signal }) => houseApiGetHouseById(houseId, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(houseId),  staleTime: 10000,  ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof houseApiGetHouseById>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type HouseApiGetHouseByIdInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof houseApiGetHouseById>>>
export type HouseApiGetHouseByIdInfiniteQueryError = ErrorType<unknown>


export function useHouseApiGetHouseByIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof houseApiGetHouseById>>>, TError = ErrorType<unknown>>(
 houseId: string, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof houseApiGetHouseById>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof houseApiGetHouseById>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useHouseApiGetHouseByIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof houseApiGetHouseById>>>, TError = ErrorType<unknown>>(
 houseId: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof houseApiGetHouseById>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof houseApiGetHouseById>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useHouseApiGetHouseByIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof houseApiGetHouseById>>>, TError = ErrorType<unknown>>(
 houseId: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof houseApiGetHouseById>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 하우스 단건 조회
 */

export function useHouseApiGetHouseByIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof houseApiGetHouseById>>>, TError = ErrorType<unknown>>(
 houseId: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof houseApiGetHouseById>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getHouseApiGetHouseByIdInfiniteQueryOptions(houseId,options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * @summary 하우스 단건 조회
 */
export const prefetchHouseApiGetHouseByIdInfinite = async <TData = Awaited<ReturnType<typeof houseApiGetHouseById>>, TError = ErrorType<unknown>>(
 queryClient: QueryClient, houseId: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof houseApiGetHouseById>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ): Promise<QueryClient> => {

  const queryOptions = getHouseApiGetHouseByIdInfiniteQueryOptions(houseId,options)

  await queryClient.prefetchInfiniteQuery(queryOptions);

  return queryClient;
}


export const getHouseApiGetHouseByIdQueryOptions = <TData = Awaited<ReturnType<typeof houseApiGetHouseById>>, TError = ErrorType<unknown>>(houseId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof houseApiGetHouseById>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getHouseApiGetHouseByIdQueryKey(houseId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof houseApiGetHouseById>>> = ({ signal }) => houseApiGetHouseById(houseId, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(houseId),  staleTime: 10000,  ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof houseApiGetHouseById>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type HouseApiGetHouseByIdQueryResult = NonNullable<Awaited<ReturnType<typeof houseApiGetHouseById>>>
export type HouseApiGetHouseByIdQueryError = ErrorType<unknown>


export function useHouseApiGetHouseById<TData = Awaited<ReturnType<typeof houseApiGetHouseById>>, TError = ErrorType<unknown>>(
 houseId: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof houseApiGetHouseById>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof houseApiGetHouseById>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useHouseApiGetHouseById<TData = Awaited<ReturnType<typeof houseApiGetHouseById>>, TError = ErrorType<unknown>>(
 houseId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof houseApiGetHouseById>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof houseApiGetHouseById>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useHouseApiGetHouseById<TData = Awaited<ReturnType<typeof houseApiGetHouseById>>, TError = ErrorType<unknown>>(
 houseId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof houseApiGetHouseById>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 하우스 단건 조회
 */

export function useHouseApiGetHouseById<TData = Awaited<ReturnType<typeof houseApiGetHouseById>>, TError = ErrorType<unknown>>(
 houseId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof houseApiGetHouseById>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getHouseApiGetHouseByIdQueryOptions(houseId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * @summary 하우스 단건 조회
 */
export const prefetchHouseApiGetHouseById = async <TData = Awaited<ReturnType<typeof houseApiGetHouseById>>, TError = ErrorType<unknown>>(
 queryClient: QueryClient, houseId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof houseApiGetHouseById>>, TError, TData>>, request?: SecondParameter<typeof farmfarmAxiosInstance>}

  ): Promise<QueryClient> => {

  const queryOptions = getHouseApiGetHouseByIdQueryOptions(houseId,options)

  await queryClient.prefetchQuery(queryOptions);

  return queryClient;
}


/**
 * @summary 하우스 삭제
 */
export const houseApiDeleteHouse = (
    houseId: string,
 options?: SecondParameter<typeof farmfarmAxiosInstance>,) => {
      
      
      return farmfarmAxiosInstance<void>(
      {url: `/v1/houses/${houseId}`, method: 'DELETE'
    },
      options);
    }
  


export const getHouseApiDeleteHouseMutationOptions = <TData = Awaited<ReturnType<typeof houseApiDeleteHouse>>, TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{houseId: string}, TContext>, request?: SecondParameter<typeof farmfarmAxiosInstance>}
) => {
const mutationKey = ['houseApiDeleteHouse'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof houseApiDeleteHouse>>, {houseId: string}> = (props) => {
          const {houseId} = props ?? {};

          return  houseApiDeleteHouse(houseId,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions } as UseMutationOptions<TData, TError,{houseId: string}, TContext>}

    export type HouseApiDeleteHouseMutationResult = NonNullable<Awaited<ReturnType<typeof houseApiDeleteHouse>>>
    
    export type HouseApiDeleteHouseMutationError = ErrorType<unknown>

    /**
 * @summary 하우스 삭제
 */
export const useHouseApiDeleteHouse = <TData = Awaited<ReturnType<typeof houseApiDeleteHouse>>, TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{houseId: string}, TContext>, request?: SecondParameter<typeof farmfarmAxiosInstance>}
): UseMutationResult<
        TData,
        TError,
        {houseId: string},
        TContext
      > => {

      const mutationOptions = getHouseApiDeleteHouseMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary 하우스 수정
 */
export const houseApiUpdateHouse = (
    houseId: string,
    updateHouseRequest: BodyType<UpdateHouseRequest>,
 options?: SecondParameter<typeof farmfarmAxiosInstance>,) => {
      
      
      return farmfarmAxiosInstance<void>(
      {url: `/v1/houses/${houseId}`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: updateHouseRequest
    },
      options);
    }
  


export const getHouseApiUpdateHouseMutationOptions = <TData = Awaited<ReturnType<typeof houseApiUpdateHouse>>, TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{houseId: string;data: BodyType<UpdateHouseRequest>}, TContext>, request?: SecondParameter<typeof farmfarmAxiosInstance>}
) => {
const mutationKey = ['houseApiUpdateHouse'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof houseApiUpdateHouse>>, {houseId: string;data: BodyType<UpdateHouseRequest>}> = (props) => {
          const {houseId,data} = props ?? {};

          return  houseApiUpdateHouse(houseId,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions } as UseMutationOptions<TData, TError,{houseId: string;data: BodyType<UpdateHouseRequest>}, TContext>}

    export type HouseApiUpdateHouseMutationResult = NonNullable<Awaited<ReturnType<typeof houseApiUpdateHouse>>>
    export type HouseApiUpdateHouseMutationBody = BodyType<UpdateHouseRequest>
    export type HouseApiUpdateHouseMutationError = ErrorType<unknown>

    /**
 * @summary 하우스 수정
 */
export const useHouseApiUpdateHouse = <TData = Awaited<ReturnType<typeof houseApiUpdateHouse>>, TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{houseId: string;data: BodyType<UpdateHouseRequest>}, TContext>, request?: SecondParameter<typeof farmfarmAxiosInstance>}
): UseMutationResult<
        TData,
        TError,
        {houseId: string;data: BodyType<UpdateHouseRequest>},
        TContext
      > => {

      const mutationOptions = getHouseApiUpdateHouseMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary 하우스 장치 삭제
 */
export const houseApiDeleteHouseDevice = (
    houseId: string,
    houseDeviceId: string,
 options?: SecondParameter<typeof farmfarmAxiosInstance>,) => {
      
      
      return farmfarmAxiosInstance<void>(
      {url: `/v1/houses/${houseId}/devices/${houseDeviceId}`, method: 'DELETE'
    },
      options);
    }
  


export const getHouseApiDeleteHouseDeviceMutationOptions = <TData = Awaited<ReturnType<typeof houseApiDeleteHouseDevice>>, TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{houseId: string;houseDeviceId: string}, TContext>, request?: SecondParameter<typeof farmfarmAxiosInstance>}
) => {
const mutationKey = ['houseApiDeleteHouseDevice'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof houseApiDeleteHouseDevice>>, {houseId: string;houseDeviceId: string}> = (props) => {
          const {houseId,houseDeviceId} = props ?? {};

          return  houseApiDeleteHouseDevice(houseId,houseDeviceId,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions } as UseMutationOptions<TData, TError,{houseId: string;houseDeviceId: string}, TContext>}

    export type HouseApiDeleteHouseDeviceMutationResult = NonNullable<Awaited<ReturnType<typeof houseApiDeleteHouseDevice>>>
    
    export type HouseApiDeleteHouseDeviceMutationError = ErrorType<unknown>

    /**
 * @summary 하우스 장치 삭제
 */
export const useHouseApiDeleteHouseDevice = <TData = Awaited<ReturnType<typeof houseApiDeleteHouseDevice>>, TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{houseId: string;houseDeviceId: string}, TContext>, request?: SecondParameter<typeof farmfarmAxiosInstance>}
): UseMutationResult<
        TData,
        TError,
        {houseId: string;houseDeviceId: string},
        TContext
      > => {

      const mutationOptions = getHouseApiDeleteHouseDeviceMutationOptions(options);

      return useMutation(mutationOptions);
    }
    