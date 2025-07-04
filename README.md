# PhotoFeed 📸

A modern, responsive photo gallery application built with Next.js 14, featuring internationalization, modal views, and elegant image displays.

## ✨ Features

- **📱 Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **🌍 Internationalization** - Multi-language support (English & Bengali)
- **🖼️ Modal Photo Viewer** - Click on any photo to view in a beautiful modal overlay
- **⚡ Fast Loading** - Optimized images with Next.js Image component and fallback handling
- **🎨 Modern UI** - Clean design with Tailwind CSS
- **🔍 Photo Details** - View photo metadata, author information, and engagement stats
- **📊 Error Handling** - Graceful fallback for failed image loads

## 🚀 Tech Stack

- **Framework**: Next.js 14.1.4
- **Styling**: Tailwind CSS 3.3.0
- **Language**: JavaScript/JSX
- **Image Sources**: Lorem Picsum & DiceBear APIs
- **Internationalization**: @formatjs/intl-localematcher & negotiator
- **Development**: ESLint, PostCSS, Autoprefixer

## 📁 Project Structure

```
photofeed/
├── app/                          # App Router directory
│   ├── [lang]/                   # Internationalized routes
│   │   ├── dictionaries/         # Translation files
│   │   │   ├── en.json          # English translations
│   │   │   └── bn.json          # Bengali translations
│   │   ├── (.)photos/[id]/      # Intercepting route for modal
│   │   ├── photos/[id]/         # Photo detail pages
│   │   └── page.js              # Home page
│   ├── api/                     # API routes
│   │   └── photos/              # Photo API endpoints
│   ├── globals.css              # Global styles
│   └── layout.js                # Root layout
├── components/                   # React components
│   ├── ImageWithFallback.jsx    # Image component with error handling
│   ├── LanguageSwitcher.jsx     # Language toggle component
│   ├── Logo.jsx                 # Logo component
│   ├── Modal.jsx                # Modal overlay component
│   ├── Navbar.jsx               # Navigation bar
│   ├── PhotoCard.jsx            # Individual photo card
│   ├── PhotoDetails.jsx         # Photo detail view
│   └── PhotoList.jsx            # Photo grid layout
├── lib/                         # Utility libraries
│   ├── image-data.js            # Photo data source
│   └── image-utils.js           # Image utility functions
├── public/                      # Static assets
│   ├── icons/                   # SVG icons
│   └── images/                  # Static images
└── middleware.js                # Internationalization middleware
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd photofeed
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   BASE_API_URL=http://localhost:3000/api
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Internationalization

The app supports multiple languages through Next.js internationalization:

- **English** (`/en`) - Default language
- **Bengali** (`/bn`) - Secondary language

Language detection is automatic based on browser preferences, with manual switching available via the language switcher component.

## 🖼️ Image Sources

- **Main Photos**: [Lorem Picsum](https://picsum.photos) - High-quality placeholder images
- **User Avatars**: [DiceBear API](https://dicebear.com) - Generated avatar images
- **Fallback Images**: Local SVG placeholders for error handling

## 🎨 Styling

The project uses Tailwind CSS for styling with:
- Responsive design principles
- Dark/light mode considerations
- Custom color schemes
- Optimized for performance

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Key Components

### PhotoCard
Displays individual photos in a grid layout with:
- Image optimization
- Error handling with fallbacks
- Click-to-modal functionality

### Modal
Full-screen overlay for photo viewing with:
- White background for better visibility
- Responsive design
- Easy navigation controls

### PhotoDetails
Comprehensive photo information including:
- Author details and avatars
- Engagement metrics (views, shares, likes)
- Photo metadata and tags

### LanguageSwitcher
Toggle between supported languages with:
- Flag icons for visual identification
- Smooth transitions
- Persistent language preference

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
```bash
npm run build
npm run start
```

## 🐛 Troubleshooting

### Images Not Loading
- Check internet connection
- Verify API endpoints are accessible
- Clear browser cache and restart development server

### Language Issues
- Ensure translation files exist in `app/[lang]/dictionaries/`
- Check middleware configuration
- Verify language codes match supported locales

### Modal Issues
- Ensure modal root element exists in DOM
- Check for conflicting CSS z-index values
- Verify JavaScript is enabled

## 🔒 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `BASE_API_URL` | API base URL | `http://localhost:3000/api` |

## 📄 License

This project is private and not licensed for public use.

## 👥 Contributing

This is a private project. For internal development:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit for review

## 📞 Support

For issues or questions, please contact the development team.

---

Built with ❤️ using Next.js and modern web technologies.
