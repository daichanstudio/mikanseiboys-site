import Image from "next/image"
import Link from "next/link"
import profileImg from "@/public/profile-img.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className="w-12 mr-2 overflow-hidden border border-solid rounded-full md:w-16 border-dark dark:border-gray md:mr-4">
            <Image src={profileImg} alt="Mikanseiboys logo" className="w-full h-auto rounded-full dark:fill-light" sizes="20vw" priority />
        </div>
        <span className="text-lg font-bold dark:font-semibold md:text-xl"> 未完成少年 OfficialSite</span>
    </Link>
  )
}
export default Logo