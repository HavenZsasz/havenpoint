async function test() {
    const admin = require('firebase-admin');

const serviceAccount = require('/Users/tim/Downloads/havenpoint-37e8f-firebase-adminsdk-13nvu-fa14b07e6a.json');

admin.initializeApp({
  credential: admin.serviceAccount(serviceAccount),
  projectId: 'havenpoint-37e8f'
});

const messaging = admin.messaging();

const serverKey = await messaging.getAPNSServerKey();
console.log(serverKey);



}

