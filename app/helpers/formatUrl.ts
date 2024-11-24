export const formatUrl = (url: string): string => {
  const withoutProtocol = url.replace(/^https?:\/\//, "");

  const formattedUrl = withoutProtocol.replace(
    /(\.com|\.br|\.org|\.net|\.io|\.gov)/,
    "",
  );

  return formattedUrl;
};
