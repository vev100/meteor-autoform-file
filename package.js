Package.describe({
  name: "vev100:autoform-file",
  summary: "File upload for AutoForm",
  description: "File upload for AutoForm",
  version: "0.4.3",
  git: "https://github.com/vev100/meteor-autoform-file.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.1');

  api.use([
    'check',
    'coffeescript',
    'underscore',
    'reactive-var',
    'templating',
    'less@1.0.0 || 2.5.1',
    'aldeed:autoform@6.2.0',
    'fortawesome:fontawesome@4.5.0',
    'cfs:ui@0.1.3',
    'mpowaga:jquery-fileupload@9.11.2'
  ]);

  api.addFiles('lib/client/autoform-file.html', 'client');
  api.addFiles('lib/client/autoform-file.less', 'client');
  api.addFiles('lib/client/autoform-file.coffee', 'client');
  api.addFiles('lib/server/publish.coffee', 'server');
});
