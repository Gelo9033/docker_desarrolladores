const cron = require('node-cron');
const {syncDb}=require('./task/sync-db');

console.log('Iniciando cron job');

cron.schedule('1-59/5 * * * * * *', syncDb);

