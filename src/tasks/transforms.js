import yargs from 'yargs';

export default {
  /**
   * Task name
   * @type {String}
   */
  name: 'sitecore:transforms',

  /**
   * Task description
   * @type {String}
   */
  description: 'Task description',

  /**
   * Task default configuration
   * @type {Object}
   */
  config: {},

  /**
   * Task help options
   * @type {Object}
   */
  help: {
    sample: 'Description of option (true|false). Default: false',
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
