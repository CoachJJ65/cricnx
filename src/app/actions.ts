"use server"

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createListing(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const condition = formData.get("condition") as string;

  // Mocking seller ID for now since auth isn't fully set up.
  // We'll create a dummy user if one doesn't exist.
  let seller = await prisma.user.findFirst({
    where: { email: "dummy@seller.com" }
  });

  if (!seller) {
    seller = await prisma.user.create({
      data: {
        email: "dummy@seller.com",
        name: "Dummy Seller",
      }
    });
  }

  await prisma.listing.create({
    data: {
      seller_id: seller.id,
      title,
      description,
      price,
      condition,
    }
  });

  revalidatePath("/");
  redirect("/");
}
