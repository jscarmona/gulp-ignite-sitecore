import yargs from 'yargs';

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
    src: './src',
    options: {},
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
