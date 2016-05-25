import copySitecoreLibraries from './tasks/copy-sitecore-libraries';
import deploy from './tasks/deploy';
import nugetRestore from './tasks/nuget-restore';
import packageWebsite from './tasks/package-website';
import publishProjects from './tasks/publish-projects';
import publishTDS from './tasks/publish-tds';
import transforms from './tasks/transforms';

export default {
  copySitecoreLibraries,
  deploy,
  nugetRestore,
  packageWebsite,
  publishProjects,
  publishTDS,
  transforms,
};
