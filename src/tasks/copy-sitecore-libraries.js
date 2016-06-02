import gulp from 'gulp';
import yargs from 'yargs';

export default {
  /**
   * Task name
   * @type {String}
   */
  name: 'sitecore:copy-sitecore-libraries',

  /**
   * Task description
   * @type {String}
   */
  description: 'Copy the sitecore libaries from the website to lib directory.',

  /**
   * Task default configuration
   * @type {Object}
   */
  config: {
    dest: './lib/Sitecore',
    deps: [],
  },

  /**
   * Task help options
   * @type {Object}
   */
  help: {
    'src, -s': 'Source directory for sitecore libraries',
    'dest, -d': 'Destination directory',
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

    if (!src) {
      error('There is no `src` provided.');

      return;
    }

    if (!dest) {
      error('There is no `dest` provided.');

      return;
    }

    gulp.src(`${src}/**/*`)
      .pipe(gulp.dest(dest))
      .on('end', end);
  },
};
