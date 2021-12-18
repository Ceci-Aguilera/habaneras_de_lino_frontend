
const fs = require("fs");
const globby = require("globby");
const prettier = require("prettier");

const getDate = new Date().toISOString();

const webrootDomain = "https://habanerasdelino.com";

const formatted = sitemap => prettier.format(sitemap, { parser: "html" });

(async () => {
  const pages = await globby(["../public/sitemap/*.gz"]);

  const sitemapIndex = `
    ${pages
      .map(page => {
        const path = page.replace("../public/", "");
        return `
          <sitemap>
            <loc>${`${webrootDomain}/${path}`}</loc>
            <lastmod>${getDate}</lastmod>
          </sitemap>`;
      })
      .join("")}
  `;

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapIndex}
    </sitemapindex>
  `;

  const formattedSitemap = [formatted(sitemap)];

  fs.writeFileSync("../public/sitemap.xml", JSON.stringify(formattedSitemap), "utf8");
})();