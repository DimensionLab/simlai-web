export const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;

export const getOriginUrl = () => {
  switch (environment) {
    case "development":
      return "http://localhost:3000";
    case "vercel-development":
      return "simlai-web-git-update-next14-app-router-hug-e4d7ce-dimensionlab.vercel.app";
    case "staging":
      return "https://simlai-web.vercel.app";
    case "production":
      return "https://siml.ai";
    default:
      return "http://localhost:3000";
  }
}

export const storyblokVersion = environment === ("development" || "staging") ? "draft" : "published";