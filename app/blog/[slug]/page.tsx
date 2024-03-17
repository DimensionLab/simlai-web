import { storyblokVersion } from "@/lib/environment";
import { BlogStory } from "@/types/blog";
import { StoryblokStory } from "@storyblok/react/rsc";
import type { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const response = await fetchData(slug);
  const data = await response.json();
  const { story }: { story: BlogStory } = data;

  return {
    title: story.name,
    description: `Read the article ${story.name} on the Siml.ai Blog`,
    openGraph: {
      title: story.name,
      description: `Read the article ${story.name} on the Siml.ai Blog`,
      type: "article",
      url: `https://siml.ai/blog/${story.slug}`,
      images: [
        {
          url: story.content.image.filename,
          alt: `Siml.ai Blog Article Image for ${story.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@siml_ai",
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  
  if (!slug) {
    return redirect("/blog");
  }

  const response = await fetchData(slug);
  const data = await response.json();

  const { story }: { story: BlogStory } = data;

  return (
    <section className="flex flex-col items-center">
      <StoryblokStory story={story} firstPublishedAt={story.first_published_at}/>
    </section>
)
}

const fetchData = (slug: string) => {
  const url = `https://api.storyblok.com/v2/cdn/stories/blog/${slug}?version=${storyblokVersion}&token=${process.env.storyblokApiToken}`
  return fetch(url, { next: { revalidate: 300 }})
}

export async function generateStaticParams() {
  const url = `https://api.storyblok.com/v2/cdn/links/?starts_with=blog/&version=${storyblokVersion}&per_page=100&token=${process.env.storyblokApiToken}`;
  const response = await fetch(url, { next: { revalidate: 300 }});
  const data = await response.json();
  let paths: string[] = [];
  Object.keys(data.links).forEach((linkKey) => {
    const slug = data.links[linkKey].slug;
    
    if(slug.includes('university/')) {
      return;
    }

    if(data.links[linkKey].is_folder) {
      return;
    }

    let splittedSlug = slug.split('/');
    const slugAtEnd = splittedSlug.pop();
    if (slugAtEnd) {
      paths.push(slugAtEnd);
    }
  });  

  return paths.map((path) => ({
    slug: path,
  }))
}
export const dynamicParams = true;