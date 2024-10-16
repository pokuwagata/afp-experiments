import { useEffect, useState } from "react";

export default function OptionalChain() {
  const [data, setData] = useState<{ a: boolean } | undefined>();

  useEffect(() => {
    setData({ a: [1].includes(1) });
  }, []);

  console.log(data?.a);
  return <div>{JSON.stringify(data?.a)}</div>;
}
