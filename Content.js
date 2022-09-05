// if(window.location.hostname != "")
// {
//    alert("Hi ther");
// }
// let hostname=window.location.hostname;
// document.getElementById("qrcode").src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+window.location.hostname;
// if(window.location.hostname=="www.youtube.com")
// {
//     alert("hello");
// }
// alert(hostname);
chrome.tabs.getSelected(null, function(tab) {
    document.getElementById("qrcode").src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+tab.url;
});