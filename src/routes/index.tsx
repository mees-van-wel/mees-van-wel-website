import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Image from "~/assets/images/mees.jpg?jsx";
import styles from "./index.module.scss";
import { BlobArt } from "~/components/svg/blob";

export default component$(() => {
  return (
    <div style={{ height: 2000 }}>
      <div class={styles.image}>
        <BlobArt class={styles.imageBlob} />
        <Image class={styles.imageMees} />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
