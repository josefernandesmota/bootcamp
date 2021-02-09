import axios from 'axios';

const api = axios.create({
    baseURL: '10.0.2.2',
});

export default api;

/**
 * Android com Emulador: localhost (adb reverse)
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com Emulador: 10.0.3.2 (Genymotion)
 * Android com físico: IP da máquina
 */