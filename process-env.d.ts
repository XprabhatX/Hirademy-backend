export {}

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        [key: string]: string | undefined;
        PORT: string;
        MONGO_URI: string;
        // add more environment variables and their types here
      }
    }
  }