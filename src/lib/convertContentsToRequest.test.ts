import { convertContentsToRequest } from "src/lib/convertContentsToRequest";

const mockFormBody = {
  title: "hoge",
  bodyContents: {
    oneWord: "hoge",
    overView: "hoge",
    myIdea: "hoge",
    reference: "hoge",
  },
  tags: [
    {
      name: "hoge",
      versions: ["hoge"],
    },
  ],
  token: "hoge",
};

const mockRequestBody = {
  title: "hoge",
  body: `# 一言まとめ\nhoge\n# 調べたことを深掘り\nhoge\n# 自分の考え\nhoge\n# 参考文献\nhoge\n`,
  tags: [
    {
      name: "hoge",
      versions: ["hoge"],
    },
  ],
  token: "hoge",
  private: false,
};

describe("src/lib/convertContentsToRequest.ts", () => {
  test("Success convert form body to request body", () => {
    expect(convertContentsToRequest(mockFormBody)).toStrictEqual(
      mockRequestBody
    );
  });
});
