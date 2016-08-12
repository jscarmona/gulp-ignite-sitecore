import gulp from 'gulp';
import es from 'event-stream';
import path from 'path';
import msbuild from 'gulp-msbuild';
import yargs from 'yargs';
import { IGNITE_UTILS } from 'gulp-ignite/utils';

export default {
  /**
   * Task name
   * @type {String}
   */
  name: 'sitecore:publish-tds',

  /**
   * Task description
   * @type {String}
   */
  description: 'Publish all TDS projects.',

  /**
   * Task default configuration
   * @type {Object}
   */
  config: {
    config: 'Debug',
    src: ['./src/**/*.scproj'],
    options: {
      targets: ['Build'],
      configuration: 'Debug',
      logCommand: false,
      verbosity: 'minimal',
      maxcpucount: 0,
      toolsVersion: 12.0,
      stdout: false,
      stderr: true,
      errorOnFail: true,
      properties: {
        DeployOnBuild: true,
        DeployDefaultTarget: 'WebPublish',
        WebPublishMethod: 'FileSystem',
        OutputPath: '.\\bin\\Debug\\',
        DeleteExistingFiles: false,
        SeperateFilesAndItems: false,
        DisableFileDeployment: true,
        PackageExcludeCode: true,
        _FindDependencies: false,
      },
    },
    deps: [],
  },

  /**
   * Task help options
   * @type {Object}
   */
  help: {
    'build, -b': 'Build Configuration',
    'dest, -d': 'Destination directory for deployment',
    'src, -s': 'Publish all `.scproj `files located within directory',
    'url, -u': 'Destination sitecore url for deployment',
  },

  /**
   * Task function
   * @param {object} config
   * @param {Function} end
   * @param {Function} error
   */
  fn(config, end, error) {
    const options = config.options;
    const src = yargs.argv.src || yargs.argv.s || config.src;
    const dest = yargs.argv.dest || yargs.argv.d || options.properties.SitecoreDeployFolder;
    const url = yargs.argv.url || yargs.argv.u || options.properties.SitecoreWebUrl;

    if (url) {
      options.properties.SitecoreWebUrl = url;
    }

    if (dest) {
      options.properties.SitecoreDeployFolder = dest;
    }

    options.configuration = yargs.argv.build || yargs.argv.b || options.configuration;

    gulp.src(src)
      .pipe(es.through(build))
      .on('end', end);

    function build(file) {
      IGNITE_UTILS.log(`${path.basename(file.path, path.extname(file.path))}`);

      this.pause();

      gulp.src(file.path)
        .pipe(msbuild(options))
          .on('error', error)
          .on('end', () => { this.resume(); });
    }
  },
};
