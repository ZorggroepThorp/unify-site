(function () {
  var consentCookieName = 'unify_cookie_consent';
  var consentMaxAge = 60 * 60 * 24 * 365;

  function getCookie(name) {
    var prefix = name + '=';
    var parts = document.cookie ? document.cookie.split('; ') : [];
    for (var i = 0; i < parts.length; i += 1) {
      if (parts[i].indexOf(prefix) === 0) {
        return decodeURIComponent(parts[i].substring(prefix.length));
      }
    }
    return '';
  }

  function setCookie(name, value, maxAge) {
    document.cookie =
      name + '=' + encodeURIComponent(value) +
      '; path=/; max-age=' + maxAge +
      '; samesite=lax';
  }

  function removeBanner() {
    var banner = document.getElementById('cookie-banner');
    if (banner) {
      banner.remove();
    }
  }

  function onConsent(value) {
    setCookie(consentCookieName, value, consentMaxAge);
    removeBanner();
  }

  function buildBanner() {
    if (getCookie(consentCookieName)) {
      return;
    }

    var banner = document.createElement('section');
    banner.id = 'cookie-banner';
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie voorkeuren');

    banner.innerHTML =
      '<div class="cookie-banner__inner">' +
      '<p class="cookie-banner__text">Deze website gebruikt noodzakelijke cookies voor basisfunctionaliteit en een cookie om je voorkeur op te slaan. We gebruiken op dit moment geen tracking- of advertentiecookies. Lees meer in de <a href="unify-privacyverklaring.html">privacyverklaring</a>.</p>' +
      '<div class="cookie-banner__actions">' +
      '<button class="cookie-btn" type="button" data-consent="essential">Alleen noodzakelijke cookies</button>' +
      '<button class="cookie-btn cookie-btn--primary" type="button" data-consent="accepted">Akkoord</button>' +
      '</div>' +
      '</div>';

    document.body.appendChild(banner);

    banner.addEventListener('click', function (event) {
      var target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }
      var value = target.getAttribute('data-consent');
      if (value) {
        onConsent(value);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildBanner);
  } else {
    buildBanner();
  }
})();
