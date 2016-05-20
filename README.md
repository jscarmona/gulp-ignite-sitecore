# gulp-ignite-task

Inspired by [Sitecore Habitat](https://github.com/Sitecore/Habitat)

## install

**NPM**

```sh
npm i -D gulp-ignite gulp-ignite-sitecore
```

## setup

```js
'use strict';

import ignite from 'gulp-ignite';
import * as sitecore from 'gulp-ignite-sitecore';

const tasks = [...sitecore];
const options = {
  'sitecore:copy-sitecore-libraries': {
    src: 'C:\\Websites\\Sitecore\\Website',
  },
  'sitecore:nuget-restore': {
    solutionName: 'sitecore',
  },
  'sitecore:publish-projects': {
    config: 'Debug',
    dest: 'C:\\Websites\\Sitecore\\Website',
  },
  'sitecore:publish-tds': {
    config: 'Debug',
    dest: 'C:\\Websites\\Sitecore\\Website',
    url: 'http://sitecore',
  },
  'sitecore:transforms': {
    dest: 'C:\\Websites\\Sitecore\\Website',
  },
  'sitecore:deploy': {
    dest: 'C:\\Websites\\Sitecore\\Website',
  },
  'sitecore:package-website': {
    src: 'C:\\sitecore_tmp\\Website',
    dest: 'C:\\sitecore_tmp',
  },
};

ignite.start(tasks, options);

```

## usage

* [Copy Sitecore Libraries](#copySitecoreLibraries)
* [Restore NuGet Packages](#nugetRestore)
* [Publish Projects](#publishProjects)
* [Publish TDS](#publishTDS)
* [Transforms](#transforms)
* [Package Website](#packageWebsite)
* [Deploy](#deploy)
* Sync Unicorn (Coming Soon)


### <a name="copySitecoreLibraries"></a>copy sitecore libraries

Copy the sitecore libaries from the website to `./lib/Sitecore`.

```
gulp sitecore:copy-sitecore-libraries
```

##### arguments
- `--src, -s` - Source directory for sitecore libraries.
- `--dest, -d` - Destination directory.

##### options
- `src` - Source directory for sitecore libraries. (**Required**)
- `dest` - Destination directory. (**Default:** `./lib/Sitecore`)
- `deps` - Any gulp tasks that task would be dependent of. (**Default:** `[]`)

---

### <a name="nugetRestore"></a>restore nuget packages

Restore all nuget packages for solution.

```
gulp sitecore:nuget-restore
```

##### arguments
- `--name, -n` - Solution name.

##### options
- `name` - Solution name. (**Required**)
- `deps` - Any gulp tasks that task would be dependent of. (**Default:** `[]`)

---

### <a name="publishProjects"></a>publish projects

Build and publish all projects.

```
gulp sitecore:publish-projects
```

##### arguments
- `--config, -c` - Build configuration.
- `--src, -s` - Publish all `.csproj` files located within directory.
- `--dest, -d` - Destination directory for deployment.

##### options
- `dest` - Destination directory for deployment. (**Required**)
- `config` - Build configuration. (**Default:** `Debug`)
- `src` - Publish all `.csproj` files located within directory. (**Default:** `./src`)
- `options` - MSbuild options. (**Default:** `{}`)
- `deps` - Any gulp tasks that task would be dependent of. (**Default:** `[]`)

---

### <a name="publishTDS"></a>publish tds

Publish all TDS projects.

```
gulp sitecore:publish-tds
```

##### arguments
- `--config, -c` - Build configuration.
- `--src, -s` - Publish all `.scproj `files located within directory.
- `--dest, -d` - Destination directory for deployment.
- `--url, -u` - Destination sitecore url for deployment.

##### options
- `dest` - Destination directory for deployment. (**Required**)
- `url` - Destination sitecore url for deployment. (**Required**)
- `config` - Build configuration. (**Default:** `Debug`)
- `src` - Publish all `.scproj `files located within directory. (**Default:** `./src`)
- `options` - MSbuild options. (**Default:** `{}`)
- `deps` - Any gulp tasks that task would be dependent of. (**Default:** `[]`)

---

### <a name="transforms"></a>transforms

Apply transforms and publish to project.

```
gulp sitecore:transforms
```

##### arguments
- `--src, -s` - Publish all `.csproj` files located within directory.
- `--dest, -d` - Destination directory for deployment.

##### options
- `dest` - Destination directory for deployment. (**Required**)
- `src` - Publish all `.csproj` files located within directory. (**Default:** `./src`)
- `options` - MSbuild options. (**Default:** `{}`)
- `deps` - Any gulp tasks that task would be dependent of. (**Default:** `[]`)

---

### <a name="packageWebsite"></a>package website

Zip up the website for deployment.

```
gulp sitecore:package-website
```

##### arguments
- `--name, -n` - Name for zip file.
- `--src, -s` - Directory to package.
- `--dest, -d` - Destination directory for compiled zip.

##### options
- `name` - Name for zip file (**Default:** `sitecore_website`)
- `src` - Directory to package up. (**Default:** `C:\sc_temp\Website`)
- `dest` - Destination directory for compiled zip. (**Default:** `C:\sc_temp`)
- `deps` - Any gulp tasks that task would be dependent of. (**Default:** `[]`)

---

### <a name="deploy"></a>deploy

Deploy files to Sitecore website

```
gulp sitecore:deploy
```

##### arguments
- `--watch, -w` - Watch files for changes and auto deploys.

##### options
- `src` - Directory to package up. (**Required**)
- `dest` - Destination directory for compiled zip. (**Required**)
- `name` - Name for zip file (**Default:** `sitecore_website`)
- `deps` - Any gulp tasks that task would be dependent of. (**Default:** `[]`)


## license

The MIT License (MIT)

Copyright (c) 2016 Javier Carmona

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
