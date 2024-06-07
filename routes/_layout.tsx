import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
    return (
        <>
        <style>{`
          body {
            background-color: #ffe4e1;
          }
        `}</style>
      <div class="layout">
        <Component />
      </div></>
    );
  }