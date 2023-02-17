import { Fragment } from "react";
import RepoDetail from "../../components/repositories/RepoDetail";
import Head from "next/head";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

function RepoDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.repoData.name}</title>
        <meta name="description" content={props.repoData.description} />
      </Head>
      <RepoDetail
        image={props.repoData.image}
        name={props.repoData.name}
        url={props.repoData.url}
        description={props.repoData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
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
  console.log(data);
  const { user } = data;
  const repos = user.pinnableItems.edges.map(({ node }) => node);
  return {
    fallback: "blocking",
    paths: repos.map((repo) => ({
      params: { repoId: repo.id.toString() }
    }))
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup
  const repoId = context.params.repoId;
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
  //  console.log(data);
  const { user } = data;
  const repos = user.pinnableItems.edges.map(({ node }) => node);
  const selectedRepo = repos.find((repo) => repo.id === repoId);

  return {
    props: {
      repoData: {
        id: selectedRepo.id.toString(),
        name: selectedRepo.name,
        url: selectedRepo.url,
        image: "https://pngimg.com/uploads/github/github_PNG28.png",
        description: selectedRepo.description
      }
    }
  };
}

export default RepoDetails;
