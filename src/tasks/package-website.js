import yargs from 'yargs';

export default {
  /**
   * Task name
   * @type {String}
   */
  name: 'sitecore:package-website',

  /**
   * Task description
   * @type {String}
   */
  description: 'Zip up the website for deployment.',

  /**
   * Task default configuration
   * @type {Object}
   */
  config: {
    name: 'sitecore_website',
    deps: [],
  },

  /**
   * Task help options
   * @type {Object}
   */
  help: {
    'name, -n': 'Name for zip file',
    'src, -s': 'Directory to package',
    'dest, -d': 'Destination directory for compiled zip',
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
