/* eslint-disable prettier/prettier */
"use client";
import { Button } from "@nextui-org/button";

import { CartIcon } from "@/components/icons";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import ProductList from "@/components/product-list";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const refresh = searchParams.get("refresh");

  if (refresh === "true") {
    router.replace("/");
    window.location.reload();
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-row items-center justify-center gap-4 mb-4">
        <Button isIconOnly size="lg" variant="ghost">
          <CartIcon size={30} />
        </Button>{" "}
        <GradualSpacing
          className="font-display text-center text-2xl md:text-4xl lg:text-5xl font-bold tracking-[-0.1em]  text-black dark:text-white md:leading-[5rem]"
          text="Buy & Sell Used Items"
        />
      </div>

      <ProductList category="" />
    </section>
  );
}
