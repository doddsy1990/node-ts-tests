
export function vowelRemover(sentence: string) {
    const vowels = ["a", "e", "i", "o", "u"];
    return sentence.split("").filter(char => !vowels.includes(char)).join("")
}
