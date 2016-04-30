// import i18next from 'i18next';

i18next
  .use(i18nextXHRBackend)
  .init({
    "debug": true,
    "lng": "de-DE",
    "fallbackLng": "en",
    "backend": {
      "loadPath": "locales/{{lng}}/{{ns}}.json"
    }
  });

i18next.t('key1'); // output: 'value of key 1 in de-DE'
i18next.t('key2'); // output: 'value of key 2 in de'
i18next.t('key3'); // output: 'value of key 3 in en'
i18next.t('key4'); // output: 'key4' (fallback to show key)
