/* eslint-disable camelcase */
import Script from 'next/script'

const GoogleAnalytics = ({ ga_id }) => (
  <>
    <Script
      async
      src='https://www.googletagmanager.com/gtag/js?id=G-CWF0FSM2XC'
    />
    <Script
      id='google-analytics'
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-CWF0FSM2XC');
        `
      }}
    />
  </>
)
export default GoogleAnalytics
