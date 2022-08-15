import type { AxiosError } from "axios";

type SuccessResponse<T = any> = {
  type: "SUCCESS";
  data?: T;
};

type FailureResponse = {
  type: "FAILURE";
  error: AxiosError | unknown;
};

/**
 * @package
 */
export type ResponseResultType<T = undefined> =
  | SuccessResponse<T>
  | FailureResponse;
