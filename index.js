class GitlabCIBuildInfoPlugin {
  constructor(options) {
    this.options = options || {
      versionFileName: 'version.json'
    };
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync('VersionPlugin Plugin', (compilation, callback) => {
      const commitSHA = process.env.CI_COMMIT_SHA || 'not.available';
      const branch = process.env.CI_COMMIT_REF_NAME || 'not.available';
      const jobId = process.env.CI_JOB_ID || 'not.available';
      const pipelineId = process.env.CI_PIPELINE_ID || 'not.available';

      const json = JSON.stringify({
        builtAt: new Date().toISOString(),
        gitInfo: {
          commitSHA,
          branch,
        },
        ciInfo:{
          jobId,
          pipelineId
        }
      });

      compilation.assets[this.options.versionFileName] = {
        source: () => json,
        size: () => json.length
      };

      callback();
    });
  }
}

module.exports = GitlabCIBuildInfoPlugin;