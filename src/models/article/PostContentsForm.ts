/**
 * @package
 */
export type PostContentsForm = {
  title: string;
  bodyContents: {
    oneWord: string;
    overView: string;
    myIdea: string;
    reference: string;
  };
  tags: {
    name: string;
    versions: string[];
  }[];
  token: string;
};
