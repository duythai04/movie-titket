import { getWaterbubble } from "../models/foodcombo.model.js";


export const getFoodCombos = async (req, res) => {
    try {
        const combos = await getWaterbubble();
        res.json(combos);
        
    } catch (error) {
        console.error(err);
        res.status(500).json({ message: 'Lỗi server' });
    }
}