export default function(text) {
  return encodeURIComponent(text).replace(/!/g, '%21')
                                 .replace(/'/g, '%27')
                                 .replace(/\(/g, '%28')
                                 .replace(/\)/g, '%29')
                                 .replace(/\*/g, '%2A')
                                 .replace(/%20/g, '+');
}
