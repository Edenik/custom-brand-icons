const icons = {
  "cellcom": [0, 0, 32.0, 32.0, "M30.674,21.906 C25.19,18.32 21.838,16.517 18.148,17.231 C15.995,17.671 13.547,19.109 10.539,21.534 C5.61,25.165 -2.872,31.07 -4.043,31.968 C-7.973,34.505 -16.125,42.07 -17.993,43.631 C-23.697,48.223 -27.382,50.89 -30.676,54.204 C-31.594,55.184 -32.027,57.135 -32.003,59.168 C-31.999,65.926 -31.252,78.252 -31.176,88.91 C-31.106,98.38 -30.964,105.243 -30.962,110.256 C-30.961,115.652 -32.344,127.656 -32.034,136.824 C-32.004,145.368 -32.003,151.617 -31.994,153.643 C-31.98,160.506 -30.777,167.329 -30.67,168.68 C-30.54,170.292 -30.013,172.555 -28.327,174.98 C-26.04,178.303 -22.108,184.027 -19.245,188.203 C-17.628,191.109 -14.248,196.328 -11.482,198.518 C-10.762,199.111 -8.826,201.155 -8.15,202.466 C-7.515,203.704 -6.743,206.116 -5.816,208.629 C-4.752,211.489 -4.462,213.703 -4.497,215.073 C-4.482,217.592 -4.327,218.937 -4.308,219.126"]
}
async function getIcon(name) {
  if (!(name in icons)) {
    console.log(`Icon "${name}" not available`);
    return '';
  }

  var svgDef = icons[name];
  var primaryPath = svgDef[4];
  return {
    path: primaryPath,
    viewBox: svgDef[0] + " " + svgDef[1] + " " + svgDef[2] + " " + svgDef[3]
  }

}

async function getIconList() {
  return Object.entries(icons).map(([icon]) => ({
    name: icon
  }));
}

window.customIconsets = window.customIconsets || {};
window.customIconsets["custom"] = getIcon;

window.customIcons = window.customIcons || {};
window.customIcons["custom"] = { getIcon, getIconList };
