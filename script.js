var sites = [
  'https://www.facebook.com/'
];
var redirects = [
  'https://www.youtube.com',
  'https://slashdot.org',
  'https://polygon.com',
  'http://dragonage.wikia.com/wiki/Dragon_Age_Wiki',
  'https://codefights.com',
  'https://teamtreehouse.com/home'
];

var re = false;
for(var i = 0;i < sites.length;i++) {
  if(sites[i] == window.location.href) re = true;
}

if(re) {
  redirects.push(window.location.href + "?nr");

  var site = Math.floor(Math.random() * redirects.length);
  alert("Maybe something else would be more useful?");
  window.location = redirects[site];
}
