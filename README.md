# QuizForge 🎓
### Full-Stack Online Quiz & College Examination Platform

QuizForge is a modern, high-performance web platform designed for colleges, universities, and educators to conduct robust, secure, and timed assessments.

---

## 🌟 Key Features

- **Students**:
  - Browse college subjects and published quizzes.
  - Interactive examination environment with authoritative countdown timer.
  - Multi-question navigation, question palette, and mark-for-review tags.
  - Automatic instant scoring with detailed performance breakdown and explanations.
  - Student performance history and global/subject-wise leaderboards.

- **Teachers**:
  - Comprehensive quiz authoring suite (single-choice, multiple-choice, true/false).
  - Configurable negative marking, attempt limits, duration, and passing percentages.
  - Result release policy management (immediate vs scheduled).
  - Student attempt monitoring and item-level performance reports.

- **Administrators**:
  - Role-based user administration (students, teachers, admins).
  - Subject catalog and quiz moderation.
  - Platform-wide statistics and activity monitoring.

---

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript, Vite, React Router DOM, Tailwind CSS, Lucide React, Axios, React Hook Form, Zod, Recharts.
- **Backend**: Node.js, Express.js, TypeScript, MongoDB, Mongoose, Zod, bcrypt, JWT with secure HTTP-only cookies, Helmet, CORS, Rate Limiting.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher, tested on v24)
- npm (v9 or higher)
- MongoDB instance (local or MongoDB Atlas)

### Setup & Installation

1. **Install Dependencies**:
   ```bash
   # In QuizForge root
   npm install --prefix client
   npm install --prefix server
   ```

2. **Configure Environment Variables**:
   Copy the example environment file in `server/`:
   ```bash
   cp server/.env.example server/.env
   ```

3. **Development Mode**:
   ```bash
   # Run both client and server concurrently
   npm run dev
   ```
   - Client runs at: `http://localhost:5173`
   - Server runs at: `http://localhost:5000`

---

## 🔒 Security Architecture
- Server-side authoritative evaluation: answer keys are never sent to the client during an active test.
- Server-enforced deadline timestamps.
- HTTP-only same-site cookies protecting session credentials.
- Role-based access control protecting student, teacher, and admin endpoints.
