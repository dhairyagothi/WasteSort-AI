# Suchita: Sustainable Urban Classification Hub Integrated with Technology and AI

## Overview

Suchita is an AI-powered, multilingual web platform designed for citizens and municipalities to streamline waste management. The platform uses AI to enable waste segregation at the point of collection and automates data logging for efficient management. It is built to improve recycling rates by helping to classify and sort waste more accurately.

## Key Features

### For Citizens
- **AI Verification**: Upload images for AI-powered waste sorting verification
- **Educational Resources**: Access tutorials and guides on proper waste segregation
- **Pickup Tracking**: Real-time GPS tracking of waste collection vehicles
- **Issue Reporting**: Submit complaints and feedback with tracking capabilities
- **Multilingual Support**: Platform available in multiple languages

### For Municipalities
- **Centralized Dashboard**: Interactive dashboard for real-time operations management
- **Route Optimization**: AI-driven route optimization for waste collection vehicles
- **Automated Data Logging**: Automated capture and recording of waste collection data
- **Real-time Monitoring**: Area-wise reports and vehicle tracking
- **Complaint Management**: Centralized system for handling citizen complaints

## Technology Stack

- **Frontend**: React.js with Tailwind CSS
- **Backend**: Node.js
- **Database**: MongoDB
- **AI/ML**: TensorFlow, PyTorch, OpenCV, scikit-learn
- **Hosting**: Google Cloud Platform

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dhairyagothi/WasteSort-AI.git
   cd WasteSort-AI/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
├── contexts/           # React contexts (theme, language)
├── hooks/              # Custom React hooks
├── layouts/            # Layout components (header, footer, sidebar)
├── routes/             # Page components organized by feature
│   ├── Account/        # User authentication and profile
│   ├── dashboard/      # Main dashboard and progress tracking
│   ├── Waste-Collection/   # Collection scheduling and tracking
│   ├── Sorting-guides/ # AI verification and tutorials
│   ├── notification/   # Alerts and messages
│   ├── Complaints-Feedback/    # Issue reporting and tracking
│   ├── Reports/        # Personal reports and pickup history
│   └── Help/           # Contact and FAQ
├── utils/              # Utility functions
└── assets/             # Static assets (images, icons)
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact the development team or visit our [documentation](link-to-docs).
