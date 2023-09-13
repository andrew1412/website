import { Head } from "$fresh/runtime.ts";

import jsonProfile from "../../profile/profile_galeria.json" assert {
  type: "json",
};
import type Profile from "../../profile/type.ts";

import AvatarComponent from "../../components/Avatar.tsx";
import UsernameComponent from "../../components/Username.tsx";
import BioComponent from "../../components/Bio.tsx";
import LocationComponent from "../../components/Location.tsx";
import SocialLinksComponent from "../../components/SocialLinks.tsx";
import BannerComponent from "../../components/Banner.tsx";
import ReadmeButtonComponent from "../../components/ReadmeButton.tsx";
import { ArrowLeft } from "preact-feather";

export default function Fotos() {
  const profile: Profile = jsonProfile;
  const {
    avatar,
    username,
    bio,
    location,
    socialAccounts,
    banner,
    links,
    readme,
  } = profile;

  return (
    <>
      <Head>
        <title>Dibujos</title>
      </Head>
      <a
        class="bg-metal px-2 py-2 rounded-lg fixed top-4 left-4"
        href="/galeria"
      >
        <ArrowLeft size={18} color="#c9d1d9" stroke-width={2.5} />
      </a>
      <body class="bg-black">
        <main class="w-10/12 mx-auto">
          <div class="flex flex-col w-full mt-12 mb-28">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://raw.githubusercontent.com/andrew1412/website/main/static/galeria/dibujos/andrew1412.galeria.dibujo-6.webp"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://raw.githubusercontent.com/andrew1412/website/main/static/galeria/dibujos/andrew1412.galeria.dibujo-5.webp"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://raw.githubusercontent.com/andrew1412/website/main/static/galeria/dibujos/andrew1412.galeria.dibujo-4.webp"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://raw.githubusercontent.com/andrew1412/website/main/static/galeria/dibujos/andrew1412.galeria.dibujo-3.webp"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://raw.githubusercontent.com/andrew1412/website/main/static/galeria/dibujos/andrew1412.galeria.dibujo-2.webp"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://raw.githubusercontent.com/andrew1412/website/main/static/galeria/dibujos/andrew1412.galeria.dibujo-1.webp"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </main>
        <footer class="max-w-screen-md px-4 pt-8 pb-16 md:pt-16 mx-auto">
          <script
            src="https://giscus.app/client.js"
            data-repo="andrew1412/website"
            data-repo-id="R_kgDOKAnBjw"
            data-category="Comentarios"
            data-category-id="DIC_kwDOKAnBj84CY7Yt"
            data-mapping="title"
            data-strict="1"
            data-reactions-enabled="1"
            data-emit-metadata="0"
            data-input-position="top"
            data-theme="dark"
            data-lang="es"
            data-loading="lazy"
            crossOrigin="anonymous"
            async
          >
          </script>
        </footer>
      </body>
    </>
  );
}
