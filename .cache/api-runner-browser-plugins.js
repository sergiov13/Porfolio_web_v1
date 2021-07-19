module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"SergioVillarroel","short_name":"SergioVillarroel","start_url":"/","display":"minimal-ui","icon":"src/images/logo.svg","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"f10d0995e362d3620c491709310db957"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
