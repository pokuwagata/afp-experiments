// import Head from "next/head";
// import Image from "next/image";
// import localFont from "next/font/local";
// import styles from "~/styles/Home.module.css";

import { useEffect, useState } from "react";

interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Contents20() {
  return new Array(20).fill(1).map((_, index) => {
    return <Contents key={index} id={index + 1} />;
  });
}

function Contents(props: { id: number }) {
  const [data, setData] = useState<Data | null>(null);
  useEffect(() => {
    let ignore = false;
    setData(null);
    (async () => {
      await fetch(
        `https://jsonplaceholder.typicode.com/posts/${props.id}`
      ).then(async (result) => {
        if (!ignore) {
          setData(await result.json());
        }
      });
    })();
    return () => {
      ignore = true;
    };
  }, [props.id]);

  if (data === null) {
    return <></>;
  }

  return (
    <>
      <img
        src={`https://placehold.jp/3d4070/ffffff/600x336.png?text=${props.id}`}
      />
      <p>{data.title}</p>
      <p>{data.body}</p>
    </>
  );
}
