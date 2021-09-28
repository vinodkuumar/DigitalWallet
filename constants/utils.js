/* eslint-disable */
import {
    Dimensions,
    PermissionsAndroid,
    Platform,
    NativeModules,
  } from 'react-native';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
//   import DeviceInfo from 'react-native-device-info';
//   import Config from 'react-native-config';
//   import ImagePicker from 'react-native-image-crop-picker';
//   import ImageResizer from 'react-native-image-resizer';
//   import ReactMoE from 'react-native-moengage';
//   import crashlytics from '@react-native-firebase/crashlytics';
  
//   // import  { GALLERY_PICK, CAMERA_PICK } from '../components/common/Picker';
//   import { Days, Months, SubjectColor } from '../assets/constants';
//   import colors from '../assets/colors';
//   import Toast from '../assets/Toast';
//   import {
//     welcomeImage1,
//     welcomeImage2,
//     welcomeImage3,
//     welcomeImage4,
//     welcomeImage5,
//     welcomeImage6,
//     welcomeImage7,
//     welcomeImage8,
//     welcomeImage9,
//     welcomeImage10,
//   } from '../assets/images';
//   import Instabug from 'instabug-reactnative';
//   import RNUxcam from 'react-native-ux-cam';
//   import RNApxorSDK from 'react-native-apxor-sdk';
  
//   const welcomeImages = [
//     welcomeImage1,
//     welcomeImage2,
//     welcomeImage3,
//     welcomeImage4,
//     welcomeImage5,
//     welcomeImage6,
//     welcomeImage7,
//     welcomeImage8,
//     welcomeImage9,
//     welcomeImage10,
//   ];
//   const window = {
//     location: {
//       protocol: 'https:',
//     },
//   };
  
//   function count(obj) {
//     return Object.keys(obj).length;
//   }
  // export function formPlatformDomain() {
  //     if (typeof config === "undefined") {
  //         return "";
  //     }
  //     let pConf = config.platform.notification;
  //     let url = window.location.protocol + "//" + pConf.domain;
  //     if (!!pConf.port) {
  //         url = url + ":" + pConf.port;
  //     }
  //     return url;
  // };
//   export function amplifyEvents(cb, count) {
//     for (let i = 0; i < count; i++) {
//       cb();
//     }
//   }
//   export function parseClickStreamObject(obj) {
//     const newObj = {};
    // const length = Object.keys(obj).length;
    // if (length > 0 && length <= 2) {
    //   newObj[obj.key1] = obj.value1;
    //   return newObj;
    // } else if (length > 2 && length <= 4) {
    //   newObj[obj.key1] = obj.value1;
    //   newObj[obj.key2] = obj.value2;
    //   return newObj;
    // } else if (length > 4 && length <= 6) {
    //   newObj[obj.key1] = obj.value1;
    //   newObj[obj.key2] = obj.value2;
    //   newObj[obj.key3] = obj.value3;
    //   return newObj;
    // }
    // return obj;
  
//     var size = Object.keys(obj).length;
//     for (let index = 1; index <= size / 2; index++) {
//       newObj[obj['key' + index]] = obj['value' + index];
//     }
  
//     return newObj;
//   }
  
  const { width } = Dimensions.get('window');
  
  // based on iphone 5s's scale
  // const scale = width / 340;
  
  // export function normalize(size) {
  //     const newSize = size * scale;
  //     if (Platform.OS === 'ios') {
  //         return Math.round(PixelRatio.roundToNearestPixel(newSize));
  //     }
  //     return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  // }
  // const scale = PixelRatio.getFontScale();
  const scale = (size) => (width / 340) * size;
  export const normalize = (size, factor = 0.15) =>
    size + (scale(size) - size) * factor;
  
//   export function formSubSystemPath(subsystem, path) {
//     if (typeof Config === 'undefined') {
//       return '';
//     }
//     const pConf = Config[`${subsystem.toUpperCase()}_DOMAIN`];
//     if (pConf) {
//       let url = `${window.location.protocol}//${pConf}`;
//       url += path;
//       console.log('@url', url);
//       return url;
//     }
//   }
//   export function getChatPath() {
//     return `${Config.DOUBTS_SERVER_URL}:${Config.CHAT_PORT}`;
//   }
//   export function formPlatformPath(path) {
//     return `/platform${path}`;
//   }
  
//   export function formGrowthPath(path) {
//     return `/growth${path}`;
//   }
  
//   export function formLMSDomain() {
//     if (typeof Config === 'undefined') {
//       return '';
//     }
//     const url = `${window.location.protocol}//${Config.LMS_DOMAIN}`;
//     return url;
//   }
  
//   export function formLMSPath(path) {
//     return `/lms${path}`;
//   }
  
//   export function formWithOutPlatform(path) {
//     return `/${path}`;
//   }
  
//   export function formPlatformUrl(path) {
//     const url = Config.PLATFORM_URL + formPlatformPath(path);
//     return url;
//   }
  
//   export function formGrowthUrl(path) {
//     const url = Config.GROWTH_URL + formGrowthPath(path);
//     return url;
//   }
  
//   export function formMobileUrl(path) {
//     const url = Config.HOST_TO_USE + formWithOutPlatform(path);
//     return url;
//   }
  
//   export function formLMSUrl(path) {
//     const url = formLMSDomain() + path;
//     return url;
//   }
  
//   export function truncateHostFromUrl(url) {
//     const urlComponents = url.replace(/https?:\/\//i, '').split('/');
//     urlComponents.shift();
//     return urlComponents.join('/');
//   }
  
//   export function updateQueryStringParameter(uri, key, value) {
//     const re = new RegExp(`([?&])${key}=.*?(&|$)`, 'i');
//     const separator = uri.indexOf('?') !== -1 ? '&' : '?';
//     if (uri.match(re)) {
//       return uri.replace(re, `$1${key}=${value}$2`);
//     }
  
//     return `${uri + separator + key}=${value}`;
//   }
//   export function sorterForArrayWithNumbersAsStrings(a, b) {
//     if (parseInt(a) > parseInt(b)) {
//       return 1;
//     }
//     if (parseInt(a) < parseInt(b)) {
//       return -1;
//     }
//     // a must be equal to b
//     return 0;
//   }
  
//   export const digitPercisionString = function (digit, point) {
//     digit = digit.toString();
//     if (digit.length < point) {
//       let pre = '';
//       for (let i = digit.length; i < point; i++) {
//         pre += '0';
//       }
//       digit = pre + digit;
//     } else if (digit.length > point) {
//       digit = parseFloat(digit).toPrecision(point);
//     }
//     return digit;
//   };
  
//   Date.locale = {
//     en: {
//       month_names: [
//         'January',
//         'February',
//         'March',
//         'April',
//         'May',
//         'June',
//         'July',
//         'August',
//         'September',
//         'October',
//         'November',
//         'December',
//       ],
//       month_names_short: [
//         'Jan',
//         'Feb',
//         'Mar',
//         'Apr',
//         'May',
//         'Jun',
//         'Jul',
//         'Aug',
//         'Sep',
//         'Oct',
//         'Nov',
//         'Dec',
//       ],
//     },
//   };
  
//   export const getOrdinal = function (number, appendWithNumber) {
//     appendWithNumber =
//       typeof appendWithNumber !== 'undefined' ? appendWithNumber : true;
//     let s = ['th', 'st', 'nd', 'rd'],
//       v = number % 100;
//     return (appendWithNumber ? number : '') + (s[(v - 20) % 10] || s[v] || s[0]);
//   };
  
//   Date.prototype.addDays = function (days) {
//     var date = new Date(this.valueOf());
//     date.setDate(date.getDate() + days);
//     return date;
//   };
  
//   export const parseFormatDate = function (dateTime, lang) {
//     lang = lang || 'en';
//     dateTime = parseInt(dateTime, 10);
//     if (!dateTime || dateTime < 0) {
//       return;
//     }
//     const obj = {};
//     // DD/MM/YYYY HH:min TT
//     const date = new Date(dateTime);
//     obj.dd = date.getDate();
//     obj.dayLong = Days.longForm[date.getDay()];
//     obj.dayShort = Days.shortForm[date.getDay()];
//     obj.ord = getOrdinal(date.getDate(), false);
//     obj.MM = Date.locale[lang].month_names[date.getMonth()];
//     obj.mmm = Date.locale[lang].month_names_short[date.getMonth()];
//     obj.mm = digitPercisionString(date.getMonth() + 1, 2);
//     obj.yyyy = date.getFullYear();
//     obj.yy = date.getFullYear().toString().substr(2);
//     obj.hrs = date.getHours();
//     obj.hrh = date.getHours() === 12 ? 12 : date.getHours() % 12;
//     obj.hrhampm =
//       date.getHours() === 12 || date.getHours() === 0 ? 12 : date.getHours() % 12;
//     obj.min = digitPercisionString(date.getMinutes(), 2);
//     obj.sec = digitPercisionString(date.getSeconds(), 2);
//     obj.mdn = date.getHours() >= 12 ? 'PM' : 'AM';
//     obj.mdns = date.getHours() >= 12 ? 'pm' : 'am';
//     return obj;
//   };
  
//   export function formatDate(dateTime, format, lang) {
//     const data = parseFormatDate(dateTime, lang);
//     if (data) {
//       Object.keys(data).map((value, key) => {
//         format = format.replace(value, data[value]);
//       });
//       return format;
//     }
//     return '';
//   }
  
//   export function formatDateWithDoubleDigit(dateTime, format, lang) {
//     const data = parseFormatDate(dateTime, lang);
//     if (data) {
//       if (data.dd && data.dd < 10) {
//         data.dd = '0' + data.dd
//       }
//       Object.keys(data).map((value, key) => {
//         format = format.replace(value, data[value]);
//       });
//       return format;
//     }
//     return '';
//   }
  
//   export function startOfDay(time) {
//     const date = new Date(time);
//     return date.setHours(0, 0, 0, 0);
//   }
  
//   export function serializeParams(obj) {
//     const str = [];
//     for (const p in obj) {
//       if (obj.hasOwnProperty(p)) {
//         str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
//       }
//     }
//     return str.join('&');
//   }
  
//   export function shortMonthDate(dateTime, lang = 'en') {
//     // const obj = parseFormatDate(millis);
//     dateTime = parseInt(dateTime, 10);
//     if (!dateTime || dateTime < 0) {
//       return;
//     }
//     const obj = {};
//     const date = new Date(dateTime);
//     obj.dd = date.getDate();
//     obj.mmm = Date.locale[lang].month_names_short[date.getMonth()];
//     return `${obj.dd} ${obj.mmm}`;
//   }
  
//   export function displayDuration(millisec, source = false) {
//     // const normalizeTime = (time) => (time.length === 1) ? time.padStart(2, '0') : time;
//     const normalizeTime = (time) => time;
//     let seconds = (millisec / 1000).toFixed(0);
//     let minutes = Math.floor(parseInt(seconds) / 60).toString();
//     let hours = '';
//     const days = '';
//     if (parseInt(minutes) > 59) {
//       // days = normalizeTime(Math.floor(parseInt(minutes) / (60 *24)).toString());
//       hours = normalizeTime(Math.floor(parseInt(minutes) / 60).toString());
//       minutes = normalizeTime(
//         (parseInt(minutes) - parseInt(hours) * 60).toString(),
//       );
//     }
//     seconds = normalizeTime(Math.floor(parseInt(seconds) % 60).toString());
//     // if(days !== '' && days!=='0'){
//     //     if(hours !== '' && hours!=='0' && minutes !== '' && minutes!=='0'){
//     //         return `${days} days ${hours} hours ${minutes} mins`;
//     //     }
//     //     else if(hours !== '' && hours!=='0'){
//     //         return `${days} days ${hours} hours`;
//     //     }
//     //     else{
//     //         return `${days} days`;
//     //     }
//     // }
//     let hoursLabel = hours > 1 ? 'hrs' : 'hr';
  
//     if (source) {
//       hoursLabel = hours > 1 ? 'hours' : 'hour';
//     }
  
//     if (hours !== '' && hours !== '0') {
//       if (minutes !== '' && minutes !== '0') {
//         return `${hours} ${hoursLabel} ${minutes} min`;
//       }
  
//       return `${hours} ${hoursLabel}`;
//     }
//     return `${minutes} min`;
//   }
//   export function getActionStates(actionName = '') {
//     if (typeof actionName !== 'string') {
//       throw new Error('actionName must be a string');
//     }
//     const actionNameUpper = actionName.toUpperCase();
//     const inProgress = `FETCHING_${actionNameUpper}`;
//     const success = `FETCH_${actionNameUpper}_SUCCESS`;
//     const failure = `FETCH_${actionNameUpper}_ERRORED`;
//     const clear = `CLEAR_${actionNameUpper}`;
  
//     return {
//       inProgress,
//       success,
//       failure,
//       clear,
//     };
//   }
//   export function numberFormatter(num) {
//     num = parseInt(num);
//     let isNegative = false;
//     if (num < 0) {
//       isNegative = true;
//     }
//     num = Math.abs(num);
//     let formattedNumber = '';
//     if (num >= 1000000000) {
//       formattedNumber = `${(num / 1000000000).toFixed(1).replace(/\.0$/, '')}B`;
//     } else if (num >= 1000000) {
//       formattedNumber = `${(num / 1000000).toFixed(1).replace(/\.0$/, '')}M`;
//     } else if (num >= 1000) {
//       formattedNumber = `${(num / 1000).toFixed(1).replace(/\.0$/, '')}K`;
//     } else {
//       formattedNumber = num;
//     }
//     if (isNegative) {
//       formattedNumber = `-${formattedNumber}`;
//     }
//     return formattedNumber;
//   }
//   export function isEmpty(obj) {
//     // console.log(typeof(obj));
//     if (obj !== null && obj !== undefined) {
//       // for general objects
//       if (typeof obj === 'string') {
//         if (obj.trim() === '' || obj == 'null') {
//           // for string
//           return true;
//         }
  
//         return false;
//       } else if (obj.length <= 0) {
//         // for array
//         return true;
//       } else if (typeof obj === 'object') {
//         const keys = Object.keys(obj);
//         const len = keys.length;
//         if (len <= 0) {
//           return true;
//         }
//         return false;
//       }
//       return false;
//     }
  
//     return true;
//   }
//   export function immutableToJS(obj) {
//     if (typeof obj === 'object' && obj !== null && obj !== undefined) {
//       return obj.toJS();
//     }
//     return obj;
//   }
//   export function imageName(path) {
//     const arrayOfPath = path.split('/');
//     const arrayLenght = arrayOfPath.length;
//     const name = arrayOfPath[arrayLenght - 1];
//     return name;
//   }
  
//   export const isValidEmail = (text) => {
//     const reg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;
//     if (reg.test(text) === false) {
//       return false;
//     }
//     return true;
//   };
  
//   export const isValidPhone = (text) => {
//     const phoneno = /^[0-9]{6,14}$/;
//     if (phoneno.test(text) === false) {
//       return false;
//     }
//     return true;
//   };
  
//   export const isValidPassword = (text) => {
//     const isPasswordIncorrect = text.length < 5;
//     if (isPasswordIncorrect) {
//       return false;
//     }
//     return true;
//   };
//   export function removeSpaces(val) {
//     if (typeof val === 'string') {
//       return val.trim();
//     }
//     return val;
//   }
//   export async function resize(uri) {
//     // console.log(uri);
//     const temp = await ImageResizer.createResizedImage(uri, 480, 480, 'JPEG', 80);
//     return temp;
//   }
//   async function requestGalleryPermission(cropHeader) {
//     try {
//       const granted = await PermissionsAndroid.check(
//         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         return await ImagePicker.openPicker({
//           mediaType: 'photo',
//           multiple: false,
//           cropping: true,
//           height: 720,
//           width: 1440,
//           cropperToolbarTitle: cropHeader || 'Crop Image',
//           freeStyleCropEnabled: true,
//           includeBase64: true,
//           cropperActiveWidgetColor: colors.themeColor,
//           cropperStatusBarColor: colors.themeColor,
//           cropperToolbarColor: colors.themeColor,
//           hideBottomControls: true,
//         });
//       }
//       const granted1 = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//       );
//       if (granted1 === PermissionsAndroid.RESULTS.GRANTED) {
//         return await ImagePicker.openPicker({
//           mediaType: 'photo',
//           multiple: false,
//           cropping: true,
//           height: 720,
//           width: 1440,
//           cropperToolbarTitle: cropHeader || 'Crop Image',
//           freeStyleCropEnabled: true,
//           includeBase64: true,
//           cropperActiveWidgetColor: colors.themeColor,
//           cropperStatusBarColor: colors.themeColor,
//           cropperToolbarColor: colors.themeColor,
//           hideBottomControls: true,
//         });
//       } else if (granted1 === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
//         Toast.show(
//           'Please enable gallery permission for this app from the app settings',
//           Toast.SHORT,
//         );
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }
  
//   async function requestGalleryPermissionIos(cropHeader) {
//     try {
//       return await ImagePicker.openPicker({
//         mediaType: 'photo',
//         multiple: false,
//         cropping: true,
//         height: 720,
//         width: 1440,
//         cropperToolbarTitle: cropHeader || 'Crop Image',
//         freeStyleCropEnabled: true,
//         includeBase64: true,
//         cropperActiveWidgetColor: colors.themeColor,
//         cropperStatusBarColor: colors.themeColor,
//         cropperToolbarColor: colors.themeColor,
//         hideBottomControls: true,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }
  
//   export function updateInsert(list, key, item) {
//     if (getIndexOf(list, key, item[key]) === -1) {
//       list.push(item);
//     } else {
//       list[getIndexOf(list, key, item[key])] = item;
//     }
//   }
  
//   export function mergeData(list, key, item) {
//     if (getIndexOf(list, key, item[key]) === -1) {
//       list.push(item);
//     } else {
//       list[getIndexOf(list, key, item[key])] = {
//         ...list[getIndexOf(list, key, item[key])],
//         ...item,
//       };
//     }
//   }
  
//   export function millisecondsToDaysHoursMinSec(millisecond) {
//     const seconds = parseInt((millisecond / 1000) % 60),
//       minutes = parseInt((millisecond / (1000 * 60)) % 60),
//       hours = parseInt((millisecond / (1000 * 60 * 60)) % 24),
//       days = parseInt(millisecond / (1000 * 60 * 60 * 24));
//     return { days, hours, hours, minutes, seconds };
//   }
  
//   export function msToTime(duration) {
//     let seconds = parseInt((duration / 1000) % 60),
//       minutes = parseInt((duration / (1000 * 60)) % 60),
//       hours = parseInt((duration / (1000 * 60 * 60)) % 24),
//       days = parseInt(duration / (1000 * 60 * 60 * 24));
  
//     hours = hours < 10 ? `0${hours}` : hours;
//     minutes = minutes < 10 ? `0${minutes}` : minutes;
//     seconds = seconds < 10 ? `0${seconds}` : seconds;
//     if (hours === '00' && days === 0) {
//       return `${minutes}:${seconds}`;
//     }
//     if (days > 0) {
//       days = days < 10 ? `0${days}` : days;
//       return `${days}:${hours}:${minutes}:${seconds}`;
//     }
//     return `${hours}:${minutes}:${seconds}`;
//   }
  
//   export function msToDays(duration) {
//     let //seconds = parseInt((duration / 1000) % 60),
//       //minutes = parseInt((duration / (1000 * 60)) % 60),
//       //hours = parseInt((duration / (1000 * 60 * 60)) % 24),
//       days = parseInt(duration / (1000 * 60 * 60 * 24));
  
//     //hours = (hours < 10) ? `0${hours}` : hours;
//     //minutes = (minutes < 10) ? `0${minutes}` : minutes;
//     //seconds = (seconds < 10) ? `0${seconds}` : seconds;
//     //if (hours === '00' && days === 0) {
//     //  return `${minutes}:${seconds}`;
//     //}
//     if (days > 0) {
//       days = days < 10 ? `0${days}` : days;
//       return `${days}`;
//     }
//     //return `${hours}:${minutes}:${seconds}`;
//   }
  
//   export function msToTimeDays(duration) {
//     let seconds = parseInt((duration / 1000) % 60),
//       minutes = parseInt((duration / (1000 * 60)) % 60),
//       hours = parseInt((duration / (1000 * 60 * 60)) % 24),
//       days = parseInt(duration / (1000 * 60 * 60 * 24));
  
//     hours = hours < 10 ? `0${hours}` : hours;
//     minutes = minutes < 10 ? `0${minutes}` : minutes;
//     seconds = seconds < 10 ? `0${seconds}` : seconds;
//     if (hours === '00' && days === 0) {
//       return 'MM' + ':' + 'SS';
//     }
//     if (days > 0) {
//       days = days < 10 ? `0${days}` : days;
//       return 'DD' + ':' + 'HH' + ':' + 'MM' + ':' + 'SS';
//     }
//     return 'HH' + ':' + 'MM' + ':' + 'SS';
//   }
  
//   export function getIndexOf(jsonArray, keyToCheck, valToFind) {
//     let index = -1;
//     jsonArray.map((item, i) => {
//       if (item[keyToCheck] === valToFind) {
//         index = i;
//       }
//     });
//     return index;
//   }
//   export function getIndexOfDuo(
//     jsonArray,
//     keyToCheck1,
//     keyToCheck2,
//     valToFind1,
//     valToFind2,
//   ) {
//     let index = -1;
//     jsonArray.map((item, i) => {
//       if (item[keyToCheck1] === valToFind1 && item[keyToCheck2] === valToFind2) {
//         index = i;
//       }
//     });
//     return index;
//   }
//   export function getRegistrationNumber(
//     base,
//     start,
//     end,
//     current = new Date().getTime(),
//   ) {
//     const del1 = start - end;
//     let delta = Math.floor((current - start) / (del1 / 1000));
//     delta = delta < 0 ? delta * -1 : delta;
//     const total = base + delta;
//     return total;
//   }
  
//   export function getInterstedNumber(current, creationTime, start) {
//     const del1 = start - creationTime;
//     const del2 = (current - creationTime) / del1;
//     let delta = Math.floor(900 * del2 + 600);
//     delta = delta < 0 ? delta * -1 : delta;
//     return delta;
//   }
  
//   async function requestCameraPermission(cropHeader) {
//     try {
//       const granted = await PermissionsAndroid.check(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         return await ImagePicker.openCamera({
//           mediaType: 'photo',
//           multiple: false,
//           cropping: true,
//           height: 720,
//           width: 1440,
//           cropperToolbarTitle: cropHeader || 'Crop Image',
//           freeStyleCropEnabled: true,
//           includeBase64: true,
//           cropperActiveWidgetColor: colors.themeColor,
//           cropperStatusBarColor: colors.themeColor,
//           cropperToolbarColor: colors.themeColor,
//           hideBottomControls: true,
//         });
//       }
//       const granted1 = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//       );
//       if (granted1 === PermissionsAndroid.RESULTS.GRANTED) {
//         return await ImagePicker.openCamera({
//           mediaType: 'photo',
//           multiple: false,
//           cropping: true,
//           height: 720,
//           width: 1440,
//           cropperToolbarTitle: cropHeader || 'Crop Image',
//           freeStyleCropEnabled: true,
//           includeBase64: true,
//           cropperActiveWidgetColor: colors.themeColor,
//           cropperStatusBarColor: colors.themeColor,
//           cropperToolbarColor: colors.themeColor,
//           hideBottomControls: true,
//         });
//       } else if (granted1 === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
//         Toast.show(
//           'Please enable camera permission for this app from the app settings',
//           Toast.SHORT,
//         );
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }
  
//   async function requestCameraPermissionIos(cropHeader) {
//     try {
//       return await ImagePicker.openCamera({
//         mediaType: 'photo',
//         multiple: false,
//         cropping: true,
//         height: 720,
//         width: 1440,
//         cropperToolbarTitle: cropHeader || 'Crop Image',
//         freeStyleCropEnabled: true,
//         includeBase64: true,
//         cropperActiveWidgetColor: colors.themeColor,
//         cropperStatusBarColor: colors.themeColor,
//         cropperToolbarColor: colors.themeColor,
//         hideBottomControls: true,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }
  
//   export const openCamera = async (cropHeader) => {
//     if (Platform.OS === 'android') {
//       return await requestCameraPermission(cropHeader);
//     } else if (Platform.OS === 'ios') {
//       return await requestCameraPermissionIos(cropHeader);
//     }
//   };
//   export const openGallery = async (cropHeader) => {
//     if (Platform.OS === 'android') {
//       return await requestGalleryPermission(cropHeader);
//     } else if (Platform.OS === 'ios') {
//       return await requestGalleryPermissionIos(cropHeader);
//     }
//   };
  
//   export function cloneObject(inObj) {
//     if (inObj) {
//       try {
//         let outObj = JSON.stringify(inObj);
//         outObj = JSON.parse(outObj);
//         return outObj;
//       } catch (err) {
//         console.log('cloneObject | error', err);
//       }
//     }
//     return inObj;
//   }
  
//   export function sliceBucketName(url) {
//     const urlToArray = url.split('/');
//     const butcketAddress = urlToArray[5];
//     const butcketName = butcketAddress.split('?')[0];
//     return butcketName;
//   }
  
//   export function agoFormatDateTime(_inDateStr) {
//     try {
//       // const [inDate, inTime] = inDateStr.split(" ");
//       const inDateStr = new Date(_inDateStr);
//       const timeDiff = new Date() - inDateStr;
  
//       if (timeDiff > 0 && timeDiff < 60 * 1000) {
//         const sec = Math.ceil(timeDiff / 1000);
//         return `${sec} secs`;
//       } else if (timeDiff >= 60 * 1000 && timeDiff < 60 * 60 * 1000) {
//         const mins = Math.ceil(timeDiff / (60 * 1000));
//         if (mins === 1) {
//           return `${mins} min`;
//         }
//         return `${mins} mins`;
//       } else if (timeDiff >= 60 * 60 * 1000 && timeDiff < 24 * 60 * 60 * 1000) {
//         const hours = Math.ceil(timeDiff / (60 * 60 * 1000));
//         if (hours === 1) {
//           return `${hours} hr`;
//         }
//         return `${hours} hrs`;
//         // if(inDateStr.getUTCMinutes() < 10){
//         //   return `${inDateStr.getUTCHours()}:0${inDateStr.getUTCMinutes()}`;
//         // }
//         // return `${inDateStr.getUTCHours()}:${inDateStr.getUTCMinutes()}`;
//       }
//       return `${inDateStr.getDate()} ${Months[inDateStr.getMonth()]}`;
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   export function formatAMPM(date, newFormatAMPM = false) {
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     const ampm = hours >= 12 ? 'PM' : 'AM';
//     hours %= 12;
//     hours = hours || 12; // the hour '0' should be '12'
//     if (newFormatAMPM) {
//       if (hours >= 1 && minutes === 0) {
//         return `${hours}${ampm}`;
//       }
//       return `${hours}:${minutes}${ampm}`;
//     }
//     minutes = minutes < 10 ? `0${minutes}` : minutes;
//     const strTime = `${hours}:${minutes} ${ampm}`;
//     return strTime;
//   }
  
//   export function millisToMinutesAndSeconds(millis) {
//     const minutes = Math.floor(millis / 60000);
//     const seconds = ((millis % 60000) / 1000).toFixed(0);
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   }
  
//   export function agoFormatDateTimeMessage(_inDateStr) {
//     try {
//       // const [inDate, inTime] = inDateStr.split(" ");
//       const inDateStr = new Date(_inDateStr);
//       const timeDiff = new Date() - inDateStr;
  
//       if (timeDiff > 0 && timeDiff < 12 * 60 * 60 * 1000) {
//         const sec = Math.ceil(timeDiff / 1000);
  
//         // let hours = Math.ceil((timeDiff / (60 * 60 * 1000)));
//         // if (hours === 1) {
//         //   return `${hours} hr`;
//         // }
//         // return `${hours} hrs`;
//         return formatAMPM(inDateStr);
//       }
//       // console.log(inDateStr);
//       return `${formatAMPM(inDateStr)}, ${inDateStr.getDate()} ${
//         Months[inDateStr.getMonth()]
//       }'${inDateStr.getUTCFullYear().toString().substr(2, 2)}`;
//     } catch (e) {
//       console.log(e);
//     }
//   }
  
//   export function FormatDateTimeMessageServer(_inDateStr, serverTime) {
//     try {
//       // const [inDate, inTime] = inDateStr.split(" ");
//       const inDateStr = new Date(_inDateStr);
//       const timeDiff = new Date(serverTime) - inDateStr;
  
//       if (timeDiff > 0 && timeDiff < 12 * 60 * 60 * 1000) {
//         const sec = Math.ceil(timeDiff / 1000);
  
//         // let hours = Math.ceil((timeDiff / (60 * 60 * 1000)));
//         // if (hours === 1) {
//         //   return `${hours} hr`;
//         // }
//         // return `${hours} hrs`;
//         return formatAMPM(inDateStr);
//       }
//       // console.log(inDateStr);
//       return `${formatAMPM(inDateStr)}, ${inDateStr.getDate()} ${
//         Months[inDateStr.getMonth()]
//       }'${inDateStr.getUTCFullYear().toString().substr(2, 2)}`;
//     } catch (e) {
//       console.log(e);
//     }
//   }
  
//   export function FormatDateTimeMessageServerWithOutYear(
//     _inDateStr,
//     serverTime,
//     displayDay = false,
//   ) {
//     try {
//       // const [inDate, inTime] = inDateStr.split(" ");
//       const inDateStr = new Date(_inDateStr);
//       const timeDiff = new Date(serverTime) - inDateStr;
  
//       if (displayDay === true) {
//         // if (timeDiff > 0 && timeDiff < (12 * 60 * 60 * 1000)) {
//         //     const sec = Math.ceil((timeDiff / 1000));
//         //     // let hours = Math.ceil((timeDiff / (60 * 60 * 1000)));
//         //     // if (hours === 1) {
//         //     //   return `${hours} hr`;
//         //     // }
//         //     // return `${hours} hrs`;
//         //     return formatAMPM(inDateStr,true);
//         // }
  
//         return `${formatAMPM(inDateStr, true)}, ${
//           Days.shortForm[inDateStr.getDay()]
//         } ${inDateStr.getDate()} ${Months[inDateStr.getMonth()]}`;
//       }
  
//       if (timeDiff > 0 && timeDiff < 12 * 60 * 60 * 1000) {
//         const sec = Math.ceil(timeDiff / 1000);
  
//         // let hours = Math.ceil((timeDiff / (60 * 60 * 1000)));
//         // if (hours === 1) {
//         //   return `${hours} hr`;
//         // }
//         // return `${hours} hrs`;
//         return formatAMPM(inDateStr);
//       }
  
//       return `${formatAMPM(inDateStr)}, ${inDateStr.getDate()} ${
//         Months[inDateStr.getMonth()]
//       }`;
//     } catch (e) {
//       console.log(e);
//     }
//   }
  
//   export function countDown(startTime, now) {
//     const distance = startTime - now;
//     const hours = digitPercisionString(
//       Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//       2,
//     );
//     const minutes = digitPercisionString(
//       Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//       2,
//     );
//     const seconds = digitPercisionString(
//       Math.floor((distance % (1000 * 60)) / 1000),
//       2,
//     );
//     // let obj;
//     // if(distance > 0){
//     //      obj= parseFormatDate(distance);
//     //      return `${obj.hrs}:${obj.min}:${obj.sec}`;
//     // }
//     // return '00:00:00'
//     if (distance > 3600000) {
//       return `${hours}h ${minutes}m`;
//     } else if (distance <= 3600000) {
//       return `${minutes}m ${seconds}s`;
//     }
  
//     // return `${hours}:${minutes}:${seconds}`;
//   }
//   export function countDownOld(startTime, now) {
//     const distance = startTime - now;
//     const hours = digitPercisionString(
//       Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//       2,
//     );
//     const minutes = digitPercisionString(
//       Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//       2,
//     );
//     const seconds = digitPercisionString(
//       Math.floor((distance % (1000 * 60)) / 1000),
//       2,
//     );
//     // let obj;
//     // if(distance > 0){
//     //      obj= parseFormatDate(distance);
//     //      return `${obj.hrs}:${obj.min}:${obj.sec}`;
//     // }
//     // return '00:00:00'
//     if (distance <= 0) {
//       return '00:00:00';
//     }
//     return `${hours}:${minutes}:${seconds}`;
//   }
  
//   export const DateMonthTime = (dateTime) => {
//     const obj = parseFormatDate(dateTime);
//     let { min } = parseFormatDate(dateTime);
//     if (min === '00' || isEmpty(min)) {
//       min = '';
//     } else {
//       min = `:${min}`;
//     }
//     return `${digitPercisionString(obj.dd, 2)} ${obj.mmm}, ${obj.hrhampm}${min}${
//       obj.mdns
//     }`;
//     // return `${digitPercisionString(obj.dd, 2)} ${obj.mmm}, ${obj.hrhampm}${obj.mdns}`;
//   };
  
//   export function formatDateInDateMonthYear(value, splitYear = false) {
//     let dateToString = new Date(value).toString();
//     if (isEmpty(value)) {
//       dateToString = new Date().toString();
//     }
//     const dateInArray =
//       typeof dateToString === 'string' && dateToString.split(' ');
//     const returnValue = `${dateInArray[2]} ${dateInArray[1]}${
//       splitYear ? ', ' : ' '
//     }${dateInArray[3]}`;
//     return returnValue;
//   }
  
//   export function classroomLiveStatus(currentTime, startTime, EndTime) {
//     if (currentTime < startTime) {
//       return 'UPCOMING';
//     } else if (currentTime > startTime && currentTime < EndTime) {
//       return 'LIVE';
//     }
//     return 'UPLOADED';
//   }
  
//   export function formatDateInDateMonth(value, monthyear = false) {
//     let dateToString = new Date().toString();
//     if (!isEmpty(value)) {
//       dateToString = new Date(value).toString();
//     }
//     const dateInArray = dateToString.split(' ');
//     const returnValue = monthyear
//       ? `${dateInArray[1]} ${dateInArray[3]}`
//       : `${dateInArray[2]} ${dateInArray[1]}`;
//     return returnValue;
//   }
  
//   export function formatDateInDateMonthAndTime(value) {
//     if (!isEmpty(value)) {
//       const dateToString = new Date(value).toString();
//       if (isEmpty(value)) {
//         const dateToString = new Date().toString();
//       }
//       const dateInArray = dateToString.split(' ');
//       const time = dateInArray[4];
//       const TimeInArraFormat = time.split(':');
//       const returnValue = `${dateInArray[2]} ${dateInArray[1]} ${TimeInArraFormat[0]}:${TimeInArraFormat[1]} hrs`;
//       return returnValue;
//     }
//   }
  
//   export function getEndOfDay(date) {
//     const dateObject = new Date(date);
//     dateObject.setHours(23, 59, 59, 999);
//     return dateObject ? dateObject.getTime() : null;
//   }
  
//   export function millisecToHrs(duration, newTimeFormate = false, source = null) {
//     let milliseconds = parseInt((duration % 1000) / 100),
//       seconds = parseInt((duration / 1000) % 60),
//       minutes = parseInt((duration / (1000 * 60)) % 60),
//       hours = parseInt((duration / (1000 * 60 * 60)) % 24);
//     if (newTimeFormate === true) {
//       if (hours < 1 && minutes >= 1) {
//         return `${minutes} min`;
//       } else if (hours >= 1 && minutes === 0) {
//         return `${hours} hr`;
//       }
//       return `${hours} hr ${minutes} min`;
//     }
//     hours = hours < 10 && !source ? `0${hours}` : hours;
//     minutes = minutes < 10 ? `0${minutes}` : minutes;
//     seconds = seconds < 10 ? `0${seconds}` : seconds;
  
//     if (!minutes) {
//       if (hours == '01') {
//         return `${hours} Hour`;
//       } else {
//         return `${hours} Hours`;
//       }
//     }
  
//     if (hours == '00') {
//       if (minutes == '01') {
//         return `${minutes} minute`;
//       } else {
//         return `${minutes} minutes`;
//       }
//     }
  
//     if (minutes == '00') {
//       if (hours == '01') {
//         return `${hours} Hour`;
//       } else {
//         return `${hours} Hours`;
//       }
//     }
  
//     if (hours == '01' || minutes == '01') {
//       return `${hours} Hour ${minutes} minute`;
//     }
//     // return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
//     return `${hours} Hours ${minutes} minutes`;
//   }
//   export function paiseToRupee(value) {
//     const rupee = value / 100;
//     return rupee;
//   }
  
//   export function newmillisecToHrs(
//     duration,
//     newTimeFormate = false,
//     source = null,
//   ) {
//     let milliseconds = parseInt((duration % 1000) / 100),
//       seconds = parseInt((duration / 1000) % 60),
//       minutes = parseInt((duration / (1000 * 60)) % 60),
//       hours = parseInt((duration / (1000 * 60 * 60)) % 24);
//     if (newTimeFormate === true) {
//       if (hours < 1 && minutes >= 1) {
//         return `${minutes} min`;
//       } else if (hours >= 1 && minutes === 0) {
//         return `${hours} hr`;
//       }
//       return `${hours} hr ${minutes} min`;
//     }
//     hours = hours < 10 && !source ? `0${hours}` : hours;
//     minutes = minutes < 10 ? `0${minutes}` : minutes;
//     seconds = seconds < 10 ? `0${seconds}` : seconds;
  
//     // if (!minutes) {
//     //   return `${hours} Hours`;
//     // }
  
//     // if (hours == '00') {
//     //   return `${minutes} minutes`;
//     // }
  
//     // if (minutes == '00') {
//     //   return `${hours} Hours`;
//     // }
  
//     return hours + ':' + minutes + ':' + seconds;
//   }
  
//   export function exploreAndAttendNow(startTime, duration) {
//     const finalTime = startTime + duration;
//     const currentTime = new Date().getTime();
//     if (startTime <= currentTime && currentTime <= finalTime) {
//       return 'Attend Now';
//     }
//     return 'Explore Now';
//   }
  
//   export function trimName(name) {
//     let value = null;
//     if (name.length > 10) {
//       value = `${name.substr(0, 10)}...`;
//       return value;
//     }
//     value = name;
//     return value;
//   }
//   export function objValueToString(obj) {
//     const porcessedObj = {};
//     for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         porcessedObj[key] = obj[key] ? obj[key].toString() : '';
//       }
//     }
//     return porcessedObj;
//   }
//   export function trimTitle(name) {
//     let value = null;
//     if (name.length > 30) {
//       value = `${name.substr(0, 30)}...`;
//       return value;
//     }
//     value = name;
//     return value;
//   }
  
//   export function getStreamText(millisec) {
//     const seconds = (millisec / 1000).toFixed(0);
//     const minutes = (millisec / (1000 * 60)).toFixed(0);
//     const hours = (millisec / (1000 * 60 * 60)).toFixed(0);
//     const days = (millisec / (1000 * 60 * 60 * 24)).toFixed(0);
//     const years = (millisec / (1000 * 60 * 60 * 24 * 365)).toFixed(0);
//     if (seconds < 60) {
//       if (seconds == 1) {
//         return `${seconds} second`;
//       }
//       return `${seconds} seconds`;
//     } else if (minutes < 60) {
//       if (minutes == 1) {
//         return `${minutes} min`;
//       }
//       return `${minutes} mins`;
//     } else if (hours < 24) {
//       if (hours == 1) {
//         return `${hours} hour`;
//       }
//       return `${hours} hours`;
//     } else if (days == 1) {
//       return `${days} day`;
//     }
//     return `${days} days`;
//     // else if (days < 365) {
//     //     return `${days} days`;
//     // }
//     // return `${years} years`;
//   }
  
//   export function getQueryStringParameters(url) {
//     let urlParams = {},
//       match,
//       additional = /\+/g, // Regex for replacing additional symbol with a space
//       search = /([^&=]+)=?([^&]*)/g,
//       decode = function (s) {
//         return decodeURIComponent(s.replace(additional, ' '));
//       },
//       query;
//     if (url) {
//       if (url.split('?').length > 0) {
//         query = url.split('?')[1];
//       }
//     } else {
//       url = window.location.href;
//       query = window.location.search.substring(1);
//     }
//     while ((match = search.exec(query))) {
//       urlParams[decode(match[1])] = decode(match[2]);
//     }
//     return urlParams;
//   }
  
//   export function priceInIndianCurrencyFormat(price) {
//     let x = price;
//     x = x.toString();
//     let afterPoint = '';
//     if (x.indexOf('.') > 0) {
//       afterPoint = x.substring(x.indexOf('.'), x.length);
//     }
//     x = Math.floor(x);
//     x = x.toString();
//     let lastThree = x.substring(x.length - 3);
//     const otherNumbers = x.substring(0, x.length - 3);
//     if (otherNumbers != '') {
//       lastThree = `,${lastThree}`;
//     }
//     const res =
//       otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree + afterPoint;
//     return res;
//   }
  
//   export function removeObjectFromArrayOfObject(intialArray, key) {
//     const indeOfValueToRemoved = intialArray.findIndex((keys) => keys.id === key);
//     if (indeOfValueToRemoved !== -1) {
//       const finalArrat = intialArray.splice(indeOfValueToRemoved, 1);
//       return intialArray;
//     }
//     return intialArray;
//   }
  
//   export const convertTime12to24 = (time12h) => {
//     const [time, modifier] = time12h.split(' ');
  
//     let [hours, minutes] = time.split(':');
  
//     if (hours === '12') {
//       hours = '00';
//     }
  
//     if (modifier === 'PM' || modifier === 'pm') {
//       hours = parseInt(hours, 10) + 12;
//     }
  
//     return `${hours}:${minutes}`;
//   };
  
//   export function FormatDateTimeMessageServerWithOutYearin24Format(
//     _inDateStr,
//     serverTime,
//   ) {
//     try {
//       // const [inDate, inTime] = inDateStr.split(" ");
//       const inDateStr = new Date(_inDateStr);
//       const timeDiff = new Date(serverTime) - inDateStr;
  
//       if (timeDiff > 0 && timeDiff < 12 * 60 * 60 * 1000) {
//         const sec = Math.ceil(timeDiff / 1000);
  
//         // let hours = Math.ceil((timeDiff / (60 * 60 * 1000)));
//         // if (hours === 1) {
//         //   return `${hours} hr`;
//         // }
//         // return `${hours} hrs`;
//         return formatAMPM(inDateStr);
//       }
//       // console.log(inDateStr);
//       return `${convertTime12to24(
//         formatAMPM(inDateStr),
//       )}, ${inDateStr.getDate()} ${Months[inDateStr.getMonth()]}`;
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   export function removeQueryStringFromImage(url) {
//     return url.split('?')[0];
//   }
  
//   const placeId = (data, key, replaceData) => {
//     let tmp = [];
//     if (
//       data.hasOwnProperty(key) &&
//       data.hasOwnProperty(replaceData) &&
//       Array.isArray(data[replaceData])
//     ) {
//       data[replaceData].forEach((el) => {
//         tmp = [
//           ...tmp,
//           {
//             ...el,
//             collectionName: data[key],
//           },
//         ];
//       });
//       return {
//         ...data,
//         data: tmp,
//       };
//     }
//     return data;
//   };
  
//   const placeIdInData = (data) => {
//     let tmp = [];
//     if (Array.isArray(data) && data.length) {
//       data.forEach((el) => {
//         tmp = [...tmp, placeId(el, 'id', 'data')];
//       });
//       return tmp;
//     }
//     return data;
//   };
  
//   export { placeIdInData, placeId };
  
//   export const getSubjectHeaderConstants = (subject) => {
//     // for (const property in SubjectColor) {
//     //     if (SubjectColor.hasOwnProperty(subject)) {
//     //         // return SubjectColor.subject;
//     //         return { ...SubjectColor[subject] };
//     //     }
//     // }
//     // return { color: '#00D748' };
//     if (SubjectColor.hasOwnProperty(subject)) {
//       return {
//         ...SubjectColor[subject],
//       };
//     }
//     return {
//       color: '#00D748',
//       red: 152,
//       green: 23,
//       blue: 255,
//     };
//   };
  
//   export const validateImageURL = (uri) =>
//     uri && uri.match(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif))/g);
  
//   export const setAsyncStorage = async (key, value) => {
//     try {
//       await AsyncStorage.setItem(key, JSON.stringify(value));
//     } catch (error) {
//       // Error saving data
//     }
//   };
  
//   export const retrieveAsyncStorage = async (key = '') => {
//     const res = '';
//     try {
//       const val = await AsyncStorage.getItem(key);
//       return val;
//     } catch (error) {
//       // Error retrieving data
//     }
//     return res;
//   };
  
//   export function setMoengageUser(userData) {
//     if (!isEmpty(userData)) {
//       let targetMoe = '';
//       if (
//         !isEmpty(userData.info) &&
//         !isEmpty(userData.info.examTargets) &&
//         Array.isArray(userData.info.examTargets)
//       ) {
//         targetMoe = userData.info.examTargets[0];
//       }
//       ReactMoE.initialize();
//       ReactMoE.setUserUniqueID(userData.userId);
//       ReactMoE.setUserEmailID(userData.email);
//       ReactMoE.setUserContactNumber(userData.phoneCode + userData.contactNumber);
//       ReactMoE.setUserFirstName(userData.firstName);
//       ReactMoE.setUserAttribute(
//         'Grade',
//         userData.info ? userData.info.grade : '',
//       );
//       ReactMoE.setUserAttribute(
//         'Board',
//         userData.info ? userData.info.board : '',
//       );
//       ReactMoE.setUserAttribute('Target', targetMoe);
//       ReactMoE.setUserAttribute(
//         'Stream',
//         !isEmpty(userData.info) && !isEmpty(userData.info.stream)
//           ? userData.info.stream
//           : '',
//       );
//     }
//   }
  
//   export const getUserInfosInKeyValue = (userData) => {
//     if (!isEmpty(userData)) {
//       const {firstName, email} = userData
//       let userprops = {}
//       if(!isEmpty(firstName)) {
//         userprops.Name = `${firstName}`
//       }
//       if(!isEmpty(email)) {
//         userprops.Email = `${email}`
//       }
//       if(!isEmpty(userData.studentInfo)){
//         const {grade = '', board = '', target = '', stream = '', acadYears = []} = userData.studentInfo
//         let seletedAcadYears = ''
//         if(!isEmpty(acadYears) && acadYears.length > 0){
//           seletedAcadYears = acadYears[acadYears.length - 1]
//         }
//         userprops.Target = `${target}`
//         userprops.Grade = `${grade}`
//         userprops.Board = `${board}`
//         userprops.Stream = `${stream}`
//         userprops.AcadYears = `${seletedAcadYears}`
//           }
//       return userprops
//     }
//     return null
//   }
  
  
//   export function setCrashlyticsUser(userData) {
//     if (!isEmpty(userData)) {
//       crashlytics().setUserId(`${userData.userId}`);
//       crashlytics().setAttributes({
//         email: `${userData.email}`,
//       });
//     }
//   }
  
//   export function setInstabugUser(userData) {
//     if (!isEmpty(userData)) {
//       Instabug.identifyUserWithEmail(
//         `${userData.email}`,
//         `${userData.firstName}`,
//       );
//       Instabug.setUserAttribute('UserId', `${userData.userId}`);
//       Instabug.setUserAttribute('Email', `${userData.email}`);
//       Instabug.setUserAttribute('Name', `${userData.firstName}`);
//     }
//   }
  
//   export function getNotificationClearedClickstreamParams(e) {
//     let jsoObj;
//     try {
//       jsoObj = JSON.parse(e.moe_cid_attr);
//     } catch (error) {
//       gcm_title = '';
//     }
//     var gcm_title = '',
//       gcm_alert = '',
//       moe_campaign_id = '',
//       moe_campaign_name = '',
//       gcm_webUrl = '';
  
//     try {
//       gcm_title = e.gcm_title;
//     } catch (error) {
//       gcm_title = '';
//     }
  
//     try {
//       gcm_alert = e.gcm_alert;
//     } catch (error) {
//       gcm_alert = '';
//     }
  
//     try {
//       gcm_webUrl = e.gcm_webUrl;
//     } catch (error) {
//       gcm_webUrl = '';
//     }
  
//     try {
//       moe_campaign_id = jsoObj.moe_campaign_id;
//     } catch (error) {
//       moe_campaign_id = '';
//     }
  
//     try {
//       moe_campaign_name = jsoObj.moe_campaign_name;
//     } catch (error) {
//       moe_campaign_name = '';
//     }
  
//     const clickstreamParams = {
//       key1: gcm_title,
//       value1: gcm_alert,
//       key2: moe_campaign_id,
//       value2: moe_campaign_name,
//       key3: gcm_webUrl,
//     };
  
//     return clickstreamParams;
//   }
  
//   export function getNotificationReceivedClickstreamParams(e) {
//     let jsoObj;
//     try {
//       jsoObj = JSON.parse(e.moe_cid_attr);
//     } catch (error) {
//       gcm_title = '';
//     }
//     var gcm_title = '',
//       gcm_alert = '',
//       moe_campaign_id = '',
//       moe_campaign_name = '',
//       gcm_webUrl = '';
  
//     try {
//       gcm_title = e.gcm_title;
//     } catch (error) {
//       gcm_title = '';
//     }
  
//     try {
//       gcm_alert = e.gcm_alert;
//     } catch (error) {
//       gcm_alert = '';
//     }
  
//     try {
//       gcm_webUrl = e.gcm_webUrl;
//     } catch (error) {
//       gcm_webUrl = '';
//     }
  
//     try {
//       moe_campaign_id = jsoObj.moe_campaign_id;
//     } catch (error) {
//       moe_campaign_id = '';
//     }
  
//     try {
//       moe_campaign_name = jsoObj.moe_campaign_name;
//     } catch (error) {
//       moe_campaign_name = '';
//     }
  
//     const clickstreamParams = {
//       key1: gcm_title,
//       value1: gcm_alert,
//       key2: moe_campaign_id,
//       value2: moe_campaign_name,
//       key3: gcm_webUrl,
//     };
//     return clickstreamParams;
//   }
  
//   export function getNotificationClickedClickstreamParams(e) {
//     let jsoObj;
//     try {
//       jsoObj = JSON.parse(e.moe_cid_attr);
//     } catch (error) {
//       gcm_title = '';
//     }
//     var gcm_title = '',
//       gcm_alert = '',
//       moe_campaign_id = '',
//       moe_campaign_name = '',
//       gcm_webUrl = '';
  
//     try {
//       gcm_title = e.gcm_title;
//     } catch (error) {
//       gcm_title = '';
//     }
  
//     try {
//       gcm_alert = e.gcm_alert;
//     } catch (error) {
//       gcm_alert = '';
//     }
  
//     try {
//       gcm_webUrl = e.gcm_webUrl;
//     } catch (error) {
//       gcm_webUrl = '';
//     }
  
//     try {
//       moe_campaign_id = jsoObj.moe_campaign_id;
//     } catch (error) {
//       moe_campaign_id = '';
//     }
  
//     try {
//       moe_campaign_name = jsoObj.moe_campaign_name;
//     } catch (error) {
//       moe_campaign_name = '';
//     }
  
//     const clickstreamParams = {
//       key1: gcm_title,
//       value1: gcm_alert,
//       key2: moe_campaign_id,
//       value2: moe_campaign_name,
//       key3: gcm_webUrl,
//     };
  
//     return clickstreamParams;
//   }
  
//   export function getStoredNotificationDataClickstreamParams(json) {
//     let clickstreamParams = null;
//     if (json.hasOwnProperty('moe_cid_attr')) {
//       // console.log("Moengage moe_cid_attr is available on array",i);
//       const m = JSON.parse(json.moe_cid_attr);
//       let moe_campaign_id = '',
//         moe_campaign_name = '',
//         gcm_title = '',
//         gcm_alert = '',
//         gcm_webUrl = '';
  
//       try {
//         if (m.hasOwnProperty('moe_campaign_id')) {
//           moe_campaign_id = m.moe_campaign_id;
//         }
//       } catch (error) {
//         moe_campaign_id = '';
//       }
  
//       try {
//         if (m.hasOwnProperty('moe_campaign_name')) {
//           moe_campaign_name = m.moe_campaign_name;
//         }
//       } catch (error) {
//         moe_campaign_name = '';
//       }
  
//       if (json.hasOwnProperty('gcm_title')) {
//         gcm_title = json.gcm_title;
//       }
//       if (json.hasOwnProperty('gcm_alert')) {
//         gcm_alert = json.gcm_alert;
//       }
//       if (json.hasOwnProperty('gcm_webUrl')) {
//         gcm_webUrl = json.gcm_webUrl;
//       }
  
//       clickstreamParams = {
//         key1: gcm_title,
//         value1: gcm_alert,
//         key2: moe_campaign_id,
//         value2: moe_campaign_name,
//         key3: gcm_webUrl,
//       };
//     } else {
//       //console.log('Moengage moe_cid_attr is not available on array', i);
//       clickstreamParams = {
//         key1: json.gcm_title,
//         value1: json.gcm_alert,
//         key3: json.gcm_webUrl,
//       };
//     }
//   }
  
//   export const plainToBoldText = (array, fn) => {
//     let result = [];
//     array.forEach((item) => {
//       if (item.startsWith('{') && item.endsWith('}')) {
//         let mapping = fn(item, 'bold');
//         result = result.concat(mapping);
//       } else {
//         let mapping = fn(item, 'plain');
//         result = result.concat(mapping);
//       }
//     });
//     return result;
//   };
  
//   export const storeAsyncData = async (key, value) => {
//     try {
//       await AsyncStorage.setItem(key, JSON.stringify(value));
//     } catch (error) {
//       // unable to add it in asyn Storage
//     }
//   };
  
//   export const retrieveAsyncData = async (key) => {
//     try {
//       const res = await AsyncStorage.getItem(key);
//       return JSON.parse(res);
//     } catch (error) {}
//     return null;
//   };
  
//   export const isToday = (someDate, today) => {
//     today = new Date(today);
//     someDate = new Date(someDate);
//     return (
//       someDate.getDate() === today.getDate() &&
//       someDate.getMonth() === today.getMonth() &&
//       someDate.getFullYear() === today.getFullYear()
//     );
//   };
  
//   export function getBoardCollections(grade) {
//     switch (grade) {
//       case 1:
//       case 2:
//       case 3:
//       case 4:
//       case 5:
//       case 13:
//         return (boardCollection = []);
  
//       case 6:
//       case 7:
//       case 8:
//         return (boardCollection = [
//           'CBSE',
//           'ICSE',
//           'IB',
//           'IGCSE',
//           'Maharashtra',
//           'Others',
//         ]);
  
//       case 9:
//       case 10:
//         return (boardCollection = [
//           'CBSE',
//           'ICSE',
//           'Maharashtra',
//           'IB',
//           'IGCSE',
//           'Others',
//         ]);
  
//       case 11:
//       case 12:
//         return (boardCollection = [
//           'CBSE',
//           'ICSE',
//           'IB',
//           'IGCSE',
//           'Maharashtra',
//           'Others',
//         ]);
//     }
//   }
  
//   export function getStreamCollections(grade) {
//     switch (grade) {
//       case 1:
//       case 2:
//       case 3:
//       case 4:
//       case 5:
//       case 13:
//         return (streamCollection = []);
  
//       case 6:
//       case 7:
//       case 8:
//         return (streamCollection = []);
  
//       case 9:
//       case 10:
//         return (streamCollection = []);
  
//       case 11:
//       case 12:
//         return (streamCollection = ['Science(PCM)', 'Science(PCB)', 'Commerce']);
//     }
//   }
  
//   export function getTargetCollections(stream) {
//     switch (stream) {
//       case 'Science(PCM)':
//         return (targetCollection = ['JEE', 'School Prep']);
//       case 'Science(PCB)':
//         return (targetCollection = ['NEET', 'School Prep']);
//       case '13':
//         return (targetCollection = ['JEE', 'NEET']);
//       case 'Commerce':
//         return (targetCollection = []);
//     }
//   }
  
//   export function getBoardCollectionsEditProfile(grade) {
//     switch (grade) {
//       case '1':
//       case '2':
//       case '3':
//       case '4':
//       case '5':
//       case '13':
//         return (boardCollection = []);
  
//       case '6':
//       case '7':
//       case '8':
//         return (boardCollection = [
//           { item: 'Select Board', value: 0 },
//           { item: 'CBSE', value: 'CBSE' },
//           { item: 'ICSE', value: 'ICSE' },
//           { item: 'IB', value: 'IB' },
//           { item: 'IGCSE', value: 'IGCSE' },
//           { item: 'Maharashtra', value: 'Maharashtra' },
//           { item: 'STATE BOARD', value: 'STATE BOARD' },
//         ]);
  
//       case '9':
//       case '10':
//         return (boardCollection = [
//           { item: 'Select Board', value: 0 },
//           { item: 'CBSE', value: 'CBSE' },
//           { item: 'ICSE', value: 'ICSE' },
//           { item: 'Maharashtra', value: 'Maharashtra' },
//           { item: 'IB', value: 'IB' },
//           { item: 'IGCSE', value: 'IGCSE' },
//           { item: 'STATE BOARD', value: 'STATE BOARD' },
//         ]);
  
//       case '11':
//       case '12':
//         return (boardCollection = [
//           { item: 'Select Board', value: 0 },
//           { item: 'CBSE', value: 'CBSE' },
//           { item: 'ICSE', value: 'ICSE' },
//           { item: 'IB', value: 'IB' },
//           { item: 'IGCSE', value: 'IGCSE' },
//           { item: 'Maharashtra', value: 'Maharashtra' },
//           { item: 'STATE BOARD', value: 'STATE BOARD' },
//         ]);
//     }
//   }
  
//   export function getStreamCollectionsEditProfile(grade) {
//     switch (grade) {
//       case '1':
//       case '2':
//       case '3':
//       case '4':
//       case '5':
//       case '13':
//         return (streamCollection = []);
  
//       case '6':
//       case '7':
//       case '8':
//         return (streamCollection = []);
  
//       case '9':
//       case '10':
//         return (streamCollection = []);
  
//       case '11':
//       case '12':
//         return (streamCollection = [
//           { item: 'Select your Stream', value: 0 },
//           { item: 'Science(PCM)', value: 'Science(PCM)' },
//           { item: 'Science(PCB)', value: 'Science(PCB)' },
//           { item: 'Commerce', value: 'Commerce' },
//         ]);
//     }
//   }
  
//   export function getTargetCollectionsEditProfile(stream) {
//     switch (stream) {
//       case 'Science(PCM)':
//         return (targetCollection = [
//           { item: 'Select your Target', value: 0 },
//           { item: 'School Prep', value: 'School Prep' },
//           { item: 'JEE', value: 'JEE' },
//         ]);
//       case 'Science(PCB)':
//         return (targetCollection = [
//           { item: 'Select your Target', value: 0 },
//           { item: 'School Prep', value: 'School Prep' },
//           { item: 'NEET', value: 'NEET' },
//         ]);
//       case '13':
//         return (targetCollection = [
//           { item: 'Select your Target', value: 0 },
//           { item: 'JEE', value: 'JEE' },
//           { item: 'NEET', value: 'NEET' },
//         ]);
//       case 'Commerce':
//         return (targetCollection = []);
//     }
//   }
//   export function capFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
//   }
  
//   export function getDataFromMilSec(milliseconds) {
//     let data = {};
//     data.date = new Date(milliseconds);
//     data.dayInNum = data.date.getDay();
//     data.hours = data.date.getHours();
//     data.year = data.date.getFullYear();
//     data.minutes = data.date.getMinutes();
//     data.seconds = data.date.getSeconds();
//     data.dateOfMonth = data.date.getDate();
//     data.dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][
//       data.dayInNum
//     ];
//     data.ampmtime12 = formatAMPM(data.date).toLowerCase();
//     //data.date.toLocaleString('en-US', { hour: 'numeric',minute: 'numeric', hour12: true }).toLowerCase();
//     return data;
//   }
  
//   export function diffInMonthsAndList(firstMilliseconds, secondMilliseconds) {
//     let data = {};
//     let dt1 = new Date(firstMilliseconds);
//     let dt2 = new Date(secondMilliseconds);
  
//     let fromYear = dt1.getFullYear();
//     let fromMonth = dt1.getMonth();
//     let toYear = dt2.getFullYear();
//     let toMonth = dt2.getMonth();
//     let monthsDetails = [];
  
//     var monthDiff = 0;
//     for (let year = fromYear; year <= toYear; year++) {
//       let monthNum = year === fromYear ? fromMonth : 0;
//       const monthLimit = year === toYear ? toMonth : 11;
//       for (; monthNum <= monthLimit; monthNum++) {
//         let monthName = Date.locale['en'].month_names_short[monthNum];
//         let milisec = new Date(year, monthNum, 1).getTime();
//         //console.log("===> milisec",milisec)
//         monthsDetails.push({ year, monthNum, monthName, milisec });
//         monthDiff = monthDiff + 1;
//       }
//     }
//     data.months = monthsDetails;
//     data.monthDiff = monthDiff;
  
//     let currentMonthOfDate = new Date().getMonth();
//     let currentMonthIndexInArray = 0;
//     monthsDetails.find((obj, i) => {
//       currentMonthIndexInArray = i;
//       if (obj.monthNum === currentMonthOfDate) {
//         return true;
//       }
//     });
//     data.currentMonthIndex = currentMonthIndexInArray;
//     return data;
//   }
  
//   // Return 1 if a > b
//   // Return -1 if a < b
//   // Return 0 if a == b
//   export function compareVersion(a, b) {
  
  
//     if ( (!a || !b) || (a === b) ) {
//       return 0;
//     }
  
//     var a_components = a.split('.');
//     var b_components = b.split('.');
  
//     var len = Math.min(a_components.length, b_components.length);
  
//     // loop while the components are equal
//     for (var i = 0; i < len; i++) {
//       // A bigger than B
//       if (parseInt(a_components[i]) > parseInt(b_components[i])) {
//         return 1;
//       }
  
//       // B bigger than A
//       if (parseInt(a_components[i]) < parseInt(b_components[i])) {
//         return -1;
//       }
//     }
  
//     // If one's a prefix of the other, the longer one is greater.
//     if (a_components.length > b_components.length) {
//       return 1;
//     }
  
//     if (a_components.length < b_components.length) {
//       return -1;
//     }
  
//     // Otherwise they are the same.
//     return 0;
//   }
  
//   export const dayOfWeekMap = {
//     MONDAY: 'Mon',
//     TUESDAY: 'Tue',
//     WEDNESDAY: 'Wed',
//     THURSDAY: 'Thu',
//     FRIDAY: 'Fri',
//     SATURDAY: 'Sat',
//     SUNDAY: 'Sun',
//   };
  
//   export const getDeviceInfo = () => {
//     const version = DeviceInfo.getVersion();
//     return { version };
//   };
  
//   export function getCounterData(fullData, currentTime) {
//     let currentDateAT0 = new Date(currentTime);
//     currentTime = new Date(currentTime);
//     currentDateAT0.setHours(0);
//     currentDateAT0.setMinutes(0);
//     currentDateAT0.setSeconds(0);
//     currentDateAT0.setMilliseconds(0);
//     let count = 0;
//     let selectedData = fullData[currentDateAT0.getTime()];
//     if (!selectedData) {
//       return 0;
//     }
  
//     count = count + (selectedData?.startCount || 0);
//     let hrs = currentTime.getHours() * 60;
//     let min = currentTime.getMinutes();
//     count =
//       count +
//       (((selectedData?.endCount || count) - count) / (24 * 60)) * (hrs + min);
//     return Math.floor(count);
//   }
  
//   // export function getCounterData(fullData, currentTime) {
//   //   let currentDateAT0 = getTimeAt0(currentTime);
//   //   currentTime = new Date(currentTime);
//   //   let count = 0;
//   //   let selectedData = fullData[currentDateAT0];
//   //   if (!selectedData) {
//   //     let keys = Object.keys(fullData);
//   //     return fullData[keys[keys.length - 1]].endCount;
//   //   }
//   //   count = count + (selectedData?.startCount || 0);
//   //   let hrs = currentTime.getHours() * 60;
//   //   let min = currentTime.getMinutes();
//   //   count =
//   //     count +
//   //     (((selectedData?.endCount || count) - count) / (24 * 60)) * (hrs + min);
//   //   return Math.floor(count);
//   // }
  
//   export function getAttendiesCount(
//     currentTime,
//     startTime,
//     duration,
//     BASE_REGISTRATION_NUMBER = 7324,
//   ) {
//     let randomNumber = startTime / duration / 2;
//     let addOrSubtract = Math.round(randomNumber * Math.PI) % 2;
//     let diff = Math.round(
//       (Math.abs(startTime + currentTime) % 1610000000000) / 1000000,
//     );
//     randomNumber = String(randomNumber).substring(0, 1);
//     randomNumber = Number(randomNumber) * 982;
//     if (addOrSubtract) {
//       return Math.abs(BASE_REGISTRATION_NUMBER + diff + randomNumber);
//     } else {
//       return Math.abs(BASE_REGISTRATION_NUMBER - diff + randomNumber);
//     }
//   }
  
//   export function getRandomImage() {
//     let index = Math.floor(Math.random() * (9 - 0 + 1) + 0);
//     return welcomeImages[index];
//   }
  
//   export const getTeacherTemplate = (points) => {
//     let templateList = [];
//     let template = '';
//     for (let key in points) {
//       if (points[key]) {
//         if (key == 'noOfStudentTaught') {
//           template = TEACHER_TEMPLATE[key].replace(
//             TEACHER_DETAILS.NO_OF_STUDENTS,
//             points[key],
//           );
//           template = template.replace(
//             TEACHER_DETAILS.COMPETETIVE_EXAMS,
//             points['specialMentorFor'],
//           );
//           templateList.push(template);
//         } else if (key == 'producedRank') {
//           template = TEACHER_TEMPLATE[key].replace(
//             TEACHER_DETAILS.RANK_LIST,
//             points[key],
//           );
//           template = template.replace(
//             TEACHER_DETAILS.COMPETETIVE_EXAMS,
//             points['targetExam'],
//           );
//           templateList.push(template);
//         } else if (key == 'transformedFrom') {
//           template = template = TEACHER_TEMPLATE[key].replace(
//             TEACHER_DETAILS.LOW_SCORING,
//             points[key],
//           );
//           template = template.replace(
//             TEACHER_DETAILS.ACQUIRE_RANK,
//             points['transformedTo'],
//           );
//           template = template.replace(
//             TEACHER_DETAILS.COMPETETIVE_EXAMS,
//             points['boardExam'],
//           );
//           templateList.push(template);
//         } else if (key == 'hostName') {
//           template = template = TEACHER_TEMPLATE[key].replace(
//             TEACHER_DETAILS.CHANNEL_NAME,
//             points[key],
//           );
//           template = template.replace(TEACHER_DETAILS.PURPOSE, points['purpose']);
//           template = template.replace(
//             TEACHER_DETAILS.COMPETETIVE_EXAMS,
//             points['examName'],
//           );
//           templateList.push(template);
//         } else if (key == 'awards') {
//           template = TEACHER_TEMPLATE[key].replace(
//             TEACHER_DETAILS.TEACHER_AWARDS_LIST,
//             points[key],
//           );
//           templateList.push(template);
//         } else if (key == 'authorOf') {
//           template = TEACHER_TEMPLATE[key].replace(
//             TEACHER_DETAILS.AUTHOR_BOOKS,
//             points[key],
//           );
//           template = template.replace(
//             TEACHER_DETAILS.TEACHER_SUBJECT_LIST,
//             points['authorOn'],
//           );
//           templateList.push(template);
//         } else if (key == 'expert') {
//           template = TEACHER_TEMPLATE[key].replace(
//             TEACHER_DETAILS.PRACTICAL_METHODS,
//             points[key],
//           );
//           templateList.push(template);
//         } else if (key == 'passion') {
//           template = TEACHER_TEMPLATE[key].replace(
//             TEACHER_DETAILS.PASSION,
//             points[key],
//           );
//           templateList.push(template);
//         }
//       }
//     }
//     return templateList;
//   };
  
//   export const TEACHER_DETAILS = {
//     NO_OF_STUDENTS: 'NO_OF_STUDENTS',
//     COMPETETIVE_EXAMS: 'COMPETETIVE_EXAMS',
//     RANK_LIST: 'RANK_LIST',
//     PASSION: 'PASSION',
//     PRACTICAL_METHODS: 'PRACTICAL_METHODS',
//     TEACHER_AWARDS_LIST: 'TEACHER_AWARDS_LIST',
//     AUTHOR_BOOKS: 'AUTHOR_BOOKS',
//     TEACHER_SUBJECT_LIST: 'TEACHER_SUBJECT_LIST',
//     ACQUIRE_RANK: 'ACQUIRE_RANK',
//     LOW_SCORING: 'LOW_SCORING',
//     CHANNEL_NAME: 'CHANNEL_NAME',
//     PURPOSE: 'PURPOSE',
//   };
  
//   export const TEACHER_TEMPLATE = {
//     noOfStudentTaught:
//       'Taught more than ' +
//       TEACHER_DETAILS.NO_OF_STUDENTS +
//       ' students & Mentored students for ' +
//       TEACHER_DETAILS.COMPETETIVE_EXAMS,
//     producedRank:
//       'Produced ' +
//       TEACHER_DETAILS.RANK_LIST +
//       ' in ' +
//       TEACHER_DETAILS.COMPETETIVE_EXAMS,
//     transformedFrom:
//       'Transformed ' +
//       TEACHER_DETAILS.LOW_SCORING +
//       ' students to ' +
//       TEACHER_DETAILS.ACQUIRE_RANK +
//       ' in ' +
//       TEACHER_DETAILS.COMPETETIVE_EXAMS,
//     hostName:
//       'Hosts ' +
//       TEACHER_DETAILS.CHANNEL_NAME +
//       ' to ' +
//       TEACHER_DETAILS.PURPOSE +
//       ' for ' +
//       TEACHER_DETAILS.COMPETETIVE_EXAMS,
//     awards: 'Awarded ' + TEACHER_DETAILS.TEACHER_AWARDS_LIST,
//     authorOf:
//       'Author of ' +
//       TEACHER_DETAILS.AUTHOR_BOOKS +
//       ' on ' +
//       TEACHER_DETAILS.TEACHER_SUBJECT_LIST,
//     expert: 'Expert in ' + TEACHER_DETAILS.PRACTICAL_METHODS,
//     passion: 'Loves To ' + TEACHER_DETAILS.PASSION,
//   };
  
//   export const MAIN_COURSE = 'MAIN_COURSE';
//   export const courseInclusionListMap = {
//     SCHOOL_TUTION: 'School Tuition',
//     SCHOOL_EXAM_PREP: 'School Exam Preparation',
//     REVISION_COURSE: 'Revision Course',
//     MICRO_COURSES: 'Micro Courses',
//     ADDITIONAL_COURSE: 'Other Courses',
//   };
  
//   export const checkIfString = param => (typeof param == 'string');
  
//   export const checkUserDataChanges = (prevPropsUserData, nextPropsUserData) => {
//     if(isEmpty(nextPropsUserData)){
//       return false
//     }
//     const { studentInfo: { grade, board, target, stream, acadYears = [] } = {},
//     firstName = '', email = '' } = prevPropsUserData || {};
  
//     let seletedAcadYears = ''
//       if(!isEmpty(acadYears) && acadYears.length > 0){
//         seletedAcadYears = acadYears[acadYears.length - 1]
//       }
  
//     const {
//       studentInfo: { grade: nextGrade, board: nextBoard, target: nextTarget, stream: nextStream, 
//       acadYears: nextAcadYears = [] } = {},
//       firstName: nextFirstName = '', email: nextEmail = ''
//     } = nextPropsUserData || {};
  
//     let nextSeletedAcadYears = ''
//       if(!isEmpty(nextAcadYears) && nextAcadYears.length > 0){
//         nextSeletedAcadYears = nextAcadYears[nextAcadYears.length - 1]
//       }
  
//     if(grade !== nextGrade || board !== nextBoard || target !== nextTarget || stream !== nextStream || 
//       seletedAcadYears !== nextSeletedAcadYears || firstName !== nextFirstName || email !== nextEmail) {
//         return true
//     }
//     return false
//   }
  
//   export const trackScreen = (screnName) => {
//     RNUxcam.tagScreenName(screnName)
//     RNApxorSDK.logNavigationEvent(screnName);
//   }
  
//   export const sendAnalyticsEvents = (appEvents, allEvents) => {
//     if(isEmpty(appEvents) || isEmpty(allEvents)) return
  
//     let generalAppEvents = {}
//     let uxCamAppEvens = {}
//       for (let i = 1; i <= 10; i++) {
//         const key = appEvents['key' + i]
//         let value = appEvents['value' + i]
//         let uxCamValue = value
//         if(!isEmpty(key) && value) {
//           if(typeof uxCamValue !== 'string' || typeof uxCamValue !== 'number'){
//             uxCamValue = JSON.stringify(uxCamValue)
//           }
//           generalAppEvents[key] = value
//           uxCamAppEvens[key] = uxCamValue
//           // delete appEvents['key' + i];
//           // delete appEvents['value' + i];
//         }
//       }
//       const {el = '', ec = '', ea = ''} = allEvents || {}
  
//       generalAppEvents.category = ec
//       generalAppEvents.action = ea
//       uxCamAppEvens.category = ec
//       uxCamAppEvens.action = ea
  
//       try {
//         RNUxcam.logEvent(el, uxCamAppEvens);
//       } catch (error) {
//         crashlytics().recordError(error);
//         Instabug.reportJSException(error);
//         console.log('RNUxcam: Error in send analytics event')
//       }
//       try {
//         RNApxorSDK.logAppEvent(el, generalAppEvents);
//         RNApxorSDK.logClientEvent(el, generalAppEvents);
//       } catch (error) {
//         crashlytics().recordError(error);
//         Instabug.reportJSException(error);
//         console.log('ApxorSDK: Error in send analytics event')
//       }
//   }
//   export const setUserIdToThirdParty = (userId) => {
//     NativeModules.AmplitudeModule.setUserId(`${userId}`)
//     RNUxcam.setUserIdentity(`${userId}`);
//     RNApxorSDK.setUserIdentifier(`${userId}`);
//   }
  
//   export const setCustomUserInfoToThirdParty = (userData) => {
//     const userprops = getUserInfosInKeyValue(userData)
//     if(!isEmpty(userprops)) {
//       NativeModules.AmplitudeModule.setUserProperty(userprops);
//       for (const [key, value] of Object.entries(userprops)) {
//         RNUxcam.setUserProperty(key, value);
//       }
//       RNApxorSDK.setUserCustomInfo(userprops);
//     }
//   }
  
//   export const initializeThirdParty = () => {
//     RNUxcam.optIntoSchematicRecordings();
//     RNUxcam.startWithKey(Config.UXCAM_KEY);
//     RNUxcam.occludeSensitiveScreen(false)
//   }
  
//   export function capitalizeFirstLetter(string) {
//     return !isEmpty(string) ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : '';
//   }