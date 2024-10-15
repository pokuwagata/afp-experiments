import { useEffect, useState } from "react";

export default function OptionalChain() {
  const [data, setData] = useState<{ a: string } | undefined>();

  useEffect(() => {
    setData({ a: "test" });
  }, []);

  return <div>{data?.a}</div>;
}
