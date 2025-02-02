export default {
    farmfarm: {
        input: 'https://api.house1.farmfarm.me/v3/api-docs',
        output: {
            mode: 'tags-split',
            target: 'src/openapi/api',
            schemas: 'src/openapi/model',
            client: 'react-query',
            mock: false,
            override: {
                mutator: {
                    path: './src/axios/axios_instance.ts',
                    name: 'farmfarmAxiosInstance',
                },
                query: {
                    usePrefetch: true,
                    useQuery: true,
                    useInfinite: true,
                    // useInfiniteQueryParam: 'page', // 다음 페이지 데이터를 가져오는 데 사용될 쿼리 파라미터
                    options: {
                        staleTime: 10000, // 캐시 데이터의 신선도 유지 시간
                    },
                    signal: true, // 요청 취소 기능 활성화
                },
                operations: {
                    // 특정 메서드에 대한 개별 설정
                    searchComments: {
                        useInfiniteQueryParam: undefined, // 페이지네이션 파라미터 제거
                    },
                },
            },
        },
    },
};