const ftoc = function(ftemp) {
  if( typeof ftemp !== 'number') return 'ERROR'
  let ctemp =  (ftemp - 32)*5/9
  return Math.round( ctemp * 10) / 10
};

const ctof = function(ctemp) {
  if( typeof ctemp !== 'number') return 'ERROR'
  let ftemp = ctemp / 5 * 9 + 32
  return Math.round((ftemp) * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
