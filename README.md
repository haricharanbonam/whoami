# 🔍 IPeek - Your Digital Footprint Analyzer

**Live Demo:** [https://whoami-0gjx.onrender.com/](https://whoami-0gjx.onrender.com/)

---

## 📖 About The Project

IPeek is a powerful web application that reveals comprehensive information about your digital footprint. It analyzes and displays detailed information about your IP address, location, browser, system configuration, display settings, network details, and more - all in a beautiful, user-friendly interface.

Whether you're a developer testing different environments, a security enthusiast, or simply curious about what information your browser reveals, IPeek provides instant insights into your digital presence.

---

## ✨ Features

### 🌍 Location Information
- **IP Address Detection** - Displays your public IP address
- **Geographic Location** - Shows country, region, and city
- **Timezone** - Your current timezone information

### 💻 Browser Details
- **Browser Identification** - Name and version of your browser
- **Rendering Engine** - The engine powering your browser (e.g., Blink, Gecko)
- **Language Settings** - Your browser's language preferences

### 🖥️ System Information
- **Operating System** - OS name and version
- **Device Type** - Desktop, mobile, tablet, or other device types
- **Device Model** - Specific device model information (when available)

### 📱 Display Specifications
- **Screen Resolution** - Your display's width and height
- **Pixel Ratio** - Device pixel ratio for high-DPI displays
- **Color Depth** - Color depth in bits
- **Touchscreen Detection** - Whether your device has touch capabilities

### ⚡ Connection Status
- **Online/Offline Status** - Real-time connection monitoring
- **Battery Information** - Battery level and charging status
- **Theme Preference** - Light or Dark mode detection
- **Live Clock** - Current time with automatic updates

### 🔒 Network Information
- **Protocol** - HTTP or HTTPS
- **Host Information** - Server host details
- **Connection Type** - Network connection type (4g, 3g, wifi, etc.)
- **Downlink Speed** - Estimated download speed in Mbps

---

## 🛠️ Technologies Used

- **Backend:**
  - [Node.js](https://nodejs.org/) - JavaScript runtime
  - [Express.js](https://expressjs.com/) - Web application framework
  - [GeoIP-Lite](https://github.com/geoip-lite/node-geoip) - IP geolocation
  - [UA-Parser-JS](https://github.com/faisalman/ua-parser-js) - User agent parsing

- **Frontend:**
  - HTML5
  - CSS3 (with modern animations and gradients)
  - Vanilla JavaScript
  - Browser APIs (Battery API, Network Information API)

---

### 🏠  MAIN PAGE

![PAGE](http://github.com/haricharanbonam/whoami/raw/main/public/picture.png)

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/haricharanbonam/whoami.git
   cd whoami
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   node server.js
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:4000
   ```

---

## 📱 Usage

Simply visit the application URL in any web browser, and IPeek will automatically:
- Detect your IP address
- Analyze your browser and system information
- Display your network and connection details
- Show real-time status updates

No configuration or user input required!

---

## 🔌 API Endpoints

### GET `/api/info`
Returns server-side detected client information in JSON format.

**Response Example:**
```json
{
  "ip": "157.50.88.199",
  "geo": {
    "country": "IN",
    "region": "KA",
    "city": "Bangalore",
    "timezone": "Asia/Calcutta"
  },
  "browser": {
    "name": "Chrome",
    "version": "142.0.0.0"
  },
  "os": {
    "name": "Windows",
    "version": "10"
  },
  "device": {
    "type": "unknown",
    "model": "unknown"
  },
  "engine": "Blink",
  "headers": {
    "language": "en-US",
    "encoding": "gzip, deflate, br",
    "host": "whoami-0gjx.onrender.com",
    "protocol": "https",
    "userAgent": "Mozilla/5.0..."
  },
  "timestamp": "2024-11-24T11:39:28.711Z"
}
```

**Note:** Additional client-side features (battery status, connection type, downlink speed, theme preference, etc.) are detected using browser APIs and combined with server data in the frontend.

---

## 🎨 Features Showcase

The application provides a clean, modern interface with:
- **Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Engaging fade-in effects
- **Real-time Updates** - Live clock and status monitoring
- **Dark Theme** - Beautiful gradient background
- **Hover Effects** - Interactive card animations
- **Loading States** - Elegant loading spinner

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available for personal and educational use.

---

## 👤 Author

**Haricharan Bonam**

- GitHub: [@haricharanbonam](https://github.com/haricharanbonam)
- Project Link: [https://github.com/haricharanbonam/whoami](https://github.com/haricharanbonam/whoami)
- Live Demo: [https://whoami-0gjx.onrender.com/](https://whoami-0gjx.onrender.com/)

---

## 🙏 Acknowledgments

- Thanks to all the open-source libraries that made this project possible
- Inspired by the need for a comprehensive digital footprint analyzer
- Built with ❤️ for the developer community

---

<div align="center">

**IPeek - Your Digital Footprint Analyzer © 2024**

*Discover what your browser reveals about you*

</div>
