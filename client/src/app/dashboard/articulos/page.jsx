import React from "react";
import { Text } from "@/components/ui";
import { CardArticles } from "@/components/Articles/CardArticles";
import { articles } from "@/components/Articles/data";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function Articulos() {
  return (
    <div className="w-full flex-col rounded-2xl bg-[#FFFFFF75] p-10 text-textColor shadow-md">
      <div className="mb-5 flex justify-between">
        <Text variant="title" className="text-textColor">
          Artículos
        </Text>
        <div>
          <PencilIcon className="text-[#DA3833]" />
          <TrashIcon className="text-[#DA3833]" />
        </div>
      </div>
      <div className="flex flex-wrap gap-10">
        {articles.map((article) => (
          <CardArticles key={article} article={article} />
        ))}
      </div>
    </div>
  );
}
