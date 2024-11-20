
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dmkReZo3GhU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Stats from "@/components/Components/Stats"
import Contact from "@/components/Components/Contact"
import CustomMap from "@/components/Components/Map"
import  Footer  from "@/components/footer"
import AchievementCarousel from "@/components/Components/Achievement"

export default function Component() {
  return (
    <div key="1" className="flex flex-col min-h-[100dvh]">
      <section className="w-full h-[75vh] flex justify-center items-center  overflow-hidden">
        <div className="container  w-3/4 flex flex-col items-center justify-center gap-2 px-4 text-center md:gap-4 md:px-12 ">
          <div className="space-y-2 flex align-center justify-center flex-col">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-left flex align-center justify-center leading-[1.2]">
              Secure your
              <br />
              family’s future</h1>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Let me help you secure your family's financial well-being. Trusted advisor. Peace of mind.
            </p> </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-blue-primary px-8 text-sm font-medium shadow-sm gap-2 sm:gap-3 md:gap-2 hover:bg-blue-secondary hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 text-white"
              href="#"
            >
              Read more
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-yellow-primary px-8 text-sm font-medium shadow-sm gap-2 sm:gap-3 md:gap-2 hover:bg-yellow-secondary hover:text-blue-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Contact us
            </Link>
          </div>
        </div>
        <div className="lg:flex hidden overflow-hidden w-[110%] h-full justify-end">
          <Image src="/img/family-bg-1.png" height={2731} width={3687} className="h-auto w-fit" objectFit="cover" alt="" />
        </div>
      </section>
      <section className="w-full bg-slate-100">
        <Stats />
      </section>
      <section className="container w-full py-12- md:py-20- lg:py-16- lg:px-0 flex flex-col lg:flex-row">
        <Image src="/img/pp.png" height={800} width={200} className="h-auto w-[1500px] relative left-0" alt="" />
        <div className="flex items-center justify-center flex-col w-[120%]  px-10 md:py-14 lg:py-20">
          <h1 className="my-3 text-blue-primary text-3xl">Note from M.P Sharma</h1>
          <p>Treat the iframe as any other element utilizing media queries with tailwind. You can do this applying w-full and h-full with the Tailwind plugins mentioned before as the parent div or you can manually do it as below:</p>
          <p>Treat the iframe as any other element utilizing media queries with tailwind. You can do this applying w-full and h-full with the Tailwind plugins mentioned before as the parent div or you can manually do it as below:</p>
          <p>Treat the iframe as any other element utilizing media queries with tailwind. You can do this applying w-full and h-full with the Tailwind plugins mentioned before as the parent div or you can manually do it as below:</p>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What my clients say</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Trusted by the best teams in the world. We help teams of all sizes.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[400px]">
            <div className="grid w-full grid-rows-3 items-stretch justify-center gap-4 sm:grid-rows-1 sm:grid-cols-3 sm:gap-8">
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="150"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width="150"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="150"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width="150"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="150"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width="150"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">

        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Achievements</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Recognized for excellence. Committed to your security.
            </p>
          </div>
          <AchievementCarousel />
        </div>
      </section>
      {/*      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Achievements</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Recognized for excellence. Committed to your security.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[800px] grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-2">
              <img
                alt="Achievement"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="400"
                src="/placeholder.svg"
                width="600"
              />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight">Top Performer Award</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Awarded for exceptional service and dedication to my clients' well-being.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <img
                alt="Achievement"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="400"
                src="/placeholder.svg"
                width="600"
              />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight">Community Leader Recognition</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Honored for my involvement in community outreach and education on financial planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
      <section className="w-full">
        <div>
          {/* <main className="container w-full lg:w-1/2 bg-blue-primary h-full px-0 text-white"><Contact /></main>
          <main className="container w-full lg:w-1/2 h-full px-0"><CustomMap /></main> */}
          <Footer />
        </div>
      </section>
    </div>
  )
}
