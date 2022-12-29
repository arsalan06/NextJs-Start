// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
export default async function handler(req, res) {
  let allBlogsArray = [];
  let data = await fs.readdirSync("blogData");
  // data.forEach(async (item) => {
  //   let myFile = await fs.readFileSync(`blogData/${item}`);
  //   allBlogsArray.push(JSON.parse(myFile));
  // });
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let myFile = await fs.readFileSync(`blogData/${item}`);
    allBlogsArray.push(JSON.parse(myFile));
  }
  res.status(200).json({ data: allBlogsArray });
  // await fs.readdir("blogData", (err, data) => {
  //   console.log(data);
  //   data.forEach(async (item) => {
  //     console.log(item);
  //     await fs.readFile(`blogData/${item}`, "utf-8", (err, res) => {
  //       allBlogsArray.push(res);
  //       console.log(allBlogsArray);
  //     });
  //   });
  //   res.status(200).json(allBlogsArray);
  // });
  // res.status(200).json({ name: "John Doe" });
}
