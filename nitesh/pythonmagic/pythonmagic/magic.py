import re
class Pythonmagic:
  def __init__(self, name):
   self.name = name

def sortLetters(self, letters):
  result = sorted(letters);
  return result;

def addQMark(self, letters):
  rmLtrs = letters.replace("?", "");
  for val in letters:
    val = val + "?";
  return len(rmLtrs);

def makeRegex(self, letters):
  QRmCount = addQMark(letters);
  regex = "^" + letters + "$";
  if QRmCount > 0:
   regex = letters;
  if len(letters) == 1:
   regex = letters.replace("?", "");
  return regex;

def magic(self, letters, word):
    if len(letters) < len(word):
      return false;
    letters = self.sortLetters(letters);
    word = self.sortLetters(word);
    regex = re.compile(letters);
    match = regex.search(word);
    if match is not None:
     return True;
