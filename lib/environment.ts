export const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;

export const storyblokVersion = (environment === "staging" || environment === "development") ? "draft" : "published";