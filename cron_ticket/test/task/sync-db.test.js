const{syncDb}=require('../../task/sync-db');

describe('Pruebas en sync-db',()=>{
    
    test('ejecutar el proceso 2 veces',()=>{
        syncDb();   
        const times=syncDb();
        console.log('Se llamo ',times);
        expect(times).toBe(2);
    });});