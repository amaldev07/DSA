/**
 * Encodes a URL to a shortened URL.
 */
let baseUrl = "https://tinyUrl.com/"
let hm = new Map();
function encode(longUrl: string): string {
    let encyUrl = String.fromCharCode(Math.random() * 100);
    while (hm.get(encyUrl) != null) {
        encyUrl = encyUrl + String.fromCharCode(Math.random() * 100);
    }
    hm.set(encyUrl, longUrl)
    return baseUrl + encyUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
    let origin = (new URL(shortUrl)).origin;
    return hm.get(shortUrl.split(baseUrl)[1]);
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */