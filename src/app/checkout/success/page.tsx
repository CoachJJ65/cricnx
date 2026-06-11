import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function CheckoutSuccessPage() {
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

      <main className="flex-1 w-full max-w-lg mx-auto py-12 px-6 text-center">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-green-600">Payment Successful!</CardTitle>
            <CardDescription>Your funds are now securely held in escrow.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600 dark:text-slate-400">
              We have notified the seller to prepare your item for delivery. 
              Your payment will only be released to the seller once you have received the item and confirmed it is in the expected condition.
            </p>
          </CardContent>
          <CardFooter className="justify-center">
            <Button asChild>
              <Link href="/">Back to Store</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
