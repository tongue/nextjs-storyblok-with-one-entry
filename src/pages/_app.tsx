import type { AppProps } from 'next/app'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Unused1 from "../components/Unused1";
import Unused2 from "../components/Unused2";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  unsused1: Unused1,
  unsused2: Unused2,
};

storyblokInit({
  accessToken: "X7CoD455aCxxE2pmrj4DQAtt",
  use: [apiPlugin],
  components,
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
