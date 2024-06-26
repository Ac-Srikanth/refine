import gql from "graphql-tag";
import dataProvider from "../../src/index";
import client from "../gqlClient";
import "./index.mock";

describe("create", () => {
  it("correct response with meta", async () => {
    const { data } = await dataProvider(client).create({
      resource: "posts",
      variables: {
        title: "foo",
        content: "bar",
        category: "2",
      },
      meta: {
        fields: [
          {
            operation: "post",
            fields: ["id", "title", "content", { category: ["id"] }],
            variables: {},
          },
        ],
      },
    });

    expect(data.id).toEqual("43");
    expect(data.title).toEqual("foo");
    expect(data.content).toEqual("bar");
    expect(data.category.id).toEqual("2");
  });

  it("correct response without meta", async () => {
    const { data } = await dataProvider(client).create({
      resource: "posts",
      variables: {
        title: "foo",
        content: "bar",
        category: "2",
      },
    });

    expect(data.id).toEqual("44");
  });
});

describe("create gql", () => {
  it("correct response", async () => {
    const { data } = await dataProvider(client).create({
      resource: "posts",
      variables: {
        title: "test",
        content: "test",
        category: "19",
      },
      meta: {
        gqlQuery: gql`
          mutation createPost($input: createPostInput!) {
            createPost (input: $input) {
              post {
                id
                title
                content
                category {
                  id
                }
              }
            }
          }
        `,
      },
    });

    expect(data.title).toEqual("test");
    expect(data.content).toEqual("test");
    expect(data.category.id).toEqual("19");
  });
});
