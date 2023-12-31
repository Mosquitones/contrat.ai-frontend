export interface ProcessEnvTypes {
  LOCAL_URL: string
  VITE_WEB_TITLE: string
  VITE_WEB_DESCRIPTION: string
  VITE_PREVIEW_IMG: string
  VITE_API_URL: string
  VITE_APP_PRIMARY_COLOR: '2ECA72'
}

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv extends Readonly<ProcessEnvTypes> {}
  }
}

// We must have this empty export to keep file a module
export {}
