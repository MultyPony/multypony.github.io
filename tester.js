function tester() {
  window.location.href = 'https://oauth.vk.com/authorize?client_id=7254532&display=page&redirect_uri=https://multypony.github.io/jsonp-test.html&scope=friends&response_type=token&v=5.103&state=123456';

  var url_string = window.location.href
  url_string = url_string.replace("#", "?");
  var url = new URL(url_string);
  var token = url.searchParams.get("access_token");

  var script = document.createElement('SCRIPT');
  // script.src = "https://oauth.vk.com/authorize?client_id=7254532&display=page&redirect_uri=https://multypony.github.io/jsonp-test.html&scope=friends&response_type=token&v=5.103&state=123456";

  script.src = "https://api.vk.com/method/users.get?user_ids=174409710&fields=bdate&access_token=" + token + "&v=5.103&callback=callbackFunc";
  document.getElementsByTagName("head")[0].appendChild(script);
}
  function callbackFunc(result) {

      // alert(result.response[0].bdate)
      document.getElementById("res").innerHTML = result.response[0].first_name

  }
// }

// https://oauth.vk.com/authorize?client_id=7254532&
// https://oauth.vk.com/authorize?client_id=7254532&display=page&redirect_uri=file:///C:/Users/Admin/Desktop/IT/JS/jsonp-test.html&scope=friends&response_type=token&v=5.103&state=123456
