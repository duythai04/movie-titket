import db from '../config/mysql.js';


export const  getWaterbubble = async () => {
    const [rows] = await db.query('SELECT * FROM food_combo');
    return rows;
}

