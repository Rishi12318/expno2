# CU Component Library Dashboard

## 📋 Project Overview

**Experiment 2: Design UI using Component Libraries**

A production-grade Next.js TypeScript application demonstrating comprehensive UI component library implementation using Material UI. Built for university practical evaluation showcasing modern web development best practices.

---

## 🎯 Project Objectives

This project fulfills all requirements for Experiment 2:

✅ **Navigation Components**
- Fixed top navigation bar with menu toggle
- Responsive sidebar with route-based highlighting
- Mobile-friendly collapsible drawer

✅ **Dashboard Features**
- 4 stat cards with icons and metrics
- Responsive grid layout (4-column on desktop, stacked on mobile)
- Hover animations and visual feedback

✅ **Data Management**
- Interactive data table with sample dataset
- Status badges with color coding
- Hover effects and accessibility features

✅ **Authentication**
- Login page with validation
- Registration form with multi-field validation
- Client-side error handling
- Success/error alerts

✅ **UI Components**
- Modal dialogs for confirmations
- Alert notifications
- Material Design principles
- Custom CU branding theme

✅ **Responsive Design**
- Mobile-first approach
- Breakpoint-based layout changes
- Touch-friendly interface

✅ **Accessibility**
- Semantic HTML components
- ARIA labels
- Keyboard navigation support
- High color contrast ratios

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (100% - Zero JS files)
- **UI Library:** Material UI v6
- **Styling:** Emotion CSS-in-JS
- **Icons:** Material Icons
- **Deployment:** Vercel-ready

---

## 📁 Project Structure

```
exp2/
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   └── page.tsx          # Main dashboard with stats & table
│   │   ├── login/
│   │   │   └── page.tsx          # Login form page
│   │   ├── register/
│   │   │   └── page.tsx          # Registration form page
│   │   ├── profile/
│   │   │   └── page.tsx          # User profile page
│   │   ├── settings/
│   │   │   └── page.tsx          # Settings page
│   │   ├── layout.tsx            # Root layout with theme provider
│   │   ├── page.tsx              # Home page (redirects to dashboard)
│   │   └── globals.css           # Global styles
│   │
│   ├── components/
│   │   ├── Navbar.tsx            # Top navigation bar
│   │   ├── Sidebar.tsx           # Collapsible sidebar menu
│   │   ├── StatCard.tsx          # Dashboard metric cards
│   │   ├── DataTable.tsx         # User data table
│   │   ├── AuthForm.tsx          # Reusable auth form
│   │   ├── ConfirmDialog.tsx     # Modal confirmation dialog
│   │   └── ThemeRegistry.tsx     # Theme provider wrapper
│   │
│   ├── theme/
│   │   └── theme.ts              # MUI theme configuration (CU branding)
│   │
│   └── types/
│       ├── dashboard.ts          # Dashboard type definitions
│       ├── auth.ts               # Authentication types
│       └── layout.ts             # Layout component types
│
├── public/                       # Static assets
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🎨 Design Features

### Custom Theme
- **Primary Color:** `#c00000` (CU Red)
- **Secondary Color:** `#808080` (Grey)
- **Typography:** Roboto font family
- **Border Radius:** 8px (cards: 12px)
- **No uppercase buttons** (Material design)

### Responsive Breakpoints
- **xs:** < 600px (Mobile)
- **sm:** ≥ 600px (Tablet)
- **md:** ≥ 900px (Desktop)
- **lg:** ≥ 1200px (Large Desktop)

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone/Navigate to project:**
   ```bash
   cd exp2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 📸 Screenshots

### Dashboard
*Main dashboard showing 4 stat cards and user management table*

### Login Page
*Authentication form with email/password validation*

### Registration Page
*Multi-field form with confirm password validation*

### Profile Page
*User profile with avatar and details*

### Settings Page
*Application settings with toggle switches*

---

## 🔑 Key Features Implemented

### 1. Type Safety
- All components strongly typed with TypeScript interfaces
- Zero `any` types used
- Comprehensive type definitions in `/types` directory

### 2. Validation
- Email format validation (regex)
- Password strength requirements (min 6 chars)
- Confirm password matching
- Real-time error display

### 3. Performance
- Named imports (no barrel abuse)
- Component-level code splitting
- Optimized bundle size
- No wildcard imports

### 4. Accessibility
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management in modals
- Color contrast compliance

### 5. Responsive Design
- Mobile-first CSS
- Breakpoint-based layouts
- Touch-friendly buttons (min 44x44px)
- Collapsible sidebar for small screens

---

## 🌐 Deployment

### Vercel Deployment

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Complete Next.js MUI Dashboard"
   git push
   ```

2. **Deploy on Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Import GitHub repository
   - Auto-detected Next.js settings
   - Deploy

**Live Demo:** `[Your Vercel URL will appear here]`

---

## 📚 Component Documentation

### StatCard Component
**Props:**
- `data: StatCardData` - Card content (title, value, icon, color)

**Features:**
- Hover lift animation
- Icon with colored circular background
- Optional description text

### DataTable Component
**Props:**
- `rows: TableRow[]` - Array of user data

**Features:**
- Sortable columns
- Status badges with color mapping
- Hover row highlighting

### AuthForm Component
**Props:**
- `type: 'login' | 'register'` - Form type
- `onSubmit: (data) => Promise<void>` - Submit handler

**Features:**
- Real-time validation
- Loading states
- Error messages per field

---

## 🧪 Testing Routes

- `/` → Redirects to dashboard
- `/dashboard` → Main analytics page
- `/login` → Authentication page
- `/register` → User registration
- `/profile` → User details
- `/settings` → App configuration

---

## 👨‍💻 Development Notes

### Code Quality Standards
- ESLint configuration enforced
- TypeScript strict mode enabled
- No console warnings in production
- Consistent naming conventions

### Best Practices Followed
- Component composition over inheritance
- Single Responsibility Principle
- DRY (Don't Repeat Yourself)
- Separation of concerns (types, components, pages)

---

## 📝 Viva Questions Reference

**Q1: Why TypeScript over JavaScript?**
- Type safety prevents runtime errors
- Better IDE autocomplete
- Self-documenting code
- Easier refactoring

**Q2: Why Material UI?**
- Pre-built accessible components
- Consistent design system
- Responsive by default
- Active community support

**Q3: What is the App Router?**
- Next.js 13+ routing system
- File-system based routing
- Server Components by default
- Improved performance

**Q4: How is responsiveness achieved?**
- MUI Grid system with breakpoints
- `useMediaQuery` hook for conditional rendering
- Mobile-first CSS approach
- Flexible layouts with flexbox

**Q5: Explain form validation approach:**
- Controlled components with React state
- Real-time validation on change
- Email regex pattern matching
- Client-side validation for UX (server-side would be added for production)

---

## 📦 Dependencies

```json
{
  "@mui/material": "^6.x",
  "@mui/icons-material": "^6.x",
  "@emotion/react": "^11.x",
  "@emotion/styled": "^11.x",
  "next": "^15.x",
  "react": "^19.x",
  "typescript": "^5.x"
}
```

---

## 🎓 Academic Compliance

**Course:** Full Stack Web Development  
**Experiment:** 2 - Design UI using Component Libraries  
**Submitted by:** Harsh Jain  
**University:** Chandigarh University  

**Learning Outcomes Achieved:**
1. ✅ Understanding of component-based architecture
2. ✅ Implementation of responsive design principles
3. ✅ Form validation and user input handling
4. ✅ State management in React
5. ✅ Material Design implementation
6. ✅ TypeScript for type-safe development
7. ✅ Next.js App Router navigation
8. ✅ Accessibility best practices

---

## 🔄 Future Enhancements

- [ ] Backend API integration
- [ ] Authentication with JWT
- [ ] Dark mode theme toggle
- [ ] Data visualization charts
- [ ] Advanced table filtering
- [ ] Export data functionality
- [ ] User role management
- [ ] Real-time notifications

---

## 📞 Contact

**Developer:** Harsh Jain  
**Email:** harsh.jain@university.edu  
**GitHub:** [Your GitHub Profile]

---

## 📄 License

This project is created for educational purposes as part of university coursework.

---

**Last Updated:** February 2026  
**Version:** 1.0.0  
**Status:** ✅ Evaluation Ready

