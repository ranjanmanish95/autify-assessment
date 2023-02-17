import RepoList from "../components/repositories/RepoList";
import { Fragment } from "react";
import Head from "next/head";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

function HomePage({ pinnableItems }) {
  return (
    <Fragment>
      <Head>
        <title>GitHub Repository with GraphQl</title>
        <meta
          name="description"
          content="Check my github repository with graphql api integration"
        />
      </Head>
      <RepoList repos={pinnableItems} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql"
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
      }
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "ranjanmanish95") {
          pinnableItems(first: 13) {
            totalCount
            edges {
              node {
                ... on Repository {
                  id
                  name
                  url
                  description
                }
              }
            }
          }
        }
      }
    `
  });
  const { user } = data;
  const pinnableItems = user.pinnableItems.edges.map(({ node }) => node);
  return {
    props: {
      pinnableItems
    }
  };
}

export default HomePage;
