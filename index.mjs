import { XMLParser } from "fast-xml-parser";
import { url_prefix } from "./data.mjs"; // https://workingdraft-de

function fetch_episode(episode_number) {
    return fetch(`${url_prefix}${episode_number}`)
        .then(res => res.text())
        .then(data => {
            const obj = new XMLParser().parse(data)
            return obj['!doctype'].html.head.meta.meta.title
        })
        .catch((e) => {
            return undefined
        })
}

const episode_requests = new Array(100)
    .fill(0)
    .map((el, i) => fetch_episode(i))

const results = await Promise.all(episode_requests)

console.log(results.filter(Boolean))


