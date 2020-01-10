# Webpack plugin for creating a file containing gitlab-ci build information
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Simple plugin which will take GitLab CI environment variables and write them to a file 

## Installation
```
npm i gitlab-ci-buildinfo-webpack-plugin --save-dev
```

## Usage
```js
const GitlabCIBuildInfoPlugin = require('gitlab-ci-buildinfo-webpack-plugin')

// webpack configuration
{
  plugins: [
    new GitlabCIBuildInfoPlugin({options})
  ]
}
```

## List of possible options:

````js
var opts = {
    // the name and path of the file containing the gitlab-ci build information, relative to the webpack output directory
    versionFileName: 'version.json'
};
````