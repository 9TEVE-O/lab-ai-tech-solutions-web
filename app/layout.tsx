import './globals.css';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body>{props.children}</body>
    </html>
  );
}
