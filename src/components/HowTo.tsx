import Prism from 'prismjs';
// Prism.manual = true;
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-yaml';

import "../../assets/prism.css";
import { createEffect } from 'solid-js';

const code = `
name: My SaaS Gateway Configuration
server:
  host: 127.0.0.1
  port: 80
  url: http://localhost:80
routes:
  # Route to the API, protected with OAuth2 using Google
  - name: V1 of the API
    from: /api/v1/*
    removeFromPath: "/api/v1/"
    to: http://localhost:3000
    authentication:
      enabled: true
      method: oauth2
      provider: google
  # Route to the FrontEnd, static files that are served from the Gateway
  - name: FrontEnd
    from: /
    toFolder: ./frontend/dist/
    static: true

authenticationProviders:
  google:
    clientId: 123456789123-ETlUWIBfeIs7DZJaTKSoQ0iYtlYfmWo3HEAmImxv.apps.googleusercontent.com
    clientSecret: GOCSPX-q4VdlU5dQ4Q9wfdmmUg4

encryption:
  encryptedCookieKey: WW91IGFyZSB0b28gY2xldmVyLiBKdXN0IGJ1eSBpdC4=

notification:
  email:
    enabled: true
    smtp:
      host: 127.0.0.1
      port: 1025
      username: test@example.com
      password: abcdefg
`;


export const HowTo = () => {

  createEffect(() => {
    window.setTimeout(() => {
      const element = document.querySelector("#thecode");
      if (element) {
        Prism.highlightElement(element, true, () => {})
      }
    }, 1000);
  });


  return (<>
    <div class="flex p-5 bg-primary text-primary-content">
        <div class="w-1/2 p-2">
            <img src="images/howto.svg" alt="How to use" />
        </div>
        <div class="w-1/2 p-2 p-l-5">
            <h2 class="text-3xl p-10">How to use</h2>
            <ul class="list-decimal text-lg mx-10">
                <li>Get the busylink.io server binary</li>
                <li>Create a configuration file with your settings</li>
                <li>Run!</li>
            </ul>
        </div>
    </div>
    <div class="flex p-5 bg-primary text-primary-content">
        <div>
            <h3 class="text-3xl p-10">Example configuration file</h3>
            <pre><code id="thecode" class="language-yaml">{code}</code></pre>
        </div>
    </div>
  </>)
}
