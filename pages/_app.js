import "@/styles/globals.css";
import { Poppins as Font } from "next/font/google";

const font = Font({ 
  weight: [ '300', '400', '500', '600', '700', '800' ],
  subsets: ['latin']
 })

export default function App({ Component, pageProps }) {
  return <>
    <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
    <Component {...pageProps} />
  </>
}
