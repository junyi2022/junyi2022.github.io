/* globals turnstile */

window.onloadTurnstileCallback = function() {
  turnstile.render('#capcha', {
    sitekey: '0x4AAAAAAA50uSnKVugMn_a4',
    callback: function(token) {
      setTimeout(() => {
        document.querySelector('.blurb').style.display = 'block';
        document.getElementById('capcha-container').style.display = 'none';
      }, 2000);
    },
  });
};
