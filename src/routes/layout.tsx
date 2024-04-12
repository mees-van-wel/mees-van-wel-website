import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import styles from "./layout.module.scss";
import { Header } from "~/components/header";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

type GlobalContext = {
  darkTheme: boolean;
  language: string;
};

export const GlobalContext =
  createContextId<GlobalContext>("docs.theme-context");

export default component$(() => {
  const globalContext = useStore<GlobalContext>({
    darkTheme: false,
    language: "en-US",
  });

  useContextProvider(GlobalContext, globalContext);

  return (
    <div class={styles.root}>
      <Header />
      <main class={styles.main}>
        <Slot />
      </main>
    </div>
  );
});
