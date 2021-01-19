import React from "react";

function SSR({ post = {} }) {
  return (
    <div>
      <h1>Hello NextJS!</h1>

      <p>this page is ssr</p>

      <pre>{JSON.stringify(post)}</pre>
    </div>
  );
}

SSR.getInitialProps = async () => {
  const _ = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const post = await _.json();

  return {
    post,
  };
};

export default SSR;
