import db from '../config/mysql.js';

export const getSearchMovie = async (keyword) => {
  if (!keyword || !keyword.trim()) {
    const [rows] = await db.query(`
      SELECT * FROM movies
      ORDER BY created_at DESC
      LIMIT 20
    `);
    return rows;
  }

  const searchTerm = `%${keyword}%`;
  const [rows] = await db.query(
    `
      SELECT * FROM movies
      WHERE title_vi LIKE ? OR title_en LIKE ?
      LIMIT 20
    `,
    [searchTerm, searchTerm]
  );

  return rows;
};
