export const environment = process.env.ENVIRONMENT;

export const getOriginUrl = () => {
  switch (environment) {
    case "development":
      return "http://localhost:3000";
    case "staging":
      return "https://simlai-web.vercel.app";
    case "production":
      return "https://siml.ai";
    default:
      return "http://localhost:3000";
  }
}

export const storyblokVersion = environment === ("development" || "staging") ? "draft" : "published";