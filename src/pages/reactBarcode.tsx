import Barcode from "react-barcode";

export default function ReactBarcode() {
  return (
    <Barcode value={"01234567890123456789012345"} format="ITF" width={1} />
  );
}
