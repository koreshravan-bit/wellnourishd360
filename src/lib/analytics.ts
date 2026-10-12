// GA4 loader for the root <head>. Runs only on the public .com host, so previews,
// localhost and tests send nothing. Never add personal or health details to events.
export const GA_HOSTS = ['wellnourishd360.com', 'www.wellnourishd360.com'];

export function gaLoaderScript(id: string): string {
  const cfg = JSON.stringify({ allow_google_signals: false, allow_ad_personalization_signals: false });
  return `(function(){var h=location.hostname;if(${JSON.stringify(GA_HOSTS)}.indexOf(h)<0)return;window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments);};gtag('js',new Date());gtag('config',${JSON.stringify(id)},${cfg});var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(${JSON.stringify(id)});document.head.appendChild(s);document.addEventListener('click',function(e){var a=e.target&&e.target.closest&&e.target.closest('a');if(!a)return;var href=a.getAttribute('href')||'';var n=href.indexOf('mailto:')===0?'email_click':href.indexOf('tel:')===0?'phone_click':a.getAttribute('data-track')==='portal'?'portal_click':null;if(n)gtag('event',n,{page_path:location.pathname});},true);})();`;
}

type Gtag = (...args: unknown[]) => void;
export function trackEvent(name: string, params: Record<string, string>) {
  if (typeof window === 'undefined') return;
  (window as Window & { gtag?: Gtag }).gtag?.('event', name, params);
}
