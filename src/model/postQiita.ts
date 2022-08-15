export type PostQiita = {
  request: {
    title: string;
    body: string;
    tags: {
      name: string;
      versions: string[];
    }[];
    private: boolean;
  };
};
