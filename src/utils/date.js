const MonthShortcut = [
  {"Jan": "01"},
  {"Feb": "02"},
  {"Mar": "03"},
  {"Apr": "04"},
  {"May": "05"},
  {"Jun": "06"},
  {"Jul": "07"},
  {"Aug": "08"},
  {"Sep": "09"},
  {"Oct": "10"},
  {"Nov": "11"},
  {"Dec": "12"},
];

const MonthShortcutReverse = [
    {"01": "Jan"},
    {"02": "Feb"},
    {"03": "Mar"},
    {"04": "Apr"},
    {"05": "May"},
    {"06": "Jun"},
    {"07": "Jul"},
    {"08": "Aug"},
    {"09": "Sep"},
    {"10": "Oct"},
    {"11": "Nov"},
    {"12": "Dec"},
  ];

const getYear = (date) =>{
  let monthRegex = new RegExp(`([0-9]{4})-([0-9]{2})-([0-9]{2})`);
  let find = date.match(monthRegex);
  if(!find) return null;
  return find[1];
}

export { MonthShortcut, MonthShortcutReverse, getYear };
