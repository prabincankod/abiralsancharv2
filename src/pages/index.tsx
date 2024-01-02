import Head from "next/head";
import type { InferGetStaticPropsType } from "next";
import NepaliDate from "nepali-date-converter";
import { Article } from "@/components/articles.columns";
import Image from "next/image";
import { HomePageResponse } from "~/types";
import Navbar from "@/components/Navbar";
import { HistoryIcon } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

type PropType = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home(props: PropType) {
  return (
    <>
      <Head>
        <title>Abiral Sanchar : Pathway To Enlightenment</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="https://fav.farm/📢" />
      </Head>

      <div className="flex flex-col items-center  p-4  sm:items-center md:text-center lg:items-start lg:pl-12 ">
        <div className="text-4xl font-extrabold">
          <Image
            src="https://www.abiralsanchar.com/_next/static/media/abiralsancharlogo.aa7052d0.svg"
            alt="Abiral Sanchar Logo"
            width={200}
            height={200}
          />
        </div>
        <div className="text-sm ">{new NepaliDate(new Date()).toString()}</div>
      </div>
      <Navbar />
      <div className=" flex flex-col items-center lg:mx-10   ">
        {props?.posts?.data[1]?.featured_articles?.map((news) => (
          <div
            key={news.id}
            className=" flex  w-full flex-col border-b py-2 text-center"
          >
            <div className="lg:5xl mt-2 text-xl font-medium md:text-3xl">
              {news.title}
            </div>
            <div className="flex mt-2">
              <div className="mx-auto flex items-center">
                <HistoryIcon className="mr-2" />
                {formatDistanceToNow(news.created_at)} ago
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await (
    await fetch("https://jsugauta1.pythonanywhere.com/api/v1/news/homepage/", {
      method: "GET",
    })
  ).json()) as HomePageResponse;

  return {
    props: {
      posts,
    },

    revalidate: 10,
  };
}
