import Image from "next/image";
import Link from 'next/link'
export default function Home() {
	return (
		<div className="flex flex-col h-screen justify-center items-center">
			<Link href="PlayGround"><button  type="button" className="text-xlg  text-white bg-orange-600 outline outline-2 ring-color-orange">
				CLICK TO PLAY SNAKE GAME!
			</button></Link>
		</div>
	);
}
