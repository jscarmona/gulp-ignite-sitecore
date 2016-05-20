import yargs from 'yargs';

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
    'name, -n': 'Solution name',
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
