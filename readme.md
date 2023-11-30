# Julekalender

I 2020 og 2021 lagde jeg kuraterte spillelister til familien i form av en adventskalender/julekalender hvor én sang slippes daglig i desember til og med julaften. Det er så gøy å høre gjettene og tilbakemeldingene, så dette ville jeg gjøre igjen i år.

Kalenderens tilhørende nettside er laget med Vite, Svelte (uten SvelteKit) med et hint av TypeScript, og TailwindCSS for styling. Jeg begynte med friskt mot med helt vanlig CSS på komponentnivå i tråd med demoen til Svelte, men jeg synes Tailwind er for knirkefritt til ikke å brukes i enhver passende anledning. Kombinasjonen av oppsettet Vite/Svelte/TailwindCSS var derimot ikke knirkefritt, men med `--legacy-peer-deps` som midlertidig nødløsning ser konsekvensene av inkompabilitetene ut til å la vente på seg.

Deployment til GitHub pages var et premiss for nettsiden, da hyppig og gratis deployment var et mål. Derfor er CMS-et `SongDescriptions.json`, hvor en pull request og redeployment er mediumet for innholdsoppdatering. Med lynraske `npm run build` og `npm run deploy` er ikke dette noe hinder.

Hvorfor har jeg gjort det sånn? Verdien for meg ligger i å bli kjent med Svelte for å utvide reportoaret fra React. Videre har jeg motivasjon til å bli mer komfortabel med Vite over Webpack. Sist men ikke minst øker det verdien til musikkalenderen at jeg kan skrive litt om sangene, og definere en fargepallett og annet design som passer til årets tema.
