export function getYoutubeEmbedUrl(url: string): string | undefined {
  if (!url) return undefined;
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = url.match(regExp);
  const videoId = match ? match[1] : null;
  return videoId ? `https://www.youtube.com/embed/${videoId}` : undefined;
}