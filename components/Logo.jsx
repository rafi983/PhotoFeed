import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="w-[150px] md:w-[150px] lg:w-[150px] h-auto"
        src="/lws_logo.png"
        alt="Lws"
        height={100}
        width={165}
        priority
      />
    </Link>
  )
}

export default Logo