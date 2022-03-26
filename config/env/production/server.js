module.exports = ({ env }) => ({
  url: "https://strapi-projects-cms.herokuapp.com/",
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
});
