import axios from "axios";
import { parse } from "node-html-parser";

export default async (req, res) => {
  try {
    const response = await axios.get(
      "http://kristofc.webd.pro/plan/InformacjeOZastepstwach.html"
    );

    const document = parse(response.data);
    const time = document.querySelector("h2").textContent.trim();
    const tables = Array.from(document.querySelectorAll("table")).map(
      (table) => {
        const tableObject = {
          time: table.querySelector("tr:first-child").textContent.trim(),
          zastepstwa: Array.from(table.querySelectorAll("tr"))
            .slice(1)
            .map((row) => {
              const [
                lesson,
                teacher,
                branch,
                subject,
                classValue,
                caseValue,
                message,
              ] = Array.from(row.querySelectorAll("td")).map((cell) =>
                cell.textContent.trim()
              );
              return {
                lesson,
                teacher,
                branch,
                subject,
                class: classValue,
                case: caseValue,
                message,
              };
            }),
        };

        tableObject.zastepstwa = tableObject.zastepstwa.filter(
          (obj) => JSON.stringify(obj) !== JSON.stringify({})
        );
        tableObject.zastepstwa.sort((a, b) => a.lesson - b.lesson);
        return tableObject;
      }
    );

    const form = { time, tables };

    res.status(200).json(form);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
