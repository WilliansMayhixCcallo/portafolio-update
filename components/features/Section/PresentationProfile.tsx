import { Box } from "@/components/custom/Box"
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa"
import { FaSquareWhatsapp } from "react-icons/fa6"

export const PresentationProfile = () => {
  return (
    <Box className="flex flex-col justify-center items-center h-full  gap-5"
    >
      <Box >
        <div className="">
          <h1 className="text-white tracking-[10px] bg-[#14081E]  sm:text-2xl lg:text-4xl h-auto p-5 inline-block  uppercase ">Willians </h1>
        </div>
        <div className="flex bg-[#00CD6D]">
          <div className=" p-3 flex-col justify-center items-center">
            <p className="text-2xl flex gap-2"><span>GIT </span> <FaGithub /></p>
            <p className="text-2xl flex gap-2"><span className="text-sm">WHAPSAP</span><FaSquareWhatsapp /></p>

          </div>
          <h1 className="text-white  tracking-[15px] font-bold bg-[#14081E] sm:text-3xl lg:text-5xl h-auto p-5 inline-block  uppercase">  Ccallo</h1>

        </div>
        <div className="inline-block">
          <h1 className="text-white tracking-[15px] bg-[#50069A] text-xl h-auto p-2  uppercase ">Programador</h1>
        </div>
      </Box>
      <Button className="self-start font-semibold w-[120px]">
        Saber mas
      </Button>
    </Box>
  )
}
