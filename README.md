# Shirish Patel - Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a professional two-column layout with a sidebar for personal information and skills, and a main content area showcasing projects, experience, education, and awards.

## 🎨 Design Features

- **Professional Blue/Gray Theme**: Clean, corporate-style design
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Two-Column Design**: Fixed sidebar with scrollable main content
- **Smooth Animations**: Hover effects and transitions throughout
- **Modern Typography**: Clean, readable fonts with proper hierarchy
- **Interactive Elements**: Hover states, skill tags, and project cards

## 📁 Project Structure

```
src/
├── assets/               # Images and static files
│   ├── profile-placeholder.jpg
│   ├── oracle-erp-project.jpg
│   ├── clean-energy-automation.jpg
│   ├── tableau-dashboard.jpg
│   ├── safety-ai-app.jpg
│   └── financial-model.jpg
├── components/           # Reusable React components
│   ├── Sidebar.tsx
│   ├── MainContent.tsx
│   ├── ProjectCard.tsx
│   └── ExperienceCard.tsx
├── data/                # Portfolio data (easy to edit!)
│   └── portfolio.ts
├── pages/               # Main pages
│   └── Index.tsx
└── index.css           # Design system and styles
```

## ✏️ How to Edit Content

All portfolio content is centralized in `src/data/portfolio.ts` for easy editing:

### Personal Information
```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  location: "Your Location",
  email: "your.email@example.com",
  phone: "(123) 456-7890",
  photo: profilePlaceholder, // Replace with your photo
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  kaggle: "https://kaggle.com/yourusername"
};
```

### Adding New Projects
```typescript
export const projects = [
  // ... existing projects
  {
    id: 6, // Increment ID
    title: "Your New Project",
    description: "Brief description of what the project does and its impact.",
    image: yourProjectImage, // Import your image at the top
    technologies: ["Tech1", "Tech2", "Tech3"],
    link: "https://github.com/yourproject" // Or live demo link
  }
];
```

### Adding Experience
```typescript
export const experience = [
  // ... existing experience
  {
    id: 5, // Increment ID
    company: "Company Name",
    position: "Your Position",
    location: "City, Country",
    period: "Start Date – End Date",
    description: "Brief description of your responsibilities and achievements."
  }
];
```

### Updating Skills
```typescript
export const skills = [
  "New Skill", "Another Skill", // Add new skills
  // ... existing skills
];
```

## 🖼️ How to Update Images

### Profile Photo
1. Replace `src/assets/profile-placeholder.jpg` with your professional headshot
2. The image should be square (1:1 ratio) for best results
3. Recommended size: 400x400px or larger

### Project Images
1. Add your project images to `src/assets/`
2. Import them at the top of `src/data/portfolio.ts`
3. Reference them in your project objects
4. Recommended size: 640x512px (4:3 ratio)

### Adding New Images
```typescript
// At the top of portfolio.ts
import yourNewImage from "@/assets/your-new-image.jpg";

// Then use in your data
image: yourNewImage
```

## 🚀 Running Locally

### Prerequisites
- Node.js 16+ and npm installed
- [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating) if needed

### Development Setup
```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev

# Your site will be available at http://localhost:8080
```

### Building for Production
```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Create GitHub Repository**
   ```bash
   # Create a new repository named: yourusername.github.io
   # For example: shirishpatel.github.io
   ```

2. **Deploy Your Code**
   ```bash
   git init
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git add .
   git commit -m "Initial portfolio commit"
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository Settings
   - Navigate to "Pages" in the sidebar
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Click "Save"

4. **Your site will be live at:** `https://yourusername.github.io`

### Option 2: Lovable Platform

1. Visit your [Lovable Project](https://lovable.dev/projects/dc709cbf-5034-49ce-a7ca-52a2577e12d7)
2. Click "Share" → "Publish"
3. Your site will get a lovable.app URL

### Option 3: Other Platforms

- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **Vercel**: Connect your GitHub repository
- **Surge.sh**: Run `npm install -g surge` then `surge dist`

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary: 220 65% 45%;        /* Main blue color */
  --sidebar-bg: 220 30% 18%;     /* Sidebar background */
  --sidebar-accent: 220 65% 55%; /* Sidebar accent color */
  /* ... other variables */
}
```

### Adding New Sections
1. Create a new component in `src/components/`
2. Add your data to `src/data/portfolio.ts`
3. Import and use in `src/components/MainContent.tsx`

### Changing Fonts
Update the font imports in `tailwind.config.ts`:
```typescript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

## 📱 Features

- ✅ Fully responsive design
- ✅ Professional layout with sidebar
- ✅ Interactive project cards with hover effects
- ✅ Timeline-style experience section
- ✅ Skill tags with hover animations
- ✅ Contact links and social media integration
- ✅ SEO-optimized meta tags
- ✅ Easy content management
- ✅ Modern design system with consistent styling

## 🛠️ Technologies Used

- **React 18** - Modern JavaScript library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful icon library

## 📞 Support

If you need help customizing your portfolio:

1. Check the component files for examples
2. Review the design system in `src/index.css`
3. Look at the data structure in `src/data/portfolio.ts`
4. Use the Lovable platform for AI-assisted editing

## 🎯 Next Steps

1. **Update all placeholder content** with your real information
2. **Replace the profile photo** with your professional headshot
3. **Add your real project images** and descriptions
4. **Customize the color scheme** to match your preferences
5. **Deploy to GitHub Pages** or your preferred platform
6. **Share your portfolio** with potential employers and clients

---

**Built with ❤️ using Lovable - The AI-powered web development platform**
