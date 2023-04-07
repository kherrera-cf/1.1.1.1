const upstreamLocales = [
  "en-us",
  "es-es",
  "de-de",
  "fr-fr",
  "pt-br",
  "zh-hans",
  "ja-jp",
  "ko-kr",
  'it-it'
];

const isAbsoluteUrl = (url: string) =>
  ["http://", "https://"].some((proto) => url.startsWith(proto));

export const normalizePath = (locale: Record<string, string>, link: string) =>
  removeExtraSlash(`/${locale.path}/${link}`);

const removeExtraSlash = (link: string) => link.replace(/(?<!:)\/+/gm, "/");

export const localizePath = (locale: Record<string, string>, link: string) => {
  if (isAbsoluteUrl(link)) {
    const url = new URL(link);

    return upstreamLocales.includes(locale.code.toLowerCase())
      ? removeExtraSlash(`${url.origin}/${normalizePath(locale, url.pathname)}`)
      : link;
  }

  return normalizePath(locale, link);
};
