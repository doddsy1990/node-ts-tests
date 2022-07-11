import { expect } from "chai";
import "mocha";

import { vowelRemover } from ".";

describe("Vowel Remover", () => {
  it("the function should return sentence without vowels", () => {
    expect(vowelRemover('this is a sentence')).to.equal("ths s  sntnc");
  });
});