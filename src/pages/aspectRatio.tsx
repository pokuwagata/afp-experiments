export default function AspectRatio() {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src="https://placehold.jp/160x90.png"
      alt=""
      style={{
        width: "160px",
        aspectRatio: 1 / 1,
      }}
    />
  );
}
