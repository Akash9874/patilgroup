/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent the page from being displayed in a frame (clickjacking protection)
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // Control how much referrer information should be included with requests
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // Control which browser features can be used
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=(), accelerometer=(), gyroscope=(), magnetometer=()'
          },
          // XSS Protection (legacy, but still useful for older browsers)
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // Content Security Policy - Enhanced protection against XSS and injection attacks
          {
            key: 'Content-Security-Policy',
            value: [
              // Default fallback for all resource types
              "default-src 'self'",
              
              // Scripts: Allow from same origin, inline scripts (for React), and eval (for build tools)
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' 'sha256-' blob:",
              
              // Stylesheets: Allow from same origin, inline styles (for Tailwind/styled components)
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              
              // Images: Allow from same origin, data URIs, and HTTPS sources
              "img-src 'self' data: https: blob:",
              
              // Fonts: Allow from same origin, data URIs, and Google Fonts
              "font-src 'self' data: https://fonts.gstatic.com",
              
              // AJAX, WebSocket, and EventSource connections
              "connect-src 'self' https: wss: ws:",
              
              // Video and audio sources
              "media-src 'self' https: blob: data:",
              
              // Plugin content (Flash, Java, etc.) - completely blocked
              "object-src 'none'",
              
              // Child contexts (frames, workers, etc.)
              "child-src 'self' blob:",
              
              // Web Workers
              "worker-src 'self' blob:",
              
              // Frame sources (for embedded content)
              "frame-src 'self'",
              
              // Ancestors that can embed this page (prevents clickjacking)
              "frame-ancestors 'none'",
              
              // Base URI restrictions
              "base-uri 'self'",
              
              // Form submission targets
              "form-action 'self'",
              
              // Resource loading restrictions
              "manifest-src 'self'",
              
              // Prefetch/preload restrictions
              "prefetch-src 'self'",
              
              // Navigation restrictions
              "navigate-to 'self' https:",
              
              // Upgrade insecure requests to HTTPS
              "upgrade-insecure-requests"
            ].join('; ')
          },
          // CSP Report-Only for testing (optional - can be removed after testing)
          {
            key: 'Content-Security-Policy-Report-Only',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data: https://fonts.gstatic.com",
              "connect-src 'self' https:",
              "media-src 'self' https: blob: data:",
              "object-src 'none'",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "report-uri /api/csp-report"
            ].join('; ')
          },
          // Enforce HTTPS (HSTS)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          // Cross-Origin Embedder Policy
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'unsafe-none'
          },
          // Cross-Origin Opener Policy
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups'
          },
          // Cross-Origin Resource Policy
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin'
          }
        ]
      }
    ]
  },
};

module.exports = nextConfig;
