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
  name: 'sitecore:publish-projects',

  /**
   * Task description
   * @type {String}
   */
  description: 'Build and publish all projects.',

  /**
   * Task default configuration
   * @type {Object}
   */
  config: {
    config: 'Debug',
    src: ['./src/**/*.csproj'],
    options: {
      targets: ['Build'],
      configuration: 'Debug',
      logCommand: false,
      verbosity: 'minimal',
      maxcpucount: 0,
      toolsVersion: 12.0,
      stdout: false,
      stderr: true,
      properties: {
        DeployOnBuild: true,
        DeployDefaultTarget: 'WebPublish',
        WebPublishMethod: 'FileSystem',
        DeleteExistingFiles: false,
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
    'config, -c': 'Build configuration',
    'src, -s': 'Publish all `.csproj` files located within directory',
    'dest, -d': 'Destination directory for deployment',
    'clean, -c': 'Clean before build',
  },

  /**
   * Task function
   * @param {object} config
   * @param {Function} end
   * @param {Function} error
   */
  fn(config, end, error) {
    const src = yargs.argv.src || yargs.argv.s || config.src;
    const dest = yargs.argv.dest || yargs.argv.d || config.dest;
    const options = config.options;

    if (!dest) {
      error({ message: 'Error: There is no `dest` provided.' });

      return;
    }

    options.properties.publishUrl = dest;
    options.configuration = yargs.argv.config || options.configuration;

    if ((yargs.argv.clean || yargs.argv.c) && options.targets.indexOf('Clean') === -1) {
      options.targets = ['Clean', ...options.targets];
    }

    gulp.src(src)
      .pipe(es.through(build))
      .on('end', end);

    function build(file) {
      IGNITE_UTILS.log(`${path.basename(file.path, path.extname(file.path))}`);

      this.pause();

      gulp.src(file.path)
        .pipe(msbuild(options))
          .on('end', () => { this.resume(); });
    }
  },
};
