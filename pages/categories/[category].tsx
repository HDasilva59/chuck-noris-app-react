import type { NextPage } from "next";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query.category);
  const response = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${context.query.category}`
  );
  const joke = await response.json();

  return {
    props: {
      joke: joke.value,
    }, // will be passed to the page component as props
  };
};

const Joke: NextPage = (props) => {
  return <div>{props.joke}</div>;
};

export default Joke;
