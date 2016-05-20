import gulp from 'gulp';
import path from 'path';
import yargs from 'yargs';
import es from 'event-stream';
import newer from 'gulp-newer';
import { IGNITE_UTILS } from 'gulp-ignite/utils';

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
    basePath: './src',
    deps: [],
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
    const src = yargs.argv.src || yargs.argv.s || config.src;
    const dest = yargs.argv.dest || yargs.argv.d || config.dest;

    if (!src) {
      error({ message: 'Error: There is no `src` provided.' });

      return;
    }

    if (!dest) {
      error({ message: 'Error: There is no `dest` provided.' });

      return;
    }

    gulp.src(src)
      .pipe(es.map((file, callback) => copy(file.path, config.basePath, dest, false, callback)))
        .on('end', () => {
          end();

          if (yargs.argv.watch || yargs.argv.w) {
            gulp.watch(config.watchFiles, (file) => copy(file.path, config.basePath, dest, true));
            config.watchFiles.forEach((file) => IGNITE_UTILS.log(`Watching ${file}`, 'yellow'));
          }
        });
  },
};

function copy(source, basePath, dest, notify, callback) {
  let base;

  if (basePath instanceof RegExp) {
    const match = source.match(basePath);

    if (!match) {
      IGNITE_UTILS.log(`There was no base path for ${source}`, 'red');
      return;
    }

    base = match[0];
  } else {
    base = path.resolve(basePath);
  }

  gulp.src(source, { base })
    .pipe(newer(dest))
    .pipe(gulp.dest(dest))
      .on('end', () => {
        const s = path.basename(source);
        const d = path.join(dest, source.replace(base, ''));

        IGNITE_UTILS.log(`Copied ${s} => ${d}`);

        if (notify) {
          IGNITE_UTILS.notify(`Successfully copied ${s}`);
        }

        if (typeof callback === 'function') {
          callback();
        }
      });
}
