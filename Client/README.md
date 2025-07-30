# SpaceFinder - Rental Platform

SpaceFinder is a modern rental platform inspired by Airbnb's design, built specifically for finding and advertising rooms, studios, and shared spaces in London. This project features a clean, responsive Angular frontend with Tailwind CSS styling.

## 🚀 Features

### Core Functionality
- **User Authentication** - Login and signup functionality
- **Property Listings** - Create, edit, and manage property listings
- **Advanced Search** - Filter properties by location, price, room type, and amenities
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### Design Highlights
- **Airbnb-Inspired UI** - Modern, clean interface following Airbnb design patterns
- **Interactive Components** - Hover effects, smooth transitions, and micro-interactions
- **Comprehensive Filters** - Price range, room type, amenities, and availability filters
- **Image Galleries** - Beautiful property image displays with indicators
- **Trust & Safety** - Dedicated section highlighting platform safety features

## 🛠️ Technology Stack

- **Frontend**: Angular 19.x
- **Styling**: Tailwind CSS 4.x
- **Icons**: Heroicons (SVG icons)
- **Build Tool**: Angular CLI
- **Package Manager**: npm

## 📁 Project Structure

```
Client/
├── src/
│   ├── app/
│   │   ├── components/           # Reusable components
│   │   │   ├── header/          # Navigation header with search
│   │   │   ├── footer/          # Site footer
│   │   │   ├── listing-card/    # Property listing cards
│   │   │   └── simplesearchbar/ # Search functionality
│   │   ├── pages/               # Page components
│   │   │   ├── home/           # Homepage with hero section
│   │   │   ├── search-results/ # Search results with filters
│   │   │   ├── auth/           # Login/signup pages
│   │   │   ├── features/       # Property management
│   │   │   └── mySpaces/       # User's property listings
│   │   └── shared/             # Shared utilities and components
│   ├── assets/                 # Static assets
│   └── styles.scss            # Global styles
├── public/                     # Public assets
└── package.json               # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v19 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build in watch mode
- `npm test` - Run unit tests

## 🎨 Design System

### Color Palette
- **Primary**: Red/Pink gradient (#EF4444 to #EC4899)
- **Secondary**: Gray scale for text and borders
- **Accent**: Green for success states, Blue for information

### Typography
- **Headings**: Bold, modern font weights
- **Body Text**: Clean, readable typography
- **Interactive Elements**: Medium font weights with proper spacing

### Components

#### Header
- **Logo**: Custom SpaceFinder branding with icon
- **Search Bar**: Three-section search (Where, Move-in, Type)
- **User Menu**: Dropdown with authentication and navigation links
- **Mobile Responsive**: Collapsible search and hamburger menu

#### Listing Cards
- **Image Display**: High-quality images with hover effects
- **Property Info**: Location, type, price, and amenities
- **Interactive Elements**: Favorite button and click-to-view
- **Rating System**: Star ratings and review counts

#### Search & Filters
- **Filter Sidebar**: Price range, room type, amenities, availability
- **Sort Options**: Price, distance, rating, and date
- **View Toggle**: Grid and list view options
- **Map Integration**: Show/hide map functionality

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Key responsive features:
- Collapsible navigation on mobile
- Adaptive grid layouts
- Touch-friendly interface elements
- Optimized image loading

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS 4.x with custom configurations:
- Custom color palette
- Extended spacing utilities
- Responsive breakpoints
- Animation utilities

### Angular Configuration
- Standalone components architecture
- Lazy loading for routes
- Modern Angular features (v19)
- TypeScript strict mode

## 🚀 Deployment

### Production Build
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Environment Configuration
Update `src/environments/` files for different deployment environments:
- `environment.ts` - Development
- `environment.prod.ts` - Production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from Airbnb
- Icons from Heroicons
- Images from Unsplash
- Angular team for the excellent framework
- Tailwind CSS team for the utility-first CSS framework

## 📞 Support

For support and questions:
- Create an issue in the repository
- Email: support@spacefinder.com
- Documentation: [Project Wiki](link-to-wiki)

---

**SpaceFinder** - Making room finding simple and beautiful. 🏠✨
