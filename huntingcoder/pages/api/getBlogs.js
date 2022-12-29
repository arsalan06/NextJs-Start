// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// url for reading dynamic file
// http://localhost:3000/api/getBlogs?slug=learn-nextjs
import * as fs from "fs";
export default function handler(req, res) {
  fs.readFile(`blogData/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(401).json({ error: "something went wrong" });
    }
    res.status(200).json(JSON.parse(data));
  });
  // res.status(200).json({ name: "John Doe" });
}
