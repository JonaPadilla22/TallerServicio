import { Vehiculo  } from "../interfaces/vehiculo";
import { connection } from "../database";

class VehiculosService {
    static getAll = async () => {
        let [rows] = await connection.query('SELECT * FROM consultar_vehiculos');
        let veh = rows.map((r: any) => {
            return r;
        });
        return veh;  
    };

    static getById = async (id: string) => {
        let [rows] = await connection.query('SELECT * FROM consultar_vehiculos WHERE matricula = ?',[id]);
        let veh = rows.map((r: any) => {
            return r;
        });
        return veh;   
    };

    static insert = async (item: Vehiculo) => {     
        await connection.query('INSERT INTO vehiculo SET ?', [item]);
        return item;      
    };
    
    static update = async (item: Vehiculo, id: string) => {       
        const responseInsert = await connection.query('UPDATE vehiculo SET ? WHERE matricula = ?', [item, id]);
        return responseInsert;        
    };
    
}

export { VehiculosService };