// Utility function to get image URL with fallback
export const getImageUrl = (originalUrl, fallbackUrl = "/placeholder-photo.svg") => {
  return originalUrl;
};

export const getAvatarUrl = (originalUrl, fallbackUrl = "/placeholder-avatar.svg") => {
  return originalUrl;
};

// Alternative image sources for when external services are down
export const alternativeImageSources = {
  photos: [
    "https://picsum.photos/700/700?random=1",
    "https://picsum.photos/700/700?random=2",
    "https://picsum.photos/700/700?random=3",
    "https://picsum.photos/700/700?random=4",
    "https://picsum.photos/700/700?random=5",
    "https://picsum.photos/700/700?random=6",
    "https://picsum.photos/700/700?random=7",
    "https://picsum.photos/700/700?random=8",
    "https://picsum.photos/700/700?random=9",
    "https://picsum.photos/700/700?random=10"
  ],
  avatars: [
    "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=5",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=6",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=7",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=8",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=9",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=10"
  ]
};
