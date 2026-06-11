import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      <header className="flex h-16 items-center justify-between border-b bg-white dark:bg-black px-6 shadow-sm">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="CRIC<n>GEAR Logo"
            width={120}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-bold text-slate-900 dark:text-white">
            CRIC&lt;n&gt;GEAR
          </span>
        </div>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/sell">Sell Gear</Link>
          </Button>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto py-12 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Welcome to CRIC&lt;n&gt;GEAR
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            The premier marketplace for second-hand cricket gear. Buy and sell with confidence.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder items */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="h-48 bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <span className="text-slate-400">Image</span>
              </div>
              <CardHeader>
                <CardTitle>Gunn & Moore Bat</CardTitle>
                <CardDescription>Size 6, lightly used</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <span className="text-lg font-bold text-slate-900 dark:text-white">R850</span>
                <Button size="sm">Buy Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="border-t bg-white dark:bg-black py-6 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} CRIC&lt;n&gt;GEAR. All rights reserved.
      </footer>
    </div>
  );
}
