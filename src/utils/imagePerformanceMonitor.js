// Performance monitoring for images
class ImagePerformanceMonitor {
    constructor() {
        this.metrics = {
            totalImages: 0,
            loadedImages: 0,
            failedImages: 0,
            loadTimes: [],
            largestContentfulPaint: 0
        };
        
        this.observeImageLoading();
        this.observeLCP();
    }

    observeImageLoading() {
        // Use MutationObserver to track dynamically added images
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.tagName === 'IMG') {
                        this.trackImage(node);
                    } else if (node.querySelectorAll) {
                        node.querySelectorAll('img').forEach(img => this.trackImage(img));
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Track existing images
        document.querySelectorAll('img').forEach(img => this.trackImage(img));
    }

    trackImage(img) {
        this.metrics.totalImages++;
        const startTime = performance.now();

        const onLoad = () => {
            const loadTime = performance.now() - startTime;
            this.metrics.loadedImages++;
            this.metrics.loadTimes.push(loadTime);
            
            console.log(`Image loaded in ${loadTime.toFixed(2)}ms: ${img.src}`);
            this.updateLoadingProgress();
            
            img.removeEventListener('load', onLoad);
            img.removeEventListener('error', onError);
        };

        const onError = () => {
            this.metrics.failedImages++;
            console.warn(`Image failed to load: ${img.src}`);
            this.updateLoadingProgress();
            
            img.removeEventListener('load', onLoad);
            img.removeEventListener('error', onError);
        };

        if (img.complete) {
            onLoad();
        } else {
            img.addEventListener('load', onLoad);
            img.addEventListener('error', onError);
        }
    }

    observeLCP() {
        if ('PerformanceObserver' in window) {
            try {
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    this.metrics.largestContentfulPaint = lastEntry.startTime;
                    console.log(`LCP: ${lastEntry.startTime.toFixed(2)}ms`);
                });
                
                observer.observe({ entryTypes: ['largest-contentful-paint'] });
            } catch (e) {
                console.warn('LCP observation not supported');
            }
        }
    }

    updateLoadingProgress() {
        const progress = (this.metrics.loadedImages + this.metrics.failedImages) / this.metrics.totalImages;
        
        // Dispatch custom event for progress tracking
        window.dispatchEvent(new CustomEvent('imageLoadingProgress', {
            detail: {
                progress: progress * 100,
                loaded: this.metrics.loadedImages,
                failed: this.metrics.failedImages,
                total: this.metrics.totalImages
            }
        }));

        if (progress === 1) {
            this.generateReport();
        }
    }

    generateReport() {
        const avgLoadTime = this.metrics.loadTimes.reduce((a, b) => a + b, 0) / this.metrics.loadTimes.length;
        const maxLoadTime = Math.max(...this.metrics.loadTimes);
        
        const report = {
            totalImages: this.metrics.totalImages,
            successRate: (this.metrics.loadedImages / this.metrics.totalImages * 100).toFixed(2),
            averageLoadTime: avgLoadTime.toFixed(2),
            maxLoadTime: maxLoadTime.toFixed(2),
            largestContentfulPaint: this.metrics.largestContentfulPaint.toFixed(2)
        };

        console.table(report);
        
        // Send to analytics if available
        if (window.gtag) {
            window.gtag('event', 'image_loading_complete', {
                custom_parameter_1: report.successRate,
                custom_parameter_2: report.averageLoadTime
            });
        }

        return report;
    }

    getMetrics() {
        return { ...this.metrics };
    }
}

// Initialize monitoring
const imageMonitor = new ImagePerformanceMonitor();

export default imageMonitor;
