import DeviceType from './DeviceType';
import DeviceOS from './DeviceOS';
import Devices from './Devices';
import BrowserName from './BrowserName';


/**
 * Device Detection
 * @property {{deviceType:string, browserName:string, browserVersion:number, osVersion:string, osName:string, aspectRatio:number}}
 */
class DeviceDetection {

	/**
	 * @constructor
	 */
	constructor() {
		this.device = {
			deviceType:'',
			browserName:'',
			browserVersion:0,
			osVersion:'',
			osName:'',
			aspectRatio:-1,
		};
		this._detect();
	}

	/**
	 * Detect OS, Browser and Device Type
	 */
	_detect = () => {
		// Device OS
		this._detectOS();
		// Browser Name
		this._detectBrowser();
		// Aspect Ratio
		this._detectAspectRatio();
		// Device Type
		this._detectDeviceType();
	};

	/**
	 * Util for finding Matches
	 * @param rules
	 * @param userAgent
	 * @returns {*}
	 * @private
	 */
	_findMatch = (rules, userAgent) => {
		for (let key in rules) {
			if (Object.prototype.hasOwnProperty.call(rules, key)) {
				if (rules[key].test(userAgent)) {
					return key;
				}
			}
		}
		return null;
	};

	/**
	 * Convert Properties To Regular Expressions
	 * @param object
	 * @returns {*}
	 * @private
	 */
	_convertPropsToRegExp = (object) => {
		for (let key in object) {
			if (Object.prototype.hasOwnProperty.call(object, key)) {
				object[key] = new RegExp(object[key], 'i');
			}
		}
		return object;
	};

	/**F
	 * Detect Device Type
	 * @private
	 */
	_detectDeviceType = () => {
		const nAgent = navigator.userAgent;

		const mobiles = this._convertPropsToRegExp(Devices.MOBILES);
		const tablets = this._convertPropsToRegExp(Devices.TABLETS);

		const isMobile = this._findMatch(mobiles, nAgent) !== null;
		const isTablet = this._findMatch(tablets, nAgent) !== null;


		let deviceType = isMobile ? DeviceType.MOBILE : isTablet ? DeviceType.TABLET : DeviceType.DESKTOP;

		if (deviceType === DeviceType.DESKTOP) {
			switch (this.device.osName) {
				case DeviceOS.ANDROID:
				case DeviceOS.IOS:
				case DeviceOS.WINDOWS_MOBILE:
					// This isn't a desktop
					deviceType = DeviceType.MOBILE;
					break;
			}
		}

		this.device.deviceType = deviceType;
	};

	/**
	 * Detect OS
	 * @private
	 */
	_detectOS = () => {
		const nVersion = navigator.appVersion;
		const nAgent = navigator.userAgent;
		let osName = '';
		let osVersion;
		const clientStrings = [
			{ s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
			{ s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
			{ s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
			{ s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
			{ s: 'Windows Vista', r: /Windows NT 6.0/ },
			{ s: 'Windows Server 2003', r: /Windows NT 5.2/ },
			{ s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
			{ s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
			{ s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
			{ s: 'Windows 98', r: /(Windows 98|Win98)/ },
			{ s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
			{ s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
			{ s: 'Windows CE', r: /Windows CE/ },
			{ s: 'Windows 3.11', r: /Win16/ },
			{ s: DeviceOS.WINDOWS_MOBILE, r: /Windows Phone/ },
			{ s: DeviceOS.ANDROID, r: /Android/ },
			{ s: DeviceOS.OPEN_BSD, r: /OpenBSD/ },
			{ s: DeviceOS.SUN_OS, r: /SunOS/ },
			{ s: DeviceOS.LINUX, r: /(Linux|X11)/ },
			{ s: DeviceOS.IOS, r: /(iPhone|iPad|iPod)/ },
			{ s: DeviceOS.MAC_OSX, r: /Mac OS X/ },
			{ s: DeviceOS.MAC_OS, r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
			{ s: DeviceOS.QNX, r: /QNX/ },
			{ s: DeviceOS.UNIX, r: /UNIX/ },
			{ s: DeviceOS.BeOS, r: /BeOS/ },
			{ s: DeviceOS.OS2, r: /OS\/2/ },
			{ s: DeviceOS.SEARCH_BOT, r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
		];
		for (let id in clientStrings) {
			let cs = clientStrings[id];
			if (cs.r.test(nAgent)) {
				osName = cs.s;
				break;
			}
		}

		if (osName !== DeviceOS.WINDOWS_MOBILE && /Windows/.test(osName)) {
			osVersion = /Windows (.*)/.exec(osName)[1];
			osName = DeviceOS.WINDOWS;
		}

		switch (osName) {
			case DeviceOS.MAC_OSX:
				osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgent)[1];
				break;

			case DeviceOS.ANDROID:
				osVersion = /Android ([\.\_\d]+)/.exec(nAgent)[1];
				break;

			case DeviceOS.IOS:
				osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVersion);
				osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
				break;
		}

		this.device.osName = osName;
		this.device.osVersion = osVersion;
	};

	/**
	 * Detect Browser
	 * @private
	 */
	_detectBrowser = () => {
		let browserVersion;
		let browserName = navigator.appName;
		let userAgent = navigator.userAgent;
		let fullVersion = '' + parseFloat(navigator.appVersion);
		let nameOffset, verOffset, ix;

		// In Opera, the true version is after 'Opera' or after 'Version'
		if ((verOffset = userAgent.indexOf('Opera')) !== -1) {
			browserName = BrowserName.OPERA;
			fullVersion = userAgent.substring(verOffset + 6);
			if ((verOffset = userAgent.indexOf('Version')) !== -1) fullVersion = userAgent.substring(verOffset + 8);
		}



		if(this._detectIE()){
			browserName = BrowserName.INTERNET_EXPLORER;
			fullVersion = ''+this._detectIE();
		}
		/*
		 // In MSIE, the true version is after 'MSIE' in userAgent
		 else if ((verOffset = userAgent.indexOf('MSIE')) !== -1) {
		 browserName = BrowserName.INTERNET_EXPLORER;
		 fullVersion = userAgent.substring(verOffset + 5);
		 }
		 */

		// In Chrome, the true version is after 'Chrome'
		else if ((verOffset = userAgent.indexOf('Chrome')) !== -1) {
			browserName = BrowserName.CHROME;
			fullVersion = userAgent.substring(verOffset + 7);
		}

		// In Safari, the true version is after 'Safari' or after 'Version'
		else if ((verOffset = userAgent.indexOf('Safari')) !== -1) {
			browserName = BrowserName.SAFARI;
			fullVersion = userAgent.substring(verOffset + 7);
			if ((verOffset = userAgent.indexOf('Version')) !== -1) fullVersion = userAgent.substring(verOffset + 8);
		}

		// In Firefox, the true version is after 'Firefox'
		else if ((verOffset = userAgent.indexOf('Firefox')) !== -1) {
			browserName = BrowserName.FIREFOX;
			fullVersion = userAgent.substring(verOffset + 8);
		}

		// In most other browsers, 'name/version' is at the end of userAgent
		else if ((nameOffset = userAgent.lastIndexOf(' ') + 1) < (verOffset = userAgent.lastIndexOf('/'))) {
			browserName = userAgent.substring(nameOffset, verOffset);
			fullVersion = userAgent.substring(verOffset + 1);
			if (browserName.toLowerCase() === browserName.toUpperCase()) {
				browserName = navigator.appName;
			}
		}

		// trim the fullVersion string at semicolon/space if present
		if ((ix = fullVersion.indexOf(';')) !== -1) fullVersion = fullVersion.substring(0, ix);
		if ((ix = fullVersion.indexOf(' ')) !== -1) fullVersion = fullVersion.substring(0, ix);

		browserVersion = parseInt('' + fullVersion, 10);
		if (isNaN(browserVersion)) {
			fullVersion = '' + parseFloat(navigator.appVersion);
			browserVersion = parseInt(navigator.appVersion, 10);
		}

		this.device.browserName = browserName;
		this.device.browserVersion = browserVersion;
	};

	/**
	 * Detect what the aspect ratio is in landscape mode
	 * @private
	 */
	_detectAspectRatio = () => {
		const width = Math.max(window.screen.availWidth, window.screen.availHeight);
		const height = Math.min(window.screen.availWidth, window.screen.availHeight);
		this.device.aspectRatio = width / height;
	};

	_detectIE = () => {
		const ua = navigator.userAgent;

		// Test values; Uncomment to check result …

		// IE 10
		// ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

		// IE 11
		// ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

		// Edge 12 (Spartan)
		// ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

		// Edge 13
		// ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

		let msie = ua.indexOf('MSIE ');
		if (msie > 0) {
			// IE 10 or older => return version number
			return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		}

		let trident = ua.indexOf('Trident/');
		if (trident > 0) {
			// IE 11 => return version number
			const rv = ua.indexOf('rv:');
			return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		}

		let edge = ua.indexOf('Edge/');
		if (edge > 0) {
			// Edge (IE 12+) => return version number
			return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		}
		return null;
	}
}

/**
 * Device
 * @type {{deviceType:string, browserName:string, browserVersion:number, osVersion:string, osName:string, aspectRatio:number}}
 */
const device = new DeviceDetection().device;

export default device;
