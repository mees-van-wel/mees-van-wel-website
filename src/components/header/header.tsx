import { $, component$, useOnWindow, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./header.module.scss";
import clsx from "clsx";
import { useLocation } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { ThemeButton } from "../themeButton";
import { LanguageButton } from "../languageButton";

const routes = [
  { url: "/", label: "Home" },
  { url: "/skills/", label: "Skills" },
  { url: "/projects/", label: "Projects" },
  { url: "/timeline/", label: "Timeline" },
  { url: "/about-me/", label: "About me" },
  { url: "/contact/", label: "Contact" },
];

const maxScroll = 140;

export const Header = component$(() => {
  const location = useLocation();

  useOnWindow(
    "scroll",
    $(() => {
      const scrollValue = Math.min(window.scrollY / maxScroll, 1).toString();
      document.documentElement.style.setProperty("--scroll", scrollValue);
    })
  );

  useVisibleTask$(({ track }) => {
    track(() => location.url.pathname);

    const currentIndex = routes.reduce(
      (acc, route, index) =>
        location.url.pathname === route.url ? index : acc,
      0
    );

    const child = document.querySelector<HTMLElement>(`.${styles.navigation}`)!
      .children[currentIndex + 1] as HTMLElement;

    const current = document.querySelector<HTMLElement>(
      `.${styles.navigationCurrent}`
    )!;

    current.style.width = `${child.offsetWidth + 16}px`;
    current.style.left = `${child.offsetLeft - 8}px`;
    current.style.display = "block";

    setTimeout(() => {
      if (!current.style.transition)
        current.style.transition = `width 300ms cubic-bezier(0.34, 1.36, 0.64, 1), left 300ms cubic-bezier(0.34, 1.36, 0.64, 1)`;
    }, 300);
  });

  return (
    <header class={styles.root}>
      <h1 class={styles.title}>
        <span class={styles.mees}>Mees</span> van Wel
      </h1>
      <nav class={styles.navigation}>
        <div class={styles.navigationCurrent}>
          <div
            class={clsx(
              styles.navigationCurrentBorder,
              styles.navigationCurrentBorderTop
            )}
          />
          <div
            class={clsx(
              styles.navigationCurrentBorder,
              styles.navigationCurrentBorderRight
            )}
          />
          <div
            class={clsx(
              styles.navigationCurrentBorder,
              styles.navigationCurrentBorderBottom
            )}
          />
          <div
            class={clsx(
              styles.navigationCurrentBorder,
              styles.navigationCurrentBorderLeft
            )}
          />
        </div>
        {routes.map(({ url, label }) => (
          <Link
            key={url}
            href={url}
            class={clsx(styles.navigationItem, {
              [styles.navigationItemCurrent]: true,
            })}
          >
            {label}
          </Link>
        ))}
      </nav>
      {/* <Hamburger /> */}
      <div class={styles.right}>
        <LanguageButton />
        <ThemeButton />
      </div>
    </header>
  );
});
