import { useBarcode } from "next-barcode";

export default function Barcode() {
  const { inputRef } = useBarcode({
    value: "01234567890123456789012345",
    options: {
      format: "ITF",
    },
  });

  return <svg ref={inputRef} />;
}
