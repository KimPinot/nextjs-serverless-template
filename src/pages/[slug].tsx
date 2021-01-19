import React from "react";
import { useRouter } from "next/router";

function Slug() {
  const router = useRouter();

  return (
    <div>
      <h1>Hello NextJS!</h1>

      <p>this page is slug</p>

      <pre>{JSON.stringify(router.query)}</pre>
    </div>
  );
}

export default Slug;
