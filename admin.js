const serviceAccount = {
    "type": "service_account",
    "project_id": "search-7469a",
    "private_key_id": "162fd42fceb4c73df589a2665e23fbfa59e42fac",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDvrZbk/9NNFG5h\nYHWf7jqvE4h6tVveJwiw+/LWUU49c6NsmaXl75fLQoSK8d0VV/bT3ix7xlZ8Yx6y\nTHpYz8Kxj4ntbPWJUCv+P5wLA15WcSzWzviXlUFlvw7aKzv88pVp7mCbf75Ltcse\naTnSNoZDOgIZFRVf8Jg4xdkaHhuj940rk0VhowrOexfXYV6MS21Ogm+BvrziIYo8\n5kzQIrgxCupnvwTxUX9DcWS7/ZSD0xHxdjPdXk0AHH1a3welXZ9NfSUUz6yKkQBn\noxkIiQybLNauJaa/fGkA7Cxpn1oxEp0y1NqISbRnlfDphOLvlTjRGLWiDy76CVoD\nTMvoJN8nAgMBAAECggEAQ4uq0lesj3T6FJRQIeXMAQoitN5GiSl8ABDJI5AfWh8s\nR89XWyE2KLDS1KuL8FdtdtEOvUUsm3p9rKbz9fJ7Pnoi11gVLID9HPaFPe9Rl0/m\n4JTMpz+Hgiqhf2eezM76v7NP45LRKNoPZ78k7fKyzOBctf/kmbie1aUgZYVlqcPv\nAiXXICqS+cJ6jdR8kOpneKVa9nkde1tJpwgtDvxJ7V7pu8Cko60hNLOCHksbyZpl\n3luZzXSTHI7rk1jkVfGV/H/EsRc3rw5C+nlU9Y2rznrjooSGjV2hkxDEj72RV+Dc\nThGeJjAQkUhpiQlzr/uLwk6Fw7JYwDy/UdhDkXNvRQKBgQD/+6qy2bJiYOBThUGh\nFfa5dVRm42W8+QR+VcVqbaQIidOFIUDPlotmdqsEhzX0I7Gxnr8pEzvUmu4G0BOK\nWNiDzn9kd3MsVSNP82RuuHtDAYDa9kaC2tR9aFE2hsEalDmYJA1aXbWUAhWKYMv/\niVTpGLgREFSYqTw2iXPslDGLwwKBgQDvsaWJzj0cjGICi0jvfJ/At6HmjSU8ztRx\nrzP0kx0EnC22ZItwoBnryGDLFrS0m/NWn78H1iPD7V6Hsq+3jsLirg7/15koh3Tw\nHOsLb6eIPrqnOYsIVvLaHXSM/s12R62LDMxc2+Gv+0J5Nkkz4eYxWn7C2hD19cyK\nsftWk0z8zQKBgGH39XqBqq3QGcqdQ2LdPxH3f5fpC7TpMPkQ5n82+wJxjUx0T5Oj\nMDLE0+rlvJZ1Wrp54PtdaxaRPOvKks/t9N9tFoBi3udmph8hLZzaagJY/vHOM2o9\nSfm9BOfzZtA/TlOV6K5fEvFUYt4U8b4Y1zBmz3toXpgWnP7aWE2A4f11AoGBAM9x\ncLH+Uvd1K5HGF/5kXiI9Cxpsh5DD9CrbldySwaduv0U+aUu01BoylkrNwOEaoxQS\nNxNCKjv0ID7Sz67OGC50s7iKUBw6d2Mjs+x22ohYudPmQkSac51/ppIsJ4e5ayGP\nlwK6re1PSG19JQeI9185UcGzVsB31Wkntj1sSFH1AoGAaTS7/zRpJShi5FSq/9b/\nhvNmK+firvD/C6wUn8N2ke0wGGLQrjZFGIFHxHZQmdX1nPy8vtYECCyB8Cs41bYs\nYJd6tL2UzwHa9C8LyRcne0mdiNKsk9fwo4gljbqkQX7y9zoKgw/cGguakb1KwsYM\nL3sWckC7XGhzST421j7qEcI=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-y4clc@search-7469a.iam.gserviceaccount.com",
    "client_id": "103370326599975704231",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-y4clc%40search-7469a.iam.gserviceaccount.com"
};
const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
