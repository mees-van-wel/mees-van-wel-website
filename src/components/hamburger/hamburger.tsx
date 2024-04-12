import { component$ } from "@builder.io/qwik";
import styles from "./hamburger.module.scss";

export const Hamburger = component$(() => (
  <div class={styles.root}>
    <div class={styles.burger} />
    <div class={styles.burger} />
    <div class={styles.burger} />
  </div>
));
