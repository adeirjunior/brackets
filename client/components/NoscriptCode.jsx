import Head from "next/head";
import NoScript from '../public/noscriptIcon';

function NoscriptCode() {
  return (
    <noscript>
        <div id='noscript'>
        <Head>
          <link rel='stylesheet' type='text/css' href='/stylesheet/noscript.css' />
        </Head>
        <div id='noscript-body'>
        <NoScript />
        <p id='noscript-text'>
            this site needs
            <span> </span>
            <span>J</span>
            <span>a</span>
            <span>v</span>
            <span>a</span>
            <span>s</span>
            <span>c</span>
            <span>r</span>
            <span>i</span>
            <span>p</span>
            <span>t</span>
        </p>
        </div>
    </div>
    </noscript>
  )
}

export default NoscriptCode;