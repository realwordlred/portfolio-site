const SparkPost = require('sparkpost');
const client = new SparkPost(process.env.sparkPost);

exports.handler = function(event, context, callback) {
  client.transmissions
    .send({
      content: {
        from: 'chris@css-tricks.com',
        subject: 'Hello, World!',
        html:
          "<html><body><p>My cool email.</p></body></html>"
      },
    recipients: [{ address: 'paulrooney60@gmail.com' }]
  });
}