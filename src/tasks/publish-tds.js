import yargs from 'yargs';

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
    src: './src',
    options: {},
    deps: [],
  },

  /**
   * Task help options
   * @type {Object}
   */
  help: {
    'config, -c': 'Build Configuration',
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
    if (!config) {
      error();
    }

    /* eslint no-unused-vars: 0 */
    const sample = yargs.argv.sample || config.sample;

    end();
  },
};
