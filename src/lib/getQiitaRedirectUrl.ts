/**
 * @package
 */
export const getQiitaRedirectUrl = () =>
  `https://qiita.com/api/v2/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&state=${process.env.NEXT_PUBLIC_QIITA_REDIRECT_STATE}&scope=read_qiita+write_qiita`;
