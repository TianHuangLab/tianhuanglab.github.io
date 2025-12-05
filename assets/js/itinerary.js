const urlParams = new URLSearchParams(window.location.search);
const clientID = urlParams.get('client');

if (!clientID) window.location.href = "/";

const itineraryData = JSON.parse('{{ site.data.itineraries | jsonify | escape }}');
const itinerary = itineraryData[clientID];

if (!itinerary) window.location.href = "/";

function checkPassword() {
  const input = document.getElementById("pw-input").value;
  if (input === itinerary.password) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("content-wrap").style.display = "block";
  } else {
    document.getElementById("pw-error").textContent = "密码错误，请重试";
  }
}
