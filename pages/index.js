import Link from "next/link";

export default function Home() {
    return(
        <main>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/explore">Explore</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
                

            </ul>
        </main>
    )
}