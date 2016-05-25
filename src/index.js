import copySitecoreLibraries from './tasks/copy-sitecore-libraries';
import deploy from './tasks/deploy';
import nugetRestore from './tasks/nuget-restore';
import publishProjects from './tasks/publish-projects';
import publishTDS from './tasks/publish-tds';

export default {
  copySitecoreLibraries,
  deploy,
  nugetRestore,
  publishProjects,
  publishTDS,
};
