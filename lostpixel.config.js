module.exports = {
  pageShots: {
    // write your pages here
    pages: [],
    // you create your pages here & both are composed
    pagesJsonUrl: 'https://172.17.0.1:9000/lost-pixel.json',
    baseUrl: 'http://172.17.0.1:9000',
    lostPixelProjectId: 'cl8fqnk7033927301m93b5rhis9',
    ciBuildId: process.env.GITHUB_RUN_ID,
    ciBuildNumber: process.env.GITHUB_RUN_NUMBER,
    repository: process.env.REPOSITORY,
    commitRef: process.env.GITHUB_REF,
    commitRefName: process.env.GITHUB_REF_NAME,
    commitHash: process.env.COMMIT_HASH,
    s3: {
      endPoint: 'ams3.digitaloceanspaces.com',
      bucketName: 'beta-seven-turtle-time-blue-narrow',
      accessKey: process.env.S3_ACCESS_KEY,
      secretKey: process.env.S3_SECRET_KEY,
    },
  },
  generateOnly: true,
}
