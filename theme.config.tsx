import React from "react";
import { Callout, DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <span style={{ position: "relative", top: "2px" }}>
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3711 23.8639L23.6958 11.1566"
            stroke="#06B300"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M6.69141 19.3918L19.0161 6.68448"
            stroke="#06B300"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M2 14.8401L14.3247 2.1328"
            stroke="#06B300"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <p style={{ fontSize: "1.5rem", fontWeight: 500 }}>nextnative</p>
    </div>
  ),
  logoLink: "https://nextnative.dev",

  banner: {
    key: "cta-banner",
    text: (
      <span>
        🚀 <strong>Launch mobile apps faster with Next.js</strong>
        <a
          href="https://nextnative.dev"
          target="_blank"
          style={{
            textDecoration: "underline",
            fontWeight: 600,
            color: "#06B300",
            marginLeft: "6px",
          }}
        >
          Get NextNative →
        </a>
      </span>
    ),
  },

  project: {
    link: "https://github.com/lite1pal",
  },
  docsRepositoryBase: "https://github.com/lite1pal/nextnative_docs",
  footer: {
    text: "NextNative Docs",
  },

  head: (
    <>
      <meta name="robots" content="index, follow" />
      <meta name="title" content="NextNative Docs" />
    </>
  ),

  components: {
    Callout: Callout,
  },

  useNextSeoProps() {
    return {
      titleTemplate: "%s – NextNative Docs",
    };
  },

  primaryHue: {
    dark: 100,
    light: 110,
  },
};

export default config;
