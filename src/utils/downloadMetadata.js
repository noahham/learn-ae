/**
 * Utility to get download file metadata with accurate size labels
 */

// Direct metadata object - static and works in Vite
const downloadMetadata = {
  "/downloads/blending-demo.zip": "524.5KB AEP File.",
  "/downloads/easing-demo.zip": "193KB AEP File.",
  "/downloads/effects-demo.zip": "416KB AEP File.",
  "/downloads/keyframes-demo.zip": "192KB AEP File.",
  "/downloads/layers-demo.zip": "601KB AEP File.",
  "/downloads/shapes-demo.zip": "277KB AEP File.",
  "/downloads/all-demos.zip": "2.2MB ZIP File.",
};

/**
 * Get just the size label for a download
 */
export function getDownloadSizeLabel(downloadPath) {
  return downloadMetadata[downloadPath] || 'Download Demo';
}