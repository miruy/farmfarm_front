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

 * OpenAPI spec version: 1.0.0
 */

export interface SearchHousesResponse {
  id?: string;
  name?: string;
  createdAt?: string;
  updatedAt?: string;
}
