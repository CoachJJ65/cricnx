import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export default async function CheckoutPage({ params }: { params: { id: string } }) {
  // If we had actual dynamic listings, we'd fetch the listing here
  // const listing = await prisma.listing.findUnique({ where: { id: params.id } })

  async function mockPurchase() {
    "use server"
    // Mock the escrow purchase logic
    // const listingId = params.id;
    // create transaction...
    redirect("/checkout/success");
  }

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
      </header>

      <main className="flex-1 w-full max-w-lg mx-auto py-12 px-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Checkout (Escrow)</CardTitle>
            <CardDescription>You are purchasing an item securely via Escrow.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="font-medium">Item:</span>
              <span className="text-slate-600">Gunn & Moore Bat (Mock)</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="font-medium">Total:</span>
              <span className="text-lg font-bold">R 850.00</span>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md text-sm text-blue-800 dark:text-blue-200 mt-4">
              <p>
                <strong>How it works:</strong> Your payment will be held securely in the CRIC&lt;n&gt;GEAR escrow account. The funds will only be released to the seller once you receive the item and confirm you are satisfied.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-4">
            <form action={mockPurchase} className="w-full">
              <Button type="submit" className="w-full" size="lg">Pay via PayFast (Simulated)</Button>
            </form>
            <Button variant="outline" asChild className="w-full">
              <Link href="/">Cancel</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
