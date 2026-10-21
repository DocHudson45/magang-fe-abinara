import Link from "next/link";
import Button from "@/components/Button";

export default function Navbar() {
  return (
    <header className="px-5 md:px-8">
      <nav className="flex items-center justify-between gap-4 py-6">
        <Link href="/" className="font-display text-xl font-medium">
          Baseline Padel
        </Link>
        <div className="hidden items-center gap-8 text-sm md:flex">
          <Link href="/#lapangan">Lapangan</Link>
          <Link href="/#harga">Harga</Link>
          <Link href="/#kelas">Kelas</Link>
          <Link href="/#kontak">Kontak</Link>
        </div>
        <Button href="/#harga">Booking</Button>
      </nav>
    </header>
  );
}
