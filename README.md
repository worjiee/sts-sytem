# 🌍 Global Temperature Simulator

An interactive climate education tool that demonstrates the relationship between CO₂ levels and global temperature, supporting **UN SDG 13: Climate Action**.

![Climate Action](https://img.shields.io/badge/SDG-13%20Climate%20Action-green)
![React](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![Vite](https://img.shields.io/badge/Vite-6.0-purple)

## 📖 About

The Global Temperature Simulator is an educational web application designed to help students, educators, and the general public understand the direct relationship between atmospheric CO₂ levels and global temperature changes. Through interactive simulations and visual representations, we make climate science accessible and engaging.

### Key Features

- 🎚️ **Interactive CO₂ Control** - Adjust atmospheric CO₂ levels from 280 ppm (pre-industrial) to 500+ ppm
- 📊 **Real-time Temperature Visualization** - See immediate temperature impact based on CO₂ changes
- 🖥️ **NetLogo Climate Model Integration** - Official NetLogo Climate Change simulation embedded
- 📈 **Data Charts** - Visual representations of temperature trends
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🎓 **Educational Content** - Learn about climate science, SDG 13, and climate action
- 👥 **Team Profiles** - Meet the developers and researchers behind the project

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager

### Installation

```bash
# 1. Clone the repository
git clone <YOUR_GIT_URL>
cd systemmm

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open your browser
# Navigate to http://localhost:8080
```

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 🛠️ Technologies Used

### Core Technologies
- **React 18.3** - Modern UI library with hooks and functional components
- **TypeScript 5.6** - Type-safe development for reliability
- **Vite 6.0** - Lightning-fast build tool and dev server
- **React Router 7** - Client-side routing

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
- **Lucide React** - Beautiful, consistent icons

### Data Visualization
- **Recharts** - Composable charting library for React
- **NetLogo Web** - Agent-based modeling for climate simulation

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixing

## 📁 Project Structure

```
systemmm/
├── public/              # Static assets (images, logos)
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── SimulationPanel.tsx
│   │   ├── TemperatureChart.tsx
│   │   └── SimpleNetLogoModel.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Simulation.tsx
│   │   └── Contact.tsx
│   ├── lib/            # Utility functions
│   ├── hooks/          # Custom React hooks
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Features in Detail

### 1. Interactive CO₂ Simulation
- Slider control for adjusting CO₂ levels (280-500 ppm)
- Real-time temperature calculation
- Visual feedback with color-coded severity levels:
  - **Green** - Safe (<15°C)
  - **Yellow** - Moderate (15-16°C)
  - **Orange** - Concerning (16-17°C)
  - **Red** - Critical (>17°C)

### 2. NetLogo Climate Model
- Embedded official NetLogo Climate Change simulation
- Interactive controls for:
  - Adding/removing clouds
  - Adding/removing CO₂ molecules
  - Adjusting sun brightness
  - Changing Earth's albedo (reflectivity)
- Visual representation of:
  - Sun rays and energy transfer
  - Infrared radiation
  - Heat accumulation
  - Greenhouse effect

### 3. Educational Content
- **Home Page** - Introduction and key statistics
- **About Page** - Project purpose, methodology, SDG alignment
- **Simulation Page** - Interactive climate modeling
- **Contact Page** - Team information and contact details

### 4. Responsive Design
- Mobile-first approach
- Optimized layouts for all screen sizes
- Touch-friendly controls
- Accessible navigation

## 🧪 Development Scripts

```bash
npm run dev          # Start development server (port 8080)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🌐 Deployment

### Build Output
The production build is created in the `dist/` folder.

### Deployment Options

**Vercel** (Recommended)
```bash
npm install -g vercel
vercel deploy
```

**Netlify**
```bash
npm run build
# Drag and drop the dist folder to Netlify
```

**GitHub Pages**
```bash
npm run build
# Deploy dist folder to gh-pages branch
```

## 📚 Climate Science Background

### Temperature Calculation
The simulator uses a simplified linear model:

```
Temperature = 14°C + (CO₂ - 280 ppm) × 0.01
```

Where:
- **14°C** - Pre-industrial global average temperature
- **280 ppm** - Pre-industrial CO₂ level (1750)
- **0.01** - Simplified climate sensitivity factor

**Note:** Real climate systems are more complex and include feedback loops, ocean circulation, ice albedo effects, and more. This model is for educational purposes to demonstrate the basic CO₂-temperature relationship.

### Key Climate Facts
- **Pre-industrial CO₂**: 280 ppm
- **Current CO₂ (2024)**: ~420 ppm
- **Paris Agreement Goal**: Limit warming to 1.5°C above pre-industrial levels
- **Current Temperature Increase**: ~1.1°C above pre-industrial levels

## 🎓 SDG 13: Climate Action

This project supports the UN Sustainable Development Goal 13, which calls for urgent action to combat climate change and its impacts. Specifically, it contributes to:

- **Target 13.3** - Improve education and awareness on climate change mitigation
- **Target 13.b** - Promote mechanisms for raising capacity for climate change planning

## 👥 Development Team

**GED0011 Course Project - FEU Institute of Technology**

- **Karl Santino Sacayan** - Team Leader & Full-Stack Developer
- **Andrei Shinjiro Pelayo** - Presenter & UI/UX
- **John Carl Escultura** - Researcher
- **James Archie Ebora** - Researcher
- **Mark Dustine Cadiente** - Researcher
- **Raven Mendoza** - Simulation Operator
- **Dwayne Lee** - Presenter
- **Navin Kumar** - SDG Analyst

## 📝 License

This project is developed for educational purposes as part of the GED0011 course.

## 🤝 Contributing

This is an academic project. For suggestions or issues, please contact the development team through the Contact page.

## 📧 Contact

- **Email**: kfsacayan@fit.edu.ph
- **Institution**: FEU Institute of Technology, Manila
- **Course**: GED0011

## 🙏 Acknowledgments

- **NetLogo Team** - For the Climate Change simulation model
- **shadcn/ui** - For the beautiful component library
- **Recharts** - For data visualization capabilities
- **FEU Institute of Technology** - For academic support
- **UN SDGs** - For the framework and inspiration

---

**Built with ❤️ for climate education and awareness**

*Every degree matters. Every action counts.* 🌍
