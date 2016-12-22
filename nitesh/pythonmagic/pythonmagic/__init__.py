import re

def addQMark(letters):
  rmLtrs = letters.replace("?", "");
  letters = re.sub("(?<=.)", "?", rmLtrs);
  return len(rmLtrs);

def makeRegex(letters):
  QRmCount = addQMark(letters);
  regex = "^" + letters + "$";
  if QRmCount > 0:
     regex = letters;
     if QRmCount == 1:
        regex = letters.replace("?", "");
  return regex;

def magic(letters, word):
    if len(letters) < len(word):
      return false;
    letters = sorted(letters);
    word = sorted(word);
    letters = makeRegex(letters);
    regex = re.compile(letters);
     match = regex.search(word);
    if match is not None:
     return True;
