# 📌 What We Do Page – Frontend Intern Assessment

## 🔗 Live Demo

👉 [https://tobams-frontend-intern-assessment.vercel.app](https://tobams-frontend-intern-assessment.vercel.app)

## 📁 GitHub Repository

👉 [https://github.com/QueenFathi/tobams-frontend-intern-assessment.git](https://github.com/QueenFathi/tobams-frontend-intern-assessment.git)

## 📌 Design Reference

Figma Design:
👉 [https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment)

## 🧰 Tech Stack

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **Icons:** React Icons
* **Deployment:** Vercel

## 🚀 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/QueenFathi/tobams-frontend-intern-assessment.git
cd tobams-frontend-intern-assessment
```

2. **Install dependencies**

```bash
pnpm install (recommended)
# or
npm install
```

3. **Run the development server**

```bash
pnpm dev (recommended)
# or
npm run dev
```

4. **Open in browser**

```
http://localhost:3000
```

## 🎯 Project Overview

This project is a pixel-perfect implementation of the **What We Do Page UI** from Figma using modern frontend best practices.

The focus was on:

* Accurate design translation
* Clean, reusable component structure
* Responsiveness across devices
* Accessibility and semantic HTML

## 🧩 Component Architecture

The UI is broken into reusable components under `/components`, including:

* `Navbar`
* `HeroSection`
* `LMSSection`
* `FeatureSection`
* `ManagementDevelopmentProgramSection`
* `TransformationHubSection`
* `TrainingConsultantSection`
* `CTASection`
* `TestimonialsSection`
* `CTABanner`
* `Footer`

This ensures scalability and maintainability rather than a monolithic page structure.


## ⚙️ Technical Assumptions

### 1. Breakpoints

The design does not define tablet breakpoints.

* Responsiveness for tablet screens was inferred using standard device widths.

### 2. Navbar Behavior

Navbar interactions were not fully specified.

Assumptions made:

* Mobile navigation collapses into a hamburger menu
* Navigation links are anchor-based (no complex routing)
* Active states are indicated via hover and focus styles

### 3. Interactions

The design does not define animation behavior.

* Minimal interactions were implemented:

  * Hover effects on buttons and links
* No heavy animations were introduced to preserve simplicity

### 4. Layout System

* A maximum width of 1280px was used for consistent horizontal spacing and alignment across sections

### 5. Icons

* Lightweight icons were implemented using React Icons where necessary to match the design

### 6. Testimonial Carousel

* Embla Carousel was used for the testimonial section
* This improves usability, especially on mobile devices, with swipe support


## 🧼 Code Quality

* No inline styles — only Tailwind utility classes
* Clean and consistent naming conventions
* No unused imports or dead code
* Images optimized using Next.js best practices
* Modular and reusable components


## ⚠️ Notes

* Minor spacing differences may exist due to Tailwind’s spacing scale limitations
* Some assets were approximated where exact exports were unavailable


## 🤖 AI Usage Disclosure

AI tools (ChatGPT) was only used as a support tool to finetune the documentation of the README file
