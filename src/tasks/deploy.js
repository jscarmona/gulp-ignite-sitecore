import yargs from 'yargs';

export default {
  /**
   * Task name
   * @type {String}
   */
  name: 'sitecore:deploy',

  /**
   * Task description
   * @type {String}
   */
  description: 'Deploy files to Sitecore website',

  /**
   * Task default configuration
   * @type {Object}
   */
  config: {
    deps: [],
    name: 'sitecore_package',
    src: [],
    watchFiles: [],
  },

  /**
   * Task help options
   * @type {Object}
   */
  help: {
    'watch, -w': 'Watch files for changes and auto deploys',
  },

  /**
   * Task function
   * @param {object} config
   * @param {Function} end
   * @param {Function} error
   */
  fn(config, end, error) {
    if (!config) {
      error();
    }

    /* eslint no-unused-vars: 0 */
    const sample = yargs.argv.sample || config.sample;

    end();
  },
};
