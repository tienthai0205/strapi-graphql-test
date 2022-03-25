module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0ad44ea9fc83518bac9ec8e30cf7d01b'),
  },
});
