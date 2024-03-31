import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "八王子発",
    "4ピース青春パンクバンド",
    "Vo.田中優一",
    "Gt.鎌田浩太朗",
    "Dr.福新悠太",
    "Ba.小森春季(Support)",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="flex flex-col items-center justify-between w-full">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}