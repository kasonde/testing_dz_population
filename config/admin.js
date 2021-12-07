module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b923d7946a6796ba63d1f96112e430f0'),
  },
});
