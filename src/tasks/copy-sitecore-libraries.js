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
    dest: './src',
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
    if (!config) {
      error();
    }

    /* eslint no-unused-vars: 0 */
    const sample = yargs.argv.sample || config.sample;

    end();
  },
};
