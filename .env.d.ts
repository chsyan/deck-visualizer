/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly GOOGLE_MAPS_API_KEY: string;
  readonly GOOGLE_MAPS_MAP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
