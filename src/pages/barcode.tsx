import { useBarcode } from "next-barcode";

export default function Barcode() {
  const { inputRef } = useBarcode({
    value: "next-barcode",
    options: {
      background: "#ccffff",
    },
  });

  return <svg ref={inputRef} />;
}
