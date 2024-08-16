const AmazonPaapi = require('amazon-paapi');

const amazon = new AmazonPaapi({
    accessKey: 'YOUR_ACCESS_KEY',
    secretKey: 'YOUR_SECRET_KEY',
    partnerTag: 'YOUR_ASSOCIATE_TAG',
    partnerType: 'Associates',
    region: 'us-east-1' // Replace with your region
});

const params = {
    Keywords: 'my orders on amazon all orders',
    SearchIndex: 'All'
};

amazon.searchItems(params)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
