import { Geist, Geist_Mono, DM_Sans } from "next/font/google"
import Script from "next/script"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", dmSans.variable)}
    >
      <head>
        {/* Meta Pixel - Fabrika Landing */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1234567890'); // Meta Pixel ID
              fbq('track', 'PageView');
              fbq('track', 'ViewContent', {
                value: 0.00,
                currency: 'USD'
              });
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1234567890&ev=PageView&noscript=1"
            alt="Meta Pixel Tracker"
          />
        </noscript>

        {/* Google Analytics 4 - Fabrika Landing */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-8KRZ9PLVFX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8KRZ9PLVFX', {
                page_path: window.location.pathname,
                page_title: document.title
              });
              // Track page engagement
              gtag('event', 'page_view', {
                page_title: 'Fabrika AI Automation Landing',
                page_location: window.location.href,
                send_page_view: false
              });
            `,
          }}
        />

        {/* TikTok Pixel - Fabrika */}
        <Script
          id="tiktok-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function (w, d, t) {
                w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
                ttq.methods=["track","trackEvent","page","identify","resetUser","setUser","setUserProperties","trackPageEvent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;++i)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<e.length;n++)e[n].apply(null,arguments)},ttq._i={},ttq.identify=function(t){ttq._i[t]=[],ttq.instance(t)},ttq.track=function(t,e){ttq._i["DEFAULT"]||(ttq._i["DEFAULT"]=[]),ttq._i["DEFAULT"].push([t,e])};
              }(window,document,"ttq");
              ttq.track('PageView');
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}