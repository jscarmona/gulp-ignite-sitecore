import copySitecoreLibraries from './tasks/copy-sitecore-libraries';
import deploy from './tasks/deploy';
import nugetRestore from './tasks/nuget-restore';
import packageWebsite from './tasks/package-website';
import publishProjects from './tasks/publish-projects';
import publishTDS from './tasks/publish-tds';
import syncUnicorn from './tasks/sync-unicorn';
import transforms from './tasks/transforms';

export {
  copySitecoreLibraries,
  deploy,
  nugetRestore,
  packageWebsite,
  publishProjects,
  publishTDS,
  syncUnicorn,
  transforms,
};
