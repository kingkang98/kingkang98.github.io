import { getPostData, getSortedPostsData } from '@/lib/api';
import DateFormatter from '@/components/date-formatter';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.id,
    }));
}

export default async function Post({ params }: { params: { slug: string } }) {
    const postData = await getPostData(params.slug);

    return (
        <article className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <Link
                href="/"
                className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors group"
            >
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>

            <div className="space-y-4 text-center mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[1.1]">
                    {postData.title}
                </h1>
                <div className="text-muted-foreground">
                    <DateFormatter dateString={postData.date} />
                </div>
            </div>

            <div
                className="prose prose-lg dark:prose-invert mx-auto break-words"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
        </article>
    );
}
