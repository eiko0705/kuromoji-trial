const kuromoji = require("kuromoji");

const jpArr = ["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん"];
const result = [];

kuromoji.builder({ dicPath: "node_modules/kuromoji/dict" }).build(function(err, tokenizer) {
  jpArr.forEach( element => {
    const path = tokenizer.tokenize(element);
    result.push({ word: element, pos: path[0].pos });
  });
  const nounArr = result.filter( element => element.pos === "名詞");
  console.log(result);
  console.log(`名詞の数：${nounArr.length}/46`);
});

// kuromoji.builder({ dicPath: "node_modules/kuromoji/dict" }).build(function(err, tokenizer) {
//   const path = tokenizer.tokenize("食レポ");
//   console.log(path);
// });
