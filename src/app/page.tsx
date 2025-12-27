import { getSortedPostsData } from "@/lib/api";
import DateFormatter from "@/components/date-formatter";
import Link from "next/link";
import { ArrowRight, Terminal, Sparkles, Code } from "lucide-react";
import Hero from "@/components/Hero";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <Hero />

      {/* Latest Posts Section */}
      <section id="posts" className="w-full max-w-4xl z-10">
        <h2 className="text-3xl font-bold mb-12 text-center">Latest Writings</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {allPostsData.map(({ id, date, title }) => (
            <Link key={id} href={`/blog/${id}`} className="block group">
              <article className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm transition-all hover:bg-card hover:border-primary/50 hover:shadow-lg h-full">
                <div className="text-sm text-muted-foreground mb-2">
                  <DateFormatter dateString={date} />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <div className="flex items-center text-primary font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <div className="mt-32 grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-3 lg:text-left gap-8">
        <div className="group rounded-2xl border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100/50 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-card/50 backdrop-blur-sm">
          <div className="mb-2"><Terminal className="w-8 h-8 text-blue-500" /></div>
          <h2 className="mb-3 text-2xl font-semibold">Modern Stack</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-60">Next.js 14, React 18, Tailwind CSS.</p>
        </div>
        <div className="group rounded-2xl border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100/50 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-card/50 backdrop-blur-sm">
          <div className="mb-2"><Sparkles className="w-8 h-8 text-purple-500" /></div>
          <h2 className="mb-3 text-2xl font-semibold">Aesthetics</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-60">Glassmorphism & animations.</p>
        </div>
        <div className="group rounded-2xl border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100/50 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-card/50 backdrop-blur-sm">
          <div className="mb-2"><Code className="w-8 h-8 text-green-500" /></div>
          <h2 className="mb-3 text-2xl font-semibold">Markdown</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-60">Powered by local markdown files.</p>
        </div>
      </div>
    </main>
  );
}
