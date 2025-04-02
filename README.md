# IROC_WEB_INTERFACE

## 🚀 Project Overview
**IROC_WEB_INTERFACE** is an advanced web-based telemetry and monitoring system for real-time MAVLink data visualization. It is designed to interface with UAVs using Jetson and Pixhawk, leveraging MAVROS and MAVLink for robust data communication. The system processes real-time telemetry parameters and displays them in an intuitive and professional **space-themed** web UI.

## 🛠 Features
- **Real-time MAVLink telemetry data** visualization.
- **Modular UI** with categorized parameter tables.
- **Live updates** without flickering or repositioning elements.
- **Space-tech-inspired professional UI**.
- **Responsive design** to adapt across devices.
- **Easy setup** with Python, Flask, and JavaScript.

## 📁 Project Structure
```
IROC_WEB_INTERFACE/
│── params/                 # JSON files storing MAVLink data
│── static/
│   ├── css/
│   │   ├── style.css       # Space-themed UI styles
│   ├── js/
│   │   ├── script.js       # Fetches & updates MAVLink data dynamically
│── templates/
│   ├── index.html          # Main dashboard UI
│── listen.py               # Python script to read & store MAVLink data
│── server.py               # Flask backend to serve web app
│── requirements.txt        # Dependencies
│── README.md               # This document
```

## 🔧 Installation & Setup

### 1️⃣ Prerequisites
Ensure you have the following installed:
- **Python 3.8+**
- **Pip** (Python Package Manager)
- **Flask**
- **pymavlink**

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/ArnavBallincode/IROC_WEB_INTERFACE.git
cd IROC_WEB_2
```

### 3️⃣ Install Dependencies
```bash
pip install -r requirements.txt
```

### 4️⃣ Connect to MAVLink Device
Modify `listen.py` to set the correct **serial port** and **baud rate** for your MAVLink connection:
```python
master = mavutil.mavlink_connection('/dev/ttyUSB0', baud=57600)
```
> 🔹 Replace `/dev/ttyUSB0` with the correct port for **Jetson/Pixhawk**.

### 5️⃣ Run the MAVLink Listener
This script continuously listens for MAVLink messages and updates JSON files.
```bash
python listen.py
```

### 6️⃣ Start the Web Server
```bash
python server.py
```

### 7️⃣ Access the Dashboard
Open a browser and go to:
```
http://127.0.0.1:5000
```

---

## 🎯 How It Works
1. `listen.py` **receives telemetry data** from the UAV via MAVLink.
2. **Extracted data** is stored as JSON files in `/params/`.
3. `server.py` **serves** the web interface using Flask.
4. `script.js` **fetches and updates** data dynamically without page reloads.
5. **Styled UI** displays real-time telemetry with a futuristic look.

## 🔗 Previous Versions
This project builds upon previous iterations:
- **[ISRO_IROC_Web](https://github.com/ArnavBallincode/ISRO_IROC_Web)** - Initial implementation.
- **[ISRO_IROC_Webinterface](https://github.com/ArnavBallinCode/ISRO_IROC_Webinterface)** - Earlier UI and backend refinements.

## 🚀 Future Enhancements
- **WebSocket implementation** for even faster updates.
- **Graphical data representation** (charts & graphs).
- **Mobile-friendly version**.

## 🛠 Troubleshooting
| Issue | Solution |
|--------|----------|
| Webpage not loading | Ensure Flask is running (`python server.py`). |
| No MAVLink data | Check serial port settings in `listen.py`. |
| Data not updating | Ensure `listen.py` is running. |

---

🔥 **IROC_WEB_2 brings real-time UAV telemetry to the web with a professional, futuristic interface. Enjoy seamless monitoring!**




