module.exports = function(locale) {
  switch (locale) {
    case 'en':
      return new Promise(function(resolve) {
        require.ensure(['vue-intl/locale-data/en.js'], function(require) {
          resolve(require('vue-intl/locale-data/en.js'));
        });
      });
    case 'sw-TZ':
      return new Promise(function(resolve) {
        require.ensure(['vue-intl/locale-data/sw.js'], function(require) {
          resolve(require('vue-intl/locale-data/sw.js'));
        });
      });
    case 'es-ES':
      return new Promise(function(resolve) {
        require.ensure(['vue-intl/locale-data/es.js'], function(require) {
          resolve(require('vue-intl/locale-data/es.js'));
        });
      });
    case 'fr-FR':
      return new Promise(function(resolve) {
        require.ensure(['vue-intl/locale-data/fr.js'], function(require) {
          resolve(require('vue-intl/locale-data/fr.js'));
        });
      });
    case 'ar':
      return new Promise(function(resolve) {
        require.ensure(['vue-intl/locale-data/ar.js'], function(require) {
          resolve(require('vue-intl/locale-data/ar.js'));
        });
      });
    case 'fa':
      return new Promise(function(resolve) {
        require.ensure(['vue-intl/locale-data/fa.js'], function(require) {
          resolve(require('vue-intl/locale-data/fa.js'));
        });
      });
    case 'ur-PK':
      return new Promise(function(resolve) {
        require.ensure(['vue-intl/locale-data/ur.js'], function(require) {
          resolve(require('vue-intl/locale-data/ur.js'));
        });
      });
    default:
      return Promise.resolve({});
  }
};
