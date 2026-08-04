import { useState } from 'react';
import { Play, X } from 'lucide-react';


type Project = {
  id: number;
  title: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  video: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Nebula Dance',
    year: '2024',
    description:
      'Танцевальный TikTok с высокой энергией, быстрыми катами под бит, переходами и глитч-эффектами, который набрал более 2M просмотров.',
    image:
      'https://images.pexels.com/photos/3754397/pexels-photo-3754397.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Синхрон бита', 'Переходы', 'Глитч FX'],
    video: 'https://cdn.coverr.co/videos/coverr-a-woman-dancing-in-the-studio-1080p.mp4',
  },
  {
    id: 2,
    title: 'Cosmic Skincare',
    year: '2024',
    description:
      'Продуктовый Reels для бренда косметики. Чистая эстетика, плавные переходы и хук, который конвертировал зрителей в покупателей.',
    image:
      'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Продукт', 'Плавные каты', 'Эстетика'],
    video: 'https://cdn.coverr.co/videos/coverr-a-woman-applying-cream-1080p.mp4',
  },
  {
    id: 3,
    title: 'Stellar Travel',
    year: '2024',
    description:
      'Тревел Shorts с кинематографичным цветокорреком, спид-рампами и мощным саундтреком. 800K просмотров за 48 часов.',
    image:
      'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Спид-рампы', 'Цветокоррек', 'Кинематограф'],
    video: 'https://cdn.coverr.co/videos/coverr-aerial-view-of-the-mountains-1080p.mp4',
  },
  {
    id: 4,
    title: 'Lunar Fitness',
    year: '2024',
    description:
      'Фитнес Reels с агрессивными катами, мотивирующими текстовыми оверлеями и ритмичным монтажом, который поднял вовлечённость в 3 раза.',
    image:
      'https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Текст-оверлеи', 'Быстрые каты', 'Фитнес'],
    video: 'https://cdn.coverr.co/videos/coverr-a-woman-training-in-the-gym-1080p.mp4',
  },
  {
    id: 5,
    title: 'Orbit Food',
    year: '2023',
    description:
      'Фуд-TikTok с ASMR-крупными планами, залипательными переходами и трендовым звуком, который набил 1.5M просмотров.',
    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['ASMR', 'Еда', 'Трендовый звук'],
    video: 'https://cdn.coverr.co/videos/coverr-a-chef-cooking-in-a-restaurant-1080p.mp4',
  },
  {
    id: 6,
    title: 'Galaxy Fashion',
    year: '2023',
    description:
      'Фэшн Shorts с плавными матч-катами, дропами на бит и вертикальной композицией, которая вывела бренд на новый уровень.',
    image:
      'https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Матч-каты', 'Фэшн', 'Дропы бита'],
    video: 'https://cdn.coverr.co/videos/coverr-a-woman-walking-in-the-city-1080p.mp4',
  },
];

export default function Work() {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const togglePlay = (id: number) => {
    setPlayingId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="work" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 reveal">
          <p className="font-sf-italic text-xs tracking-[0.3em] text-red-500/80 uppercase mb-4">
            02 — Работы
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight font-steelfish">
            Примеры <span className="text-gradient-ice">видео</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
          {projects.map((p) => {
            const isPlaying = playingId === p.id;
            return (
              <div
                key={p.id}
                className={`video-card group relative overflow-hidden bg-white/5 border transition-all duration-500 ${
                  isPlaying
                    ? 'border-red-500/50 shadow-[0_0_40px_-10px_rgba(239,68,68,0.4)]'
                    : 'border-white/5 hover:border-red-500/50 hover:shadow-[0_0_40px_-10px_rgba(239,68,68,0.4)]'
                }`}
              >
                <div className="aspect-[9/16] overflow-hidden relative">
                  {isPlaying ? (
                    <video
                      src={p.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="card-image w-full h-full object-cover transition-transform duration-700 ease-out"
                    />
                  )}

                  {/* Play / close overlay */}
                  <button
                    onClick={() => togglePlay(p.id)}
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300"
                    aria-label={isPlaying ? 'Закрыть видео' : 'Открыть видео'}
                  >
                    <span
                      className={`flex items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 ${
                        isPlaying
                          ? 'w-10 h-10 bg-black/60 border border-white/20 opacity-90'
                          : 'w-14 h-14 bg-white/10 border border-white/20 opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      {isPlaying ? (
                        <X size={18} className="text-white" />
                      ) : (
                        <Play size={20} className="text-white ml-0.5" fill="white" />
                      )}
                    </span>
                  </button>
                </div>


              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
