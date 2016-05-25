import gulp from 'gulp';
import nugetRestore from 'gulp-nuget-restore';

export default {
  /**
   * Task name
   * @type {String}
   */
  name: 'sitecore:nuget-restore',

  /**
   * Task description
   * @type {String}
   */
  description: 'Restore all nuget packages for solution.',

  /**
   * Task default configuration
   * @type {Object}
   */
  config: {
    deps: [],
  },

  /**
   * Task help options
   * @type {Object}
   */
  help: {
    'solution, -s': 'Solution filepath',
  },

  /**
   * Task function
   * @param {object} config
   * @param {Function} end
   * @param {Function} error
   */
  fn(config, end) {
    gulp.src(config.solution)
      .pipe(nugetRestore())
      .on('end', end);
  },
};
