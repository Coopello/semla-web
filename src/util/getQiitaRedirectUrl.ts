import { CLIENT_ID, QIITA_REDIRECT_STATE } from "src/config";

/**
 * @package
 */
export const getQiitaRedirectUrl = () =>
  `https://qiita.com/api/v2/oauth/authorize?client_id=${CLIENT_ID}&state=${QIITA_REDIRECT_STATE}&scope=read_qiita+write_qiita`;
