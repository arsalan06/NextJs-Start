import * as fs from "fs";

export default function handler(req, res) {
  if (req.method === "POST") {
    let data = fs.readdirSync("contactdata");
    fs.writeFileSync(
      `contactdata/${data.length + 1}.json`,
      JSON.stringify(req.body)
    );
    res.status(200).json({ message: "Record added" });

    // Process a POST request
  } else {
    // Handle any other HTTP method
    res.status(200).json({ name: "John Doe" });
  }
}
