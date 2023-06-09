import { getPostDatas } from "./indexpage.tsx";
import { Sitemap } from "https://deno.land/x/deno_sitemap@0.1.3/mod.ts";

export default async function(){
  const sitemap = new Sitemap("https://nakasyou.deno.dev");
  sitemap.add('/') // root
  // posts
  for(const post of (await getPostDatas())){
    sitemap.add(`/posts/${post.name}`,{
      lastmod: post.lastmod
    })
  }
  
  return sitemap.sitemap;
}
