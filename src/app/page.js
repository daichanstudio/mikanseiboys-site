import {allBlogs} from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import InsightRoll from "@/src/components/About/InsightRoll"

const insights = [
  "八王子発",
  "4ピース青春パンクバンド",
  "Vo.田中優一",
  "Gt.鎌田浩太朗",
  "Dr.福新悠太",
  "Ba.小森春季(Support)",
];




export default function Home() {
  console.log(allBlogs);
  
  return (
    <main className="flex flex-col items-center justify-center">

      <InsightRoll insights={insights} />
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} /> 



    </main>
  )
}