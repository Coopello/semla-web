/**
 * @package
 */
export type CreateArticle = {
  request: {
    title: string;
    body: string;
    tags: {
      name: string;
      versions: string[];
    }[];
    private: boolean;
    token: string;
  };
  response: {
    client_id: string;
    scopes: string[];
    token: string;
  };
};
