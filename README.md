## Deployment Status
Deployment is currently in progress due to configuration issues. 
The application works as expected in local development.

## Demo Video

https://github.com/user-attachments/assets/2f387932-de58-43ae-bc82-1bbd16d08b0b

# School Canteen – Frontend Prototype

## ✨ Features Implemented

- Snacks listing with price and order count
- Students listing
- Create new student form with validation
- Place snack orders for students
- Track total amount spent by each student
- Global state management using React Context
- Loading and error handling
- Responsive UI

---

## 🛠 Tech Stack & Libraries Used

### Core
- **React** (with Vite)
- **TypeScript**

### Styling
- **Tailwind CSS**
- **shadcn/ui** (for reusable UI components)

### Forms & Validation
- **React Hook Form**
- **Zod**

### API / Mock Backend
- **MockAPI.io** (for students and orders)

### Other
- React Router (for routing)
- Context API (for global state management)

---

## Architecture & Approach

- **React Context** is used for global data such as students, snacks, and orders.
- **Local component state** is used for UI-specific logic like modals and form inputs.
- Snacks are treated as reference data, while students and orders are managed via API calls.
- Order placement updates:
  - Orders list
  - Student total spent
  - Snack order count (popularity indicator)

This approach keeps the implementation simple and focused on frontend behavior.

---

## Mock API Usage

MockAPI.io is used to simulate real REST APIs:

- `GET /students`
- `POST /students`
- `POST /orders`

This helps demonstrate real-world API integration, loading states, and error handling.

---

## Setup Instructions

1. Clone the repository
   ```bash
   git clone https://github.com/Mkcodes-in/school-canteen.git
