import testData from "./test-data.json"
import { Table, Item } from "./components/table";
import { ThemeSwitch } from "./components/theme-switch";

export default function Home() {
  const data: Item[] = testData.map(it => ({
    trackingId: it["Tracking ID"],
    productImage: it["Product Image"],
    productName: it["Product Name"],
    customer: it["Customer"],
    date: it["Date"],
    amount: it["Amount"],
    paymentMode: it["Payment Mode"],
    status: it["Status"]
  }));
  return (
    <main className="font-montserrat font-medium
    bg-primary dark:bg-dark-primary
            text-primary-text dark:text-dark-primary-text">
      <ThemeSwitch />
      <Table data={data} />
    </main>
  );
}
