import { FormControl } from "@angular/forms";

export function restrictedWords(words) {
  return (control:FormControl): {[key:string]: any} => {
    if (!words) {
      return null;
    }

    let invalidWords = words.filter((word) => control.value.includes(word));
    return invalidWords.length ? {'restrictedWords': invalidWords.join(',')} : null;
  }
}
