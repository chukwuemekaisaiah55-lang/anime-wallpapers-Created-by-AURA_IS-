export const metadata = {
  title: 'SoraWall | Anime Wallpapers',
  description: 'Download anime wallpapers for mobile phones and PCs.',
  keywords: ['anime wallpapers', 'mobile wallpaper', 'desktop wallpaper', 'anime background', 'download wallpapers'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
