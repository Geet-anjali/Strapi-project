module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7f3be624e1fd1b3358d5c6ddc3af4b4e'),
  },
});
