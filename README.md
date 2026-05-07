# Thai Drive Secure Hub

**Thai Drive Secure Hub** is a modern, responsive administrative web application designed to streamline the processing, management, and approval of vehicle insurance applications. It provides a robust dashboard for managing customer applications, automating document parsing via Google Document AI, and securely handling insurance workflows.

## 🚀 Key Features

*   **Insurance Management Dashboard**: A centralized administrative panel to track and manage all user insurance applications with real-time KPI metrics.
*   **Automated Document Parsing**: Integration with Google Document AI for highly accurate, automated data extraction from user-uploaded passports and vehicle grants.
*   **Dynamic Pricing Tiers**: Supports flexible pricing models including Compulsory, Voluntary, and Voluntary Plus packages based on duration.
*   **Application Lifecycle Workflow**: Seamlessly handles state transitions for applications (Pending -> Payment Verified -> Approved/Rejected -> Document Generation -> Completed).
*   **Secure Payment Verification**: Restricts policy generation until payment confirmation is manually or systematically verified.
*   **Beautiful UI/UX**: Built using modern design principles with Shadcn UI and Tailwind CSS for a premium, accessible, and responsive user experience.

## 🛠️ Technology Stack

This project is built using a modern frontend ecosystem:

*   **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
*   **State Management/Data Fetching**: [TanStack React Query](https://tanstack.com/query/latest)
*   **Routing**: [React Router v6](https://reactrouter.com/)
*   **Backend & Database**: [Firebase](https://firebase.google.com/) (Firestore)
*   **AI Integration**: Google Cloud Document AI

## 📦 Installation & Setup

To run this project locally, you will need [Node.js](https://nodejs.org/) installed on your machine.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/intis2ar-ux/thaidrivesecure-Website.git
   cd thaidrivesecure-Website
