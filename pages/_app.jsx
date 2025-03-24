import "@/styles/globals.css";
import { Poppins as Font } from "next/font/google";
import useScrollRestoration from "@/hooks/useScrollRestroration";
import { PagesTopLoader } from 'nextjs-toploader/pages'
import { GoogleTagManager } from '@next/third-parties/google'
import { FloatingWhatsApp } from "react-floating-whatsapp";

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
    <FloatingWhatsApp 
      phoneNumber="+44203 504 2344"
      accountName="Al Habib Travel"
      avatar="/img/logos/favicon.png"
      buttonStyle={{width: '45px', height: '45px'}}
    />
    <GoogleTagManager gtmId="GTM-KGQFSMNM" />
  </>
}
