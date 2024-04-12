import { component$, useSignal } from "@builder.io/qwik";
import styles from "./languageButton.module.scss";
import { SunIcon } from "../svg/sun";
import { IconMoon } from "../svg/moon";
import clsx from "clsx";
import { NlFlag } from "../svg/nl";

export const LanguageButton = component$(() => {
  const dark = useSignal(false);

  return (
    <div
      class={clsx(styles.root)}
      onClick$={() => {
        dark.value = !dark.value;
        document.body.setAttribute("data-theme", dark.value ? "dark" : "light");
      }}
    >
      <NlFlag />
      {/* <div class={styles.track} />
      <div class={styles.icon}>
        <IconSun class={clsx(styles.iconSvg, styles.iconSun)} />
        <IconMoon class={clsx(styles.iconSvg, styles.iconMoon)} />
      </div> */}
    </div>
  );
});
