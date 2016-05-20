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
  description: 'Apply transforms and publish to project.',

  /**
   * Task default configuration
   * @type {Object}
   */
  config: {
    src: './src',
    options: {},
    deps: [],
  },

  /**
   * Task help options
   * @type {Object}
   */
  help: {
    'src, -s': 'Publish all `.transforms` files located within directory',
    'dest, -d': 'Destination directory for deployment',
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
