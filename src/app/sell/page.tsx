import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createListing } from "../actions";
import Link from "next/link";
import Image from "next/image";

export default function SellGearPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      <header className="flex h-16 items-center justify-between border-b bg-white dark:bg-black px-6 shadow-sm">
        <Link href="/" className="flex items-center gap-4">
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
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/">Back to Store</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1 w-full max-w-2xl mx-auto py-12 px-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Sell Your Gear</CardTitle>
            <CardDescription>List your second-hand cricket gear on the marketplace.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={createListing} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-sm font-medium leading-none">Title</label>
                <Input id="title" name="title" placeholder="e.g. Gunn & Moore Kaha 606 Bat Size 6" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-sm font-medium leading-none">Description</label>
                <textarea 
                  id="description" 
                  name="description" 
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Describe the condition, usage, and any defects..."
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="price" className="text-sm font-medium leading-none">Price (ZAR)</label>
                <Input id="price" name="price" type="number" step="0.01" min="0" placeholder="R 0.00" required />
                <p className="text-xs text-muted-foreground">Note: We take a 15% platform fee upon successful sale.</p>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="condition" className="text-sm font-medium leading-none">Condition</label>
                <select 
                  id="condition" 
                  name="condition"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Select condition...</option>
                  <option value="New">New</option>
                  <option value="Like New">Like New</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                  <option value="Well Used">Well Used</option>
                </select>
              </div>

              <Button type="submit" className="mt-4">Post Listing</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
