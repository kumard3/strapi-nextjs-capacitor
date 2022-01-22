module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a2322ea70cfc921e00a7c6c2bc14adde'),
  },
});
