import { component$ } from "@builder.io/qwik";
import styles from "./languageButton.module.scss";
import { NlFlag } from "../svg/nl";

export const LanguageButton = component$(() => {
  return (
    <div class={styles.root}>
      <div class={styles.current}>
        <NlFlag class={styles.flag} />
      </div>
      <div class={styles.dropdown}></div>
      {/* <div class={styles.track} />
      <div class={styles.icon}>
        <IconSun class={clsx(styles.iconSvg, styles.iconSun)} />
        <IconMoon class={clsx(styles.iconSvg, styles.iconMoon)} />
      </div> */}
    </div>
  );
});
