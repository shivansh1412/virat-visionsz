// Run this once from your project root: node download-logos.mjs
import { createWriteStream, mkdirSync } from "fs";
import { get } from "https";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "public", "brands");
mkdirSync(OUT, { recursive: true });

const logos = [
  {
    file: "tata.png",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/200px-Tata_logo.svg.png",
  },
  {
    file: "jsw.png",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/JSW_Group_logo.svg/200px-JSW_Group_logo.svg.png",
  },
  {
    file: "ultratech.png",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/UltraTech_Cement_Logo.svg/200px-UltraTech_Cement_Logo.svg.png",
  },
  {
    file: "jkcement.png",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/JK_Cement_logo.png/200px-JK_Cement_logo.png",
  },
  {
    file: "lt.png",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Larsen_%26_Toubro_logo.svg/200px-Larsen_%26_Toubro_logo.svg.png",
  },
  {
    file: "asian-paints.png",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Asian_Paints_Logo.svg/200px-Asian_Paints_Logo.svg.png",
  },
  {
    file: "havells.png",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Havells_logo.svg/200px-Havells_logo.svg.png",
  },
  {
    file: "saint-gobain.png",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Saint-Gobain_logo.svg/200px-Saint-Gobain_logo.svg.png",
  },
  {
    file: "jcb.png",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/JCB_logo.svg/200px-JCB_logo.svg.png",
  },
  {
    file: "caterpillar.png",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Caterpillar_logo.svg/200px-Caterpillar_logo.svg.png",
  },
  {
    file: "kohler.png",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Kohler_Co._logo.svg/200px-Kohler_Co._logo.svg.png",
  },
  {
    file: "kajaria.png",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Kajaria_Ceramics_logo.svg/200px-Kajaria_Ceramics_logo.svg.png",
  },
  {
    file: "berger.png",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Berger_Paints_Logo.svg/200px-Berger_Paints_Logo.svg.png",
  },
  {
    file: "hindalco.png",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Hindalco_logo.svg/200px-Hindalco_logo.svg.png",
  },
  {
    file: "acc.png",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/ACC_Limited_Logo.svg/200px-ACC_Limited_Logo.svg.png",
  },
  {
    file: "legrand.png",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Legrand_logo.svg/200px-Legrand_logo.svg.png",
  },
];

function download(url, dest) {
  return new Promise((resolve) => {
    const file = createWriteStream(dest);
    get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        download(res.headers.location, dest).then(resolve);
        return;
      }
      res.pipe(file);
      file.on("finish", () => { file.close(); resolve(true); });
    }).on("error", () => { file.close(); resolve(false); });
  });
}

console.log("Downloading brand logos to public/brands/...\n");
for (const { file, url } of logos) {
  const ok = await download(url, join(OUT, file));
  console.log(ok ? `✓ ${file}` : `✗ ${file} (will use SVG fallback)`);
}
console.log("\nDone! Restart your dev server.");
