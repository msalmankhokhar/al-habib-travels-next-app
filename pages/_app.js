import "@/styles/globals.css";
import { Work_Sans as Font } from "next/font/google";
import useScrollRestoration from "@/hooks/useScrollRestroration";
import { PagesTopLoader } from 'nextjs-toploader/pages'
import { GoogleTagManager } from '@next/third-parties/google'

const font = Font({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {

  useScrollRestoration();

  return <>
    <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
    <PagesTopLoader
    showSpinner={false}
    />
    <Component {...pageProps} />
    <GoogleTagManager gtmId="GTM-KGQFSMNM" />
  </>
}
