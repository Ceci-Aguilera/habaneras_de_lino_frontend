const fs = require("fs");
const zlib = require("zlib");

var dirs = ["../public/sitemap"];

dirs.forEach((dir) => {
  console.log(dir)
  fs.readdirSync(dir).forEach((file) => {

    console.log(dir)
    if (file.endsWith(".xml")) {
      // gzip
      const fileContents = fs.createReadStream(dir + "/" + file);
      const writeStream = fs.createWriteStream(dir + "/" + file + ".gz");
      const zip = zlib.createGzip();

      fileContents
        .pipe(zip)
        .on("error", (err) => console.error(err))
        .pipe(writeStream)
        .on("error", (err) => console.error(err));
    }
  });
});