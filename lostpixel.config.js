module.exports = {
  pageShots: {
    // write your pages here
    pages: [],
    // you create your pages here & both are composed
    // pagesJsonUrl: 'http://localhost:9000/lost-pixel.json',
    // baseUrl: 'http://localhost:9000',
    pagesJsonUrl: 'http://172.17.0.1:9000/lost-pixel.json',
    baseUrl: 'http://172.17.0.1:9000',
  },
  lostPixelProjectId: 'cl8fqnk7033927301m93b5rhis9',

  ciBuildId: process.env.GITHUB_RUN_ID,
  ciBuildNumber: process.env.GITHUB_RUN_NUMBER,
  repository: process.env.REPOSITORY,
  commitRef: process.env.GITHUB_REF,
  commitRefName: process.env.GITHUB_REF_NAME,
  commitHash: process.env.COMMIT_HASH,
  compareEngine: 'odiff',
  threshold: 0.02,
  s3: {
    endPoint: 'ams3.digitaloceanspaces.com',
    bucketName: 'beta-seven-turtle-time-blue-narrow',
    accessKey: process.env.S3_ACCESS_KEY,
    secretKey: process.env.S3_SECRET_KEY,
  },
  compareConcurrency: 10,
  beforeScreenshot: async (page) => {
    await page.addStyleTag({
      content: `iframe {
      visibility: hidden;
    }

    section img {
      visibility: hidden;
    }

    /* hide cookie banner */
    #onetrust-consent-sdk {
      display: none;
    }`,
    })
  },
}
