import { Marca } from "../interfaces/marca.interface";
import { connection } from "../database";
//import { isValidUser, isValidUserStatus } from "../utils/valid";

class BrandService {
    static getBrands = async () => {
        let [rows] = await connection.query('SELECT * FROM marca');
        let users = rows.map((r: any) => {
            return r;
        });
        return users;  
    };

    static getBrandById = async (id: string) => {
        let [rows] = await connection.query('SELECT * FROM marca WHERE ID_MARCA = ?',[parseInt(id)]);
        let users = rows.map((r: any) => {
            return r;
        });
        return users;   
    };
    
    static getBrandStatus = async (id: string) => {
        let [rows] = await connection.query('SELECT estatus FROM marca WHERE ID_MARCA = ?',[id]);
        var valid = rows[0]['estatus'];

        if(valid){
            return valid;
        }else{
            return "ERROR";
        }       
    };
    
    static insertBrand = async (item: Marca) => {
        await connection.query('INSERT INTO marca SET ?', [item]);
        return item;
    };
    
    static updateBrand = async (item: Marca, id: string) => {       
        const responseUpdate = await connection.query('UPDATE marca SET ? WHERE ID_MARCA = ?', [item, id]);
        return responseUpdate;
    };
    
}

export { BrandService };