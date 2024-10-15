import { useState } from "react";

export default function UseState() {
  const [data] = useState("useState");

  return <div>{data}</div>;
}
