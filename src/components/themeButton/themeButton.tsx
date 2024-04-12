import { component$, useContext } from "@builder.io/qwik";
import styles from "./themeButton.module.scss";
import { SunIcon } from "../svg/sun";
import { IconMoon } from "../svg/moon";
import clsx from "clsx";
import { GlobalContext } from "~/routes/layout";

export const ThemeButton = component$(() => {
  const globalContext = useContext(GlobalContext);

  return (
    <div
      class={clsx(styles.root, {
        [styles.rootDark]: globalContext.darkTheme,
      })}
      onClick$={() => {
        globalContext.darkTheme = !globalContext.darkTheme;
        document.body.setAttribute(
          "data-theme",
          globalContext.darkTheme ? "dark" : "light"
        );
      }}
    >
      <div class={styles.track} />
      <div class={styles.icon}>
        <SunIcon class={clsx(styles.iconSvg, styles.iconSun)} />
        <IconMoon class={clsx(styles.iconSvg, styles.iconMoon)} />
      </div>
    </div>
  );
});
