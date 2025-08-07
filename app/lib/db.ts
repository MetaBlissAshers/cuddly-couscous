import * as sqlite3 from 'sqlite3';

export type Video = {
  id: number;
  title: string;
  video_sources: string;
  page_url: string;
  video_page_url: string;
  duration: string;
  models: string;
  tags: string;
  thumbnail_url: string;
  extra_thumbnails: string;
  cdn_thumbnail_url: string | null;
  cdn_extra_thumbnails: string | null;
  iframe_src: string;
  scraped_at: string;
};

function processVideo(video: Video): Video {
  return {
    ...video,
    thumbnail_url: video.cdn_thumbnail_url || video.thumbnail_url,
    extra_thumbnails: video.cdn_extra_thumbnails || video.extra_thumbnails,
  };
}


export type Category = {
  category_name: string;
  category_thumbnail_url: string;
  cdn_category_thumbnail_url: string | null;
};

export type Model = {
  model_name: string;
  model_thumbnail_url: string;
  cdn_model_thumbnail_url: string | null;
};

function processCategory(category: Category): Category {
  return {
    ...category,
    category_thumbnail_url: category.cdn_category_thumbnail_url || category.category_thumbnail_url,
  };
}

function processModel(model: Model): Model {
  return {
    ...model,
    model_thumbnail_url: model.cdn_model_thumbnail_url || model.model_thumbnail_url,
  };
}


let db: sqlite3.Database | null = null;

export async function getDb(): Promise<sqlite3.Database> {
  if (db) return db;
  return new Promise((resolve, reject) => {
    const newDb = new sqlite3.Database('./video_links.db', (err) => {
      if (err) reject(err);
      else resolve(newDb);
    });
    db = newDb;
  });
}

export async function getVideos(page: number = 1, pageSize: number = 10): Promise<Video[]> {
  const offset = (page - 1) * pageSize;
  const d = await getDb();
  return new Promise((resolve, reject) => {
    d.all<Video>(
      `SELECT * FROM video_links ORDER BY scraped_at DESC LIMIT ? OFFSET ?`,
      [pageSize, offset],
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows.map(processVideo));
      }
    );
  });
}

export async function getVideoCount(): Promise<number> {
  const d = await getDb();
  return new Promise((resolve, reject) => {
    d.get(`SELECT COUNT(*) as count FROM video_links`, (err, row: { count: number }) => {
      if (err) reject(err);
      else resolve(row.count);
    });
  });
}

export async function getAllTags(): Promise<string[]> {
  const d = await getDb();
  return new Promise((resolve, reject) => {
    d.all<Video>(`SELECT tags FROM video_links`, (err, rows) => {
      if (err) reject(err);
      const allTags = new Set<string>();
      rows.forEach(row => {
        row.tags.split(',').forEach(tag => allTags.add(tag.trim()));
      });
      resolve(Array.from(allTags));
    });
  });
}

export async function getAllModels(): Promise<string[]> {
  const d = await getDb();
  return new Promise((resolve, reject) => {
    d.all<Video>(`SELECT models FROM video_links`, (err, rows) => {
      if (err) reject(err);
      const allModels = new Set<string>();
      rows.forEach(row => {
        row.models.split(',').forEach(model => allModels.add(model.trim()));
      });
      resolve(Array.from(allModels));
    });
  });
}

export async function getVideoById(id: string): Promise<Video | null> {
  const d = await getDb();
  return new Promise((resolve, reject) => {
    d.get<Video>(`SELECT * FROM video_links WHERE id = ?`, [id], (err, row) => {
      if (err) reject(err);
      else resolve(row ? processVideo(row) : null);
    });
  });
}

export async function getAllVideoIds(): Promise<string[]> {
  const d = await getDb();
  return new Promise((resolve, reject) => {
    d.all<{ id: string }>(`SELECT id FROM video_links`, (err, rows) => {
      if (err) reject(err);
      else resolve(rows.map(row => row.id));
    });
  });
}

export async function getAllCategories(): Promise<Category[]> {
  const d = await getDb();
  return new Promise((resolve, reject) => {
    d.all<Category>(`SELECT category_name, category_thumbnail_url, cdn_category_thumbnail_url FROM categories`, (err, rows) => {
      if (err) reject(err);
      else resolve(rows.map(processCategory));
    });
  });
}

export async function getAllModelDetails(): Promise<Model[]> {
  const d = await getDb();
  return new Promise((resolve, reject) => {
    d.all<Model>(`SELECT model_name, model_thumbnail_url, cdn_model_thumbnail_url FROM models`, (err, rows) => {
      if (err) reject(err);
      else resolve(rows.map(processModel));
    });
  });
} 