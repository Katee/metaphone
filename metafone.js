function convert(input) {
  var words = input.split(/\s/); // split on whitespace

  for (index in words) {
    var word = words[index];

    //Drop duplicate adjacent letters, except for C.
    var regex = /([^c])\1/;
    while (word.match(regex)) {
      word = word.replace(regex, '$1');
    }

    //If the word begins with 'KN', 'GN', 'PN', 'AE', 'WR', drop the first letter.
    var beginsWith = /^[kn|gn|pn|ae|wr](.*)/;
    if (word.match(beginsWith)) {
      word = word.slice(1, word.length);
    }

    //Drop 'B' if after 'M' at the end of the word.
    var endsWith = /mb$/;
    while (word.match(endsWith)) {
      word = word.slice(0, word.length-1);
    }

    // '-SCH-' becomes '-SKH-'
    regex = /(.*)sch(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1skh$2");
    }

    //'C' transforms to 'X' if followed by 'IA' or 'H'
    regex = /(.*)c([ia|h])(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1x$2$3");
    }

    //'C' transforms to 'S' if followed by 'I', 'E', or 'Y'.
    regex = /(.*)c([i|e|y])(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1s$2$3");
    }

    //Otherwise, 'C' transforms to 'K'.
    regex = /(.*)c(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1k$2");
    }

    //'D' transforms to 'J' if followed by 'GE', 'GY', or 'GI'.
    regex = /(.*)d([ge|gy|gi])(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1j$2$3");
    }

    //Otherwise, 'D' transforms to 'T'.
    regex = /(.*)d(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1t$2");
    }

    //Otherwise, 'D' transforms to 'T'.
    regex = /(.*)d(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1t$2");
    }

    //Drop 'G' if followed by 'H' and 'H' is not at the end or before a vowel.
    regex = /(.*)gh([^a|e|i|o|u]+)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1h$2");
    }

    //Drop 'G' if followed by 'N' or 'NED' and is at the end.
    regex = /(.*)g([n|ned])$/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1$2$3");
    }

    //'G' transforms to 'J' if before 'I', 'E', or 'Y', and it is not in 'GG'.
    regex = /(.*)g([i|e|y])(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1j$2$3");
    }

    //Otherwise, 'G' transforms to 'K'.
    regex = /(.*)g(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1k$2");
    }

    //Drop 'H' if after vowel and not before a vowel.
    regex = /(.*)([a|e|i|o|u])h([^a|e|i|o|u])(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1$2$3$4");
    }

    //'CK' transforms to 'K'.
    regex = /(.*)ck(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1k$2");
    }

    //'PH' transforms to 'F'.
    regex = /(.*)ph(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1f$2");
    }

    //'Q' transforms to 'K'.
    regex = /(.*)q(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1k$2");
    }

    //'S' transforms to 'X' if followed by 'H', 'IO', or 'IA'.
    regex = /(.*)s([h|io|ia])(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1x$2$3");
    }

    //'T' transforms to 'X' if followed by 'IA' or 'IO'.
    regex = /(.*)t([ia|io])(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1x$2$3");
    }

    //'TH' transforms to '0'.
    regex = /(.*)th(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$10$2");
    }

    //Drop 'T' if followed by 'CH'.
    regex = /(.*)tch(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1ch$2");
    }

    //'V' transforms to 'F'.
    regex = /(.*)v(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1f$2");
    }

    //'WH' transforms to 'W' if at the beginning.
    regex = /wh(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "w$1");
    }

    //Drop 'W' if not followed by a vowel.
    regex = /(.*)w([^a|e|i|o|u])(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1$2$3");
    }

    //'X' transforms to 'S' if at the beginning.
    regex = /x(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "s$1");
    }

    //Otherwise, 'X' transforms to 'KS'.
    regex = /(.*)x(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1ks$2");
    }

    //Drop 'Y' if not followed by a vowel.
    regex = /(.*)y([^a|e|i|o|u])(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1$2$3");
    }

    //'Z' transforms to 'S'.
    regex = /(.*)z(.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1s$2");
    }

    //Drop all vowels unless it is the beginning.
    regex = /([^a|e|i|o|u]+)[a|e|i|o|u](.*)/;
    while (word.match(regex)) {
      word = word.replace(regex, "$1$2");
    }

    words[index] = word;
  }
  return words.join(' ');
}

module.exports.convert = convert;
