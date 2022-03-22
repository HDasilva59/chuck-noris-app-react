import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query.category);
  const response = await fetch(
    `https://api.chucknorris.io/jokes/random`
  );
  const joke = await response.json();

  return {
    props: {
      joke: joke.value,
    }, // will be passed to the page component as props
  };
};

const Joke: NextPage = (props) => {
  return (
  <div>
    {props.joke}
    <br />
    <Link href="/categories/dev">
    <a>dev category</a>
    </Link>
    <br />
    <Link href="/categories/animal">
    <a>animal category</a>
    </Link>
    <br />
    <Link href="/categories/career">
    <a>carrer category</a>
    </Link>
    <br />
    <Link href="/categories/celebrity">
    <a>celebrity category</a>
    </Link>
    <br />
    <Link href="/categories/explicit">
    <a>explicit category</a>
    </Link>
    <br />
    <Link href="/categories/fashion">
    <a>fashion</a>
    </Link>
  </div>);
};

export default Joke;
