// Image optimization utilities
export const optimizeImageUrl = (url, options = {}) => {
    const { width, height, quality = 80, format = 'auto' } = options;
    
    // For Imgur images, add size parameters
    if (url.includes('imgur.com')) {
        // Remove existing extensions and add optimized parameters
        const baseUrl = url.replace(/\.(jpg|jpeg|png|gif)$/i, '');
        let optimizedUrl = baseUrl;
        
        // Add size suffix for Imgur
        if (width && width <= 90) optimizedUrl += 's'; // Small thumbnail (90x90)
        else if (width && width <= 160) optimizedUrl += 'b'; // Big thumbnail (160x160)
        else if (width && width <= 320) optimizedUrl += 't'; // Small thumbnail (320x320)
        else if (width && width <= 640) optimizedUrl += 'm'; // Medium thumbnail (640x640)
        else if (width && width <= 1024) optimizedUrl += 'l'; // Large thumbnail (1024x1024)
        
        optimizedUrl += '.jpg'; // Force JPEG for better compression
        return optimizedUrl;
    }
    
    // For Flickr images, add size parameters
    if (url.includes('staticflickr.com')) {
        const sizeMap = {
            75: '_s',    // 75x75
            150: '_q',   // 150x150
            240: '_m',   // 240px on longest side
            320: '_n',   // 320px on longest side
            500: '',     // 500px on longest side (default)
            640: '_z',   // 640px on longest side
            800: '_c',   // 800px on longest side
            1024: '_b'   // 1024px on longest side
        };
        
        if (width) {
            const sizeKey = Object.keys(sizeMap).find(size => width <= parseInt(size)) || '1024';
            const suffix = sizeMap[sizeKey];
            return url.replace(/_[a-z]?\.jpg$/i, `${suffix}.jpg`);
        }
    }
    
    return url;
};

export const generateWebPFallback = (src, alt, className, options = {}) => {
    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    return `
        <picture>
            <source srcset="${webpSrc}" type="image/webp">
            <img src="${src}" alt="${alt}" class="${className}" loading="lazy" />
        </picture>
    `;
};

export const createPlaceholder = (width = 200, height = 200, text = 'Loading...') => {
    const svg = `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#f0f0f0"/>
            <text x="50%" y="50%" font-family="Arial" font-size="14" fill="#999" text-anchor="middle" dy=".3em">${text}</text>
        </svg>
    `;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
};

export const preloadImages = (urls) => {
    return Promise.all(urls.map(url => preloadImage(url)));
};

// Image size detection
export const getImageDimensions = (src) => {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            resolve({ width: img.naturalWidth, height: img.naturalHeight });
        };
        img.onerror = () => {
            resolve({ width: 0, height: 0 });
        };
        img.src = src;
    });
};
