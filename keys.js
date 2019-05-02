console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
exports.ticketmaster = {
  id: process.env.ticketmaster_Consumer_Key,
  secret: process.env.ticketmaster_Consumer_Secret
};
exports.OMDb = {
  key: process.env.OMDb_Key,
  API: process.env.OMDb_API
};