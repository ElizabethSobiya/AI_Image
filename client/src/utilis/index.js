import { supriseMePrompts } from "../constants";
import Filesaver from 'file-saver'

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * supriseMePrompts.length);
  const randomPrompt = supriseMePrompts[randomIndex];

  return randomPrompt;
}

export async function ImageDownload() {
    Filesaver.saveAs(photo, `download-${id}.jpg`)
}
