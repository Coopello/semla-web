export type PostQiitaAccessToken = {
  request: {
    client_id: string;
    client_secret: string;
    code: string;
  };
  response: {
    client_id: string;
    scopes: string[];
    token: string;
  };
};
