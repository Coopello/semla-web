type SuccessResponse<T = object> = {
  data: T;
  error: null;
};

type FailureResponse = {
  data: undefined;
  error: string;
};

/**
 * @package
 */
export type ApiResponse<T = object> = SuccessResponse<T> | FailureResponse;
