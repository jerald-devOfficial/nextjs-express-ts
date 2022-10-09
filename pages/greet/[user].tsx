import React from "react";
import { GetServerSideProps } from "next";

/* type Params = {
  params: {
    user: string;
  };
};

export const getServerSideProps = async ({ params: { user } }: Params) => {
  return {
    props: {
      user: user,
    },
  };
}; */

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { user } = params!;
  return {
    props: {
      user: user,
    },
  };
};

type Props = {
  user: string;
};

const GreetUser = ({ user }: Props): JSX.Element => {
  return (
    <div>
      <h1>Hello {user}!</h1>
    </div>
  );
};

export default GreetUser;
