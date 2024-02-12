import ArticleTeaser from "./ArticleTeaser";
import {
  getStoryblokApi,
  storyblokEditable
} from "@storyblok/react";

import { useState, useEffect } from "react";
import ArticleLoadingSkeleton from "../blog-components/ArticleLoadingSkeleton";
import NewestArticleTeaser from "./NewestArticleTeaser";
import Search from "../blog-components/Search";

const WHICH_VERSION = process.env.NEXT_PUBLIC_ENVIRONMENT === "production" ? "published" : "draft";

interface AllArticlesProps {
  blok: any;
  articlesArr: any[];
}

const AllArticles = (props: AllArticlesProps) => {
  const blok = props.blok;
  const [articles, setArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>();

  const articlesArr = props.articlesArr;
  const sortedArticlesArrByPublishedDate = articlesArr.sort((a: any, b: any) => {
    return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
  });

  useEffect(() => {
    const getArticles = async () => {
      setIsLoading(true);
        setArticles((prev) => sortedArticlesArrByPublishedDate.map((article: any) => {
          article.content.slug = article.slug;
          return article;
        }));

        let categoryArray: string[] = ["All"];
        articlesArr.forEach((story: any) => {
          // prevent duplicit categories in array
          // only add new category if it isnt already in array
          if(!categoryArray.includes(story.content.category.toString())) {
            categoryArray.push(story.content.category.toString());
          }
        })

        setCategories(categoryArray);
        setIsLoading(false);
    };
    getArticles();
  }, []);

  return (
    <section className="w-full flex flex-col items-center py-12">
      <Search setSelected={setSelectedCategory} categoryArr={categories} />
      <section className="w-full flex items-center justify-center max-w-screen-xl" key={blok.uuid}>
        <div className="w-full flex justify-center">
          <div className="article-container flex flex-col gap-y-8 xl:flex-row w-full">
            {isLoading ? (
              <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-y-4 xl:grid-cols-4 items-center justify-center">
                <ArticleLoadingSkeleton />
                <ArticleLoadingSkeleton />
                <ArticleLoadingSkeleton />
                <ArticleLoadingSkeleton />
                <ArticleLoadingSkeleton />
                <ArticleLoadingSkeleton />
                <ArticleLoadingSkeleton />
                <ArticleLoadingSkeleton />
              </div>
            ) : (
              <div className="flex flex-col w-full items-center justify-center gap-y-8">
                {selectedCategory != "All" && selectedCategory ? (
                  <>
                    <div {...storyblokEditable(blok)} className="hidden xl:flex flex-col gap-y-6 w-full items-center justify-center">
                      {blok && articles[0] && articles.map((article: any, index: number) => (
                        article.content.category == selectedCategory && <NewestArticleTeaser article={article} key={index}/>
                      ))}
                    </div>
                    <div {...storyblokEditable(blok)}
                      className="w-full flex flex-col xl:flex-row items-center justify-center xl:hidden">
                      {blok && articles[0] && articles.map((article: any) => (
                        article.content.category == selectedCategory && <ArticleTeaser article={article.content} key={article.uuid} />
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                  <section className="hidden xl:flex xl:flex-col gap-y-4">
                    <div {...storyblokEditable(blok)} className="flex flex-col gap-y-6 w-full items-center justify-center">
                      {blok && articles[0] && 
                        <NewestArticleTeaser article={articles[0]} key={0}/> // 0
                      }
                    </div>
                    <div {...storyblokEditable(blok)}
                      className="w-full flex flex-col xl:flex-row items-center justify-center">
                      {blok && articles[0] && articles.map((article: any, index) => (
                        index > 0 && index < 3 && <ArticleTeaser article={article.content} key={article.uuid} /> // 1, 2
                      ))}
                    </div>
                    <div {...storyblokEditable(blok)}
                      className="w-full flex flex-col xl:flex-row items-center justify-center">
                      {blok && articles[0] && articles.map((article: any, index) => (
                        index >= 3 && index < 6 && <ArticleTeaser article={article.content} key={article.uuid} /> // 3, 4, 5
                      ))}
                    </div>
                    <div {...storyblokEditable(blok)}
                      className="w-full flex flex-col xl:flex-row items-center justify-center">
                      {blok && articles[0] && articles.map((article: any, index) => (
                        index >= 6 && index < 10 && <ArticleTeaser article={article.content} key={article.uuid} /> // 6, 7, 8
                      ))}
                    </div>
                    <div {...storyblokEditable(blok)}
                      className="w-full flex flex-col xl:flex-row items-center justify-center">
                      {blok && articles[0] && articles.map((article: any, index) => (
                        index >= 10 && <ArticleTeaser article={article.content} key={article.uuid} /> // 9...
                      ))}
                    </div>
                  </section>
                  <section className="flex xl:hidden">
                    <div {...storyblokEditable(blok)}
                      className="w-full flex flex-col xl:flex-row items-center justify-center flex-grow-0">
                      {blok && articles[0] && articles.map((article: any, index) => (
                        <ArticleTeaser article={article.content} key={article.uuid} />
                      ))}
                    </div>
                  </section>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </section>
  )
}

export default AllArticles;
